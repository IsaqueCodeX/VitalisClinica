import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Oliveira",
    text: "Atendimento rápido e eficiente! Os médicos são extremamente atenciosos e a clínica é muito confortável.",
    stars: 5,
  },
  {
    name: "João Santos",
    text: "Fiz meus exames de rotina e recebi os resultados no mesmo dia. Equipe muito profissional e acolhedora.",
    stars: 5,
  },
  {
    name: "Carla Ferreira",
    text: "Levei meu filho na pediatra e fiquei encantada com o cuidado. O espaço kids é maravilhoso!",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section className="bg-muted py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          O que Nossos Pacientes Dizem
        </h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="h-full border-0 bg-background shadow-sm">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex gap-1" aria-label={`${t.stars} de 5 estrelas`}>
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                <p className="font-heading font-bold text-foreground mt-auto">— {t.name}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
