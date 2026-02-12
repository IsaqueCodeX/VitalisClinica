import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Corpo Clínico", href: "#equipe" },
  { label: "Exames", href: "#estrutura" },
  { label: "Contato", href: "#contato" },
];

const Logo = () => (
  <a href="#inicio" className="flex items-center gap-2">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 32C18 32 4 22 4 13C4 8 8 4 13 4C15.5 4 17.5 5.5 18 6.5C18.5 5.5 20.5 4 23 4C28 4 32 8 32 13C32 22 18 32 18 32Z" fill="hsl(199, 89%, 48%)" opacity="0.9" />
      <path d="M18 28C14 20 18 14 18 10C18 14 22 20 18 28Z" fill="hsl(160, 59%, 45%)" opacity="0.8" />
      <path d="M14 22C12 18 14 14 16 12" stroke="hsl(160, 59%, 45%)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M22 22C24 18 22 14 20 12" stroke="hsl(160, 59%, 45%)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
    <span className="font-heading text-xl font-bold tracking-tight text-foreground">
      VITALIS
    </span>
  </a>
);

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = useCallback((href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            className="hidden md:inline-flex rounded-full px-6"
            onClick={() => scrollTo("#contato")}
          >
            Agendar Consulta
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Abrir menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
              <div className="flex flex-col gap-6 pt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                <Button className="rounded-full mt-4" onClick={() => scrollTo("#contato")}>
                  Agendar Consulta
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
