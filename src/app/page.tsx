import { Shield, Zap, ArrowRight, Globe, Server, Brain, Workflow, Lock, Users, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import FeatureTile from "../components/FeatureTile"
import StatsTile from "../components/StatsTile"
import WorkflowStep from "../components/WorkflowStep"

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg animate-float">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
              </div>
              <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                <Link href="/" className="border-purple-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                  Home
                </Link>
                <Link href="/why-kaia" className="border-transparent text-gray-500 hover:text-purple-600 hover:border-purple-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200">
                  Why KAIA?
                </Link>
                <Link href="/pricing" className="border-transparent text-gray-500 hover:text-purple-600 hover:border-purple-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200">
                  Pricing
                </Link>
                <Link href="/compliance" className="border-transparent text-gray-500 hover:text-purple-600 hover:border-purple-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200">
                  Compliance
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-500 hover:text-purple-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Sign In
              </Link>
              <Link href="/signup" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-white via-purple-50/30 to-purple-100/50 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-400/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                <div className="animate-fade-in">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                    <span className="block">The Sovereign</span>
                    <span className="block bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent">AI Platform</span>
                    <span className="block">for European SMEs</span>
                  </h1>
                  <p className="mt-6 text-lg text-gray-600 sm:text-xl max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                    Build powerful AI agents on Europe&apos;s most trusted automation engine (n8n), with guaranteed EU data hosting and zero US CLOUD Act risk.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link href="/signup" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 rounded-xl shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5 transition-all duration-200">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="#demo" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-purple-700 bg-white border border-purple-200 hover:bg-purple-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                      Book Demo
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center justify-center lg:justify-start text-sm text-gray-500">
                    <Shield className="h-5 w-5 mr-2 text-green-500" />
                    <span>Powered by leading EU-hosted AI models</span>
                  </div>
                </div>
                
                {/* Hero Illustration */}
                <div className="mt-12 lg:mt-0 relative animate-slide-up">
                  <div className="relative">
                    {/* Main card */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-purple-100">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <Workflow className="h-6 w-6 text-purple-600" />
                      </div>
                      
                      {/* Workflow visualization */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 animate-float">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Brain className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1 h-2 bg-gradient-to-r from-purple-200 to-purple-300 rounded-full" />
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Zap className="h-4 w-4 text-purple-600" />
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 animate-float" style={{animationDelay: '0.5s'}}>
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <Server className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1 h-2 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full" />
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Lock className="h-4 w-4 text-blue-600" />
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 animate-float" style={{animationDelay: '1s'}}>
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                            <Globe className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1 h-2 bg-gradient-to-r from-green-200 to-green-300 rounded-full" />
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <Users className="h-4 w-4 text-green-600" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">AI Automation Made Sovereign</p>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg animate-bounce" />
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <div className="bg-gradient-to-r from-gray-50 to-purple-50/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Trusted by European SMEs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of businesses already automating with KAIA
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <StatsTile
              value={10000}
              suffix="+"
              label="Active Users"
              description="Growing daily"
              color="purple"
              delay={0.1}
            />
            <StatsTile
              value={500}
              suffix="+"
              label="EU Companies"
              description="Trust KAIA"
              color="blue"
              delay={0.2}
            />
            <StatsTile
              value={5000}
              suffix="+"
              label="Integrations"
              description="via n8n"
              color="green"
              delay={0.3}
            />
            <StatsTile
              value={100}
              suffix="%"
              label="GDPR"
              description="Compliant"
              color="orange"
              delay={0.4}
            />
          </div>
        </div>
      </div>

      {/* Why Choose KAIA */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full mb-4">
              Why Choose KAIA
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Enterprise-grade AI automation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Designed specifically for European SMEs with compliance, security, and sovereignty at its core
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureTile
              icon={<Globe className="h-6 w-6" />}
              title="EU Data Hosting"
              description="All data processed and stored within EU borders. Zero US CLOUD Act risk."
              delay={0.1}
            />
            <FeatureTile
              icon={<Brain className="h-6 w-6" />}
              title="No-Code Builder"
              description="Conversational interface for creating AI workflows. No technical skills required."
              delay={0.2}
            />
            <FeatureTile
              icon={<Shield className="h-6 w-6" />}
              title="Enterprise Security"
              description="SOC 2, GDPR, and EU AI Act compliance standards built-in."
              delay={0.3}
            />
            <FeatureTile
              icon={<Server className="h-6 w-6" />}
              title="Powered by n8n"
              description="Connect with 5,000+ business tools via our native n8n engine."
              delay={0.4}
            />
          </div>
        </div>
      </div>

      {/* The KAIA Difference */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-800 text-sm font-semibold rounded-full mb-4">
              The KAIA Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Real automation for real SMEs across Europe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable impact from day one with transparent metrics
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <StatsTile
              value={6}
              suffix="+ hours"
              label="Time Saved Weekly"
              description="Per employee (Internal analysis, 2025)"
              color="green"
              delay={0.1}
            />
            <StatsTile
              value={42}
              suffix="%"
              label="Cost Reduction"
              description="Manual process costs (Q1/2024)"
              color="blue"
              delay={0.2}
            />
            <StatsTile
              value={50}
              suffix="+"
              label="SMEs Using KAIA"
              description="Platform metrics, June 2024"
              color="purple"
              delay={0.3}
            />
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-gradient-to-br from-purple-50/50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Run Your Own Agentic Playbooks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create | Read | Update | Delete — The CRUD operations for modern AI automation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <WorkflowStep
              step={1}
              title="Understand & Trigger"
              description="A simple dialog replaces complex forms. KAIA understands intent, gathers information, and triggers the right task with natural language processing."
              icon={<Brain className="h-6 w-6 text-white" />}
              delay={0.1}
            />
            <WorkflowStep
              step={2}
              title="Act & Orchestrate"
              description="Our Intelligent Action Engine, powered by n8n, performs work in the background across all your systems with enterprise-grade reliability."
              icon={<Workflow className="h-6 w-6 text-white" />}
              delay={0.3}
            />
            <WorkflowStep
              step={3}
              title="Respond & Report"
              description="The agent delivers results directly in chat and closes the loop. Conversations become measurable, completed tasks with full audit trails."
              icon={<TrendingUp className="h-6 w-6 text-white" />}
              delay={0.5}
              isLast={true}
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-blue-700 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-transparent rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
                <span className="block mb-2">Ready to get started?</span>
                <span className="block text-purple-200 text-2xl md:text-3xl lg:text-4xl font-medium">
                  Experience sovereign AI automation today
                </span>
              </h2>
              <p className="text-lg text-purple-100 mb-8 max-w-lg">
                Join the future of European SME automation. Start your free trial and see the difference KAIA makes.
              </p>
            </div>
            
            <div className="mt-8 lg:mt-0 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end animate-slide-up">
              <Link href="/signup" className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-purple-700 bg-white hover:bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#demo" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-purple-500/30 hover:bg-purple-500/40 border border-purple-300/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="h-8 w-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-white font-semibold text-lg">KAIA</span>
            </div>
            <p className="text-base text-gray-400 text-center md:text-right">
              &copy; 2024 KAIA by Mavens GmbH. Built in Hamburg, Germany. Made for Europe.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
