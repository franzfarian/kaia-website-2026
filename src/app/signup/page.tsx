'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Shield, Eye, EyeOff, Check, Building, User, MapPin } from 'lucide-react'

const plans = {
  starter: { name: 'Starter', price: 0, features: ['1 AI agent', '500 monthly interactions', 'Basic integrations'] },
  professional: { name: 'Professional', price: 79, features: ['Up to 5 AI agents', '5,000 monthly interactions', 'All integrations'] },
  business: { name: 'Business', price: 249, features: ['Unlimited agents', '20,000 monthly interactions', 'Dedicated support'] }
}

const countries = [
  'Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Belgium', 'Austria', 
  'Poland', 'Czech Republic', 'Hungary', 'Portugal', 'Sweden', 'Denmark', 
  'Finland', 'Ireland', 'Other EU', 'Other'
]

const roles = [
  'CEO/Founder', 'CTO/Technical Lead', 'Operations Manager', 'Marketing Manager', 
  'Sales Manager', 'Business Development', 'IT Manager', 'Other'
]

function SignupPageContent() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    role: '',
    country: '',
    agreeTerms: false,
    agreeMarketing: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedPlan, setSelectedPlan] = useState('professional')
  const [billingType, setBillingType] = useState('annual')

  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const planParam = searchParams.get('plan')
    const billingParam = searchParams.get('billing')
    
    if (planParam && plans[planParam as keyof typeof plans]) {
      setSelectedPlan(planParam)
    }
    if (billingParam && (billingParam === 'monthly' || billingParam === 'annual')) {
      setBillingType(billingParam)
    }
  }, [searchParams])

  const validateStep1 = () => {
    if (!formData.name.trim()) {
      setError('Name is required')
      return false
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Valid email is required')
      return false
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters')
      return false
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return false
    }
    return true
  }

  const validateStep2 = () => {
    if (!formData.company.trim()) {
      setError('Company name is required')
      return false
    }
    if (!formData.role) {
      setError('Role is required')
      return false
    }
    if (!formData.country) {
      setError('Country is required')
      return false
    }
    if (!formData.agreeTerms) {
      setError('You must agree to the terms of service')
      return false
    }
    return true
  }

  const handleNext = () => {
    setError('')
    if (step === 1 && validateStep1()) {
      setStep(2)
    } else if (step === 2 && validateStep2()) {
      setStep(3)
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    setError('')

    try {
      // Register user
      const registerRes = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          company: formData.company,
          role: formData.role,
          country: formData.country,
        }),
      })

      if (!registerRes.ok) {
        const data = await registerRes.json()
        throw new Error(data.error || 'Registration failed')
      }

      // Create order for paid plans
      if (selectedPlan !== 'starter') {
        const plan = plans[selectedPlan as keyof typeof plans]
        const amount = billingType === 'annual' ? plan.price * 12 * 0.88 : plan.price // 12% discount for annual
        
        const orderRes = await fetch('/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            planType: selectedPlan,
            billingType,
            amount: Math.round(amount * 100), // Convert to cents
          }),
        })

        if (!orderRes.ok) {
          throw new Error('Order creation failed')
        }
      }

      // Sign in the user
      const { signIn } = await import('next-auth/react')
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      })

      if (result?.error) {
        throw new Error('Login failed after registration')
      }

      // Redirect to dashboard
      router.push('/dashboard?welcome=true')
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Link href="/">
            <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
          </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your KAIA account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </Link>
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex items-center justify-center space-x-4">
          {[1, 2, 3].map((stepNum) => (
            <div
              key={stepNum}
              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                stepNum <= step
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {stepNum}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-2">
          <div className="text-xs text-gray-500">
            {step === 1 && 'Account Details'}
            {step === 2 && 'Company Information'}
            {step === 3 && 'Plan Selection'}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-6 rounded-md bg-red-50 p-4">
              <div className="text-sm text-red-700">{error}</div>
            </div>
          )}

          {/* Step 1: Account Details */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => updateFormData('password', e.target.value)}
                    className="appearance-none block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">At least 8 characters</p>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                    className="appearance-none block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Company Information */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  <Building className="inline h-4 w-4 mr-1" />
                  Company Name
                </label>
                <div className="mt-1">
                  <input
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => updateFormData('company', e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                  <User className="inline h-4 w-4 mr-1" />
                  Your Role
                </label>
                <div className="mt-1">
                  <select
                    id="role"
                    required
                    value={formData.role}
                    onChange={(e) => updateFormData('role', e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Select your role</option>
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Country
                </label>
                <div className="mt-1">
                  <select
                    id="country"
                    required
                    value={formData.country}
                    onChange={(e) => updateFormData('country', e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Select your country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    id="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => updateFormData('agreeTerms', e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-900">
                    I agree to the{' '}
                    <Link href="/terms" className="text-blue-600 hover:text-blue-500">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-blue-600 hover:text-blue-500">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    id="agreeMarketing"
                    type="checkbox"
                    checked={formData.agreeMarketing}
                    onChange={(e) => updateFormData('agreeMarketing', e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="agreeMarketing" className="ml-2 block text-sm text-gray-900">
                    I&apos;d like to receive product updates and marketing communications
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Plan Selection */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Choose Your Plan</h3>
                
                {/* Billing Toggle */}
                <div className="flex justify-center mb-6">
                  <div className="relative bg-gray-100 p-1 rounded-lg">
                    <button
                      onClick={() => setBillingType('monthly')}
                      className={`px-4 py-1 text-sm font-medium rounded transition-all ${
                        billingType === 'monthly'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-500'
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setBillingType('annual')}
                      className={`px-4 py-1 text-sm font-medium rounded transition-all ${
                        billingType === 'annual'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-500'
                      }`}
                    >
                      Annual (Save 12%)
                    </button>
                  </div>
                </div>

                {/* Plan Options */}
                <div className="space-y-3">
                  {Object.entries(plans).map(([key, plan]) => {
                    const price = billingType === 'annual' ? Math.round(plan.price * 0.88) : plan.price
                    return (
                      <div
                        key={key}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          selectedPlan === key
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedPlan(key)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                checked={selectedPlan === key}
                                readOnly
                                className="h-4 w-4 text-blue-600 border-gray-300"
                              />
                              <div className="ml-3">
                                <h4 className="text-lg font-medium text-gray-900">{plan.name}</h4>
                                <div className="text-2xl font-bold text-gray-900">
                                  €{price}{price > 0 && '/month'}
                                </div>
                              </div>
                            </div>
                            <ul className="mt-2 ml-7 space-y-1">
                              {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-sm text-gray-600">
                                  <Check className="h-4 w-4 text-green-500 mr-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-6 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
              >
                Back
              </button>
            )}
            
            <div className="ml-auto">
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md disabled:opacity-50"
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </button>
              )}
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Shield className="h-4 w-4 mr-1" />
              Secured with EU data protection standards
            </div>
          </div>
        </div>
      </div>

      {/* Back to Home */}
      <div className="mt-8 text-center">
        <Link href="/" className="text-sm text-blue-600 hover:text-blue-500">
          ← Back to homepage
        </Link>
      </div>
    </div>
  )
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <SignupPageContent />
    </Suspense>
  )
}
