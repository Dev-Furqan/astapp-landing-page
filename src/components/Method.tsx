import { Button } from "@/components/ui/button";
import methodImage from "@/assets/method-image.jpg";

const Method = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in lg:order-1">
            <div className="mb-8">
              <div className="inline-block border-l-4 border-primary pl-4 mb-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Il metodo <span className="text-primary">AST®</span>
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">
                <span className="text-primary font-bold">AST®</span> è molto più di un semplice allenamento, è un metodo scientifico che combina:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold mb-1">Analisi Biomeccanica Avanzata</h4>
                    <p className="text-muted-foreground">Studio approfondito dei movimenti per ottimizzare ogni esercizio.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold mb-1">Periodizzazione Scientifica</h4>
                    <p className="text-muted-foreground">Programmazione degli allenamenti basata su evidenze scientifiche.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold mb-1">Recupero Attivo</h4>
                    <p className="text-muted-foreground">Strategie innovative per massimizzare il recupero e la crescita muscolare.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-bold mb-1">Monitoraggio Costante</h4>
                    <p className="text-muted-foreground">Tracciamento dei progressi per garantire risultati misurabili nel tempo.</p>
                  </div>
                </li>
              </ul>

              <Button variant="hero" size="lg">
                SCOPRI IL METODO
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative fade-in lg:order-2">
            <div className="relative overflow-hidden rounded-lg border-4 border-primary">
              <img 
                src={methodImage} 
                alt="The AST method" 
                className="w-full h-full object-cover hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
