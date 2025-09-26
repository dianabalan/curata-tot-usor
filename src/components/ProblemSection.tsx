export const ProblemSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
          TE CONFRUNȚI CU ACESTE PROBLEME?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card border border-destructive/20 rounded-xl p-8 shadow-lg">
            <div className="text-6xl mb-4">😤</div>
            <h3 className="text-2xl font-bold text-destructive mb-4">Țevi înfundate constant</h3>
            <p className="text-lg text-muted-foreground">
              Apa se scurge greu, mirosuri neplăcute, iar metodele clasice nu mai funcționează...
            </p>
          </div>
          
          <div className="bg-card border border-destructive/20 rounded-xl p-8 shadow-lg">
            <div className="text-6xl mb-4">💸</div>
            <h3 className="text-2xl font-bold text-destructive mb-4">Costuri mari cu instalatorul</h3>
            <p className="text-lg text-muted-foreground">
              De fiecare dată când se înfundă, plătești sute de lei pentru o intervenție...
            </p>
          </div>
          
          <div className="bg-card border border-destructive/20 rounded-xl p-8 shadow-lg">
            <div className="text-6xl mb-4">🤢</div>
            <h3 className="text-2xl font-bold text-destructive mb-4">Produse chimice periculoase</h3>
            <p className="text-lg text-muted-foreground">
              Îți distruge țevile și pune în pericol sănătatea familiei tale...
            </p>
          </div>
          
          <div className="bg-card border border-destructive/20 rounded-xl p-8 shadow-lg">
            <div className="text-6xl mb-4">⏰</div>
            <h3 className="text-2xl font-bold text-destructive mb-4">Pierdere de timp</h3>
            <p className="text-lg text-muted-foreground">
              Ore întregi încercând să rezolvi problema fără rezultate...
            </p>
          </div>
        </div>
        
        <div className="bg-destructive/10 border-l-4 border-destructive rounded-lg p-6">
          <h3 className="text-2xl font-bold text-destructive mb-2">STOP! Există o soluție mai bună!</h3>
          <p className="text-lg text-foreground">
            Nu mai pierde timp și bani cu metode învechite. Descoperă soluția care a schimbat viețile a mii de români!
          </p>
        </div>
      </div>
    </section>
  );
};