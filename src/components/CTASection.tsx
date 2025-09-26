import { PaperformButton } from "./PaperformButton";

export const CTASection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-accent/20 to-warning/20">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-accent/30">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            OFERTĂ LIMITATĂ - ACȚIONEAZĂ ACUM!
          </h2>
          
          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 mb-8">
            <p className="text-xl text-destructive font-bold mb-2">⚠️ ATENȚIE: Stoc limitat!</p>
            <p className="text-lg text-foreground">
              Din cauza cererii mari, ne-au mai rămas doar <strong>47 de bucăți</strong> la prețul promoțional!
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-center items-center mb-4">
              <span className="text-2xl text-muted-foreground line-through mr-4">159 LEI</span>
              <span className="text-5xl font-bold text-accent">89 LEI</span>
            </div>
            <p className="text-xl text-success font-semibold">Economisești 70 LEI!</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center text-lg">
              <span className="text-success mr-3">✅</span>
              <span><strong>Livrare GRATUITĂ</strong> în toată România</span>
            </div>
            <div className="flex items-center justify-center text-lg">
              <span className="text-success mr-3">✅</span>
              <span><strong>Plata la livrare</strong> - nu riști nimic!</span>
            </div>
            <div className="flex items-center justify-center text-lg">
              <span className="text-success mr-3">✅</span>
              <span><strong>Garanție 30 zile</strong> înapoi dacă nu ești mulțumit</span>
            </div>
          </div>

          <PaperformButton 
            formId="YOUR_PAPERFORM_ID_HERE"
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-2xl px-16 py-8 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse"
            modalTitle="Finalizează comanda - 89 LEI"
            usePopup={false}
          >
            COMANDĂ ACUM - 89 LEI
          </PaperformButton>

          <div className="mt-6 text-sm text-muted-foreground">
            <p>📞 Sau sună la: <strong className="text-primary">0721 123 456</strong></p>
            <p className="mt-2">🕒 Disponibil L-V: 9:00-18:00 | S-D: 10:00-16:00</p>
          </div>

          <div className="mt-8 bg-warning/10 border border-warning/30 rounded-lg p-4">
            <p className="text-sm text-warning font-bold">
              ⏰ Această ofertă expiră în 24 de ore!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};