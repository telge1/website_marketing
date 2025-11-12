/* Mobile navigation toggle */
(function () {
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
})();

/* Simple i18n for common UI strings across pages */
(function () {
  var translations = {
    en: {
      'nav.services': 'Services',
      'nav.pricing': 'Pricing',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Contact',
      'index.deliver': 'What we deliver',
      'index.pricing': 'Packages & Pricing',
      'index.demos': 'Industry demos',
      'cta.start': 'Get started',
      'cta.viewDemos': 'View demos',
      'cta.details': 'View all details',
      'cta.whatsapp': 'WhatsApp',
      'footer.tagline': 'German developer · Local presence · Fast delivery',
      'footer.copy': '© <span id="year"></span> TanzaBoost. All rights reserved.',
      'services.h1': 'Our Services',
      'services.tag': 'Everything from one source – fast, professional, affordable.',
      'pricing.h1': 'Packages & Pricing',
      'pricing.tag': 'Transparent services. Book instantly via WhatsApp.',
      'pricing.book': 'Book via WhatsApp',
      'pricing.note': 'All prices include German quality, local server performance and 7 days support.',
      'link.learnMore': 'Learn more →',
      'cta.moreDemos': 'More demos',
      'link.learnMore': 'Learn more →',
      'price.from': 'from',
      'price.sub': '+ subscription',
      /* Services cards */
      'svc.instant.title': 'Instant websites',
      'svc.instant.p': 'Online within the same day – mobile‑ready, clean code and fast performance.',
      'svc.instant.li1': 'Mobile-ready design',
      'svc.instant.li2': 'Fast loading times',
      'svc.instant.li3': 'WhatsApp integration',
      'svc.multi.title': 'Multi‑page websites',
      'svc.multi.p': 'Up to 3–5 pages in our standard packages. Extensions anytime.',
      'svc.multi.li1': 'Home, services, contact',
      'svc.multi.li2': 'Modular expansion anytime',
      'svc.multi.li3': 'SEO basics included',
      'svc.landing.title': 'Landing pages',
      'svc.landing.p': 'Built to convert for campaigns, events or product launches.',
      'svc.landing.li1': 'Clear call-to-actions',
      'svc.landing.li2': 'Tracking-ready setups',
      'svc.landing.li3': 'A/B-test ready',
      /* Services: Domain & Hosting section */
      'hosting.h2': 'Domain & Hosting',
      'svc.domain.title': 'Domain',
      'svc.domain.p': 'Registration and configuration of your desired domain (.com, .tz, etc.).',
      'svc.hosting.title': 'Hosting',
      'svc.hosting.p': 'Local server performance for fast load times in Tanzania.',
      'svc.maintenance.title': 'Maintenance',
      'svc.maintenance.p': 'Technical support and updates depending on package.',
      /* Branding section */
      'branding.h2': 'Logo & Branding',
      'branding.logo.title': 'Logo design',
      'branding.logo.p': 'A clear, modern logo – included in the standard package.',
      'branding.colors.title': 'Colors & Typography',
      'branding.colors.p': 'Matching color palette and fonts for your brand.',
      'branding.card.title': 'Business card (optional)',
      'branding.card.p': 'Simple template for print or digital use.',
      /* Pricing cards */
      'pkg1.title': 'PACKAGE 1 – GOOGLE BOOST',
      'pkg1.f1': 'Google Business page: name, location, hours, phone, WhatsApp',
      'pkg1.f2': 'Logo included',
      'pkg1.f3': '3–5 photos',
      'pkg1.f4': 'Description in English + Swahili',
      'pkg1.f5': 'Activation on Google Maps',
      'pkg1.f6': 'Review link + guide for customer reviews',
      'pkg1.note': 'Recommended: Free QR code linking directly to your Google page.',
      'pkg2.title': 'PACKAGE 2 – BUSINESS SITE',
      'pkg2.f1': 'Everything from package 1',
      'pkg2.f2': 'Own website (3–5 pages)',
      'pkg2.f3': 'Home / About / Services / Contact (+ form)',
      'pkg2.f4': 'Domain & hosting included',
      'pkg2.f5': 'SEO‑optimized content',
      'pkg2.f6': 'Logo included',
      'pkg2.f7': 'Blog section (1 article included)',
      'pkg2.f8': 'Connected to Google Business page',
      'pkg2.f9': 'WhatsApp & social links',
      'pkg2.f10': 'Responsive design (mobile, tablet, desktop)',
      'pkg3.title': 'PACKAGE 3 – DIGITAL AUTOPILOT',
      'pkg3.f1': 'Everything from package 2',
      'pkg3.f2': 'Auto‑posting: Facebook, Instagram, TikTok',
      'pkg3.f3': '1–2 videos per month (AI/Canva‑based)',
      'pkg3.f4': 'AI texts and hashtags',
      'pkg3.f5': 'Blog automation: 1 article/week',
      'pkg3.f6': 'Monthly performance report (Telegram or PDF)',
      'pkg3.f7': 'Google Analytics integration · 1 month care included',
      /* Demo tiles */
      'demo.friseur': 'Barber',
      'demo.friseurSub': 'Barber demo',
      'demo.fashion': 'Fashion',
      'demo.fashionSub': 'Fashion demo',
      'demo.restaurant': 'Restaurant',
      'demo.restaurantSub': 'Restaurant demo',
      'demo.law': 'Law',
      'demo.lawSub': 'Law demo',
      'demo.realestate': 'Real Estate',
      'demo.realestateSub': 'Real estate demo',
      'demo.clinic': 'Clinic',
      'demo.clinicSub': 'Clinic demo',
      'portfolio.tag': 'Click a demo to preview the layout. We will adjust colors, content and photos to match your brand.',
      'portfolio.cta': 'Request your demo now',
      'flow.h2': "How it works",
      'flow.step1': "1) Choose package",
      'flow.step1p': "Pick the package that fits your goals.",
      'flow.step2': "2) Message on WhatsApp",
      'flow.step2p': "Send short info: name, industry, desired domain.",
      'flow.step3': "3) Go live same day",
      'flow.step3p': "We set everything up – you get your live website.",
      'contact.h1': 'Contact',
      'contact.tag': "It's easy – write on WhatsApp or use the form.",
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.msg': 'Message',
      'contact.send': 'Send message',
      'contact.orwa': 'Or message via WhatsApp',
      'contact.form': 'Short form',
      'contact.whatsapp.title': 'WhatsApp',
      'contact.whatsapp.p': 'Fastest response. 9–18h.',
      'contact.email.title': 'Email',
      'contact.email.p': 'Send key details (name, industry, desired domain).',
      'contact.location.title': 'Location',
      'contact.location.p': 'German developer, local availability. Meetings on request.',
      'contact.whatsappBtn': 'Open WhatsApp',
      'contact.emailBtn': 'Write email',
      'contact.appointmentBtn': 'Request appointment',
      'contact.intro.title': "Hi, I'm Ralf.",
      'contact.intro.body': 'German web developer based in Tanzania. I help local businesses get online fast with clean, reliable websites and friendly support.',
    },
    sw: {
      'nav.services': 'Huduma',
      'nav.pricing': 'Bei',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Mawasiliano',
      'index.deliver': 'Tunachokuletea',
      'index.pricing': 'Vifurushi & Bei',
      'index.demos': 'Mifano ya sekta',
      'cta.start': 'Anza sasa',
      'cta.viewDemos': 'Tazama mifano',
      'cta.details': 'Tazama maelezo yote',
      'cta.whatsapp': 'WhatsApp',
      'footer.tagline': 'Msanidi Mjerumani · Uwepo wa hapa · Utoaji wa haraka',
      'footer.copy': '© <span id="year"></span> TanzaBoost. Haki zote zimehifadhiwa.',
      'services.h1': 'Huduma Zetu',
      'services.tag': 'Kila kitu kutoka chanzo kimoja – haraka, kitaalamu, nafuu.',
      'pricing.h1': 'Vifurushi & Bei',
      'pricing.tag': 'Huduma wazi. Book kupitia WhatsApp mara moja.',
      'pricing.book': 'Book kupitia WhatsApp',
      'pricing.note': 'Bei zote zinajumuisha ubora wa Kijerumani, utendaji wa seva za hapa na siku 7 za msaada.',
      'link.learnMore': 'Jifunze zaidi →',
      'cta.moreDemos': 'Demos zaidi',
      'link.learnMore': 'Jifunze zaidi →',
      'price.from': 'kuanzia',
      'price.sub': '+ usajili',
      /* Services cards */
      'svc.instant.title': 'Tovuti za haraka',
      'svc.instant.p': 'Live siku hiyohiyo – tayari kwa simu, msimbo safi na kasi nzuri.',
      'svc.instant.li1': 'Muundo unaofaa simu',
      'svc.instant.li2': 'Muda mfupi wa kupakia',
      'svc.instant.li3': 'Muunganiko wa WhatsApp',
      'svc.multi.title': 'Tovuti za kurasa nyingi',
      'svc.multi.p': 'Kurasa 3–5 katika vifurushi vya kawaida. Upanuzi wakati wowote.',
      'svc.multi.li1': 'Kurasa: mwanzo, huduma, mawasiliano',
      'svc.multi.li2': 'Upanuzi wa moduli wakati wowote',
      'svc.multi.li3': 'Misingi ya SEO imejumuishwa',
      'svc.landing.title': 'Kurasa za kutua (Landing pages)',
      'svc.landing.p': 'Zenye kubadili wateja kwa kampeni, matukio au uzinduzi wa bidhaa.',
      'svc.landing.li1': 'Call-to-action zilizo wazi',
      'svc.landing.li2': 'Inayoandaliwa ufuatiliaji (tracking)',
      'svc.landing.li3': 'Inafaa kwa majaribio ya A/B',
      /* Services: Domain & Hosting section */
      'hosting.h2': 'Domain & Hosting',
      'svc.domain.title': 'Domain',
      'svc.domain.p': 'Usajili na usanidi wa domain unayotaka (.com, .tz, n.k.).',
      'svc.hosting.title': 'Hosting',
      'svc.hosting.p': 'Seva za hapa kwa kasi kubwa nchini Tanzania.',
      'svc.maintenance.title': 'Matengenezo',
      'svc.maintenance.p': 'Usaidizi wa kiufundi na masasisho kulingana na kifurushi.',
      /* Branding section */
      'branding.h2': 'Logo & Branding',
      'branding.logo.title': 'Ubunifu wa Logo',
      'branding.logo.p': 'Logo safi na ya kisasa – imejumuishwa kwenye kifurushi cha kawaida.',
      'branding.colors.title': 'Rangi & Aina za herufi',
      'branding.colors.p': 'Rangi na fonti zinazolingana na chapa yako.',
      'branding.card.title': 'Kadi ya biashara (hiari)',
      'branding.card.p': 'Kiolezo rahisi kwa uchapishaji au matumizi ya kidijitali.',
      /* Pricing cards */
      'pkg1.title': 'KIFURUSHI 1 – GOOGLE BOOST',
      'pkg1.f1': 'Ukurasa wa Google Business: jina, eneo, saa, simu, WhatsApp',
      'pkg1.f2': 'Logo imejumuishwa',
      'pkg1.f3': 'Picha 3–5',
      'pkg1.f4': 'Maelezo kwa Kiingereza + Kiswahili',
      'pkg1.f5': 'Uwezeshaji kwenye Google Maps',
      'pkg1.f6': 'Kiungo cha mapitio + maelekezo kwa wateja',
      'pkg1.note': 'Pendekezo: QR code ya bure kwenda moja kwa moja kwenye Google page yako.',
      'pkg2.title': 'KIFURUSHI 2 – BUSINESS SITE',
      'pkg2.f1': 'Vyote kutoka kifurushi 1',
      'pkg2.f2': 'Tovuti yako (kurasa 3–5)',
      'pkg2.f3': 'Mwanzo / Kuhusu sisi / Huduma / Mawasiliano (+ fomu)',
      'pkg2.f4': 'Domain & hosting vimejumuishwa',
      'pkg2.f5': 'Maudhui yaliyoboreshwa kwa SEO',
      'pkg2.f6': 'Logo imejumuishwa',
      'pkg2.f7': 'Sehemu ya blogu (makala 1 imejumuishwa)',
      'pkg2.f8': 'Muunganisho na Google Business page',
      'pkg2.f9': 'Viungo vya WhatsApp & mitandao ya kijamii',
      'pkg2.f10': 'Muundo unaojibika (simu, tablet, desktop)',
      'pkg3.title': 'KIFURUSHI 3 – DIGITAL AUTOPILOT',
      'pkg3.f1': 'Vyote kutoka kifurushi 2',
      'pkg3.f2': 'Chapisho otomatiki: Facebook, Instagram, TikTok',
      'pkg3.f3': 'Video 1–2 kwa mwezi (inayotegemea AI/Canva)',
      'pkg3.f4': 'Maandishi ya AI na hashtag',
      'pkg3.f5': 'Otomatiki ya blogu: makala 1/ wiki',
      'pkg3.f6': 'Ripoti ya utendaji kila mwezi (Telegram au PDF)',
      'pkg3.f7': 'Muunganiko wa Google Analytics · mwezi 1 wa utunzaji umejumuishwa',
      /* Demo tiles */
      'demo.friseur': 'Kinyozi',
      'demo.friseurSub': 'Demo ya kinyozi',
      'demo.fashion': 'Fashion',
      'demo.fashionSub': 'Demo ya fashion',
      'demo.restaurant': 'Mgahawa',
      'demo.restaurantSub': 'Demo ya mgahawa',
      'demo.law': 'Sheria',
      'demo.lawSub': 'Demo ya sheria',
      'demo.realestate': 'Nyumba na mali',
      'demo.realestateSub': 'Demo ya mali isiyohamishika',
      'demo.clinic': 'Kliniki',
      'demo.clinicSub': 'Demo ya kliniki',
      'portfolio.tag': 'Bofya demo ili kuona muundo. Tutarekebisha rangi, maudhui na picha kulingana na chapa yako.',
      'portfolio.cta': 'Omba demo yako sasa',
      'flow.h2': "Inavyofanya kazi",
      'flow.step1': "1) Chagua kifurushi",
      'flow.step1p': "Chagua kifurushi kinachofaa malengo yako.",
      'flow.step2': "2) Tuma WhatsApp",
      'flow.step2p': "Tuma taarifa fupi: jina, sekta, domain unayotaka.",
      'flow.step3': "3) Live siku hiyohiyo",
      'flow.step3p': "Tunaweka kila kitu – unapata tovuti yako hewani.",
      'contact.h1': 'Mawasiliano',
      'contact.tag': "Rahisi – tuma WhatsApp au tumia fomu.",
      'contact.name': 'Jina',
      'contact.email': 'Barua pepe',
      'contact.msg': 'Ujumbe',
      'contact.send': 'Tuma ujumbe',
      'contact.orwa': 'Au tuma kupitia WhatsApp',
      'contact.form': 'Fomu fupi',
      'contact.whatsapp.title': 'WhatsApp',
      'contact.whatsapp.p': 'Majibu ya haraka. Saa 9–18.',
      'contact.email.title': 'Barua Pepe',
      'contact.email.p': 'Tuma taarifa muhimu (jina, sekta, domain unayotaka).',
      'contact.location.title': 'Eneo',
      'contact.location.p': 'Msanidi Mjerumani, anapatikana hapa. Miadi kwa maombi.',
      'contact.whatsappBtn': 'Fungua WhatsApp',
      'contact.emailBtn': 'Andika barua pepe',
      'contact.appointmentBtn': 'Omba miadi',
      'contact.intro.title': 'Habari, mimi ni Ralf.',
      'contact.intro.body': 'Msanidi Mjerumani niliye hapa Tanzania. Nakusaidia kupata tovuti ya haraka, salama na msaada wa karibu kwa biashara yako.',
    }
  };

  window.applyTranslations = function (lang) {
    var dict = translations[lang] || {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key) return;
      var value = dict[key];
      if (typeof value === 'string') {
        if (el.hasAttribute('data-i18n-html')) {
          el.innerHTML = value;
        } else {
          el.textContent = value;
        }
      }
    });
  };
})();

/* Language switcher & persistence */
(function () {
  var buttons = document.querySelectorAll('.lang-switch [data-lang]');
  var blocks = document.querySelectorAll('[data-lang-block]');
  var stored = localStorage.getItem('site.lang') || 'sw';

  setLanguage(stored, true);

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  function setLanguage(lang, skipStorage) {
    if (!skipStorage) localStorage.setItem('site.lang', lang);
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'sw');

    buttons.forEach(function (b) {
      if (b.getAttribute('data-lang') === lang) b.classList.add('active');
      else b.classList.remove('active');
    });

    if (typeof window.applyTranslations === 'function') {
      window.applyTranslations(lang);
    }

    blocks.forEach(function (el) {
      if (el.getAttribute('data-lang-block') === lang) el.classList.remove('hidden');
      else el.classList.add('hidden');
    });
  }
})();

/* Footer year */
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();


