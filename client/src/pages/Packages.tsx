import { useState } from "react";
import { Menu, Check } from "lucide-react";
import { MenuOverlay } from "@/components/MenuOverlay";
import { PageHead } from "@/components/PageHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import type { Package } from "@shared/schema";

export default function Packages() {
  const [menuOpen, setMenuOpen] = useState(false);

  const packages: Package[] = [
    {
      id: "starter",
      name: "Starter",
      sessions: 4,
      pricePerSession: 75,
      totalPrice: 300,
      description: "Perfect for trying out tutoring or focusing on a specific topic",
      features: [
        "4 one-hour sessions",
        "Flexible scheduling",
        "Progress reports",
        "Email support",
      ],
    },
    {
      id: "essentials",
      name: "Essentials",
      sessions: 8,
      pricePerSession: 70,
      totalPrice: 560,
      description: "Ideal for ongoing support throughout the semester",
      features: [
        "8 one-hour sessions",
        "Priority scheduling",
        "Detailed progress reports",
        "Custom study materials",
        "Email & text support",
      ],
    },
    {
      id: "intensive",
      name: "Intensive",
      sessions: 12,
      pricePerSession: 65,
      totalPrice: 780,
      description: "Comprehensive support for serious academic improvement",
      features: [
        "12 one-hour sessions",
        "Priority scheduling",
        "Weekly progress reports",
        "Custom study materials",
        "24/7 email & text support",
        "Parent consultation calls",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Tutoring Packages - enzyme"
        description="Flexible tutoring packages to fit your learning goals and budget. From starter sessions to intensive programs for serious academic improvement."
      />
      <header className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-3xl font-display font-medium text-foreground cursor-pointer" data-testid="link-home">
              enzyme
            </h1>
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 hover-elevate active-elevate-2 rounded-md"
            data-testid="button-open-menu"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-semibold text-foreground mb-6" data-testid="heading-packages">
            Tutoring <span className="text-primary">Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible options to fit your learning goals and budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.id}
              className={`p-8 flex flex-col ${index === 1 ? 'border-2 border-primary shadow-lg shadow-primary/10' : 'border-primary/20'}`}
              data-testid={`card-package-${pkg.id}`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-display font-semibold text-primary mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">${pkg.totalPrice}</span>
                  <span className="text-muted-foreground">total</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  ${pkg.pricePerSession}/session
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/book">
                <Button className="w-full" data-testid={`button-preorder-${pkg.id}`}>
                  Pre-order Package
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center bg-muted rounded-md p-8">
          <p className="text-foreground mb-4">
            Not sure which package is right for you?
          </p>
          <Link href="/contact">
            <Button variant="outline" data-testid="button-contact-us">
              Contact Us
            </Button>
          </Link>
        </div>
      </main>

      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
