import { useState } from "react";
import { Menu } from "lucide-react";
import { MenuOverlay } from "@/components/MenuOverlay";
import { PageHead } from "@/components/PageHead";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background flex flex-col">
      <PageHead
        title="enzyme - Math and Science Tutoring"
        description="Expert math and science tutoring for students of all grade levels. Personalized learning approach with flexible scheduling."
      />
      <button
        onClick={() => setMenuOpen(true)}
        className="absolute top-8 left-8 p-2 hover-elevate active-elevate-2 rounded-md z-10 border border-primary/20"
        data-testid="button-open-menu"
        aria-label="Open menu"
      >
        <Menu className="w-8 h-8 text-primary" />
      </button>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          <h1 className="text-7xl md:text-9xl font-display font-medium text-primary mb-8 tracking-tight" data-testid="text-brand">
            enzyme
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light" data-testid="text-tagline">
            Math and Science Tutoring
          </p>
          <Link href="/tutoring">
            <Button
              size="lg"
              className="text-lg"
              data-testid="button-cta-tutoring"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </main>

      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
