# Guia de Publicação — Hostinger e GitHub (Mari a Nutri • Dra. Mariana Saldanha)

Esta pasta `/site` contém o site One Page 100% estático, completo e pronto para ser enviado ao **GitHub** e publicado na **Hostinger** sem a necessidade de compilação ou Node.js no servidor.

---

## Estrutura da Pasta `/site`

```text
/site/
├── .htaccess               # Configurações do Apache/LiteSpeed (HTTPS, compressão Gzip e cache)
├── index.html              # Página One Page completa com SEO e Schema.org
├── index.php               # Arquivo PHP que carrega o index.html (garante compatibilidade total)
├── README-HOSTINGER.md     # Este guia
└── assets/
    ├── css/
    │   └── style.css       # Estilos complementares e rolagem suave
    ├── js/
    │   └── main.js         # Interatividade do menu mobile e sanfona de FAQ
    └── img/
        ├── logo.svg        # Logotipo vetorial oficial
        ├── logo.png        # Logotipo PNG
        ├── favicon-16x16.png
        ├── favicon-32x32.png
        ├── apple-touch-icon.png
        ├── hero-bg.webp    # Imagem panorâmica da consulta no Tirol Corporate
        ├── sobre.webp      # Retrato profissional da Dra. Maria Nutri
        ├── servico-1.webp  # Foto Consulta de Emagrecimento Feminino
        ├── servico-2.webp  # Foto Programa Emagrecimento Real
        ├── servico-3.webp  # Foto Exame de Bioimpedância InBody
        ├── depoimento-1.webp
        ├── depoimento-2.webp
        └── depoimento-3.webp
```

---

## Opção 1: Envio Direto para a Hostinger (Mais Rápido — via hPanel)

1. Faça login na sua conta da **Hostinger** e acesse o painel **hPanel**.
2. No seu domínio / hospedagem, clique em **Gerenciador de Arquivos** (File Manager).
3. Abra a pasta `public_html/`.
4. Envie **todos os arquivos e pastas de dentro de `/site`** diretamente para dentro de `public_html/`.
   - *Nota:* Certifique-se de que o arquivo `.htaccess` e o `index.html` estejam na raiz de `public_html/`.
5. Pronto! O site já estará disponível no seu domínio com SSL HTTPS automático, carregamento ultra-rápido e conversão para o WhatsApp oficial.

---

## Opção 2: Envio via GitHub + Integração Git na Hostinger

1. **Criar o Repositório no GitHub:**
   - Crie um novo repositório no seu GitHub (ex: `clinica-maria-nutri`).
   - Você pode enviar o conteúdo desta pasta `/site` como a raiz do seu repositório.
2. **Conectar na Hostinger:**
   - No hPanel da Hostinger, role até a seção **Avançado** e clique em **Git**.
   - Insira a URL do seu repositório GitHub (ex: `https://github.com/seu-usuario/clinica-maria-nutri.git`).
   - Branch: `main`.
   - Diretório de Instalação: `public_html`.
   - Clique em **Criar** e depois em **Implantar** (Deploy).
3. A cada novo commit no GitHub, basta clicar em "Implantar" na Hostinger para atualizar o site instantaneamente.
