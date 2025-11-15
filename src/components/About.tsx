import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section id="chisiamo" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            CHI SIAMO
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto">
            <span className="text-primary font-bold">AST®</span> è molto più di un semplice allenamento.
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            È una filosofia che unisce scienza, passione e dedizione per trasformare il tuo corpo e la tua mente attraverso allenamenti mirati e personalizzati.
          </p>
        </div>

        {/* Image */}
        <div className="max-w-5xl mx-auto fade-in">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={aboutImage} 
              alt="Our team and community" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 fade-in">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">Atleti Allenati</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Anni di Esperienza</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Tasso di Successo</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Trainer Certificati</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
