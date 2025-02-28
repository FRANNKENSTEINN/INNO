import { Card, CardContent } from "@/components/ui/card"
import { Users, Building2, Target } from "lucide-react"
import StickyContact from "@/components/sticky-contact"
import AnimatedBackground from "@/components/animated-background"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="container px-4 py-12 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <div className="mx-auto w-24 h-24 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30Sep24%20Simon%20%20Free%20Upload%20%20%20%282%29-b4Eyrodq7aSYsp0DeYssZNQ0MPV0QF.png"
                alt="INNOWEB Logo"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">About INNOWEB</h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Transforming digital landscapes with innovative solutions since 2024
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transform transition-transform hover:scale-105 backdrop-blur-lg bg-white/50">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900">
                  <Building2 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Established 2024</h3>
                <p className="text-center text-zinc-500 dark:text-zinc-400">Leading innovation in digital solutions</p>
              </CardContent>
            </Card>

            <Card className="transform transition-transform hover:scale-105 backdrop-blur-lg bg-white/50">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="rounded-full bg-pink-100 p-3 dark:bg-pink-900">
                  <Users className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-xl font-bold">100% Satisfied Customers</h3>
                <p className="text-center text-zinc-500 dark:text-zinc-400">Committed to excellence in every project</p>
              </CardContent>
            </Card>

            <Card className="transform transition-transform hover:scale-105 backdrop-blur-lg bg-white/50">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="rounded-full bg-violet-100 p-3 dark:bg-violet-900">
                  <Target className="h-8 w-8 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="text-center text-zinc-500 dark:text-zinc-400">
                  Delivering innovative digital solutions that drive success
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Founded in 2024, INNOWEB has quickly established itself as a leading provider of innovative digital
                solutions. Our journey is driven by a passion for technology and a commitment to delivering excellence
                in every project.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                We combine creativity with technical expertise to create solutions that not only meet but exceed our
                clients' expectations. Our team of experts is dedicated to staying ahead of the latest technological
                trends and best practices.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Values</h2>
              <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-600" />
                  Innovation: Pushing boundaries in digital solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-pink-600" />
                  Excellence: Delivering outstanding results
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-600" />
                  Integrity: Building trust through transparency
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-600" />
                  Customer Focus: Your success is our priority
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <StickyContact />
    </div>
  )
}

