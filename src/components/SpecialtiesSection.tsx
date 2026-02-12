import { motion } from "framer-motion";
import { Heart, Activity, Baby, Eye, Brain, Syringe, Stethoscope, Bone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const specialties = [
  { icon: Heart, name: "Cardiologia", desc: "Check-up completo e acompanhamento do coração." },
  { icon: Activity, name: "Clínica Geral", desc: "Diagnóstico rápido e orientação preventiva." },
  { icon: Baby, name: "Pediatria", desc: "Cuidado especial para o desenvolvimento dos pequenos." },
  { icon: Eye, name: "Oftalmologia", desc: "Exames de visão e saúde ocular avançada." },
  { icon: Brain, name: "Neurologia", desc: "Tratamento de dores e sistema nervoso." },
  { icon: Syringe, name: "Laboratório", desc: "Coleta de exames no local para sua comodidade." },
  { icon: Stethoscope, name: "Dermatologia", desc: "Cuidados com a pele, cabelos e unhas." },
  { icon: Bone, name: "Ortopedia", desc: "Tratamento de ossos, articulações e músculos." },
];

const SpecialtiesSection = () => (
  <section id="especialidades" className="bg-muted py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Nossas Especialidades
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Atendimento completo com profissionais especializados em diversas áreas da saúde.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {specialties.map((spec, i) => (
          <motion.div
            key={spec.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Card className="group h-full border-0 bg-background shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="flex flex-col items-center text-center p-8 gap-4">
                <div className="rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors">
                  <spec.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{spec.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{spec.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialtiesSection;
