// Paves_2.0_Website — build the Next.js image and push it to ECR.
//
// Everything below lives in the shared library; this file only names the
// service. See vars/deployFrontend.groovy in paves-website-scripts.
//
// Stages: Checkout → Notify Started → Prepare .env → Build Image
//         → Smoke Test Image → Push to ECR
//
// Requires:
//   - AWS Secrets Manager secret 'paves_website_2_0' — this repo's .env as
//     flat JSON ({"NEXT_PUBLIC_RECAPTCHA_SITE_KEY": "...", ...}). Fetched at
//     build time and baked into the image, because NEXT_PUBLIC_* is inlined
//     into the client bundle and cannot be injected afterwards.
//   - aws-ecr-credentials  (AWS creds)    read the secret, push to ECR
//   - teams-webhook-url    (Secret text)  notifyTeams webhook

@Library('paves-website-scripts') _

deployFrontend(
  serviceName: 'paves-website',
  ecrRepo:     'paves/website',
  secretName:  'paves_website_2_0'
)
