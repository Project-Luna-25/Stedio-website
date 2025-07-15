import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="flex h-16 items-center justify-center px-4 md:px-6">
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight text-primary hover:opacity-80 transition-opacity hover:scale-105"
        >
          Stedio
        </Link>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center p-4 text-center md:p-6">
        <section className="max-w-3xl space-y-6">
          <h2 className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Yorkshire County Patrol
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Badge variant="secondary" className="text-base px-3 py-1 bg-primary/20 text-primary-foreground">
              BETA
            </Badge>
            <span className="text-lg text-muted-foreground">V1.0.0</span>
          </div>
          <p className="text-lg text-muted-foreground md:text-xl">
            Dive into the heart of Yorkshire and experience life as a dedicated public servant. "Yorkshire County
            Patrol" is an immersive roleplay game where you take on vital roles in emergency services, from patrolling
            as a police officer to responding to critical incidents as a paramedic or firefighter. Every decision shapes
            your story and the safety of the county.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/yorkshire-county-patrol">
              <Button className="px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform duration-200">
                Learn More
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-16 max-w-4xl space-y-8 text-left">
          <h3 className="text-4xl font-bold text-primary text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:scale-105 transition-transform duration-200">
              <h4 className="text-2xl font-semibold mb-2">Dynamic Roleplay</h4>
              <p className="text-muted-foreground">
                Choose your path: police, ambulance, or fire service. Each role offers unique challenges and
                responsibilities.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:scale-105 transition-transform duration-200">
              <h4 className="text-2xl font-semibold mb-2">Authentic Yorkshire Setting</h4>
              <p className="text-muted-foreground">
                Explore a meticulously crafted open world inspired by the beautiful landscapes and towns of Yorkshire.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:scale-105 transition-transform duration-200">
              <h4 className="text-2xl font-semibold mb-2">Community Driven Development</h4>
              <p className="text-muted-foreground">
                As a beta, your feedback directly influences the game's evolution. Join our community and help shape the
                future.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:scale-105 transition-transform duration-200">
              <h4 className="text-2xl font-semibold mb-2">Engaging Missions</h4>
              <p className="text-muted-foreground">
                Respond to a variety of incidents, from routine patrols to high-stakes emergencies, testing your skills
                and quick thinking.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 max-w-3xl space-y-6">
          <h3 className="text-4xl font-bold text-primary text-center">Play Now!</h3>
          <p className="text-lg text-muted-foreground">
            Experience "Yorkshire County Patrol" directly on Roblox. Join the beta and start your career in emergency
            services today!
          </p>
          <a href="https://www.roblox.com/games/your-game-id" target="_blank" rel="noopener noreferrer">
            
          </a>
        </section>
      </main>
      <footer className="flex h-16 items-center justify-center border-t px-4 text-sm text-muted-foreground md:px-6">
        <p>{"Stedio"}</p>
      </footer>
    </div>
  )
}
