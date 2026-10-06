# Clínica Maria Nutri — Landing Page Oficial

> Landing page institucional de alta conversão e otimização avançada para motores de busca (SEO local) da **Clínica Maria Nutri**, liderada pela nutricionista **Dra. Mariana Saldanha** em Natal - RN.

---

## 📌 Visão Geral

O projeto consiste em uma aplicação web moderna no formato *One-Page*, desenvolvida para proporcionar uma experiência acolhedora, sofisticada e intuitiva aos pacientes. A página foi desenhada com foco em **emagrecimento feminino sem restrições extremas**, **reeducação alimentar** e **avaliação precisa da composição corporal com bioimpedância InBody**.

A arquitetura prioriza performance rápida de carregamento, responsividade total para todos os tamanhos de tela e integração direta de conversão via WhatsApp.

---

## 🚀 Tecnologias Utilizadas

- **[React 19](https://react.dev/)**: Biblioteca componentizada para interface de usuário reativa e fluida.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática rigorosa para maior previsibilidade e segurança de código.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build ultrarrápida com Hot Module Replacement.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework utilitário moderno para estilização elegante, responsiva e performática.
- **[Lucide React](https://lucide.dev/)**: Conjunto refinado de ícones vetoriais leves e consistentes.
- **[Schema.org & JSON-LD](https://schema.org/)**: Marcação semântica estruturada para SEO e Rich Snippets no Google.

---

## ✨ Funcionalidades e Seções

1. **Barra de Utilidades Superior**: Acesso direto ao telefone fixo, horário de funcionamento e endereço clínico no Tirol.
2. **Cabeçalho com Navegação Rápida**: Logotipo oficial vetorizado e botão CTA direto para atendimento via WhatsApp.
3. **Seção Hero de Alto Impacto**: Headline persuasiva focada na dor e desejo do público-alvo, provas de autoridade e badges de confiança (+500 pacientes, nota 5.0 no Google, método sem restrições extremas).
4. **Sobre a Especialista**: Apresentação humanizada da Dra. Mariana Saldanha, destacando sua metodologia que valoriza a culinária regional (cuscuz, tapioca) aliada à ciência nutricional.
5. **Serviços Clínicos Estruturados**:
   - *Consulta de Emagrecimento Feminino* (rastreio metabólico e plano alimentar individualizado);
   - *Programa Emagrecimento Real* (acompanhamento contínuo de 8 semanas com bioimpedância e suporte comportamental);
   - *Exame de Bioimpedância InBody* (avaliação de massa muscular, gordura visceral, água corporal e taxa metabólica basal).
6. **Metodologia em Etapas**: Carrossel com transição automática demonstrando o passo a passo da jornada do paciente.
7. **Casos de Sucesso & Prova Social**: Depoimentos reais de pacientes e avaliação Google 5.0 estrelas com 62 avaliações.
8. **Perguntas Frequentes (FAQ)**: Accordion interativo esclarecendo as 10 principais dúvidas (preço, carboidratos, alimentos regionais, convênios/pagamento, localização e horários).
9. **Localização & Mapa Interativo**: Iframe integrado do Google Maps para o **Edifício Tirol Corporate**, com informações detalhadas de endereço, estacionamento e acessibilidade.
10. **Rodapé Completo**: Links essenciais, dados de contato, redes sociais oficiais e aviso regulatório profissional.

---

## 🎯 Estratégia de SEO & Dados Estruturados (JSON-LD)

O projeto conta com uma infraestrutura completa de SEO técnico e semântico:

- **Meta Tags Otimizadas**: `<title>` otimizado com palavra-chave e cidade (`< 60` caracteres) e `<meta name="description">` persuasiva (`< 155` caracteres).
- **Cartões Sociais**: Configuração completa de Open Graph (`og:*`) e Twitter Cards (`summary_large_image`).
- **Hierarquia Tipográfica Perfeita**: H1 único na página seguido de níveis semânticos contínuos (H2 e H3) sem saltos.
- **Favicons Multiplataforma**: Ícones SVG, PNG (16x16, 32x32, 180x180 para Apple Touch) e ICO na raiz e em `/assets/img/`.
- **Arquivos Canônicos**: `robots.txt` e `sitemap.xml` configurados para o domínio de produção `https://marianutri.site/`.
- **6 Blocos Separados de JSON-LD**:
  1. `Organization`: Dados institucionais, logotipo e redes sociais oficiais (Instagram, Facebook).
  2. `MedicalBusiness / LocalBusiness`: Informações locais completas, endereço no Tirol, geolocalização (`-5.7905, -35.2017`), horário de funcionamento, link do Google Maps e áreas atendidas (Tirol, Petrópolis, Lagoa Nova, Capim Macio).
  3. `WebSite`: Identificação do site canônico associado à organização.
  4. `FAQPage`: Todas as 10 perguntas e respostas estruturadas para exibição em destaque nos resultados do Google.
  5. `Service`: Detalhamento dos 3 serviços clínicos prestados vinculados à entidade médica via `@id`.
  6. `BreadcrumbList`: Navegação de nível único otimizada para One-Page.

---

## 📁 Estrutura de Arquivos

```text
├── public/                       # Arquivos estáticos servidos na raiz
│   ├── assets/img/               # Imagens otimizadas (WebP, SVG, PNG)
│   ├── favicon-16x16.png         # Favicon 16x16
│   ├── favicon-32x32.png         # Favicon 32x32
│   ├── favicon.svg               # Favicon vetorizado com a logo oficial
│   ├── apple-touch-icon.png      # Ícone para iOS (180x180)
│   ├── robots.txt                # Diretivas para robôs de busca
│   └── sitemap.xml               # Mapa do site indexável
├── src/                          # Código-fonte da aplicação React
│   ├── App.tsx                   # Componente principal da Landing Page
│   ├── main.tsx                  # Ponto de entrada do React
│   └── index.css                 # Estilos globais e fontes
├── site/                         # Versão estática de distribuição (HTML/CSS)
│   ├── index.html                # Página estática sincronizada com SEO e JSON-LD
│   ├── robots.txt                # Cópia para deploy estático
│   ├── sitemap.xml               # Mapa do site para deploy estático
│   └── assets/                   # Assets compilados e estilos estáticos
├── index.html                    # Entry point HTML com metadados, favicons e schemas
├── package.json                  # Scripts e dependências do projeto
├── tsconfig.json                 # Configuração do TypeScript
├── vite.config.ts                # Configuração do empacotador Vite
└── README.md                     # Documentação oficial do repositório
```

---

## 🛠️ Como Executar Localmente

### Pré-requisitos

- **Node.js** (versão 18 ou superior recomendada)
- Gerenciador de pacotes **npm**

### Passo a Passo

1. **Clone ou acesse o diretório do projeto**:
   ```bash
   cd /caminho/do/projeto
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse a aplicação no navegador em: `http://localhost:3000`

4. **Executar a checagem de tipos e lint**:
   ```bash
   npm run lint
   ```

5. **Gerar a versão de produção (Build)**:
   ```bash
   npm run build
   ```
   Os arquivos compilados e otimizados serão gerados na pasta `dist/`.

---

## 🎨 Identidade Visual e Branding

- **Verde Sálvia Principal**: `#6F8F7A` (calma, saúde e acolhimento)
- **Verde Floresta Escuro**: `#1E312A` / `#253D34` (autoridade médica, contraste e legibilidade)
- **Dourado Suave**: `#C5A267` (sofisticação e toque premium)
- **Fundo Off-White**: `#FAF9F5` (conforto visual e elegância)
- **Tipografia**: `Plus Jakarta Sans` (clareza e modernidade) e `Playfair Display` (refinamento editorial).

---

## 📍 Informações de Contato da Clínica

- **Clínica**: Clínica Maria Nutri (Dra. Mariana Saldanha)
- **Endereço**: Av. Hermes da Fonseca, 1200, Edifício Tirol Corporate, Sala 405 – Tirol, Natal - RN, CEP 59020-000
- **Telefone**: +55 (84) 3222-0000
- **WhatsApp**: +55 (84) 99999-0000
- **Domínio Oficial**: [https://marianutri.site/](https://marianutri.site/)
- **Horário de Atendimento**: Segunda a Sexta: 08h00 às 19h00 | Sábados: 08h00 às 12h00
