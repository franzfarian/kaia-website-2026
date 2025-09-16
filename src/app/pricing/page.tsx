'use client'

import { Check, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const plans = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    description: "Perfect for trying out AI automation",
    features: [
      "1 AI agent",
      "500 monthly interactions", 
      "Basic integrations",
      "Community support",
      "EU data hosting",
      "GDPR compliance"
    ],
    cta: "Get Started Free",
    ctaHref: "/signup?plan=starter",
    popular: false,
    note: "Free forever • No credit card required"
  },
  {
    name: "Professional",
    price: { monthly: 79, annual: 69 },
    description: "For growing businesses automating workflows",
    features: [
      "Up to 5 AI agents",
      "5,000 monthly interactions",
      "All standard integrations",
      "Priority email support", 
      "Advanced analytics",
      "EU data hosting",
      "GDPR compliance"
    ],
    cta: "Start Free Trial",
    ctaHref: "/signup?plan=professional",
    popular: true,
    note: "Most popular • 14-day free trial"
  },
  {
    name: "Business",
    price: { monthly: 249, annual: 219 },
    description: "For larger SMEs & high-volume users", 
    features: [
      "Unlimited AI agents",
      "20,000 monthly interactions",
      "All standard integrations",
      "Dedicated support manager",
      "Advanced analytics & reporting",
      "EU data hosting",
      "GDPR compliance"
    ],
    cta: "Start Free Trial", 
    ctaHref: "/signup?plan=business",
    popular: false,
    note: "14-day free trial"
  }
]

const sovereigntyOptions = [
  {
    name: "Cloud Standard",
    price: 0,
    description: "Multi-tenant EU cloud hosting",
    features: ["Shared infrastructure", "Standard SLA", "Community support"],
    popular: true
  },
  {
    name: "Cloud Self-Hosted", 
    price: 2500,
    description: "Dedicated cloud environment",
    features: ["Dedicated infrastructure", "Enhanced SLA", "Priority support"]
  },
  {
    name: "On-Premise",
    price: 5000,
    description: "Your own infrastructure", 
    features: ["Full control", "Custom SLA", "White-glove setup"]
  }
]

const faqs = [
  {
    question: "What counts as an interaction?",
    answer: "An interaction is a single round-trip between a user and an agent, consisting of one user message and the corresponding agent response. Unlike task-based pricing, this gives you predictable costs regardless of workflow complexity."
  },
  {
    question: "Is KAIA GDPR compliant?", 
    answer: "Yes, KAIA is fully GDPR compliant. All data is processed and stored within EU borders, and we provide comprehensive data protection controls. We're also EU AI Act ready."
  },
  {
    question: "Can I change plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated."
  },
  {
    question: "How is this different from US-based platforms?",
    answer: "KAIA is built in Germany and operates exclusively on EU infrastructure, eliminating US CLOUD Act risks. We provide true data sovereignty that US-based competitors cannot architecturally guarantee."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee on all paid plans. Contact support for assistance."
  }
]

export default function PricingPage() {
  const [billingType, setBillingType] = useState<'monthly' | 'annual'>('annual')

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
                <Link href="/pricing" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
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
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Start free, scale as you grow
            </p>
            <p className="mt-2 text-lg text-gray-500">
              All plans include EU hosting, GDPR compliance, and our powerful n8n automation engine
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="mt-12 flex justify-center">
            <div className="relative bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setBillingType('monthly')}
                className={`relative px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  billingType === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingType('annual')}
                className={`relative px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  billingType === 'annual'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Annual
                <span className="ml-1 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
                  Save 12%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-lg shadow-lg overflow-hidden ${
                  plan.popular
                    ? 'border-2 border-blue-500 transform scale-105'
                    : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-medium">
                    <Star className="inline h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-2 text-gray-500">{plan.description}</p>
                  
                  <div className="mt-4">
                    <span className="text-4xl font-extrabold text-gray-900">
                      €{plan.price[billingType]}
                    </span>
                    <span className="text-lg font-medium text-gray-500">
                      {plan.price[billingType] === 0 ? '' : '/month'}
                    </span>
                  </div>
                  
                  <p className="mt-2 text-sm text-gray-500">{plan.note}</p>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                        <span className="ml-3 text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href={`${plan.ctaHref}&billing=${billingType}`}
                      className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md transition-colors ${
                        plan.popular
                          ? 'text-white bg-blue-600 hover:bg-blue-700'
                          : 'text-blue-700 bg-blue-100 hover:bg-blue-200'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enterprise Plan */}
          <div className="mt-12">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
              <p className="mt-2 text-gray-600">Custom solutions for large organizations</p>
              <div className="mt-4">
                <span className="text-2xl font-bold text-gray-900">Custom pricing</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                <li>• Unlimited everything</li>
                <li>• Custom integrations</li>
                <li>• Dedicated support</li>
                <li>• SLA guarantees</li>
                <li>• On-premise options</li>
                <li>• Compliance consulting</li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact?subject=enterprise"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sovereignty & Control Packages */}
      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Sovereignty & Control Packages
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose your hosting environment for maximum data control
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sovereigntyOptions.map((option) => (
              <div
                key={option.name}
                className={`bg-white rounded-lg shadow-lg p-6 ${
                  option.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {option.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-gray-900">{option.name}</h3>
                <p className="mt-2 text-gray-600">{option.description}</p>
                
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">
                    €{option.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500">
                    {option.price === 0 ? '' : ' one-time'}
                  </span>
                </div>

                <ul className="mt-6 space-y-2">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="ml-2 text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto">
            <dl className="space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-200">Choose your plan and begin automating today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
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