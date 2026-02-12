import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { MapPin, Phone, Clock, CalendarIcon, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "5511999999999";

const ContactSection = () => {
  const [specialty, setSpecialty] = useState("");
  const [date, setDate] = useState<Date>();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const dateStr = date ? format(date, "dd/MM/yyyy") : "a definir";
    const message = `Olá! Gostaria de agendar uma consulta.\n\n*Nome:* ${name}\n*Telefone:* ${phone}\n*Especialidade:* ${specialty}\n*Data preferida:* ${dateStr}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }, [name, phone, specialty, date]);

  return (
    <section id="contato" className="bg-background py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Agende sua visita hoje mesmo
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-heading font-bold text-foreground">Endereço</h3>
                <p className="text-muted-foreground">Av. Paulista, 1234 — Bela Vista, São Paulo — SP</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-heading font-bold text-foreground">Telefone</h3>
                <p className="text-muted-foreground">(11) 3456-7890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageCircle className="h-6 w-6 text-secondary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-heading font-bold text-foreground">WhatsApp</h3>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary font-semibold hover:underline"
                >
                  (11) 99999-9999
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-heading font-bold text-foreground">Horário</h3>
                <p className="text-muted-foreground">Seg a Sex: 7h — 20h</p>
                <p className="text-muted-foreground">Sáb: 8h — 14h</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <Select value={specialty} onValueChange={setSpecialty}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a especialidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cardiologia">Cardiologia</SelectItem>
                <SelectItem value="clinica-geral">Clínica Geral</SelectItem>
                <SelectItem value="pediatria">Pediatria</SelectItem>
                <SelectItem value="oftalmologia">Oftalmologia</SelectItem>
                <SelectItem value="neurologia">Neurologia</SelectItem>
                <SelectItem value="dermatologia">Dermatologia</SelectItem>
                <SelectItem value="ortopedia">Ortopedia</SelectItem>
                <SelectItem value="laboratorio">Laboratório</SelectItem>
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP", { locale: ptBR }) : "Selecione uma data"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>

            <Input placeholder="Seu nome completo" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input placeholder="Seu telefone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

            <Button
              type="submit"
              size="lg"
              className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar Horário
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
