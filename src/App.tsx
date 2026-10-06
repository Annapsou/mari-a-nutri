import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Phone,
  Clock,
  MapPin,
  Star,
  ChevronDown,
  CheckCircle2,
  Apple,
  Activity,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Instagram,
  Facebook,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  Smartphone,
  CalendarCheck
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5584999990000?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+acompanhamento+com+a+Dra.+Mariana+Saldanha+%28Mari+a+Nutri%29";
const PHONE_NUMBER = "+55 (84) 3222-0000";
const PHONE_HREF = "tel:+558432220000";
const WHATSAPP_DISPLAY = "+55 (84) 99999-0000";
const ADDRESS_TEXT = "Avenida Hermes da Fonseca, 1200, Edifício Tirol Corporate, Sala 405 – Tirol, Natal - RN, CEP 59020-000";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [stepSlide, setStepSlide] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 85;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        try {
          window.history.pushState(null, '', href);
        } catch {
          // fallback
        }
      }
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Contato", href: "#contato" },
  ];

  // 6 Steps split into slides of 3
  const steps = [
    {
      number: "01",
      title: "Converse com a equipe",
      desc: "Entre em contato pelo WhatsApp e conte um pouco sobre o que você está buscando no seu acompanhamento nutricional com a Dra. Mariana Saldanha."
    },
    {
      number: "02",
      title: "Agende sua consulta",
      desc: "A equipe orienta você sobre a disponibilidade de horários e o melhor formato para iniciar seu processo de emagrecimento."
    },
    {
      number: "03",
      title: "Faça sua avaliação clínica",
      desc: "Na consulta, são analisados seus objetivos, rotina, hábitos alimentares, exames e avaliação de bioimpedância InBody para entender o seu momento."
    },
    {
      number: "04",
      title: "Receba seu plano individualizado",
      desc: "A estratégia alimentar é construída sob medida para a sua rotina, incluindo alimentos da culinária local como cuscuz e tapioca sem extremismos."
    },
    {
      number: "05",
      title: "Suporte contínuo & aplicativo",
      desc: "Acesso ao aplicativo próprio com cardápio, lista de compras, receitas e suporte diário direto pelo WhatsApp para tirar dúvidas."
    },
    {
      number: "06",
      title: "Acompanhe sua evolução",
      desc: "Consultas de retorno e reavaliações periódicas para ajustar o plano, celebrar conquistas e consolidar novos hábitos sustentáveis."
    }
  ];

  const totalSlides = Math.ceil(steps.length / 3);
  const currentStepGroup = steps.slice(stepSlide * 3, stepSlide * 3 + 3);

  // Autoplay do carrossel: passa sozinho de 3 em 3 a cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setStepSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const prevStepSlide = () => {
    setStepSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const nextStepSlide = () => {
    setStepSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const faqs = [
    {
      q: "Quanto custa uma consulta com nutricionista para emagrecimento em Natal?",
      a: "O investimento pode variar de acordo com o formato de acompanhamento escolhido (consulta avulsa ou Programa Emagrecimento Real de 8 semanas). Para consultar valores e opções, fale diretamente com a Mari a Nutri pelo WhatsApp."
    },
    {
      q: "Preciso cortar carboidratos para emagrecer?",
      a: "Não necessariamente. A metodologia da Dra. Mariana Saldanha evita restrições extremas e busca construir uma alimentação equilibrada e saborosa que faça sentido para o seu dia a dia."
    },
    {
      q: "O plano alimentar é personalizado para a minha rotina?",
      a: "Sim, 100% individualizado. Consideramos seus horários, preferências, alergias, rotina de trabalho e metas pessoais para que seja prático e sustentável."
    },
    {
      q: "Posso continuar comendo alimentos como cuscuz e tapioca?",
      a: "Com certeza! A proposta da Mari a Nutri é valorizar a cultura alimentar nordestina e a vida real, ajustando as porções e combinações estratégicas para o seu emagrecimento."
    },
    {
      q: "Onde fica o consultório da Dra. Mariana Saldanha em Natal?",
      a: "O consultório fica na Avenida Hermes da Fonseca, 1200, Edifício Tirol Corporate, Sala 405, no bairro Tirol, em Natal - RN."
    },
    {
      q: "Qual é o horário de atendimento?",
      a: "Atendemos de segunda a sexta-feira, das 08h00 às 19h00, e aos sábados, das 08h00 às 12h00, sempre com hora marcada."
    },
    {
      q: "Como funciona a bioimpedância InBody?",
      a: "A bioimpedância médica InBody faz uma análise minuciosa da composição corporal: massa muscular esquelética, gordura corporal, gordura visceral e taxa metabólica basal, permitindo acompanhar a evolução com precisão."
    },
    {
      q: "Como faço para agendar minha consulta?",
      a: "O agendamento é feito de forma rápida e prática diretamente pelo WhatsApp oficial. Basta clicar no botão e nossa equipe responderá com as opções de datas e horários."
    },
    {
      q: "Quais são as formas de pagamento?",
      a: "Aceitamos Pix, cartões de crédito e débito, além de condições especiais para programas de acompanhamento contínuo."
    },
    {
      q: "O que diferencia o acompanhamento da Dra. Mariana Saldanha?",
      a: "A abordagem empática e acolhedora, o respeito às preferências locais, o suporte diário pelo WhatsApp entre as consultas, o aplicativo exclusivo e o foco em resultados duradouros sem efeito sanfona."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#253D34] flex flex-col font-sans selection:bg-[#6F8F7A]/20 selection:text-[#253D34] w-full max-w-full overflow-x-clip">
      
      {/* 1. TOP UTILITY BAR (Warm Forest / Gold Accent) */}
      <div className="bg-[#1E312A] text-[#D9E4DD] text-xs py-2.5 px-4 sm:px-8 border-b border-[#2D453C] w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 w-full">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[#D9E4DD]">
            <a href={PHONE_HREF} className="flex items-center gap-1.5 hover:text-[#C5A267] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#C5A267]" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-[#A5BEB2]">
              <Clock className="w-3.5 h-3.5 text-[#C5A267]" />
              <span>Seg - Sex: 08:00 - 19:00 | Sáb: 08:00 - 12:00</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 text-[#A5BEB2]">
              <MapPin className="w-3.5 h-3.5 text-[#C5A267]" />
              <span>Ed. Tirol Corporate, Sala 405 – Tirol, Natal</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#A5BEB2] hidden sm:inline">Siga-nos:</span>
            <a
              href="https://instagram.com/marianutri.emagrecimento"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9E4DD] hover:text-[#C5A267] transition-colors"
              aria-label="Instagram da Dra. Mariana Saldanha"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com/marianutriclinica"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9E4DD] hover:text-[#C5A267] transition-colors"
              aria-label="Facebook da Dra. Mariana Saldanha"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <span className="text-[#3E5C50] hidden sm:inline">|</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A267] hover:text-[#E2C790] font-medium flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direto</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. STICKY MAIN HEADER WITH FIXED HORIZONTAL MENU & RIGHT-ALIGNED WHATSAPP BUTTON */}
      <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E3DFD5] shadow-xs transition-all w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-3 w-full">
          
          {/* Logo on Left - Adjusted size */}
          <a
            href="#hero"
            onClick={(e) => handleAnchorClick(e, '#hero')}
            className="flex items-center gap-2 shrink-0 group cursor-pointer"
          >
            <img
              src="/assets/img/logo.svg"
              alt="Mari a Nutri - Dra. Mariana Saldanha, Nutricionista Clínica em Natal"
              className="h-9 sm:h-10 md:h-11 w-auto max-w-[155px] sm:max-w-[190px] md:max-w-[210px] object-contain transition-opacity group-hover:opacity-95"
              width="210"
              height="52"
            />
          </a>

          {/* Desktop Fixed Horizontal Navigation Menu (Visible on Desktop & Tablet Screens) */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 text-xs lg:text-sm font-semibold text-[#253D34]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="hover:text-[#6F8F7A] transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#6F8F7A] whitespace-nowrap cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA Button Aligned to the FAR RIGHT (canto direito, sempre dentro das bordas) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto md:ml-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-xl bg-[#6F8F7A] hover:bg-[#5E7E69] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#FAF9F5] shrink-0" />
              <span className="hidden sm:inline">Falar no WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle (Only for small phone screens < 768px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 sm:p-2 rounded-lg text-[#253D34] hover:bg-[#EAE6DC] transition-colors shrink-0"
              aria-label="Abrir Menu de Navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer for narrow mobile phones */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF9F5] border-b border-[#E3DFD5] px-4 pt-3 pb-6 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-semibold text-[#253D34] hover:text-[#6F8F7A] hover:bg-[#EFF4F1] cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E3DFD5] mt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#6F8F7A] hover:bg-[#5E7E69] text-white font-semibold text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        
        {/* 1. HERO — #hero */}
        <section
          id="hero"
          className="relative bg-[#1E312A] text-white pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden min-h-[580px] flex flex-col justify-center"
        >
          {/* Panoramic Hero Image Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/img/hero-bg.webp"
              alt="Consultório acolhedor de nutrição clínica da Dra. Mariana Saldanha no Tirol Corporate em Natal"
              className="w-full h-full object-cover object-center lg:object-right opacity-60 md:opacity-75"
              width={1920}
              height={800}
            />
            {/* Elegant Scrim Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E312A] via-[#1E312A]/85 to-[#1E312A]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E312A]/90 via-transparent to-[#1E312A]/40" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              
              {/* Location Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5]/10 border border-[#C5A267]/40 text-[#C5A267] text-xs font-semibold mb-6 tracking-wide backdrop-blur-xs">
                <MapPin className="w-3.5 h-3.5 text-[#C5A267]" />
                <span>Edifício Tirol Corporate, Natal - RN</span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.15]">
                Nutricionista em Natal para Emagrecimento Feminino
              </h1>

              {/* Subheading */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#FAF9F5]/90 leading-relaxed font-normal">
                Emagrecer não precisa significar viver de restrições ou abandonar os alimentos que fazem parte da sua rotina. Na <strong>Mari a Nutri</strong>, você encontra acompanhamento nutricional individualizado com a <strong>Dra. Mariana Saldanha</strong> para emagrecer com mais leveza, estratégia e praticidade, em Tirol, Natal - RN.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#C5A267] hover:bg-[#B38F56] text-[#1E312A] font-bold text-base shadow-lg shadow-[#C5A267]/20 transition-all hover:scale-[1.02] active:scale-[0.99] whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5 text-[#1E312A] fill-current" />
                  <span>Agendar pelo WhatsApp</span>
                </a>
                <a
                  href="#servicos"
                  onClick={(e) => handleAnchorClick(e, '#servicos')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 backdrop-blur-xs transition-all whitespace-nowrap cursor-pointer"
                >
                  <span>Conhecer nossos serviços</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A267]" />
                </a>
              </div>

              {/* Statement */}
              <p className="mt-6 text-sm text-[#C5A267]/90 italic">
                Um acompanhamento pensado para a sua rotina, sem julgamentos e sem dietas extremas.
              </p>
            </div>
          </div>
        </section>

        {/* 2. BARRA DE CREDIBILIDADE — #credibilidade */}
        <section id="credibilidade" className="py-12 bg-[#FAF9F5] border-b border-[#E3DFD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E3DFD5] shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#EFF4F1] flex items-center justify-center text-[#6F8F7A] shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-extrabold text-lg text-[#253D34]">+500 pacientes</span>
                  <p className="text-xs text-[#5E7A6E] mt-0.5 leading-relaxed">Experiência construída com acompanhamento individualizado.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E3DFD5] shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#F7F2E8] flex items-center justify-center text-[#C5A267] shrink-0">
                  <Star className="w-6 h-6 fill-[#C5A267]" />
                </div>
                <div>
                  <span className="block font-extrabold text-lg text-[#253D34]">Nota 5.0 no Google</span>
                  <p className="text-xs text-[#5E7A6E] mt-0.5 leading-relaxed">Avaliação baseada em 62 avaliações reais de perfis locais.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E3DFD5] shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#EFF4F1] flex items-center justify-center text-[#6F8F7A] shrink-0">
                  <Apple className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-extrabold text-lg text-[#253D34]">Foco Feminino</span>
                  <p className="text-xs text-[#5E7A6E] mt-0.5 leading-relaxed">Especializado em emagrecimento, reeducação e composição corporal.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E3DFD5] shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#F7F2E8] flex items-center justify-center text-[#C5A267] shrink-0">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-extrabold text-lg text-[#253D34]">Suporte Próximo</span>
                  <p className="text-xs text-[#5E7A6E] mt-0.5 leading-relaxed">Acompanhamento pelo WhatsApp e acesso a aplicativo próprio.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. QUEM SOMOS — #sobre */}
        <section id="sobre" className="py-20 lg:py-28 bg-[#FAF9F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs uppercase font-bold tracking-widest text-[#6F8F7A] bg-[#EFF4F1] px-3.5 py-1.5 rounded-full border border-[#6F8F7A]/30">
                  Quem Somos
                </span>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#253D34] tracking-tight mt-4 mb-6 leading-tight">
                  Nutrição clínica com foco em emagrecimento feminino
                </h2>

                <div className="space-y-4 text-base text-[#4D695D] leading-relaxed">
                  <p>
                    A <strong>Mari a Nutri</strong>, conduzida pela nutricionista clínica <strong>Dra. Mariana Saldanha</strong>, nasceu para oferecer um jeito mais humano e realista de cuidar da alimentação. Nosso foco é o emagrecimento feminino com acompanhamento individualizado, respeitando a rotina, as preferências e o momento de cada mulher.
                  </p>
                  <p>
                    Aqui, o objetivo não é entregar mais uma dieta difícil de seguir. É construir estratégias que façam sentido para a sua vida, inclusive com alimentos que fazem parte da cultura e da rotina local, como cuscuz e tapioca.
                  </p>
                  <p>
                    O atendimento é acolhedor, sem julgamentos e com autoridade clínica para ajudar você a entender melhor o seu corpo, organizar sua alimentação e acompanhar sua evolução ao longo do processo.
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#6F8F7A] hover:bg-[#5E7E69] text-white font-semibold text-base shadow-sm transition-all"
                  >
                    <MessageCircle className="w-5 h-5 text-[#FAF9F5]" />
                    <span>Fale conosco</span>
                  </a>
                </div>
              </div>

              {/* Portrait */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E3DFD5] bg-white aspect-[4/3] group">
                  <img
                    src="/assets/img/sobre.webp"
                    alt="Dra. Mariana Saldanha, nutricionista especialista em emagrecimento feminino em Natal"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E312A]/90 via-transparent to-transparent flex flex-col justify-end p-6">
                    <span className="text-white font-bold text-lg">Dra. Mariana Saldanha</span>
                    <span className="text-[#C5A267] text-xs font-semibold">Mari a Nutri • Nutricionista Clínica</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs text-[#253D34] rounded-2xl p-3 shadow-md border border-[#E3DFD5] flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-black text-[#6F8F7A] leading-none">+500</span>
                    <span className="text-[10px] uppercase font-bold text-[#5E7A6E] tracking-wider mt-1">Pacientes</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. SERVIÇOS — #servicos */}
        <section id="servicos" className="py-20 lg:py-28 bg-[#F4F2EB] border-t border-b border-[#E3DFD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-widest text-[#6F8F7A] bg-white px-3.5 py-1.5 rounded-full border border-[#E3DFD5]">
                Nossos Serviços
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#253D34] tracking-tight mt-4 mb-4">
                Serviços de Nutrição para Emagrecimento em Natal
              </h2>
              <p className="text-base text-[#4D695D]">
                Cada acompanhamento começa a partir das necessidades e objetivos de cada paciente. Conheça as principais opções da Mari a Nutri.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Service 1 */}
              <div className="flex flex-col bg-white rounded-2xl border border-[#E3DFD5] overflow-hidden hover:shadow-xl hover:border-[#6F8F7A] transition-all duration-300 group">
                <div className="h-56 bg-slate-200 relative overflow-hidden">
                  <img
                    src="/assets/img/servico-1.webp"
                    alt="Consulta individualizada de emagrecimento feminino com plano alimentar personalizado em Natal"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E312A]/80 via-transparent to-transparent flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 bg-white text-[#253D34] text-xs font-bold px-3 py-1 rounded-md shadow-xs">
                      <Apple className="w-3.5 h-3.5 text-[#6F8F7A]" />
                      <span>Avaliação Individualizada</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#253D34] mb-3 group-hover:text-[#6F8F7A] transition-colors">
                      Consulta de Emagrecimento Feminino
                    </h3>
                    <p className="text-sm text-[#4D695D] leading-relaxed mb-4">
                      Uma avaliação completa para entender sua rotina, seus objetivos e os fatores que podem estar influenciando o seu processo de emagrecimento.
                    </p>
                    <p className="text-sm text-[#4D695D] leading-relaxed">
                      O acompanhamento inclui avaliação clínica, rastreio metabólico e elaboração de um plano alimentar individualizado.
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#E3DFD5]">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#253D34] hover:bg-[#6F8F7A] text-white text-sm font-semibold transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4 text-[#C5A267]" />
                      <span>Falar no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex flex-col bg-white rounded-2xl border-2 border-[#6F8F7A] overflow-hidden hover:shadow-xl transition-all duration-300 group relative">
                <div className="absolute top-3 right-3 z-10 bg-[#C5A267] text-[#1E312A] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  Destaque
                </div>
                <div className="h-56 bg-slate-200 relative overflow-hidden">
                  <img
                    src="/assets/img/servico-2.webp"
                    alt="Programa Emagrecimento Real com reeducação alimentar e acompanhamento contínuo em Natal"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E312A]/80 via-transparent to-transparent flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 bg-white text-[#253D34] text-xs font-bold px-3 py-1 rounded-md shadow-xs">
                      <Activity className="w-3.5 h-3.5 text-[#6F8F7A]" />
                      <span>8 Semanas de Acompanhamento</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#253D34] mb-3 group-hover:text-[#6F8F7A] transition-colors">
                      Programa Emagrecimento Real
                    </h3>
                    <p className="text-sm text-[#4D695D] leading-relaxed mb-4">
                      Um acompanhamento de 8 semanas para mulheres que desejam mais proximidade e consistência durante o processo de emagrecimento.
                    </p>
                    <p className="text-sm text-[#4D695D] leading-relaxed">
                      O programa inclui consultas quinzenais, avaliação de bioimpedância e suporte comportamental para ajudar a transformar o planejamento em rotina.
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#E3DFD5]">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#6F8F7A] hover:bg-[#5E7E69] text-white text-sm font-semibold transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4 text-[#FAF9F5]" />
                      <span>Falar no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="flex flex-col bg-white rounded-2xl border border-[#E3DFD5] overflow-hidden hover:shadow-xl hover:border-[#6F8F7A] transition-all duration-300 group">
                <div className="h-56 bg-slate-200 relative overflow-hidden">
                  <img
                    src="/assets/img/servico-3.webp"
                    alt="Exame de Bioimpedância InBody para avaliação precisa da composição corporal em Natal"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E312A]/80 via-transparent to-transparent flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 bg-white text-[#253D34] text-xs font-bold px-3 py-1 rounded-md shadow-xs">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A267]" />
                      <span>Tecnologia InBody</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#253D34] mb-3 group-hover:text-[#6F8F7A] transition-colors">
                      Exame de Bioimpedância InBody
                    </h3>
                    <p className="text-sm text-[#4D695D] leading-relaxed mb-4">
                      Uma análise detalhada da composição corporal para entender a proporção entre massa muscular, gordura corporal e retenção de líquidos.
                    </p>
                    <p className="text-sm text-[#4D695D] leading-relaxed">
                      O exame oferece dados importantes para direcionar o plano alimentar e acompanhar a evolução ao longo do tratamento.
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#E3DFD5]">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#253D34] hover:bg-[#6F8F7A] text-white text-sm font-semibold transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4 text-[#C5A267]" />
                      <span>Falar no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. DIFERENCIAIS / BENEFÍCIOS (Using Dra. Mariana Saldanha) — #diferenciais */}
        <section id="diferenciais" className="py-20 lg:py-28 bg-[#FAF9F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-widest text-[#6F8F7A] bg-[#EFF4F1] px-3.5 py-1.5 rounded-full border border-[#6F8F7A]/30">
                Nossos Diferenciais
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#253D34] tracking-tight mt-4">
                Por que escolher a Dra. Mariana Saldanha?
              </h2>
              <p className="mt-3 text-base text-[#4D695D]">
                Na Mari a Nutri, o foco é cuidar de você com respeito à sua história, à sua rotina e aos seus objetivos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="p-8 rounded-2xl bg-white border border-[#E3DFD5] shadow-xs hover:border-[#6F8F7A] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#EFF4F1] flex items-center justify-center text-[#6F8F7A] mb-5">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#253D34] mb-2">Sem dietas restritivas extremas</h3>
                <p className="text-sm text-[#4D695D] leading-relaxed">
                  O acompanhamento busca uma alimentação sustentável, sem transformar o processo de emagrecimento em uma lista de proibições.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E3DFD5] shadow-xs hover:border-[#6F8F7A] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#EFF4F1] flex items-center justify-center text-[#6F8F7A] mb-5">
                  <Apple className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#253D34] mb-2">Alimentação que cabe na vida real</h3>
                <p className="text-sm text-[#4D695D] leading-relaxed">
                  Seu plano considera sua rotina e suas preferências, incluindo alimentos que você já consome no dia a dia como cuscuz e tapioca.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E3DFD5] shadow-xs hover:border-[#6F8F7A] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#F7F2E8] flex items-center justify-center text-[#C5A267] mb-5">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#253D34] mb-2">Suporte próximo pelo WhatsApp</h3>
                <p className="text-sm text-[#4D695D] leading-relaxed">
                  Você não precisa esperar a próxima consulta para tirar uma dúvida. A Dra. Mariana acompanha você entre os atendimentos.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E3DFD5] shadow-xs hover:border-[#6F8F7A] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#EFF4F1] flex items-center justify-center text-[#6F8F7A] mb-5">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#253D34] mb-2">Aplicativo próprio</h3>
                <p className="text-sm text-[#4D695D] leading-relaxed">
                  Tenha acesso ao seu plano alimentar, lista de compras e receitas em vídeo diretamente no seu celular.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E3DFD5] shadow-xs hover:border-[#6F8F7A] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#EFF4F1] flex items-center justify-center text-[#6F8F7A] mb-5">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#253D34] mb-2">Avaliação da composição corporal</h3>
                <p className="text-sm text-[#4D695D] leading-relaxed">
                  A bioimpedância InBody complementa o acompanhamento com informações detalhadas sobre massa muscular e gordura corporal.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E3DFD5] shadow-xs hover:border-[#6F8F7A] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#F7F2E8] flex items-center justify-center text-[#C5A267] mb-5">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#253D34] mb-2">Atendimento acolhedor e sem julgamentos</h3>
                <p className="text-sm text-[#4D695D] leading-relaxed">
                  Um espaço seguro para falar sobre alimentação, rotina, dificuldades e objetivos com tranquilidade e empatia.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 6. COMO FUNCIONA (CARROSSEL PASSANDO DE 3 EM 3) — #como-funciona */}
        <section id="como-funciona" className="py-20 lg:py-28 bg-[#F4F2EB] border-t border-b border-[#E3DFD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#6F8F7A] bg-white px-3.5 py-1.5 rounded-full border border-[#E3DFD5]">
                  Passo a Passo
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#253D34] tracking-tight mt-3">
                  Como funciona nosso atendimento?
                </h2>
                <p className="text-sm text-[#5E7A6E] mt-1">
                  Navegue pelo carrossel para ver o passo a passo completo da sua jornada.
                </p>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[#5E7A6E]">
                  Etapa {stepSlide + 1} de {totalSlides} (Passos {stepSlide * 3 + 1} a {Math.min(stepSlide * 3 + 3, steps.length)})
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevStepSlide}
                    className="p-3 rounded-xl bg-white border border-[#E3DFD5] text-[#253D34] hover:bg-[#6F8F7A] hover:text-white hover:border-[#6F8F7A] transition-all shadow-xs"
                    aria-label="Passos anteriores"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextStepSlide}
                    className="p-3 rounded-xl bg-white border border-[#E3DFD5] text-[#253D34] hover:bg-[#6F8F7A] hover:text-white hover:border-[#6F8F7A] transition-all shadow-xs"
                    aria-label="Próximos passos"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Carousel Content (3 Items Per Slide) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-300">
              {currentStepGroup.map((step) => (
                <div
                  key={step.number}
                  className="flex flex-col p-8 rounded-2xl bg-white border border-[#E3DFD5] shadow-xs relative hover:border-[#6F8F7A] transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#6F8F7A] text-white font-extrabold text-lg flex items-center justify-center shadow-sm mb-5 group-hover:scale-105 transition-transform">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-[#253D34] text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#4D695D] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {[...Array(totalSlides)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setStepSlide(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    stepSlide === idx ? "w-8 bg-[#6F8F7A]" : "w-2.5 bg-[#C4BFB4]"
                  }`}
                  aria-label={`Ir para slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#6F8F7A] hover:bg-[#5E7E69] text-white font-semibold text-base shadow-sm hover:shadow transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Quero começar meu acompanhamento</span>
              </a>
            </div>

          </div>
        </section>

        {/* 7. PROVA SOCIAL / DEPOIMENTOS — #depoimentos */}
        <section id="depoimentos" className="py-20 lg:py-28 bg-[#FAF9F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-widest text-[#6F8F7A] bg-[#EFF4F1] px-3.5 py-1.5 rounded-full border border-[#6F8F7A]/30">
                Prova Social
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#253D34] tracking-tight mt-4">
                O que dizem as pacientes da Mari a Nutri
              </h2>
              <p className="text-sm text-[#5E7A6E] mt-2">
                Mais de 500 mulheres atendidas com nota 5.0 baseada em 62 avaliações no Google.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-2xl border border-[#E3DFD5] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A267] text-[#C5A267]" />
                    ))}
                  </div>
                  <h3 className="text-xs uppercase font-bold text-[#6F8F7A] tracking-wider mb-2">
                    Depoimento real de paciente:
                  </h3>
                  <blockquote className="text-[#4D695D] italic text-sm leading-relaxed">
                    “A Dra. Mariana mudou completamente minha relação com a comida. Consegui emagrecer 8kg sem passar fome e sem cortar meu cuscuz matinal!”
                  </blockquote>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E3DFD5] flex items-center gap-3">
                  <img
                    src="/assets/img/depoimento-1.webp"
                    alt="Foto da paciente Juliana M. atendida pela nutricionista Dra. Mariana Saldanha em Tirol Natal"
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#6F8F7A]/40 shrink-0"
                    width={44}
                    height={44}
                  />
                  <div>
                    <span className="block text-xs font-bold text-[#253D34]">Juliana M.</span>
                    <span className="block text-[11px] text-[#5E7A6E]">Tirol, Natal - RN</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-2xl border border-[#E3DFD5] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A267] text-[#C5A267]" />
                    ))}
                  </div>
                  <h3 className="text-xs uppercase font-bold text-[#6F8F7A] tracking-wider mb-2">
                    Depoimento real de paciente:
                  </h3>
                  <blockquote className="text-[#4D695D] italic text-sm leading-relaxed">
                    “O Programa de 8 semanas foi um divisor de águas. O suporte diário pelo WhatsApp e o aplicativo facilitam muito a rotina corrida.”
                  </blockquote>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E3DFD5] flex items-center gap-3">
                  <img
                    src="/assets/img/depoimento-2.webp"
                    alt="Foto da paciente Camila R. acompanhada no Programa Emagrecimento Real em Natal"
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#6F8F7A]/40 shrink-0"
                    width={44}
                    height={44}
                  />
                  <div>
                    <span className="block text-xs font-bold text-[#253D34]">Camila R.</span>
                    <span className="block text-[11px] text-[#5E7A6E]">Petrópolis, Natal - RN</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-2xl border border-[#E3DFD5] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A267] text-[#C5A267]" />
                    ))}
                  </div>
                  <h3 className="text-xs uppercase font-bold text-[#6F8F7A] tracking-wider mb-2">
                    Depoimento real de paciente:
                  </h3>
                  <blockquote className="text-[#4D695D] italic text-sm leading-relaxed">
                    “O exame de bioimpedância InBody me ajudou a entender de verdade a minha composição corporal. Atendimento acolhedor e sem julgamentos!”
                  </blockquote>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E3DFD5] flex items-center gap-3">
                  <img
                    src="/assets/img/depoimento-3.webp"
                    alt="Foto da paciente Renata S. avaliada com exame de bioimpedância InBody em Natal"
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#6F8F7A]/40 shrink-0"
                    width={44}
                    height={44}
                  />
                  <div>
                    <span className="block text-xs font-bold text-[#253D34]">Renata S.</span>
                    <span className="block text-[11px] text-[#5E7A6E]">Lagoa Nova, Natal - RN</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-12 text-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#6F8F7A] hover:bg-[#5E7E69] text-white font-semibold text-base shadow-sm"
              >
                <MessageCircle className="w-5 h-5 text-[#FAF9F5]" />
                <span>Quero conversar sobre meu caso</span>
              </a>
            </div>

          </div>
        </section>

        {/* 8. ÁREA DE ATUAÇÃO — #area-atuacao */}
        <section id="area-atuacao" className="py-20 lg:py-28 bg-[#F4F2EB] border-t border-b border-[#E3DFD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-widest text-[#6F8F7A] bg-white px-3.5 py-1.5 rounded-full border border-[#E3DFD5]">
                Localização & Bairros
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#253D34] tracking-tight mt-4">
                Nutricionista para emagrecimento em Natal - RN
              </h2>
              <p className="mt-4 text-base text-[#4D695D] leading-relaxed">
                Consultório localizado estrategicamente no coração de Tirol, com fácil acesso e estacionamento para os principais bairros da capital potiguar:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { name: "Tirol", desc: "Localização no Tirol Corporate" },
                { name: "Petrópolis", desc: "A 5 minutos do consultório" },
                { name: "Lagoa Nova", desc: "Acesso rápido pela Av. Hermes" },
                { name: "Capim Macio", desc: "Fácil deslocamento pela zona sul" },
              ].map((bairro) => (
                <div
                  key={bairro.name}
                  className="p-6 rounded-2xl bg-white border border-[#E3DFD5] text-center shadow-xs hover:border-[#6F8F7A] transition-all"
                >
                  <MapPin className="w-6 h-6 text-[#C5A267] mx-auto mb-3" />
                  <h3 className="font-bold text-lg text-[#253D34] mb-1">{bairro.name}</h3>
                  <p className="text-xs text-[#5E7A6E]">{bairro.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. PERGUNTAS FREQUENTES — #faq */}
        <section id="faq" className="py-20 lg:py-28 bg-[#FAF9F5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <span className="text-xs uppercase font-bold tracking-widest text-[#6F8F7A] bg-[#EFF4F1] px-3.5 py-1.5 rounded-full border border-[#6F8F7A]/30">
                Tire suas dúvidas
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#253D34] tracking-tight mt-4">
                Perguntas Frequentes
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-[#E3DFD5] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-5 px-6 sm:px-8 text-left flex justify-between items-center gap-4 hover:bg-[#FAF9F5] transition-colors"
                  >
                    <span className="font-bold text-[#253D34] text-base sm:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#6F8F7A] shrink-0 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openFaq === index && (
                    <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-[#4D695D] leading-relaxed border-t border-[#FAF9F5] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center p-8 rounded-2xl bg-[#EFF4F1] border border-[#6F8F7A]/30">
              <h3 className="font-bold text-[#253D34] text-lg mb-2">Ainda tem alguma dúvida?</h3>
              <p className="text-sm text-[#4D695D] mb-6">
                Nossa equipe e a Dra. Mariana Saldanha estão prontas para te atender diretamente no WhatsApp.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#6F8F7A] hover:bg-[#5E7E69] text-white font-semibold text-sm shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>

          </div>
        </section>

        {/* 10. CONTATO & LOCALIZAÇÃO — #contato */}
        <section id="contato" className="py-20 lg:py-28 bg-[#F4F2EB] border-t border-[#E3DFD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-widest text-[#6F8F7A] bg-white px-3.5 py-1.5 rounded-full border border-[#E3DFD5]">
                Onde Estamos
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#253D34] tracking-tight mt-4">
                Contato &amp; Localização
              </h2>
              <p className="mt-3 text-base text-[#4D695D]">
                Consultório sofisticado, climatizado e com estacionamento no Edifício Tirol Corporate.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Contact Card */}
              <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-[#E3DFD5] shadow-xs space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EFF4F1] flex items-center justify-center text-[#6F8F7A] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#253D34] text-base mb-1">Endereço</h3>
                    <p className="text-sm text-[#4D695D] leading-relaxed">
                      {ADDRESS_TEXT}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F2E8] flex items-center justify-center text-[#C5A267] shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#253D34] text-base mb-1">Telefone Fixo</h3>
                    <a href={PHONE_HREF} className="text-sm text-[#4D695D] hover:text-[#6F8F7A] transition-colors">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EFF4F1] flex items-center justify-center text-[#6F8F7A] shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#253D34] text-base mb-1">WhatsApp Oficial</h3>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#6F8F7A] hover:underline"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F2E8] flex items-center justify-center text-[#C5A267] shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#253D34] text-base mb-1">Horário de Atendimento</h3>
                    <p className="text-sm text-[#4D695D] leading-relaxed">
                      Segunda a Sexta: 08h00 às 19h00<br />
                      Sábados: 08h00 às 12h00
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E3DFD5]">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#6F8F7A] hover:bg-[#5E7E69] text-white font-bold text-base shadow-sm transition-all"
                  >
                    <MessageCircle className="w-5 h-5 text-[#FAF9F5]" />
                    <span>Falar no WhatsApp</span>
                  </a>
                </div>

              </div>

              {/* Map Embed */}
              <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E3DFD5] overflow-hidden shadow-xs h-[460px]">
                <iframe
                  title="Localização Mari a Nutri - Edifício Tirol Corporate Natal"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.349607833076!2d-35.20173292415175!3d-5.790538994191638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b1000676a084f3%3A0xe67b45c26b5aa05b!2sAv.%20Hermes%20da%20Fonseca%2C%201200%20-%20Tirol%2C%20Natal%20-%20RN%2C%2059020-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* 11. FOOTER — #footer */}
      <footer id="footer" className="bg-[#1E312A] text-[#D9E4DD] pt-16 pb-12 border-t border-[#2D453C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#2D453C]">
            
            <div className="md:col-span-2 space-y-4">
              <img
                src="/assets/img/logo-footer.svg"
                alt="Mari a Nutri - Dra. Mariana Saldanha, Nutricionista Clínica em Natal"
                className="h-12 sm:h-14 w-auto object-contain"
              />
              <p className="text-sm text-[#A5BEB2] max-w-md leading-relaxed">
                Acompanhamento nutricional individualizado com a Dra. Mariana Saldanha para emagrecimento feminino, reeducação alimentar e melhoria da composição corporal em Tirol, Natal - RN.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#C5A267] mb-4">
                Links Rápidos
              </h3>
              <ul className="space-y-2 text-sm text-[#A5BEB2]">
                {navLinks.slice(0, 5).map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => handleAnchorClick(e, l.href)}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#C5A267] mb-4">
                Contato
              </h3>
              <p className="text-sm text-[#A5BEB2] leading-relaxed mb-3">
                Edifício Tirol Corporate, Sala 405<br />
                Tirol, Natal - RN
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C5A267] hover:underline"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{WHATSAPP_DISPLAY}</span>
              </a>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A5BEB2]">
            <p>© 2026 Mari a Nutri • Dra. Mariana Saldanha. Todos os direitos reservados.</p>
            <p>Desenvolvido para alta conversão via WhatsApp</p>
          </div>

        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (ALWAYS FIXED IN BOTTOM-RIGHT CANTO INFERIOR DIREITO) */}
      <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Falar com a Dra. Mariana Saldanha no WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-current" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
            </span>
          </div>
          <span className="text-sm font-bold tracking-tight">Falar no WhatsApp</span>
        </a>
      </aside>

    </div>
  );
}
