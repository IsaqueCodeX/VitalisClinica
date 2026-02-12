import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import doctorRicardo from "@/assets/doctor-ricardo.jpg";
import doctorAna from "@/assets/doctor-ana.jpg";
import doctorJuliana from "@/assets/doctor-juliana.jpg";

const doctors = [
  { name: "Dr. Ricardo Mendes", specialty: "Cardiologista", crm: "CRM/SP 123.456", image: doctorRicardo },
  { name: "Dra. Ana Paula Souza", specialty: "Pediatra", crm: "CRM/SP 234.567", image: doctorAna },
  { name: "Dra. Juliana Lima", specialty: "Dermatologista", crm: "CRM/SP 345.678", image: doctorJuliana },
];

const TeamSection = () => (
  <section id="equipe" className="bg-background py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Especialistas Dedicados a Você
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Nossa equipe é formada por profissionais altamente qualificados e comprometidos com a sua saúde.
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        {doctors.map((doc, i) => (
          <motion.div
            key={doc.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="overflow-hidden">
                <img
                  src={doc.image}
                  alt={`Foto de ${doc.name}`}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="400"
                />
              </div>
              <CardContent className="text-center p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">{doc.name}</h3>
                <p className="text-primary font-medium mt-1">{doc.specialty}</p>
                <p className="text-xs text-muted-foreground mt-1">{doc.crm}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
