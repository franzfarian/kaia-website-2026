import { Shield, Zap, CheckCircle, X, ArrowRight, Flag, Server, Lock } from "lucide-react"
import Link from "next/link"

const competitors = [
  {
    name: "KAIA",
    logo: "K",
    company: "Germany",
    dataHosting: "EU Only",
    cloudActRisk: "None",
    pricing: "€69/month",
    integrations: "5,000+ (n8n)",
    target: "European SMEs",
    features: ["Sovereign by design", "n8n powered", "GDPR by default", "No vendor lock-in"]
  },
  {
    name: "Zapier",
    logo: "Z",
    company: "USA",
    dataHosting: "US Default",
    cloudActRisk: "Yes",
    pricing: "$20+/month",
    integrations: "6,000+",
    target: "Global SMBs",
    features: ["Easy to use", "Many integrations", "US jurisdiction", "Task-based pricing"]
  },
  {
    name: "StackAI",
    logo: "S",
    company: "USA", 
    dataHosting: "US/EU Options",
    cloudActRisk: "Yes",
    pricing: "$199+/month",
    integrations: "100+",
    target: "US Enterprise",
    features: ["Enterprise focus", "High cost", "US jurisdiction", "Complex pricing"]
  },
  {
    name: "Make",
    logo: "M",
    company: "USA",
    dataHosting: "US Default",
    cloudActRisk: "Yes", 
    pricing: "$9+/month",
    integrations: "1,000+",
    target: "Global SMBs",
    features: ["Visual builder", "Operation limits", "US jurisdiction", "Complex workflows"]
  }
]

const advantages = [
  {
    icon: Flag,
    title: "Data Sovereignty",
    description: "Built in Germany, hosted in the EU",
    details: [
      "All data processed within EU borders",
      "No US CLOUD Act exposure",
      "GDPR compliant by design",
      "German corporate legal structure"
    ]
  },
  {
    icon: Server,
    title: "n8n Powered",
    description: "The power of open source automation",
    details: [
      "5,000+ native integrations",
      "No vendor lock-in",
      "Community-driven development", 
      "Future-proof architecture"
    ]
  },
  {
    icon: Zap,
    title: "Predictable Pricing",
    description: "Simple, transparent costs",
    details: [
      "Per-interaction billing model",
      "No task limits or overages",
      "Clear monthly pricing",
      "No hidden fees"
    ]
  },
  {
    icon: Shield,
    title: "SME Focused",
    description: "Built specifically for European businesses",
    details: [
      "60+ language support",
      "European business practices",
      "SME-friendly pricing",
      "Local support team"
    ]
  }
]

const useCases = [
  {
    title: "GDPR-Compliant Lead Qualification",
    industry: "German FinTechs",
    challenge: "Need to qualify leads while maintaining strict data protection standards",
    solution: "KAIA processes all lead data within EU borders, ensuring GDPR compliance while automating qualification workflows through n8n integrations with CRM systems."
  },
  {
    title: "Secure Patient Intake", 
    industry: "EU Healthcare Clinics",
    challenge: "Automate patient intake while meeting healthcare data protection requirements",
    solution: "With EU-only hosting and medical data compliance, KAIA safely automates patient scheduling, form processing, and EHR integration."
  },
  {
    title: "Sovereign Contract Analysis",
    industry: "European Legal Teams", 
    challenge: "Analyze contracts with AI while maintaining attorney-client privilege",
    solution: "KAIA's EU-hosted AI models ensure legal documents never leave European jurisdiction, preserving confidentiality and compliance."
  }
]

export default function WhyKaiaPage() {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">K</span>
                  </div>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </Link>
                <Link href="/why-kaia" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Why KAIA?
                </Link>
                <Link href="/pricing" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Pricing
                </Link>
                <Link href="/compliance" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Compliance
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Sign In
              </Link>
              <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              More Power than Zapier.<br />
              More Sovereign than StackAI.
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              KAIA combines the extensive integration power of leading automation platforms with the data sovereignty that European businesses demand.
            </p>
          </div>
        </div>
      </div>

      {/* Competitive Comparison */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              How KAIA Compares to the Competition
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See why European SMEs choose KAIA over US-based alternatives
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Platform</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Company HQ</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Data Hosting</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">US CLOUD Act Risk</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Starting Price</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Integrations</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor, index) => (
                  <tr key={competitor.name} className={`border-b ${index === 0 ? 'bg-blue-50' : ''}`}>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold mr-3 ${
                          index === 0 ? 'bg-blue-600' : 'bg-gray-400'
                        }`}>
                          {competitor.logo}
                        </div>
                        <div>
                          <div className="font-medium">{competitor.name}</div>
                          <div className="text-sm text-gray-500">{competitor.target}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        competitor.company === 'Germany' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {competitor.company}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        competitor.dataHosting === 'EU Only' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {competitor.dataHosting}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        {competitor.cloudActRisk === 'None' ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <X className="h-5 w-5 text-red-500" />
                        )}
                        <span className="ml-2 text-sm">{competitor.cloudActRisk}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-medium">{competitor.pricing}</td>
                    <td className="py-4 px-4">{competitor.integrations}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* The KAIA Advantages */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              The KAIA Advantage
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Four key reasons why European SMEs choose KAIA
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <advantage.icon className="h-8 w-8 text-blue-600" />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {advantage.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The US CLOUD Act Problem */}
      <div className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-red-900">
              The US CLOUD Act Problem
            </h2>
            <p className="mt-4 text-lg text-red-700">
              Why using US-based automation platforms puts your European business at risk
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  <Lock className="inline h-6 w-6 text-red-500 mr-2" />
                  What is the US CLOUD Act?
                </h3>
                <p className="text-gray-700 mb-4">
                  The US CLOUD Act allows American law enforcement to compel US companies to turn over data stored anywhere in the world, regardless of local data protection laws.
                </p>
                <p className="text-gray-700 mb-4">
                  This means that even if a US company claims to offer &ldquo;EU hosting,&rdquo; they can still be forced to access your data by US authorities.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-900 mb-2">The Risk to Your Business:</h4>
                  <ul className="space-y-1 text-sm text-red-700">
                    <li>• Potential GDPR violations and fines</li>
                    <li>• Loss of customer trust</li>
                    <li>• Competitive intelligence exposure</li>
                    <li>• Legal and regulatory complications</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  <Shield className="inline h-6 w-6 text-green-500 mr-2" />
                  The KAIA Solution
                </h3>
                <p className="text-gray-700 mb-4">
                  As a German company operating exclusively on EU infrastructure, KAIA is architecturally immune to US data demands.
                </p>
                <p className="text-gray-700 mb-4">
                  Your data is governed exclusively by EU law, giving you true data sovereignty and peace of mind.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">With KAIA, You Get:</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Complete legal certainty under EU law</li>
                    <li>• Full GDPR compliance by design</li>
                    <li>• Protection from foreign data requests</li>
                    <li>• True data sovereignty for your business</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Use Cases */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Real-World Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              How European SMEs leverage KAIA&apos;s sovereign automation
            </p>
          </div>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{useCase.title}</h3>
                    <p className="text-blue-600 font-medium">{useCase.industry}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-sm text-gray-600">{useCase.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">KAIA Solution</h4>
                    <p className="text-sm text-gray-600">{useCase.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to make the switch?</span>
            <span className="block text-blue-200">Experience true data sovereignty with KAIA.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/signup" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="/compliance" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400">
                Learn About Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2024 KAIA by Mavens GmbH. Built in Hamburg, Germany. Made for Europe.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}