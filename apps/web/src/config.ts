import type { AppConfig } from "./types";

export const appConfig: AppConfig = {
  slug: "nest",
  name: "Nest",
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
  fallbackSignals: [
    {
      id: "20000000-0000-0000-0000-000000000001",
      headline: "New user plan routes a travel fund into a conservative Mantle savings basket",
      summary:
        "Nest created a plain-English travel-fund plan with a simple stable and yield mix that keeps the onboarding path beginner-friendly.",
      confidence: 87,
      severity: "high",
      sourceProtocol: "Merchant Moe",
      destinationProtocol: "Merchant Moe",
      sourceAsset: "mETH",
      destinationAsset: "cmETH"
    },
    {
      id: "20000000-0000-0000-0000-000000000002",
      headline: "Milestone prompt suggests topping up an emergency goal vault",
      summary:
        "A user reached a progress checkpoint and Nest prepared a follow-up funding suggestion instead of a risky rebalance.",
      confidence: 81,
      severity: "medium",
      sourceProtocol: "Agni Finance",
      destinationProtocol: "Ondo route",
      sourceAsset: "USDe",
      destinationAsset: "USDY"
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
