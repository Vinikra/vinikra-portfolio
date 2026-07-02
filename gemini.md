# Constituição do Projeto: Portfólio Vinikra

## 1. Identidade e Regras de Ouro
- **O que é:** Site portfólio "Amostra de Poder" para captar clientes B2B (empresários locais).
- **Domínio:** `vinikra.com`
- **Regra de Ouro:** NENHUM código genérico. O site deve seguir os padrões de "Taste Design" (Premium, animações físicas de mola, tipografia estruturada). O portfólio não é apenas onde o trabalho vive, o portfólio É o trabalho.

## 2. Arquitetura (Camadas)
- **Frontend:** Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion.
- **Backend / Integrações:** Next.js API Routes (`/api/contact`) + Resend.
- **Fonte da Verdade:** Dados de projetos (`lib/data.ts`) estáticos. Como o desenvolvedor é o único dono, um CMS seria overengineering.

## 3. Data Schema (Payloads)
**A. Schema do Contato (Resend)**
```json
{
  "name": "Nome do Empresário",
  "email": "email@empresa.com",
  "phone": "66999999999",
  "message": "Tenho interesse num site premium para minha clínica"
}
```

## 4. Invariantes Visuais (FORGE Design)
- **Cores (tokens no `@theme` de `globals.css` — única fonte de verdade):** Fundo `#121414` (background/surface), Containers `#1e2020` (surface-container). Acento `#c3f400` (primary-container) com texto `#161e00` (on-primary-fixed) sobre ele. Texto principal `#e2e2e2` (foreground), secundário `#c4c9ac` (on-surface-variant). NUNCA usar preto puro `#000000`. NUNCA hardcodar hex nos componentes — sempre via token.
- **Tipografia:** `Inter` (Sans) para corpo e navegação. `Montserrat` (apenas pesos 700 e 900, sem itálico) para display/títulos. Labels e navegação em caixa alta com `tracking-widest`.
- **Layout:** Hero assimétrico em grid de 12 colunas (8+4). Seções numeradas (01/02/03). Texto gigante de fundo como marca d'água decorativa (sempre `aria-hidden`). Sem textos centralizados no Hero.
- **Ícones:** Sempre `lucide-react` — nunca SVG inline manual.
- **Física:** `stiffness: 100, damping: 20` para todas as molas. `prefers-reduced-motion` respeitado via `<MotionProvider>`.
- **Idioma e voz:** Toda a copy em português brasileiro, primeira pessoa do singular ("Transformo", "Respondo"). Inglês só em nomes próprios (Google Lighthouse). O CTA se chama "Solicitar orçamento" do header ao botão final.
- **Honestidade:** Números públicos são compromissos de entrega ou métricas verificáveis — nunca histórico inventado. Dados reais entram em `lib/data.ts` conforme surgirem.

## 5. Log de Manutenção
| Data | Evento | Estado |
|---|---|---|
| 02/07/2026 | Inicialização do projeto VLAEG | ✅ |
| 02/07/2026 | Rebrand FORGE (Stitch design): novas cores, Inter/Montserrat, layout assimétrico | ✅ |
| 02/07/2026 | Varredura de consistência: tokens @theme corrigidos, nav mobile restaurada, dados em `lib/data.ts`, constituição atualizada | ✅ |
| 02/07/2026 | Revisão de frontend/copy: copy 100% PT, stats como compromissos, seções Processo e Footer, metadata/OG, reduced-motion, WhatsApp/LinkedIn configuráveis em `lib/data.ts` | ✅ |
