import { useState } from "react";
import { Menu, Lightbulb, FlaskConical, Binary } from "lucide-react";
import { MenuOverlay } from "@/components/MenuOverlay";
import { PageHead } from "@/components/PageHead";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import type { Project } from "@shared/schema";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects: Project[] = [
    {
      id: "1",
      title: "Quantum Computing Education Framework",
      description: "Developed an accessible curriculum for introducing quantum computing concepts to high school students, bridging the gap between classical and quantum thinking.",
      category: "Research",
    },
    {
      id: "2",
      title: "Mathematical Modeling of Ecosystems",
      description: "Applied differential equations and chaos theory to model predator-prey relationships in local ecosystems, presented at regional science symposium.",
      category: "Research",
    },
    {
      id: "3",
      title: "Interactive Physics Simulations",
      description: "Created web-based simulations for visualizing complex physics concepts like wave interference, projectile motion, and electromagnetic fields.",
      category: "Project",
    },
    {
      id: "4",
      title: "Chemistry Lab Safety Database",
      description: "Built a comprehensive database of safety protocols and chemical interactions to improve lab safety awareness in educational settings.",
      category: "Project",
    },
    {
      id: "5",
      title: "Neural Network for Handwriting Recognition",
      description: "Implemented a convolutional neural network from scratch to recognize handwritten mathematical symbols, achieving 94% accuracy.",
      category: "Project",
    },
    {
      id: "6",
      title: "Algebraic Thinking in Early Education",
      description: "Research paper exploring effective strategies for introducing algebraic concepts to elementary students through pattern recognition.",
      category: "Research",
    },
  ];

  const getCategoryIcon = (category: string) => {
    if (category === "Research") return <Lightbulb className="w-5 h-5" />;
    return <FlaskConical className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      <PageHead
        title="Research & Portfolio - enzyme"
        description="Explore educational research projects and initiatives at the intersection of science, technology, and learning. Passionate about making complex concepts accessible."
      />
      <header className="border-b border-border bg-white/80 backdrop-blur-sm">
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
          <h2 className="text-5xl md:text-6xl font-display font-semibold text-foreground mb-6" data-testid="heading-portfolio">
            Research & <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the intersection of education, science, and technology
          </p>
        </div>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Binary className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-display font-semibold text-foreground">Projects & Research</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="p-6 hover-elevate transition-all duration-200 bg-white/90 backdrop-blur-sm border-l-4 border-l-primary"
                data-testid={`card-project-${project.id}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge className="flex items-center gap-1 bg-primary text-primary-foreground">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </Badge>
                </div>
                <h4 className="text-xl font-semibold text-primary mb-3 leading-tight">
                  {project.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-display font-semibold text-foreground mb-4">About Me</h3>
          </div>
          <Card className="p-8 md:p-12 max-w-4xl mx-auto bg-white/90 backdrop-blur-sm border-2 border-primary/30">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="text-lg">
                I'm passionate about making complex scientific and mathematical concepts accessible and exciting for learners of all ages. My background combines formal education in mathematics and physics with years of practical teaching experience.
              </p>
              <p className="text-lg">
                Beyond tutoring, I actively engage in educational research and develop tools that enhance learning outcomes. I believe that understanding comes from curiosity, and my goal is to nurture that curiosity in every student I work with.
              </p>
              <p className="text-lg">
                When I'm not teaching or researching, you'll find me exploring new developments in quantum computing, contributing to open-source educational software, or hiking local trails to clear my mind for the next big problem.
              </p>
              <div className="border-l-4 border-l-primary pl-6 bg-primary/5 py-4 -ml-4">
                <p className="text-lg font-medium text-primary">
                  Education is not just about memorizing formulas—it's about developing a mindset that embraces challenges and sees problems as opportunities for growth.
                </p>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
