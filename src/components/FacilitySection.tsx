import { motion } from "framer-motion";
import facilityReception from "@/assets/facility-reception.jpg";
import facilityExam from "@/assets/facility-exam.jpg";
import facilityKids from "@/assets/facility-kids.jpg";

const images = [
  { src: facilityReception, alt: "Recepção moderna da clínica", label: "Recepção" },
  { src: facilityExam, alt: "Sala de exames com tecnologia avançada", label: "Sala de Exames" },
  { src: facilityKids, alt: "Espaço kids na sala de espera", label: "Espaço Kids" },
];

const FacilitySection = () => (
  <section id="estrutura" className="bg-background py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Um Ambiente Pensado para o Seu Conforto
        </h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:row-span-2 overflow-hidden rounded-xl"
        >
          <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover" loading="lazy" width="600" height="800" />
        </motion.div>
        {images.slice(1).map((img, i) => (
          <motion.div
            key={img.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
            className="md:col-span-2 overflow-hidden rounded-xl"
          >
            <img src={img.src} alt={img.alt} className="w-full h-64 md:h-full object-cover" loading="lazy" width="800" height="400" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitySection;
