import { useState } from "react";
import { Menu, Star } from "lucide-react";
import { MenuOverlay } from "@/components/MenuOverlay";
import { PageHead } from "@/components/PageHead";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import type { Testimonial } from "@shared/schema";

export default function Reviews() {
  const [menuOpen, setMenuOpen] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah M.",
      grade: "Parent of 10th grader",
      text: "My daughter went from struggling with algebra to actually enjoying it! The patient, personalized approach made all the difference. Her test scores improved dramatically in just one semester.",
    },
    {
      id: "2",
      name: "David L.",
      grade: "Parent of 8th grader",
      text: "We tried several tutors before finding enzyme. The clear explanations and ability to break down complex chemistry concepts into understandable pieces has been incredible. Highly recommend!",
    },
    {
      id: "3",
      name: "Jennifer K.",
      grade: "Parent of college student",
      text: "Calculus was a nightmare for my son until he started working with this tutor. The sessions are well-structured, and the progress reports keep us informed. Worth every penny.",
    },
    {
      id: "4",
      name: "Michael R.",
      grade: "Parent of 7th grader",
      text: "Not only did my daughter's grades improve, but her confidence soared. She actually looks forward to tutoring sessions now. The teaching approach is engaging and effective.",
    },
    {
      id: "5",
      name: "Amanda T.",
      grade: "Parent of 11th grader",
      text: "Physics finally makes sense! The real-world examples and hands-on problem-solving approach has transformed how my son thinks about science. Couldn't be happier.",
    },
    {
      id: "6",
      name: "Robert P.",
      grade: "Parent of 9th grader",
      text: "Flexible scheduling and excellent communication. The tutor genuinely cares about student success and it shows in the results. My daughter's biology grade improved from a C to an A.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Student Success Stories - enzyme"
        description="Read testimonials from parents who've seen dramatic improvements in their children's grades and confidence through our personalized tutoring approach."
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
          <h2 className="text-5xl md:text-6xl font-display font-semibold text-foreground mb-6" data-testid="heading-reviews">
            Student <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from parents who've seen the difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-6 flex flex-col border-primary/20 hover-elevate"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-foreground mb-6 flex-1 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-primary/20 pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary/70">{testimonial.grade}</p>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
