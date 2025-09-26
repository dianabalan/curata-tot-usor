import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { CTASection } from "@/components/CTASection";

const DrainCleanerLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CTASection />
      
      {/* Trust signals footer */}
      <footer className="py-8 px-4 bg-muted/30 border-t">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div className="flex items-center justify-center">
              <span className="text-2xl mr-2">🚚</span>
              <span>Livrare în 1-3 zile lucrătoare</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-2xl mr-2">🔒</span>
              <span>Plată securizată</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-2xl mr-2">📞</span>
              <span>Suport telefonic</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              © 2025 Solvo - Soluția ta pentru țevi curate. Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DrainCleanerLanding;