import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileUp, Sparkles, Layers, BrainCircuit, Zap, Clock, Target, Timer, MessageSquare, Users, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { useTour } from "@/hooks/use-tour";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Limitless — Turn any PDF into notes, flashcards & quizzes" },
      {
        name: "description",
        content:
          "Upload a PDF and Limitless instantly generates structured notes, flashcards, and practice tests so you can study smarter.",
      },
      { property: "og:title", content: "Limitless — Study without limits" },
      {
        property: "og:description",
        content:
          "Upload a PDF and Limitless instantly generates notes, flashcards, and quizzes.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const { startTour } = useTour();
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-28 text-center">
          <div className="eyebrow inline-flex items-center gap-2 border border-foreground px-4 py-1.5 mb-8">
            <Sparkles className="size-3.5" />
            AI-powered study companion
          </div>

          <h1 className="max-w-4xl mx-auto leading-[1.05]">
            <span className="block eyebrow text-base md:text-lg !tracking-[0.5em]">
              Study With
            </span>
            <span className="wordmark-limitless block mt-4 text-5xl md:text-7xl">
              LIMITLESS
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Drop in any PDF and get structured notes, flashcards, and a
            practice test in seconds. Built for students who want to learn
            faster, not harder.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="btn-octagon h-12 px-9 text-sm font-semibold"
            >
              <Link to="/study">
                Upload your first PDF <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-7 text-xs gap-2 border border-foreground bg-transparent uppercase tracking-[0.14em] font-label"
              onClick={startTour}
            >
              <Play className="size-4 fill-current" /> Watch the tour
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-7 text-xs border border-foreground bg-transparent uppercase tracking-[0.14em] font-label">
              <a href="#features">See how it works</a>
            </Button>
          </div>

          {/* Floating stat badges + tilted dashboard */}
          <div className="mt-24 mb-12 relative w-full max-w-4xl mx-auto [perspective:1200px]">
            
            

            {/* Main tilted dashboard */}
            <div className="relative mx-auto w-[85%] aspect-[16/10] bg-card border border-foreground overflow-hidden">
              <div className="flex gap-1.5 p-4 border-b border-border/50">
                <div className="size-2.5 border border-foreground" />
                <div className="size-2.5 border border-foreground" />
                <div className="size-2.5 bg-foreground" />
              </div>
              <div className="p-8 grid grid-cols-2 gap-6">
                <div className="h-32 clip-oct border border-border bg-[var(--pal-200)]/40" />
                <div className="h-32 border border-border bg-[var(--pal-200)]/20" />
                <div className="h-32 border border-border bg-[var(--pal-200)]/20" />
                <div className="h-32 clip-oct border border-border bg-[var(--pal-200)]/40" />
              </div>
            </div>

            {/* Floating badge: focus timer */}
            <div className="float-badge lavender top-[8%] -left-2 md:-left-6 animate-float-slow ">
              45 min focus timer
            </div>

            {/* Floating badge: topics mastered */}
            <div className="float-badge mint bottom-[14%] -right-2 md:-right-10 animate-float ">
              12 topics mastered
            </div>

            {/* Floating badge: streak */}
            <div className="float-badge butter -top-6 right-6 md:right-16 animate-float-slow ">
              5-day streak
            </div>

            {/* Floating: Flashcards */}
            <div className="absolute top-1/3 -left-4 md:-left-10 w-56 p-5 panel-oct text-left animate-fade-in">
              <div className="size-10 clip-hex bg-foreground grid place-items-center mb-4">
                <BrainCircuit className="size-5 text-background" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-semibold">Flashcards</p>
              <p className="text-xs text-muted-foreground">14 cards · ready to review</p>
              <div className="mt-4 h-px w-full bg-border overflow-hidden">
                <div className="h-full w-2/3 bg-foreground" />
              </div>
            </div>

            {/* Floating: Notes summary */}
            <div className="absolute -bottom-10 right-4 md:right-14 w-56 p-4 bg-card border border-foreground text-left animate-fade-in">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="size-4 text-primary" />
                <p className="text-xs font-medium">Summary generated</p>
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full bg-foreground/10 rounded" />
                <div className="h-1.5 w-4/5 bg-foreground/10 rounded" />
                <div className="h-1.5 w-full bg-foreground/10 rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Everything you need from one upload
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Stop juggling tools. Limitless turns your study material into a
            complete learning kit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              icon: Layers,
              title: "Structured notes",
              body: "Clean sections with headings and bullet points. Skim, study, or print.",
            },
            {
              icon: BrainCircuit,
              title: "Smart flashcards",
              body: "Auto-generated Q&A cards you can flip through and memorize.",
            },
            {
              icon: Zap,
              title: "Practice quizzes",
              body: "Multiple-choice questions with explanations — test what you actually know.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="border border-border bg-card p-6 hover-lift"
            >
              <div className="size-12 clip-hex bg-foreground grid place-items-center text-background mb-5">
                <Icon className="size-5" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats bento */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "10×", label: "Faster study prep" },
            { value: "50+", label: "Subjects supported" },
            { value: "98%", label: "Recall after a week" },
            { value: "1‑click", label: "PDF → study kit" },
          ].map((s) => (
            <div key={s.label} className="border border-border bg-card p-6 text-center hover-lift">
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* More features bento */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Built like a complete <span className="text-[var(--pal-600)]">study toolkit</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Target, title: "Habits", body: "Build daily study streaks with preset + custom habits.", to: "/habits" as const },
            { icon: Timer, title: "Focus timer", body: "Pomodoro sessions that earn XP while you grind.", to: "/focus" as const },
            { icon: MessageSquare, title: "AI assistant", body: "Ask anything — get answers grounded in your kits.", to: "/assistant" as const },
            { icon: Users, title: "Study groups", body: "Compete on the XP leaderboard with classmates.", to: "/groups" as const },
            { icon: Layers, title: "Library", body: "Every kit you've ever made, kept and searchable.", to: "/library" as const },
            { icon: Sparkles, title: "Exam mode", body: "1.5× XP and tighter quizzes when crunch time hits.", to: "/study" as const },
          ].map(({ icon: Icon, title, body, to }) => (
            <Link key={title} to={to} className="group border border-border bg-card p-5 hover-lift">
              <div className="flex items-center gap-3 mb-2">
                <Icon className="size-5 text-primary" />
                <h3 className="font-display text-lg font-semibold">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{body}</p>
              <span className="story-link mt-3 inline-block text-xs text-primary">Open</span>
            </Link>
          ))}
        </div>
      </section>


      {/* How */}
      <section id="how" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Three steps. One smarter you.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: FileUp, step: "01", title: "Upload", body: "Drop in any PDF — lecture, textbook, paper, slides." },
            { icon: Clock, step: "02", title: "Wait briefly", body: "Limitless reads it and crafts your study kit." },
            { icon: Sparkles, step: "03", title: "Study", body: "Notes, flashcards, and quizzes — all in one place." },
          ].map(({ icon: Icon, step, title, body }) => (
            <div key={step} className="border border-border bg-card p-6 hover-lift">
              <p className="font-display text-5xl font-bold text-[var(--pal-400)] mb-3">{step}</p>
              <Icon className="size-5 text-primary mb-2" />
              <h3 className="font-display text-xl font-semibold mb-1">{title}</h3>
              <p className="text-muted-foreground text-sm">{body}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Frequently asked</h2>
            <p className="text-muted-foreground mt-2 text-sm">Quick answers to the things students ask most.</p>
          </div>
          <Accordion type="single" collapsible className="border border-border bg-card px-6">
            <AccordionItem value="q1">
              <AccordionTrigger>Is Limitless free?</AccordionTrigger>
              <AccordionContent>Yes — you can upload PDFs and generate study kits without paying.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Do I need an account?</AccordionTrigger>
              <AccordionContent>You can try it as a guest. Sign in with Google to save your kits, habits, and XP across devices.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>What can I upload?</AccordionTrigger>
              <AccordionContent>PDFs, pasted text, video links, and your own notes — Limitless turns any of them into a kit.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>How is my data used?</AccordionTrigger>
              <AccordionContent>Your uploads are only used to generate your study kit. We don't sell or train public models on your content.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>


        <div className="mt-16 clip-oct bg-foreground p-10 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
            Ready to learn the limitless way?
          </h2>
          <p className="text-primary-foreground/80 mt-3 max-w-xl mx-auto">
            Free to try. Bring a PDF and we'll do the rest.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="mt-6 h-12 px-7 text-base"
          >
            <Link to="/study">
              Start studying <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border mt-10">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Limitless. Study without limits.</p>
          <a
            href="https://discord.gg/P2dR47DVf9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-4 py-1.5 hover:border-foreground hover:text-foreground transition-colors"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true"><path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3c-.2.36-.42.83-.58 1.22a18.27 18.27 0 0 0-5.96 0C9.86 3.83 9.63 3.36 9.43 3a19.74 19.74 0 0 0-3.77 1.37C2.02 9.79 1.02 15.06 1.52 20.25a19.9 19.9 0 0 0 6.03 3.05c.48-.66.91-1.36 1.28-2.1-.7-.26-1.37-.58-2-.96.17-.12.33-.25.49-.38 3.87 1.79 8.06 1.79 11.88 0 .16.13.32.26.49.38-.63.38-1.31.7-2 .96.37.74.8 1.44 1.28 2.1a19.86 19.86 0 0 0 6.03-3.05c.58-6.03-1-11.25-4.68-15.88ZM8.68 15.33c-1.18 0-2.15-1.09-2.15-2.42s.95-2.42 2.15-2.42c1.2 0 2.17 1.09 2.15 2.42 0 1.33-.95 2.42-2.15 2.42Zm6.64 0c-1.18 0-2.15-1.09-2.15-2.42s.95-2.42 2.15-2.42c1.2 0 2.17 1.09 2.15 2.42 0 1.33-.95 2.42-2.15 2.42Z"/></svg>
            Join our Discord
          </a>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}
