"use client"

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckSquare, Users, Calendar, BarChart3, ArrowRight } from "lucide-react"
import { Logo } from "@/components/ui/logo"

const features = [
  {
    icon: CheckSquare,
    title: "Task Management",
    description: "Create, assign, and track household tasks with ease"
  },
  {
    icon: Users,
    title: "Family Collaboration",
    description: "Invite family members and manage tasks together"
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Set due dates, recurring tasks, and get reminders"
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Track completion rates and household productivity"
  }
]

export default function Home() {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo variant="full" size="lg" responsive />
          <div className="flex items-center gap-4">
            <Link href="/auth/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold mb-6">
                Manage Your Household Tasks
                <span className="text-primary"> Effortlessly</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Keep your family organized with smart task management, recurring schedules, 
                and collaborative features that make household management a breeze.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link href="/auth/signup">
                  <Button size="lg" className="gap-2">
                    Start Free Trial
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/auth/signin">
                  <Button variant="outline" size="lg">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Everything you need to stay organized
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Simple, Powerful, Collaborative
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Everything you need to keep your household organized and running smoothly
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6">
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckSquare className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Stay Organized</h3>
                  <p className="text-muted-foreground">
                    Keep track of all household tasks in one place with categories, priorities, and due dates.
                  </p>
                </div>
                
                <div className="p-6">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Work Together</h3>
                  <p className="text-muted-foreground">
                    Invite family members to share responsibilities and collaborate on household management.
                  </p>
                </div>
                
                <div className="p-6">
                  <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
                  <p className="text-muted-foreground">
                    Monitor completion rates and see how your household productivity improves over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Logo variant="full" size="md" className="text-white" />
          </div>
          <p className="text-gray-400">
            Making household management simple and collaborative.
          </p>
        </div>
      </footer>
    </div>
  )
}
