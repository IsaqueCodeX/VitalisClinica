import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-background">
    <div className="container py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="font-heading text-lg font-bold mb-3">VITALIS CLÍNICA INTEGRADA</h3>
          <p className="text-sm text-background/70 leading-relaxed">
            Cuidado humanizado com tecnologia de ponta para toda a sua família.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-3">Links Rápidos</h4>
          <nav className="flex flex-col gap-2 text-sm text-background/70">
            <a href="#inicio" className="hover:text-background transition-colors">Início</a>
            <a href="#especialidades" className="hover:text-background transition-colors">Especialidades</a>
            <a href="#equipe" className="hover:text-background transition-colors">Corpo Clínico</a>
            <a href="#contato" className="hover:text-background transition-colors">Contato</a>
          </nav>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-3">Contato</h4>
          <div className="text-sm text-background/70 flex flex-col gap-1">
            <p>Av. Paulista, 1234 — São Paulo/SP</p>
            <p>(11) 3456-7890</p>
            <p>contato@vitalisclinica.com.br</p>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-background/50">
        <p>© {new Date().getFullYear()} Vitalis Clínica Integrada. Todos os direitos reservados.</p>
        <p className="flex items-center gap-1">
          Feito com <Heart className="h-3 w-3 fill-primary text-primary" /> para cuidar de você
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
