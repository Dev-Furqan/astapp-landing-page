import { Button } from "@/components/ui/button";
import benefitsImage from "@/assets/benefits-image.jpg";

const Benefits = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative fade-in">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={benefitsImage} 
                alt="Train better, Grow stronger, Transform yourself with AST" 
                className="w-full h-full object-cover hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cosa ottieni con <span className="text-primary">AST®</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">Train better. Grow stronger. Transform yourself with AST®.</h3>
                <p className="text-muted-foreground">
                  Allenamenti scientificamente progettati per massimizzare i tuoi risultati e superare i tuoi limiti.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">Programmi Personalizzati</h3>
                <p className="text-muted-foreground">
                  Ogni allenamento è calibrato sulle tue esigenze specifiche, obiettivi e livello di fitness.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">Supporto Continuo</h3>
                <p className="text-muted-foreground">
                  Coaching professionale e monitoraggio costante dei tuoi progressi per garantire risultati ottimali.
                </p>
              </div>
            </div>

            <Button variant="hero" size="lg">
              INIZIA ORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
