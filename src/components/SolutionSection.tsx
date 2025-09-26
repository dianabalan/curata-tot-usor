import beforeAfterImage from "@/assets/before-after-drain.jpg";

export const SolutionSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-secondary/10 to-primary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            SOLUȚIA REVOLUȚIONARĂ ESTE AICI!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Formula unică care dizolvă totul în doar 15 minute - fără să dăuneze țevilor sau mediului!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={beforeAfterImage} 
              alt="Înainte și după folosirea produsului - rezultate uimitoare" 
              className="w-full rounded-xl shadow-2xl"
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
              *Rezultate reale după doar 15 minute de aplicare
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-success/10 border border-success/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-success mb-4 flex items-center">
                <span className="text-3xl mr-3">🧪</span>
                Formulă Revoluționară
              </h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-success mr-2">✅</span>
                  <span><strong>Dizolvă părul</strong> în molecule microscopice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">✅</span>
                  <span><strong>Lichifiază grăsimea</strong> și reziduurile de săpun</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">✅</span>
                  <span><strong>Elimină bacteriile</strong> și mirosurile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">✅</span>
                  <span><strong>Distruge insectele</strong> din canalizare</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-trust/10 border border-trust/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-trust mb-4 flex items-center">
                <span className="text-3xl mr-3">🛡️</span>
                100% Sigur
              </h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-trust mr-2">✅</span>
                  <span><strong>Non-flamabil</strong> - sigur în casă</span>
                </li>
                <li className="flex items-start">
                  <span className="text-trust mr-2">✅</span>
                  <span><strong>Non-cauztic</strong> - nu arde pielea</span>
                </li>
                <li className="flex items-start">
                  <span className="text-trust mr-2">✅</span>
                  <span><strong>Non-coroziv</strong> - protejează țevile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-trust mr-2">✅</span>
                  <span><strong>Ecologic</strong> - nu poluează</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">COMPATIBIL CU TOATE TIPURILE DE INSTALAȚII!</h3>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-4xl mb-2">🚿</div>
              <p className="font-semibold">Căzi de baie</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🚽</div>
              <p className="font-semibold">Toalete</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔧</div>
              <p className="font-semibold">Țevi PVC & Oțel</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💧</div>
              <p className="font-semibold">Scurgeri podea</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};