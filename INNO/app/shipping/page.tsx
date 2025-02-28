import { Card, CardContent } from "@/components/ui/card"
import { Truck, RefreshCw, Clock, ShieldCheck } from "lucide-react"
import FloatingContact from "@/components/floating-contact"

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-zinc-900 dark:to-zinc-800">
      <div className="container px-4 py-8 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Shipping & Returns</h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Learn about our shipping and return policies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Shipping Policy</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900">
                      <Truck className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Free Shipping</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">On orders above $99</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-pink-100 p-2 dark:bg-pink-900">
                      <Clock className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Delivery Time</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        2-3 business days for local delivery 4-7 business days for national delivery
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Returns Policy</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-violet-100 p-2 dark:bg-violet-900">
                      <RefreshCw className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Easy Returns</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">30-day return policy on most items</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-indigo-100 p-2 dark:bg-indigo-900">
                      <ShieldCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Quality Guarantee</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        All products are quality checked before shipping
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Shipping Rates</h3>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>Local Delivery: $5</li>
                    <li>National Delivery: $10 - $20</li>
                    <li>Free shipping on orders above $99</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Return Process</h3>
                  <ol className="list-decimal list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>Initiate return from your account</li>
                    <li>Pack the item in original packaging</li>
                    <li>Schedule pickup or drop at nearest center</li>
                    <li>Refund processed within 5-7 business days</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
          <FloatingContact />
        </div>
      </div>
    </div>
  )
}

