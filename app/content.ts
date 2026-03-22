export const SITE = {
  name: "CartonFlow",
  tagline: "Your freight. Fully under control.",
  subTagline: "CartonFlow connects e-commerce brands and Amazon sellers with their 3PLs, forwarders, and distributors in one platform — solving shipping, the biggest pain point in logistics.",
  ctaUrl: "https://app.cartonflow.io/signup",
  appUrl: "https://app.cartonflow.io",
  trialDays: 14,
}

export const PRICING = {
  basic: {
    name: "Basic",
    monthly: 79,
    annual: 63,
    annualTotal: 756,
    features: [
      "Shipment tracking + status updates",
      "FedEx / UPS carton tracking",
      "Multi-destination routing (FBA + custom)",
      "Document hub + invoice portal",
      "3PL messaging + push notifications",
      "3 internal user seats",
      "Unlimited 3PL / partner seats",
    ],
    locked: [
      "Ocean freight + AIS maps",
      "RFQ competitive bidding",
    ],
  },
  pro: {
    name: "Pro",
    monthly: 129,
    annual: 103,
    annualTotal: 1236,
    features: [
      "Everything in Basic",
      "Live ocean tracking + AIS vessel maps",
      "RFQ system — competitive 3PL bidding",
      "Distributor management portal",
      "Advanced analytics + SLA dashboard",
      "Weekly digest + anomaly alerts",
      "10 internal user seats",
      "Priority support",
    ],
    locked: [],
  },
}

export const FEATURES = [
  { icon: "🗺️", title: "Live Ocean Tracking", desc: "Real-time AIS vessel positions on an interactive world map. Port ETAs, transit progress, and vessel details — updated every few minutes.", badge: "PRO" },
  { icon: "🏷️", title: "Competitive Bidding (RFQ)", desc: "Post shipment RFQs to your trusted 3PLs. They bid on DDP rates, you compare side-by-side and award in one click. One bid cycle pays for months of subscription.", badge: "PRO" },
  { icon: "📦", title: "Carton-Level Tracking", desc: "FedEx and UPS tracking per carton, with real scan events and geocoded positions. Know which box is where, not just the shipment.", badge: null },
  { icon: "💬", title: "Built-in Messaging", desc: "Threaded messages tied to each shipment, shared between your team, 3PLs, and distributors. No more digging through email threads.", badge: null },
  { icon: "🧾", title: "Invoice Portal", desc: "3PLs submit invoices directly in the platform. Review line items, approve, and mark paid. Billing history always one click away.", badge: null },
  { icon: "🚨", title: "Anomaly Alerts", desc: "Automatic detection of delayed ETAs, missed milestones, and unanswered questions. Alerts reach you before problems become crises.", badge: null },
]

export const HOW_IT_WORKS = [
  { icon: "🏭", step: "Load Your Setup", desc: "Add your products, suppliers, and delivery destinations. Upload from CSV or enter manually." },
  { icon: "🤝", step: "Invite Your 3PLs", desc: "Your freight partners get an invite email. They join free and start updating your shipments directly in the platform." },
  { icon: "📦", step: "Create a Shipment", desc: "Use the shipment wizard to define destinations, units, and carton counts. Launch an RFQ to get competitive quotes." },
  { icon: "📊", step: "Track Everything", desc: "Real-time AIS vessel positions, FedEx/UPS carton scans, and automated alerts. Know before your 3PL calls you." },
]

export const TESTIMONIALS = [
  { quote: "We saved $14K in freight costs in Q1 just from the RFQ system. One bidding cycle paid for the whole year subscription 20x over.", badge: "💰 $14K saved in Q1", name: null, role: "Amazon FBA Brand" },
  { quote: "I used to spend 2 hours a day chasing updates on WhatsApp and email. Now I check CartonFlow once in the morning, see exactly where everything is, and I'm done.", badge: "⏱️ 2 hrs/day saved", name: "Marcus T.", role: "Amazon FBA Seller · 12 active shipments/mo" },
  { quote: "Our 3PL loves it too — they told us it cut their back-and-forth emails by 80%. When everyone's looking at the same platform, problems get solved in minutes.", badge: "📉 80% fewer 3PL emails", name: "Jennifer L.", role: "Shopify D2C Brand · 3 freight partners" },
]

export const FAQ = [
  { q: "Do my 3PLs and freight partners have to pay?", a: "No — your 3PLs, forwarders, and distributors join CartonFlow for free. They get a portal to update shipments, respond to messages, submit invoices, and place bids. You pay, they benefit, everyone wins." },
  { q: "Can I bring my own FedEx and UPS accounts?", a: "Yes. You connect your own FedEx and UPS developer credentials — CartonFlow uses them to pull tracking data on your behalf. Your rates, your accounts, no middleman markup." },
  { q: "What is the difference between Basic and Pro?", a: "Basic covers domestic and land-route tracking, document management, invoicing, and messaging. Pro adds ocean freight tracking with live AIS vessel maps, the competitive RFQ bidding system, distributor management, and advanced analytics." },
  { q: "How long does setup take?", a: "Quick. The onboarding wizard walks you through adding your products, suppliers, 3PLs, and delivery destinations step by step. Most users create their first shipment the same session." },
  { q: "Can I cancel anytime?", a: "Yes. No contracts, no cancellation fees. Cancel any time from your account settings. Annual plan refunds are prorated after the first 30 days." },
  { q: "Is my data secure?", a: "All data is encrypted in transit (TLS) and at rest. Your tenant data is fully isolated from other customers — no data commingling. We never share your shipment or partner data with third parties." },
]

export const COMPARISON = [
  { feature: "Starting price", cartonflow: "$79/mo", flexport: "Custom / $$$$", shipstation: "$30/mo", spreadsheets: "Free" },
  { feature: "Ocean vessel tracking (AIS)", cartonflow: "✅ Pro", flexport: "✅", shipstation: "❌", spreadsheets: "❌" },
  { feature: "RFQ competitive bidding", cartonflow: "✅ Pro", flexport: "❌ (they are the 3PL)", shipstation: "❌", spreadsheets: "❌" },
  { feature: "Carton-level FedEx/UPS tracking", cartonflow: "✅", flexport: "Partial", shipstation: "✅", spreadsheets: "❌" },
  { feature: "3PL messaging + portal", cartonflow: "✅", flexport: "Limited", shipstation: "❌", spreadsheets: "❌" },
  { feature: "Invoice portal", cartonflow: "✅", flexport: "Partial", shipstation: "❌", spreadsheets: "❌" },
  { feature: "SMB-friendly (no contract)", cartonflow: "✅", flexport: "❌", shipstation: "✅", spreadsheets: "✅" },
  { feature: "Setup time", cartonflow: "Minutes", flexport: "Weeks", shipstation: "Hours", spreadsheets: "Hours" },
  { feature: "3PL seats cost", cartonflow: "Always free", flexport: "N/A", shipstation: "Paid add-on", spreadsheets: "Free" },
]
