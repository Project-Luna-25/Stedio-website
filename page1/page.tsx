import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Yorkshire County Patrol - Stedio",
  description:
    "Explore Yorkshire County Patrol, an immersive roleplay game about emergency services by Stedio. Join the beta!",
  keywords: ["Yorkshire County Patrol", "roleplay game", "police game", "emergency services", "Stedio", "beta game"],
  openGraph: {
    title: "Yorkshire County Patrol - Stedio",
    description:
      "Explore Yorkshire County Patrol, an immersive roleplay game about emergency services by Stedio. Join the beta!",
    url: "https://www.stedio.com/yorkshire-county-patrol", // Replace with your actual URL
    siteName: "Stedio",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200", // Placeholder image for Open Graph
        width: 1200,
        height: 630,
        alt: "Yorkshire County Patrol Game",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yorkshire County Patrol - Stedio",
    description:
      "Explore Yorkshire County Patrol, an immersive roleplay game about emergency services by Stedio. Join the beta!",
    images: ["/placeholder.svg?height=630&width=1200"], // Placeholder image for Twitter Card
  },
}

export default function YorkshireCountyPatrolPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="flex h-16 items-center justify-between px-4 md:px-6 border-b">
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight text-primary hover:opacity-80 transition-opacity hover:scale-105"
        >
          Stedio
        </Link>
        <Link href="/">
          <Button variant="outline" className="bg-transparent hover:scale-105 transition-transform duration-200">
            Back to Home
          </Button>
        </Link>
      </header>
      <main className="flex-1 p-4 md:p-8">
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl text-primary">
              Yorkshire County Patrol
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Badge variant="secondary" className="text-lg px-4 py-2 bg-primary/20 text-primary-foreground">
                BETA
              </Badge>
              <span className="text-xl text-muted-foreground">V1.0.0</span>
            </div>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              An immersive roleplay simulation where you embody the vital roles of emergency services in the picturesque
              county of Yorkshire. Patrol the streets, respond to calls, and make a difference in the lives of its
              citizens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border border-border shadow-sm hover:scale-105 transition-transform duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">About the Game</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Yorkshire County Patrol offers a unique blend of realistic simulation and engaging roleplay. Players
                  can choose to join the police force, ambulance service, or fire department, each with its own set of
                  vehicles, equipment, and mission types. The game emphasizes teamwork, strategic thinking, and quick
                  decision-making in high-pressure situations.
                </p>
                <p className="mt-4">
                  The open-world map is a faithful recreation of various Yorkshire locales, from bustling city centers
                  to serene rural areas, providing a diverse environment for your duties.
                </p>
                {/* User can write more here */}
              </CardContent>
            </Card>

            <Card className="bg-card border border-border shadow-sm hover:scale-105 transition-transform duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">Gameplay Features</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>**Multi-Role System:** Switch between police, paramedic, and firefighter roles.</li>
                  <li>**Dynamic Incident Generation:** Experience unpredictable emergencies and calls for service.</li>
                  <li>**Realistic Vehicle Physics:** Drive authentic emergency vehicles with detailed handling.</li>
                  <li>**Customizable Characters:** Create your own emergency service persona.</li>
                  <li>**Co-op Multiplayer:** Team up with friends to tackle large-scale incidents.</li>
                </ul>
                {/* User can write more here */}
              </CardContent>
            </Card>

            <Card className="bg-card border border-border shadow-sm hover:scale-105 transition-transform duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">Development & Beta</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  "Yorkshire County Patrol" is currently in its V1.0.0 Beta phase. We are actively gathering feedback
                  from our community to refine gameplay, add new features, and ensure the best possible experience. Your
                  participation in the beta is crucial for shaping the final product.
                </p>
                <p className="mt-4">
                  Expect regular updates, bug fixes, and new content as we progress towards the full release. Join our
                  Discord to report bugs, suggest features, and connect with other players!
                </p>
                {/* User can write more here */}
              </CardContent>
            </Card>

            <Card className="bg-card border border-border shadow-sm hover:scale-105 transition-transform duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">Community & Support</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Join our growing community of dedicated players and developers. We believe in transparent development
                  and value every piece of feedback.
                </p>
                <ul className="mt-4 list-disc list-inside space-y-2">
                  <li>**Discord:** Connect with the team and other players.</li>
                  <li>**Forums:** Discuss strategies and share your experiences.</li>
                  <li>**Bug Reporting:** Help us make the game better by reporting issues.</li>
                </ul>
                {/* User can write more here */}
              </CardContent>
            </Card>

            <Card className="bg-card border border-border shadow-sm hover:scale-105 transition-transform duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">Future Plans</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  We have ambitious plans for Yorkshire County Patrol, including new vehicles, expanded map areas,
                  additional emergency service roles, and deeper simulation mechanics. We are also exploring modding
                  support to allow the community to create their own content.
                </p>
                <p className="mt-4">
                  Stay tuned for our development roadmap, which will outline upcoming features and content updates.
                </p>
                {/* User can write more here */}
              </CardContent>
            </Card>

            <Card className="bg-card border border-border shadow-sm hover:scale-105 transition-transform duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">Media & Screenshots</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Check out some early screenshots and concept art from Yorkshire County Patrol. More media will be
                  added as development progresses.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <img
                    alt="Screenshot 1"
                    className="rounded-lg object-cover aspect-video"
                    height="150"
                    src="/placeholder.svg?height=150&width=250"
                    width="250"
                  />
                  <img
                    alt="Screenshot 2"
                    className="rounded-lg object-cover aspect-video"
                    height="150"
                    src="/placeholder.svg?height=150&width=250"
                    width="250"
                  />
                  <img
                    alt="Screenshot 3"
                    className="rounded-lg object-cover aspect-video"
                    height="150"
                    src="/placeholder.svg?height=150&width=250"
                    width="250"
                  />
                  <img
                    alt="Screenshot 4"
                    className="rounded-lg object-cover aspect-video"
                    height="150"
                    src="/placeholder.svg?height=150&width=250"
                    width="250"
                  />
                </div>
                {/* User can write more here */}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="flex h-16 items-center justify-center border-t px-4 text-sm text-muted-foreground md:px-6">
        <p>{"Stedio"}</p>
      </footer>
    </div>
  )
}
