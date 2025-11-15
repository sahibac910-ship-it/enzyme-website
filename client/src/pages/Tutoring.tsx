import { useState } from "react";
import { Menu, BookOpen, GraduationCap, Target } from "lucide-react";
import { MenuOverlay } from "@/components/MenuOverlay";
import { PageHead } from "@/components/PageHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function Tutoring() {
  const [menuOpen, setMenuOpen] = useState(false);

  const subjects = [
    { name: "Mathematics", description: "Algebra, Geometry, Calculus, Statistics" },
    { name: "Physics", description: "Mechanics, Thermodynamics, Electromagnetism" },
    { name: "Chemistry", description: "General Chemistry, Organic Chemistry, Biochemistry" },
    { name: "Biology", description: "Cell Biology, Genetics, Ecology, Anatomy" },
  ];

  const gradeLevels = [
    "Elementary School (K-5)",
    "Middle School (6-8)",
    "High School (9-12)",
    "College & University",
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Expert Tutoring - enzyme"
        description="Personalized math and science tutoring for elementary through college students. Expert instruction in mathematics, physics, chemistry, and biology."
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

      <main className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-semibold text-foreground mb-6" data-testid="heading-tutoring">
            Expert <span className="text-primary">Tutoring</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Personalized, one-on-one instruction designed to help students excel in math and science
          </p>
        </div>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-display font-semibold text-foreground">Subjects Taught</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {subjects.map((subject) => (
              <Card key={subject.name} className="p-6 border-l-4 border-l-primary" data-testid={`card-subject-${subject.name.toLowerCase()}`}>
                <h4 className="text-xl font-semibold text-primary mb-2">{subject.name}</h4>
                <p className="text-muted-foreground">{subject.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-display font-semibold text-foreground">Grade Levels</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {gradeLevels.map((level) => (
              <Card key={level} className="p-6 text-center border-primary/30 hover-elevate" data-testid={`card-grade-${level.toLowerCase().replace(/\s+/g, '-')}`}>
                <p className="text-foreground font-medium">{level}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-display font-semibold text-foreground">Teaching Approach</h3>
          </div>
          <Card className="p-8">
            <div className="space-y-6 text-foreground">
              <p className="text-lg leading-relaxed">
                I believe in a student-centered approach that builds both competence and confidence. Each session is tailored to your child's learning style, pace, and specific goals.
              </p>
              <p className="text-lg leading-relaxed">
                Through clear explanations, guided practice, and continuous feedback, I help students not just memorize formulas, but truly understand concepts. This deep understanding translates to better grades and genuine enthusiasm for learning.
              </p>
              <p className="text-lg leading-relaxed">
                Sessions are conducted in a supportive environment where questions are encouraged and mistakes are seen as valuable learning opportunities.
              </p>
            </div>
          </Card>
        </section>

        <div className="text-center">
          <Link href="/packages">
            <Button size="lg" className="text-lg" data-testid="button-view-packages">
              View Packages
            </Button>
          </Link>
        </div>
      </main>

      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
