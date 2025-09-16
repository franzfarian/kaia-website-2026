import { Shield, Lock, Server, CheckCircle, MapPin, FileText, Users } from "lucide-react"
import Link from "next/link"

const complianceFeatures = [
  {
    icon: MapPin,
    title: "Full EU/DE Hosting",
    description: "The application, Activity Hub, and LLMs are hosted exclusively in data centers located in Germany or the EU, fully compliant with GDPR and the EU AI Act."
  },
  {
    icon: Server,
    title: "On-Premises Deployment",
    description: "For maximum security, KAIA can be deployed entirely within your own corporate IT infrastructure, meeting the AI Act's highest standards for control and risk management."
  },
  {
    icon: Lock,
    title: "Secure Integration with Internal Systems",
    description: "Direct connection to protected internal systems without transferring sensitive data to third countries, as required by the AI Act for high-risk applications."
  },
  {
    icon: Shield,
    title: "Full Data Sovereignty & Transparency",
    description: "Companies maintain complete control over data storage, access, deletion, and audit logs — a key AI Act requirement for traceability."
  },
  {
    icon: FileText,
    title: "Compliance-by-Design",
    description: "Architecture and features are built to support regulatory obligations from the start, including risk assessment, documentation, and accountability as set out in the AI Act."
  }
]

const certifications = [
  {
    name: "GDPR",
    description: "General Data Protection Regulation",
    status: "Fully Compliant",
    details: "All data processing activities comply with GDPR requirements including consent, data minimization, and the right to be forgotten."
  },
  {
    name: "EU AI Act",
    description: "European Union Artificial Intelligence Act",
    status: "Ready",
    details: "Our platform meets the requirements for high-risk AI systems including transparency, accountability, and human oversight."
  },
  {
    name: "SOC 2",
    description: "Service Organization Control 2",
    status: "Type II Compliant",
    details: "Our infrastructure and processes meet SOC 2 Type II standards for security, availability, and confidentiality."
  },
  {
    name: "ISO 27001",
    description: "Information Security Management",
    status: "Certified",
    details: "Our information security management system is certified to international standards."
  }
]

const riskMatrix = [
  {
    risk: "US CLOUD Act",
    kaia: "No Risk",
    usCompetitors: "High Risk",
    explanation: "German company, EU infrastructure only"
  },
  {
    risk: "GDPR Violations",
    kaia: "No Risk", 
    usCompetitors: "Medium Risk",
    explanation: "Built for GDPR compliance from day one"
  },
  {
    risk: "Data Transfer Outside EU",
    kaia: "No Risk",
    usCompetitors: "High Risk", 
    explanation: "All processing within EU borders guaranteed"
  },
  {
    risk: "Foreign Surveillance",
    kaia: "No Risk",
    usCompetitors: "Medium Risk",
    explanation: "Protected by German and EU privacy laws"
  }
]

export default function CompliancePage() {
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
                <Link href="/why-kaia" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Why KAIA?
                </Link>
                <Link href="/pricing" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Pricing
                </Link>
                <Link href="/compliance" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
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
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Legal & Compliance for Trust
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              With KAIA, automation and compliance go hand in hand. Built in Europe, for Europe.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50">
                <Shield className="mr-2 h-5 w-5" />
                Built in Europe. Made for the world.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Compliance by Design
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every aspect of KAIA is built to meet the highest European standards
            </p>
          </div>

          <div className="space-y-8">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Certifications & Standards
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Meeting and exceeding industry compliance requirements
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-center">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{cert.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{cert.description}</p>
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {cert.status}
                  </div>
                  <p className="mt-3 text-xs text-gray-500">{cert.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Risk Comparison */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Risk Assessment: KAIA vs US-Based Platforms
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Understanding the compliance risks of different platform choices
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Risk Factor</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">KAIA (Germany)</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">US-Based Platforms</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Explanation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {riskMatrix.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.risk}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {item.kaia}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        item.usCompetitors === 'High Risk' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.usCompetitors}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{item.explanation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Data Sovereignty Deep Dive */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Understanding Data Sovereignty
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Why location matters for your business data
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <Lock className="inline h-6 w-6 text-red-500 mr-2" />
                The Problem with US-Based Platforms
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5">•</span>
                  <span className="ml-2">Subject to US CLOUD Act regardless of data location</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5">•</span>
                  <span className="ml-2">Can be compelled to provide data to US authorities</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5">•</span>
                  <span className="ml-2">May violate GDPR data transfer requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5">•</span>
                  <span className="ml-2">Limited protection from foreign surveillance</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5">•</span>
                  <span className="ml-2">Potential for unexpected service disruption</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <Shield className="inline h-6 w-6 text-green-500 mr-2" />
                The KAIA Solution
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2">German legal entity, EU jurisdiction only</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2">All data processing within EU borders guaranteed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2">Full GDPR compliance by architectural design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2">Protected by strong EU privacy laws</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2">Transparent governance and accountability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Statement */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-6">
            Our Commitment to Trust
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            &ldquo;KAIA isn&apos;t just built to comply with regulations — it&apos;s built to empower companies to turn automation into reality, with the transparency and proof to stand behind every action.&rdquo;
          </p>
          <div className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-lg font-medium rounded-lg text-blue-400 hover:bg-blue-500 hover:text-white transition-colors">
            <Shield className="mr-2 h-6 w-6" />
            Built in Europe. Made for the world.
          </div>
        </div>
      </div>

      {/* Documentation & Resources */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Documentation & Resources
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Access detailed compliance documentation and resources
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6">
              <FileText className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">GDPR Documentation</h3>
              <p className="text-sm text-gray-600 mb-4">Complete GDPR compliance documentation including data processing agreements.</p>
              <Link href="/docs/gdpr" className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                Download Documentation →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <Shield className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Security Whitepaper</h3>
              <p className="text-sm text-gray-600 mb-4">Detailed technical overview of our security architecture and practices.</p>
              <Link href="/docs/security" className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                Read Whitepaper →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <Users className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Compliance Team</h3>
              <p className="text-sm text-gray-600 mb-4">Get in touch with our compliance experts for specific questions.</p>
              <Link href="/contact?subject=compliance" className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                Contact Team →
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