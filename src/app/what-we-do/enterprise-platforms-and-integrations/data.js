/**
 * Single source of truth for the Enterprise Platforms & Integrations section.
 *
 * Consumed by:
 *   - PageContent.jsx            → landing page rich components & platform cards
 *   - components/HeroWrapper.jsx → per-sub-page hero + breadcrumb
 *   - [slug]/page.jsx            → static params, metadata, and detail content
 */

export const SECTION_BASE = "/what-we-do/enterprise-platforms-and-integrations";

export const KEY_METRICS = [
  {
    value: "99.99%",
    label: "Ecosystem Uptime",
    description: "High-availability architecture across production environments",
  },
  {
    value: "150+",
    label: "Pre-Built Connectors",
    description: "Accelerating integration across legacy & cloud platforms",
  },
  {
    value: "65%",
    label: "Faster API Rollouts",
    description: "Standardized API-led connectivity frameworks",
  },
  {
    value: "100%",
    label: "Audit & Compliance",
    description: "Regulated industry standards (SOC2, PCI-DSS, ISO 27001)",
  },
];

export const PLATFORMS = [
  {
    slug: "erp-platforms",
    title: "ERP Platforms",
    icon: "Boxes",
    tagline:
      "Unifying core finance, procurement, and operations into one auditable enterprise backbone.",
    summary:
      "We implement and integrate enterprise resource planning platforms that unify finance, procurement, supply chain, and operations — giving regulated institutions a single, auditable version of operational truth.",
    overviewDetails:
      "Modern enterprise resource planning demands more than module installation. Paves Technologies partners with enterprise leaders to architect, implement, and integrate core ERP engines (SAP S/4HANA, Oracle Cloud ERP, Microsoft Dynamics 365 Finance & Operations) into complex multi-entity environments. From chart of accounts standardization to automated procure-to-pay workflows and intercompany settlements, we ensure your financial core operates seamlessly.",
    technologies: [
      "SAP S/4HANA",
      "Oracle Cloud ERP",
      "Microsoft Dynamics 365",
      "SAP Integration Suite",
    ],
    capabilities: [
      {
        title: "Greenfield & Phased ERP Implementation",
        description:
          "End-to-end deployment across multi-country, multi-entity operations with structured chart-of-accounts mapping.",
      },
      {
        title: "Finance & Procurement Automation",
        description:
          "Streamlining order-to-cash, procure-to-pay, period-close reconciliation, and automated tax compliance.",
      },
      {
        title: "Legacy Data Migration & Reconciliation",
        description:
          "Extracting, scrubbing, and transforming legacy data with 100% audit verification and zero data loss.",
      },
      {
        title: "Core Banking & Payment Gateway Integration",
        description:
          "Bi-directional connectivity between general ledgers, treasury platforms, and banking clearing houses.",
      },
    ],
    deliverables: [
      "Target Operating Model & ERP Architecture Blueprint",
      "Module Configuration (General Ledger, AP/AR, Supply Chain, Asset Management)",
      "Automated Intercompany Settlement & Period-Close Workflows",
      "Bi-Directional Bank Gateway & Treasury Connectors",
      "Executive Financial Dashboards & Audit Trail Reports",
    ],
    outcomes: [
      "One auditable version of financial and operational truth across all business units",
      "Shorter period-close cycles reduced from weeks to days through automated reconciliation",
      "Reduced manual processing effort across procure-to-pay and order-to-cash workflows",
      "Strict compliance with regional tax, GAAP, and IFRS regulatory standards",
    ],
    architectureHighlights: [
      "Unified Core Ledger & Multi-Entity General Accounting",
      "Automated Intercompany Reconciliation & Settlement Engine",
      "Real-Time Inventory & Supply Chain Telemetry",
      "Sub-ledger to Banking & Treasury Gateway Interfaces",
    ],
    workflowSteps: [
      "Pre-Implementation Audit & Chart of Accounts Standardization",
      "Core ERP Module Deployment (Finance, Procurement, Supply Chain)",
      "Legacy Data Extraction, Cleaning, Mapping & Reconciliation",
      "Banking Interface & Treasury Gateway Integration",
      "User Acceptance Testing (UAT), Cutover & Post-Go-Live Support",
    ],
  },
  {
    slug: "crm-platforms",
    title: "CRM Platforms",
    icon: "Users",
    tagline:
      "Harmonizing customer data across all touchpoints to deliver a 360-degree golden record.",
    summary:
      "We connect customer data and business processes across channels, ensuring customer onboarding, relationship management, and service operations run on a unified, real-time customer view.",
    overviewDetails:
      "Enterprise customer relationship management requires breaking down data silos between sales, service, credit risk, and core back-office systems. Paves Technologies implements and customizes market-leading CRM platforms (Salesforce, Microsoft Dynamics 365 CRM, SAP Customer Experience) to provide a single golden customer record. We automate case routing, streamline KYC/KYB onboarding, and sync real-time transaction history so front-line teams deliver hyper-personalized customer experiences.",
    technologies: [
      "Salesforce Financial Services Cloud",
      "Salesforce Sales & Service Cloud",
      "Microsoft Dynamics 365 CRM",
      "SAP CX",
    ],
    capabilities: [
      {
        title: "Customer 360 & Golden Record Architecture",
        description:
          "Unifying customer profiles, account histories, and interaction touchpoints across all channels.",
      },
      {
        title: "KYC & Automated Onboarding Workflows",
        description:
          "Accelerating customer acquisition through digital document verification, credit checks, and automated approvals.",
      },
      {
        title: "Core Banking & ERP Data Synchronization",
        description:
          "Sub-second bi-directional synchronization between CRM records, billing platforms, and backend ledgers.",
      },
      {
        title: "Omnichannel Service Desk & SLA Management",
        description:
          "Automating ticket triage, case escalation, and real-time SLA reporting for customer support teams.",
      },
    ],
    deliverables: [
      "Enterprise CRM Data Architecture & Role-Based Access Security Model",
      "Custom Objects, Lightning Flows & Automated Servicing Workflows",
      "Real-Time Core Banking / ERP Integration Adapters",
      "Customer Data De-Duplication & Master Data Management Rules",
      "Omnichannel Service Desk Portal with SLA Tracking",
    ],
    outcomes: [
      "Single 360-degree view of every customer across all service channels and product lines",
      "70% faster customer onboarding with automated identity verification and KYC checks",
      "Increased agent productivity by equipping teams with up-to-date, trustworthy data",
      "Measurable SLA improvements on customer case resolution and support tickets",
    ],
    architectureHighlights: [
      "Unified Customer Golden Record & Master Data Management",
      "Real-Time Core Banking & Billing Engine Data Sync",
      "Automated Case Triage & Intelligent Escalation Routing",
      "Omnichannel Telephony & Messaging Platform Integration",
    ],
    workflowSteps: [
      "Customer Journey Audit & Data Schema Design",
      "Salesforce / Dynamics CRM Core Platform Customization",
      "API Integration with Core Banking & ERP Backends",
      "Data Scrubbing, De-Duplication & Master Record Creation",
      "Agent Enablement, UAT & Operational Dashboard Rollout",
    ],
  },
  {
    slug: "workflow-and-service-management",
    title: "Workflow & Service Management",
    icon: "Workflow",
    tagline:
      "Automating enterprise operations to replace manual handoffs with governed, measurable processes.",
    summary:
      "We automate enterprise workflows and service management — turning fragmented manual tasks into governed, auditable processes that increase operational velocity and visibility.",
    overviewDetails:
      "Operational friction and opaque approval queues waste valuable enterprise momentum. Paves Technologies leverages leading workflow engines (ServiceNow ITSM/SPM, Microsoft Power Platform) to digitize end-to-end enterprise service management. From ITIL-aligned incident management to cross-departmental HR onboarding and automated financial approvals, we build transparent, self-service portals backed by real-time SLA analytics.",
    technologies: [
      "ServiceNow (ITSM, SPM, FSM)",
      "Microsoft Power Platform",
      "Power Automate",
      "Jira Enterprise",
    ],
    capabilities: [
      {
        title: "IT Service Management (ITSM) Optimization",
        description:
          "Implementing ITIL 4 best practices for incident, problem, change, and request management.",
      },
      {
        title: "Enterprise Self-Service Service Portals",
        description:
          "Designing intuitive employee portals for automated request fulfillment and hardware/software provisioning.",
      },
      {
        title: "Cross-Departmental Approval Workflows",
        description:
          "Eliminating email bottlenecks with rule-based automated routing across HR, Finance, IT, and Legal.",
      },
      {
        title: "Low-Code Business Application Development",
        description:
          "Rapidly deploying custom enterprise applications using Microsoft Power Apps and ServiceNow App Engine.",
      },
    ],
    deliverables: [
      "ITSM & Enterprise Service Management Architecture Blueprint",
      "Custom Service Catalogue Items, Request Flows & Approval Matrices",
      "Automated Incident Routing, Problem Management & Change Governance",
      "ServiceNow & Power Platform Integrations with Active Directory & Jira",
      "Executive Operational Telemetry & SLA Compliance Dashboards",
    ],
    outcomes: [
      "100% request tracking, governance, and audit visibility across departments",
      "Significant reduction in ticket escalation times via automated routing and self-service",
      "Complete operational transparency for IT, HR, and business service owners",
      "Standardized, repeatable processes that remain resilient regardless of team turnover",
    ],
    architectureHighlights: [
      "ITIL-Aligned Incident, Change & Problem Management Framework",
      "Self-Service Enterprise Service Catalogue & Portal",
      "Low-Code Workflow Engine with Multi-Tier Approval Rules",
      "Real-Time Operational Telemetry & Executive SLA Analytics",
    ],
    workflowSteps: [
      "Process Audit & ITIL Service Alignment Mapping",
      "ServiceNow / Power Platform Infrastructure Configuration",
      "Service Catalogue & Approval Flow Engineering",
      "Integration with Identity Systems (Entra ID), Monitoring & Jira",
      "Service Desk Deployment, Training & Operational Handover",
    ],
  },
  {
    slug: "integration-and-middleware",
    title: "Integration & Middleware",
    icon: "Network",
    tagline:
      "Building resilient API-led layers and event streams for seamless data flow across hybrid clouds.",
    summary:
      "We connect applications, APIs, legacy core systems, and cloud platforms into a high-performance integration layer, ensuring data moves securely, reliably, and instantly across your enterprise.",
    overviewDetails:
      "Digital transformation is only as fast as your underlying integration layer. Paves Technologies designs and engineers enterprise middleware architectures using API-led connectivity, event-driven message brokers, and hybrid cloud gateways (MuleSoft Anypoint, TIBCO, Apache Kafka, Apigee). We replace brittle point-to-point scripts with scalable 3-tier API architectures (System, Process, Experience APIs) protected by bank-grade mTLS security and zero-trust policies.",
    technologies: [
      "MuleSoft Anypoint Platform",
      "Apache Kafka",
      "TIBCO Enterprise Message Service",
      "Apigee API Gateway",
      "AWS EventBridge",
    ],
    capabilities: [
      {
        title: "3-Tier API-Led Architecture Design",
        description:
          "Decoupling core infrastructure into System, Process, and Experience APIs for maximum reusability.",
      },
      {
        title: "Real-Time Event-Driven Streaming",
        description:
          "Implementing sub-second message brokers (Kafka, Solace) for asynchronous financial transaction processing.",
      },
      {
        title: "Legacy Mainframe & Core Banking Facades",
        description:
          "Wrapping legacy AS/400, mainframe, and database engines in modern, secure REST/gRPC micro-adapters.",
      },
      {
        title: "Centralized API Gateway & Security Policy",
        description:
          "Enforcing mTLS, OAuth2, rate-limiting, schema validation, and threat protection at the perimeter.",
      },
    ],
    deliverables: [
      "Enterprise Integration Strategy & API Taxonomy Specification",
      "Production-Ready Microservices, Connectors & Transformation Maps",
      "High-Throughput Event Broker Infrastructure (Kafka / TIBCO)",
      "Centralized API Gateway Security, Rate-Limiting & mTLS Governance",
      "Real-Time Telemetry Dashboards, Circuit Breakers & DLQ Recovery",
    ],
    outcomes: [
      "High-reliability data exchange replacing fragile batch CSV and manual file transfers",
      "Reusable API assets cutting future application integration costs by 40%",
      "Legacy core systems modernized without undergoing high-risk code rewrites",
      "Full system observability with self-healing queues and zero silent failures",
    ],
    architectureHighlights: [
      "3-Tier Layered API Architecture (System, Process, Experience APIs)",
      "High-Throughput Distributed Event Streaming & Broker Matrix",
      "Centralized mTLS Security Gateway & Rate Limiting Enforcement",
      "Self-Healing Circuit Breakers & Dead-Letter Queue (DLQ) Recovery",
    ],
    workflowSteps: [
      "API Strategy, Governance Setup & Taxonomy Specification",
      "System & Process API Microservice Adapter Engineering",
      "Event Broker & Distributed Message Queue Orchestration",
      "Security Audit, Failover Stress Testing & Performance Tuning",
      "24/7 Operations Rollout & API Developer Portal Publishing",
    ],
  },
];

export const getPlatform = (slug) =>
  PLATFORMS.find((platform) => platform.slug === slug);
