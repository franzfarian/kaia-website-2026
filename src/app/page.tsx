import { Shield, Zap, ArrowRight, Globe, Server } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </Link>
                <Link href="/why-kaia" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
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
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">The Sovereign</span>{' '}
                  <span className="block text-blue-600 xl:inline">AI Platform</span>{' '}
                  <span className="block xl:inline">for European SMEs</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Build powerful AI agents on Europe&apos;s most trusted automation engine (n8n), with guaranteed EU data hosting and zero US CLOUD Act risk.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/signup" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                      Start Free Trial
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="#demo" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                      Book Demo
                    </Link>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  <Shield className="inline h-4 w-4 mr-1" />
                  Powered by leading EU-hosted AI models
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-r from-blue-500 to-purple-600 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
            <div className="text-white text-center">
              <Zap className="h-24 w-24 mx-auto mb-4" />
              <p className="text-xl font-semibold">AI Automation Made Sovereign</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Trusted by European SMEs</h2>
            <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10,000+</div>
                <div className="text-sm text-gray-500">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-500">EU Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5,000+</div>
                <div className="text-sm text-gray-500">Integrations (via n8n)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">GDPR</div>
                <div className="text-sm text-gray-500">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose KAIA */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Choose KAIA</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Enterprise-grade AI automation designed specifically for European SMEs
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Globe className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">EU Data Hosting</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  All data processed and stored within EU borders. Zero US CLOUD Act risk.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Zap className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">No-Code Builder</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Conversational interface for creating AI workflows. No technical skills required.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Enterprise Security</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  SOC 2, GDPR, and EU AI Act compliance standards built-in.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Server className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Powered by n8n</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Connect with 5,000+ business tools via our native n8n engine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The KAIA Difference */}
      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">The KAIA Difference</h2>
            <p className="mt-4 text-lg text-gray-600">Real automation for real SMEs across Europe</p>
            
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">6+ hours</div>
                <div className="text-lg font-medium text-gray-900 mt-2">Average weekly time saved per employee</div>
                <div className="text-sm text-gray-500 mt-1">Internal analysis, 2025</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">42%</div>
                <div className="text-lg font-medium text-gray-900 mt-2">Average reduction in manual process costs</div>
                <div className="text-sm text-gray-500 mt-1">Customer survey, Q1/2024</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">50+</div>
                <div className="text-lg font-medium text-gray-900 mt-2">SMEs already working with KAIA&apos;s Agents</div>
                <div className="text-sm text-gray-500 mt-1">Platform metrics, June 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Run Your Own Agentic Playbooks</h2>
            <p className="mt-4 text-lg text-gray-600">Create | Read | Update | Delete</p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Understand & Trigger</h3>
                <p className="mt-2 text-base text-gray-500">
                  A simple dialog replaces complex forms. KAIA understands intent, gathers information, and triggers the right task.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Act & Orchestrate</h3>
                <p className="mt-2 text-base text-gray-500">
                  Our Intelligent Action Engine, powered by n8n, performs work in the background across all your systems.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Respond & Report</h3>
                <p className="mt-2 text-base text-gray-500">
                  The agent delivers results directly in chat and closes the loop. Conversations become measurable, completed tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-200">Experience sovereign AI automation today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/signup" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="#demo" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400">
                Book Demo
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
