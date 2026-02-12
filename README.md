# Vitalis Clínica Integrada

![Project Preview](./public/preview.png)

![Status](https://img.shields.io/badge/STATUS-CONCLUÍDO-brightgreen?style=for-the-badge) ![Vercel](https://img.shields.io/badge/VERCEL-DEPLOY-black?style=for-the-badge&logo=vercel&logoColor=white)

## Sobre o Projeto

Vitalis Clínica Integrada é uma landing page institucional moderna desenvolvida para clínicas médicas que buscam fortalecer sua presença digital e aumentar a conversão de visitantes em pacientes. O projeto oferece uma experiência premium através de design estratégico focado em confiança, acessibilidade e performance excepcional.

**Arquitetura limpa focada em:**
- **SEO Técnico:** Meta tags completas, semântica HTML5 e structured data ready
- **Acessibilidade (a11y):** WCAG 2.1 AA com ARIA labels e navegação por teclado
- **Performance:** Core Web Vitals otimizados (CLS eliminado, lazy loading, code splitting)
- **Mobile-First:** Design responsivo com breakpoints estratégicos

## Tech Stack

![React](https://img.shields.io/badge/React-18.3.1-%2361DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-%233178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-5.4.19-%23646CFF?style=for-the-badge&logo=vite&logoColor=white)

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-%2306B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.34.0-%23FF0055?style=for-the-badge&logo=framer&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-6.30.1-%23CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-%231572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Funcionalidades Chave

- **Design Responsivo Mobile-First:** Interface adaptativa com breakpoints otimizados para todos os dispositivos
- **Animações Fluidas e Performáticas:** Implementadas com Framer Motion usando `useCallback` para evitar re-renders desnecessários
- **Formulário de Agendamento Integrado ao WhatsApp:** Conversão direta com pré-preenchimento de dados via WhatsApp Business API
- **Componentes Reutilizáveis:** Arquitetura modular com shadcn/ui e Radix UI para consistência e manutenibilidade
- **SEO Otimizado:** Meta tags dinâmicas, Open Graph completo e sitemap ready
- **Acessibilidade WCAG 2.1 AA:** Navegação por teclado, ARIA labels e contraste de cores validado
- **Performance de Primeira Classe:** Lighthouse Score 90+ com lazy loading de imagens e code splitting
- **State Management Eficiente:** React Context API com TanStack Query para cache inteligente
- **Tipagem Estrita:** TypeScript com zero uso de `any` para máxima segurança de tipos

## Instalação e Execução Local

### Pré-requisitos

- Node.js 18.x ou superior
- npm ou yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/IsaqueCodeX/vitalis-care-hub.git

# Entre no diretório
cd vitalis-care-hub

# Instale as dependências
npm install

# Configure as variáveis de ambiente (opcional)
cp .env.example .env
# Edite .env e configure VITE_WHATSAPP_NUMBER se necessário

# Execute em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

A aplicação estará disponível em `http://localhost:5173`

## Estrutura do Projeto

```
vitalisClinica/
├── src/
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── ui/            # Componentes base (shadcn/ui)
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── ...
│   ├── pages/             # Páginas da aplicação
│   ├── lib/               # Utilitários e helpers
│   ├── hooks/             # Custom hooks
│   └── assets/            # Imagens e recursos estáticos
├── public/                # Arquivos públicos (favicon, etc)
└── index.html             # Entry point
```

## Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build otimizado para produção
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa linter ESLint
- `npm run test` - Executa testes com Vitest

## Deploy

O projeto está configurado para deploy automático em plataformas modernas:

### Vercel (Recomendado)
```bash
vercel --prod
```

### Netlify
```bash
netlify deploy --prod
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Autor

**Desenvolvedor:** Isaque Santos (IsaqueCodeX)

| Contato | Link |
|---------|------|
| Portfolio | [isaquesantosdev.com](https://isaquesantosdev.com/) |
| LinkedIn | [linkedin.com/in/isaque-santos-720b8b15a](https://www.linkedin.com/in/isaque-santos-720b8b15a) |
| GitHub | [@IsaqueCodeX](https://github.com/IsaqueCodeX) |

---

**Desenvolvido com TypeScript, React e atenção aos detalhes para entregar a melhor experiência ao usuário final.**
