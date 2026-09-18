# syntax=docker/dockerfile:1.7

###############################################################################
# Stage 1 — deps: install node_modules from the lockfile only.
# Kept separate so a source-only change does not re-run npm ci.
###############################################################################
FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
# --include=optional keeps @img/sharp-linuxmusl-x64, which Next's image
# optimizer needs at runtime. Both musl binaries are present in the lockfile.
RUN --mount=type=cache,target=/root/.npm \
    npm ci --include=optional

###############################################################################
# Stage 2 — builder: produce .next/standalone.
# .env is copied in with the source, so NEXT_PUBLIC_* values are inlined into
# the client bundle here, at build time.
###############################################################################
FROM node:22-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

###############################################################################
# Stage 3 — runner: standalone server + static assets only. No npm, no source.
###############################################################################
FROM node:22-alpine AS runner
RUN apk add --no-cache libc6-compat
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup -g 1001 -S nodejs \
 && adduser -u 1001 -S nextjs -G nodejs

# server.js + the traced subset of node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
# Baked build-time env, kept for any server-side reads at runtime.
COPY --from=builder --chown=nextjs:nodejs /app/.env ./.env

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/ >/dev/null 2>&1 || exit 1

CMD ["node", "server.js"]
