import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { User, CreditCard, Settings, LogOut, CheckCircle, Clock, X } from "lucide-react"
import Link from "next/link"

async function getDashboardData(userId: string) {
  const [user, orders, subscription] = await Promise.all([
    prisma.user.findUnique({
      where: { id: userId }
    }),
    prisma.order.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 10
    }),
    prisma.subscription.findUnique({
      where: { userId }
    })
  ])

  return { user, orders, subscription }
}

const statusIcons = {
  PENDING: Clock,
  COMPLETED: CheckCircle,
  CANCELLED: X,
  FAILED: X
}

const statusColors = {
  PENDING: "bg-yellow-100 text-yellow-800",
  COMPLETED: "bg-green-100 text-green-800", 
  CANCELLED: "bg-gray-100 text-gray-800",
  FAILED: "bg-red-100 text-red-800"
}

export default async function DashboardPage() {
  const session = await auth()
  
  if (!session?.user) {
    redirect("/login")
  }

  const { user, orders, subscription } = await getDashboardData(session.user.id)

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
              </Link>
              <h1 className="ml-4 text-xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm">
                Back to Site
              </Link>
              <form action="/api/auth/signout" method="post">
                <button
                  type="submit"
                  className="flex items-center text-gray-500 hover:text-gray-700 px-3 py-2 text-sm"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Sign Out
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      {/* Welcome Banner */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold">Welcome to KAIA, {user.name}!</h2>
            <p className="mt-2 text-blue-100">
              Your sovereign AI automation platform is ready to transform your business
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Account Overview */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Account Overview</h3>
              </div>
              <div className="px-6 py-5">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Current Plan</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {subscription ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {subscription.planType.charAt(0).toUpperCase() + subscription.planType.slice(1)} Plan
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          Starter Plan (Free)
                        </span>
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Billing Type</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {subscription ? subscription.billingType : 'Free'}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Company</dt>
                    <dd className="mt-1 text-sm text-gray-900">{user.company || 'Not specified'}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Country</dt>
                    <dd className="mt-1 text-sm text-gray-900">{user.country || 'Not specified'}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Member Since</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Data Location</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        🇪🇺 EU Only
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
              </div>
              <div className="px-6 py-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <Link
                    href="/agents"
                    className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Create Agent</p>
                      <p className="text-sm text-gray-500">Build your first AI agent</p>
                    </div>
                  </Link>

                  <Link
                    href="/integrations"
                    className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Settings className="h-5 w-5 text-purple-600" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Integrations</p>
                      <p className="text-sm text-gray-500">Connect your tools</p>
                    </div>
                  </Link>

                  {!subscription && (
                    <Link
                      href="/pricing"
                      className="flex items-center p-4 border border-blue-300 rounded-lg hover:bg-blue-50 border-dashed"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-green-600" />
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-blue-900">Upgrade Plan</p>
                        <p className="text-sm text-blue-600">Get more features</p>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            {orders.length > 0 && (
              <div className="bg-white shadow rounded-lg">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
                </div>
                <div className="overflow-hidden">
                  <ul className="divide-y divide-gray-200">
                    {orders.map((order) => {
                      const StatusIcon = statusIcons[order.status]
                      return (
                        <li key={order.id} className="px-6 py-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <StatusIcon className="h-5 w-5 text-gray-400 mr-3" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  {order.planType.charAt(0).toUpperCase() + order.planType.slice(1)} Plan
                                </p>
                                <p className="text-sm text-gray-500">
                                  {new Date(order.createdAt).toLocaleDateString()} • {order.billingType}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                                {order.status.toLowerCase()}
                              </span>
                              <span className="ml-4 text-sm font-medium text-gray-900">
                                €{(order.amount / 100).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Data Sovereignty Card */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    Data Sovereignty Guaranteed
                  </h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>Your data is processed exclusively within EU borders under German jurisdiction.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Need Help?</h3>
              </div>
              <div className="px-6 py-5">
                <div className="space-y-4">
                  <Link
                    href="/docs"
                    className="flex items-center text-sm text-blue-600 hover:text-blue-500"
                  >
                    <span>📚</span>
                    <span className="ml-2">Documentation</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center text-sm text-blue-600 hover:text-blue-500"
                  >
                    <span>💬</span>
                    <span className="ml-2">Contact Support</span>
                  </Link>
                  <Link
                    href="/compliance"
                    className="flex items-center text-sm text-blue-600 hover:text-blue-500"
                  >
                    <span>🔒</span>
                    <span className="ml-2">Compliance Info</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Account Settings */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Account</h3>
              </div>
              <div className="px-6 py-5">
                <div className="space-y-4">
                  <Link
                    href="/settings"
                    className="flex items-center text-sm text-gray-700 hover:text-gray-900"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    <span>Account Settings</span>
                  </Link>
                  <Link
                    href="/billing"
                    className="flex items-center text-sm text-gray-700 hover:text-gray-900"
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    <span>Billing & Subscriptions</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}