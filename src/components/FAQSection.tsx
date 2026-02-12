import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quais convênios a clínica aceita?",
    answer:
      "Aceitamos os principais convênios do mercado, incluindo Unimed, Bradesco Saúde, SulAmérica, Amil, Porto Seguro e outros. Entre em contato para confirmar o seu plano.",
  },
  {
    question: "Preciso agendar consulta ou posso ir sem hora marcada?",
    answer:
      "Recomendamos o agendamento prévio para garantir seu horário. Você pode agendar pelo WhatsApp, telefone ou pelo formulário do site.",
  },
  {
    question: "A clínica realiza exames no local?",
    answer:
      "Sim! Contamos com laboratório próprio para coleta de sangue, exames de imagem e outros procedimentos, tudo no mesmo endereço para sua comodidade.",
  },
  {
    question: "Qual o horário de funcionamento?",
    answer:
      "Funcionamos de segunda a sexta das 7h às 20h e aos sábados das 8h às 14h. Domingos e feriados estamos fechados.",
  },
  {
    question: "A clínica atende crianças?",
    answer:
      "Sim, temos pediatras especializados e um espaço kids na recepção para que as crianças se sintam confortáveis durante a visita.",
  },
  {
    question: "Como funciona o agendamento pelo WhatsApp?",
    answer:
      "Basta clicar no botão 'Solicitar Horário' no formulário de contato. Você será redirecionado para o WhatsApp com uma mensagem pré-preenchida com seus dados.",
  },
];

const FAQSection = () => (
  <section id="faq" className="bg-muted py-20">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Perguntas Frequentes
        </h2>
        <p className="mt-3 text-muted-foreground">
          Tire suas dúvidas sobre nossos serviços e atendimento.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
