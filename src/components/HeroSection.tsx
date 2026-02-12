import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-doctor.jpg";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-background">
      <div className="container py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Cuidado que Inspira Confiança.{" "}
              <span className="text-primary">Saúde para Toda a Família.</span>
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground leading-relaxed">
              Uma abordagem integrada para o seu bem-estar. Consultas, exames e tratamentos com tecnologia de ponta e atendimento humanizado.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="rounded-full px-8" onClick={() => scrollTo("#contato")}>
                Marcar Consulta Online
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary/5" onClick={() => scrollTo("#especialidades")}>
                Ver Convênios Aceitos
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
              <img
                src={heroImage}
                alt="Médica sorrindo para paciente em consultório moderno"
                className="w-full h-auto object-cover aspect-video"
                loading="eager"
                width="1200"
                height="675"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-secondary/20 blur-2xl" />
            <div className="absolute -top-4 -right-4 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
