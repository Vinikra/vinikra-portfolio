# Constituição do Projeto: Portfólio Vinikra

## 1. Identidade e Regras de Ouro
- **O que é:** Site portfólio "Amostra de Poder" para captar clientes B2B (empresários locais).
- **Domínio:** `vinikra.com`
- **Regra de Ouro:** NENHUM código genérico. O site deve seguir os padrões de "Taste Design" (Premium, animações físicas de mola, tipografia estruturada). O portfólio não é apenas onde o trabalho vive, o portfólio É o trabalho.

## 2. Arquitetura (Camadas)
- **Frontend:** Next.js 14 (App Router), React, Tailwind CSS, Framer Motion.
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

## 4. Invariantes Visuais (Taste Design)
- **Cores:** Fundo principal `#09090B` (Charcoal Ink), Superfície `#18181B`. Acento `#FAFAFA` (Off-White). NUNCA usar preto puro `#000000`. Sem botões neon.
- **Tipografia:** `Geist` (Sans) para o corpo e navegação. `Instrument Serif` (ou similar) em itálico para contraste de luxo. Proibido usar Inter.
- **Layout:** Sem grid simétrica de 3 colunas padrão. Sem textos centralizados no Hero. Usar imagens inline nas fontes.
- **Física:** `stiffness: 100, damping: 20` para todas as molas.

## 5. Log de Manutenção
| Data | Evento | Estado |
|---|---|---|
| 02/07/2026 | Inicialização do projeto VLAEG | ✅ |
