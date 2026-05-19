import type { AppConfig } from "./types";

export const appConfig: AppConfig = {
  slug: "nest",
  name: "Nest",
  tag: "Consumer & Viral DApps",
  tagline: "Web2-first AI savings app for Mantle",
  valueProp:
    "Nest translates intimidating DeFi choices into polished goal-based money plans so first-time users can understand Mantle, fund a plan, and follow a clear path without feeling lost.",
  launchLabel: "Open Plan Studio",
  docsLabel: "Read Product Docs",
  aiAwakeningFit:
    "Nest fits AI Awakening by showing how AI can make Mantle accessible to normal users: the AI layer creates readable savings plans while the on-chain system keeps the financial path transparent.",
  dashboardTitle: "Goal plan studio",
  dashboardSubtitle:
    "Inspect a guided savings plan, choose a starter goal, and publish the plain-English reasoning that explains why the route is right for the user.",
  guideIntro:
    "Use Nest like a premium money app: select a starter goal, review the plan details, and commit the user-friendly plan thesis on Mantle.",
  docsIntro:
    "Nest is designed to turn Mantle’s yield infrastructure into a clean consumer savings experience with visual clarity, beginner guidance, and clear on-chain evidence.",
  chainId: 5000,
  chainHex: "0x1388",
  chainName: "Mantle Mainnet",
  rpcUrl: "https://rpc.mantle.xyz",
  explorerBaseUrl: "https://mantlescan.xyz",
  contracts: {
    signalRegistry: "0x73784e99C0E183499Da4D3E8002CBd6fdadC36B2",
    thesisRegistry: "0x622857B0fEF3FC2aDbEd986194AB74eb624De5f7",
    adminController: "0x7A234ee08595873E4cfF9fE8F07C336F9F92e44D"
  },
  theme: {
    bg: "#0b1214",
    surface: "rgba(18, 25, 28, 0.8)",
    surfaceStrong: "rgba(24, 32, 35, 0.98)",
    line: "rgba(140, 255, 223, 0.12)",
    text: "#f6fffc",
    muted: "#a7beb7",
    accent: "#90ffd8",
    accentSoft: "rgba(144, 255, 216, 0.12)",
    accentStrong: "#4ce0a8",
    glowA: "rgba(76, 224, 168, 0.18)",
    glowB: "rgba(139, 225, 255, 0.12)",
    gradient: "linear-gradient(135deg, #90ffd8 0%, #8be1ff 100%)"
  },
  heroStats: [
    { label: "Starter plans", value: "4" },
    { label: "Goal milestones", value: "12" },
    { label: "Plan confidence", value: "87%" }
  ],
  metrics: [
    {
      label: "Travel fund horizon",
      value: "9 months",
      detail: "Starter plan target for a beginner-friendly conservative route"
    },
    {
      label: "Emergency reserve split",
      value: "70 / 30",
      detail: "Stable reserve versus yield sleeve in the default plan"
    },
    {
      label: "User reading level",
      value: "Plain English",
      detail: "Every action is explained without protocol jargon"
    }
  ],
  guideSteps: [
    {
      title: "Choose a goal",
      body: "Start from the goal plan studio and pick the user outcome you want to activate."
    },
    {
      title: "Inspect the plan",
      body: "Review the proposed savings route, the target timeline, and the beginner-friendly explanation before doing anything on-chain."
    },
    {
      title: "Publish the plan thesis",
      body: "Commit the plain-English rationale to Mantle so the product’s AI guidance is visible and benchmarkable."
    }
  ],
  docs: [
    {
      id: "problem",
      title: "Problem",
      body:
        "The average user does not want to open a DEX dashboard. They want a clear savings plan, a calm interface, and a trustworthy explanation of what their money is doing.",
      bullets: [
        "DeFi dashboards overwhelm first-time users.",
        "Mantle needs a better web2 entry point.",
        "Judges reward clean product storytelling."
      ]
    },
    {
      id: "architecture",
      title: "Architecture",
      body:
        "Nest combines a consumer-style frontend, Mantle registries for public plan reasoning, and a health-aware runtime that keeps on-chain interactions alive when supporting services fail.",
      bullets: [
        "SignalRegistry stores the active plan recommendation.",
        "ThesisRegistry stores the plan explanation.",
        "Degraded mode keeps the app honest when backend services drop."
      ]
    },
    {
      id: "awakening",
      title: "AI Awakening Fit",
      body:
        "Nest shows how AI can lower the web3 barrier on Mantle by translating real financial routes into a product normal users can understand immediately.",
      bullets: [
        "Readable plans instead of technical jargon.",
        "On-chain persistence for transparency.",
        "A stronger consumer onboarding story for Mantle."
      ]
    }
  ],
  starterCards: [
    {
      id: "travel-fund",
      title: "Load the travel fund starter plan",
      summary:
        "Pre-fill a conservative nine-month travel fund plan that keeps most savings stable and uses a light Mantle yield sleeve to improve returns.",
      cta: "Use travel plan",
      signalId: "20000000-0000-0000-0000-000000000001",
      thesis:
        "This travel fund plan keeps the user in a conservative posture: most capital stays in stable reserves while a smaller sleeve is deployed into a low-volatility Mantle yield route. The goal is clarity, safety, and a predictable timeline."
    },
    {
      id: "emergency-buffer",
      title: "Load the emergency buffer top-up",
      summary:
        "Open a starter note that prioritizes topping up an emergency goal vault before introducing more risk or complexity.",
      cta: "Use emergency plan",
      signalId: "20000000-0000-0000-0000-000000000002",
      thesis:
        "The next best move is not a risky rebalance. The user should first strengthen the emergency buffer and keep the plan easy to understand, which makes the product more trustworthy and easier to adopt."
    }
  ],
  fallbackSignals: [
    {
      id: "20000000-0000-0000-0000-000000000001",
      headline: "New user plan routes a travel fund into a conservative Mantle savings basket",
      summary:
        "Nest created a plain-English travel-fund plan with a simple stable and yield mix that keeps the onboarding path beginner-friendly.",
      confidence: 87,
      severity: "high",
      sourceProtocol: "Starter plan",
      destinationProtocol: "Goal vault",
      sourceAsset: "stable reserve",
      destinationAsset: "yield sleeve",
      createdAt: "2026-05-18T09:18:00.000Z"
    },
    {
      id: "20000000-0000-0000-0000-000000000002",
      headline: "Milestone prompt suggests topping up an emergency goal vault",
      summary:
        "A user reached a progress checkpoint and Nest prepared a follow-up funding suggestion instead of a risky rebalance.",
      confidence: 81,
      severity: "medium",
      sourceProtocol: "Progress engine",
      destinationProtocol: "Emergency vault",
      sourceAsset: "cash buffer",
      destinationAsset: "goal top-up",
      createdAt: "2026-05-18T08:38:00.000Z"
    }
  ],
  defaultAlerts: [
    {
      id: "nest-alert-1",
      channel: "telegram",
      condition: "Prompt me when a goal vault reaches its next milestone checkpoint.",
      isEnabled: true
    },
    {
      id: "nest-alert-2",
      channel: "email",
      condition: "Notify when a funding plan suggests a safer top-up route on Mantle.",
      isEnabled: true
    }
  ]
};
