import { Button } from "@/components/ui/button";
import productImage from "@/assets/drain-cleaner-product.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              SCAPĂ DE ȚEVILE ÎNFUNDATE 
              <span className="text-accent"> PENTRU TOTDEAUNA!</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Formula revoluționară care dizolvă totul: păr, săpun, murdărie și bacterii - 
              <strong className="text-accent"> fără chimicale periculoase!</strong>
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start text-primary-foreground">
                <span className="text-lg">✅ Sigur pentru toate tipurile de țevi</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-primary-foreground">
                <span className="text-lg">✅ Necorosiv și ecologic</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-primary-foreground">
                <span className="text-lg">✅ Rezultate garantate în câteva minute</span>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-12 py-6 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Comandă acum
              </Button>
              <div className="mt-4 text-primary-foreground/80 text-sm flex items-center justify-center lg:justify-start">
                <span className="mr-2">👆</span>
                <span>Apăsați aici pentru a afla prețul</span>
                <span className="ml-2">👆</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={productImage} 
                alt="Produs revolucionar pentru desfundarea țevilor" 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold text-lg rotate-12 shadow-lg">
                NOU!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};