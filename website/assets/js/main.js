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
      'meta.title': 'Custom AI & Business Automation Solutions | TanzaBoost',
      'meta.description': 'TanzaBoost builds custom AI assistants, business automations, databases, and workflow systems that save time, reduce manual work, and keep your company in control.',
      'nav.services': 'Services',
      'nav.solutions': 'Solutions',
      'nav.how': 'How It Works',
      'nav.industries': 'Industries',
      'nav.contact': 'Contact',
      'nav.toggle': 'Open menu',
      'cta.consult': 'Book a Free Consultation',
      'cta.automate': 'See What We Can Automate',
      'cta.discuss': 'Discuss Your Workflow',
      'cta.whatsapp': 'WhatsApp',
      'cta.whatsappContact': 'Contact Us on WhatsApp',
      'link.learnMore': 'Learn more →',
      'footer.tagline': 'Custom AI and automation systems built around your business.',
      'footer.copy': '© <span id="year"></span> TanzaBoost. All rights reserved.',
      'hero.h1': 'Make Your Business Faster, Simpler, and Easier to Manage',
      'hero.lead': 'We build custom AI and automation systems that reduce manual work, improve customer service, and give you full control over your business processes.',
      'hero.benefits': 'Less manual work · Faster processes · Fewer mistakes · 24/7 assistance · Full control',
      'hero.trust': 'Start with one repetitive task. We will show you how it can be improved or automated.',
      'pos.title': 'We Do More Than Introduce AI',
      'pos.lead': 'Our goal is to save time, reduce mistakes, improve customer service, and make your company easier to manage.',
      'pos.body': 'We study how your business works and create a solution that fits your actual processes — from one simple automation to a complete internal management system.',
      'svc.section': 'Services',
      'svc.intro': 'Custom automations built around the work your team already does.',
      'svc1.title': 'Customer Inquiries',
      'svc1.p': 'Automatically respond to new inquiries, collect the required information, and forward a complete summary to the right employee.',
      'svc2.title': 'Administrative Work',
      'svc2.p': 'Automate repetitive data entry, reminders, approvals, file organization, and other time-consuming office tasks.',
      'svc3.title': 'AI Assistants',
      'svc3.p': 'Support customers and employees around the clock while important decisions remain under human control.',
      'svc4.title': 'CRM and Databases',
      'svc4.p': 'Organize customers, projects, documents, and communication in one central and searchable system.',
      'svc5.title': 'Documents and Quotations',
      'svc5.p': 'Prepare quotations, process documents, identify missing information, and request approval when required.',
      'svc6.title': 'Integrations and Reports',
      'svc6.p': 'Connect your existing tools and create clear dashboards, reports, and automatic status updates.',
      'flow.title': 'From New Inquiry to Complete Job Information',
      'flow.intro': 'A practical example of how automation can support your daily work.',
      'flow.s1.title': 'Customer Sends an Inquiry',
      'flow.s1.p': 'A request arrives through the website, email, or WhatsApp.',
      'flow.s2.title': 'The Assistant Responds Immediately',
      'flow.s2.p': 'The customer receives the correct questions or form.',
      'flow.s3.title': 'Information Is Organized',
      'flow.s3.p': 'Contact details, photos, location, requirements, and preferred times are collected.',
      'flow.s4.title': 'Your Team Receives a Complete Summary',
      'flow.s4.p': 'The responsible employee receives everything needed to continue the job.',
      'ctrl.title': 'A 24/7 Assistant — With Your Business in Control',
      'ctrl.lead': 'Your customized assistant can handle repetitive work at any time, while your company decides what it may complete independently and what requires human approval.',
      'ctrl.can.title': 'The Assistant Can',
      'ctrl.can.1': 'Respond to new inquiries',
      'ctrl.can.2': 'Collect and organize information',
      'ctrl.can.3': 'Prepare documents and summaries',
      'ctrl.can.4': 'Send reminders and status updates',
      'ctrl.can.5': 'Answer common questions',
      'ctrl.can.6': 'Escalate important cases',
      'ctrl.you.title': 'You Stay in Control',
      'ctrl.you.1': 'Define permissions and limits',
      'ctrl.you.2': 'Require approval for important actions',
      'ctrl.you.3': 'Review activity histories',
      'ctrl.you.4': 'Pause or override automations',
      'ctrl.you.5': 'Assign employee roles',
      'ctrl.you.6': 'Take over any conversation or process',
      'ctrl.note': 'Built with safeguards, human approval when needed, and clear activity history — so you keep full operational control.',
      'how.title': 'How It Works',
      'how.s1.title': 'We Analyze Your Workflow',
      'how.s1.p': 'You show us the tasks and processes that consume the most time.',
      'how.s2.title': 'We Design the Solution',
      'how.s2.p': 'We identify what can be automated and where human control should remain.',
      'how.s3.title': 'We Build and Test It',
      'how.s3.p': 'We create the system around your real workflow and test it with practical scenarios.',
      'how.s4.title': 'We Improve It With You',
      'how.s4.p': 'The solution can grow as your business, workload, and requirements change.',
      'sol.title': 'Solutions That Fit Your Scale',
      'sol.intro': 'These are possible project sizes — not fixed packages.',
      'sol.1.title': 'Start With One Task',
      'sol.1.p': 'Automate one repetitive process and demonstrate the practical value quickly.',
      'sol.2.title': 'Connect Several Processes',
      'sol.2.p': 'Connect customer inquiries, documents, reminders, communication, and internal workflows.',
      'sol.3.title': 'Build a Complete System',
      'sol.3.p': 'Create a customized platform with databases, dashboards, permissions, and AI assistance.',
      'ind.title': 'Industries We Support',
      'ind.intro': 'Workflow automation for businesses with recurring customer and office work.',
      'ind.1': 'Contractors and Skilled Trades',
      'ind.2': 'Construction Companies',
      'ind.3': 'Property Management',
      'ind.4': 'Cleaning Companies',
      'ind.5': 'Auto Repair Shops',
      'ind.6': 'Professional Services',
      'ind.more': 'And many more — including logistics, hotels, online stores, recruitment, restaurants, and training providers.',
      'rev.title': 'What Our Clients Say',
      'rev.intro': 'Practical feedback from businesses that automated real workflows with ProcessBoost.',
      'rev.1.q': '“ProcessBoost helped us simplify several time-consuming administrative processes. Our team now spends less time on repetitive tasks and has a much clearer overview of daily operations. The solution was built around the way our business actually works.”',
      'rev.1.name': 'Jason, Operations Manager',
      'rev.1.role': 'Recruitment Agency',
      'rev.2.q': '“We needed more than another standard software tool. ProcessBoost created a customized system that connects our information and automates important steps while keeping our team in control. The entire process was clear, practical, and professional.”',
      'rev.2.name': 'Richard, Managing Director',
      'rev.2.role': 'Property Management Company',
      'rev.3.q': '“The new automation has made our work faster and more organized. Customer inquiries and internal information can now be processed without the constant manual follow-up we needed before. It has made a noticeable difference to our everyday workload.”',
      'rev.3.name': 'William, Business Owner',
      'rev.3.role': 'Logistics Company',
      'final.title': 'Start With One Repetitive Task',
      'final.body': 'Show us one task your employees repeat every day, and we will show you how it could be completed faster, more reliably, and with less manual work.',
      'services.h1': 'Our Services',
      'services.tag': 'Custom AI and automation systems tailored to how your business actually works.',
      'services.page.intro': 'From a single repetitive task to a complete internal system — always with human control.',
      'solutions.h1': 'Solutions by Scale',
      'solutions.tag': 'Choose the level that matches your current needs. Every solution is built individually.',
      'industries.h1': 'Industries',
      'industries.tag': 'We adapt automation to the real workflows in your industry.',
      'contact.h1': 'Contact',
      'contact.tag': 'Tell us about one repetitive task — we will show you what can be improved or automated.',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.msg': 'Message',
      'contact.send': 'Send message',
      'contact.orwa': 'Or message via WhatsApp',
      'contact.whatsapp.title': 'WhatsApp',
      'contact.whatsapp.p': 'Fastest response during business hours.',
      'contact.email.title': 'Email',
      'contact.email.p': 'Share your company name, industry, and the task you want to improve.',
      'contact.location.title': 'Consultation',
      'contact.location.p': 'Book a free consultation to discuss your workflow and priorities.',
      'contact.whatsappBtn': 'Open WhatsApp',
      'contact.emailBtn': 'Write email',
      'contact.appointmentBtn': 'Book a Free Consultation',
      'contact.intro.title': "Hi, I'm Ralf.",
      'contact.intro.body': 'I help businesses reduce manual work with custom AI assistants and automation systems — built around your real processes, with full control staying in your hands.',
      'contact.photo.alt': 'Ralf — founder of TanzaBoost'
    },
    de: {
      'meta.title': 'Individuelle KI- & Business-Automatisierung | TanzaBoost',
      'meta.description': 'TanzaBoost entwickelt individuelle KI-Assistenten, Automatisierungen, Datenbanken und Workflow-Systeme, die Zeit sparen, manuelle Arbeit reduzieren und Ihr Unternehmen unter Kontrolle halten.',
      'nav.services': 'Leistungen',
      'nav.solutions': 'Lösungen',
      'nav.how': 'So funktioniert’s',
      'nav.industries': 'Branchen',
      'nav.contact': 'Kontakt',
      'nav.toggle': 'Menü öffnen',
      'cta.consult': 'Kostenlose Beratung buchen',
      'cta.automate': 'Was wir automatisieren können',
      'cta.discuss': 'Workflow besprechen',
      'cta.whatsapp': 'WhatsApp',
      'cta.whatsappContact': 'Per WhatsApp kontaktieren',
      'link.learnMore': 'Mehr erfahren →',
      'footer.tagline': 'Individuelle KI- und Automatisierungssysteme für Ihr Unternehmen.',
      'footer.copy': '© <span id="year"></span> TanzaBoost. Alle Rechte vorbehalten.',
      'hero.h1': 'Machen Sie Ihr Unternehmen schneller, einfacher und leichter steuerbar',
      'hero.lead': 'Wir entwickeln individuelle KI- und Automatisierungssysteme, die manuelle Arbeit reduzieren, den Kundenservice verbessern und Ihnen volle Kontrolle über Ihre Geschäftsprozesse geben.',
      'hero.benefits': 'Weniger Handarbeit · Schnellere Abläufe · Weniger Fehler · 24/7-Unterstützung · Volle Kontrolle',
      'hero.trust': 'Starten Sie mit einer wiederkehrenden Aufgabe. Wir zeigen Ihnen, wie sie verbessert oder automatisiert werden kann.',
      'pos.title': 'Wir machen mehr, als nur KI vorzustellen',
      'pos.lead': 'Unser Ziel: Zeit sparen, Fehler reduzieren, Kundenservice verbessern und Ihr Unternehmen leichter führbar machen.',
      'pos.body': 'Wir analysieren, wie Ihr Unternehmen arbeitet, und schaffen eine Lösung, die zu Ihren echten Prozessen passt — von einer einfachen Automatisierung bis zum kompletten internen Managementsystem.',
      'svc.section': 'Leistungen',
      'svc.intro': 'Individuelle Automatisierungen rund um die Arbeit, die Ihr Team bereits erledigt.',
      'svc1.title': 'Kundenanfragen',
      'svc1.p': 'Neue Anfragen automatisch beantworten, benötigte Informationen erfassen und eine vollständige Zusammenfassung an den richtigen Mitarbeiter senden.',
      'svc2.title': 'Büroarbeit',
      'svc2.p': 'Wiederkehrende Dateneingaben, Erinnerungen, Freigaben, Dateiorganisation und andere zeitintensive Büroaufgaben automatisieren.',
      'svc3.title': 'KI-Assistenten',
      'svc3.p': 'Kunden und Mitarbeitende rund um die Uhr unterstützen — wichtige Entscheidungen bleiben unter menschlicher Kontrolle.',
      'svc4.title': 'CRM und Datenbanken',
      'svc4.p': 'Kunden, Projekte, Dokumente und Kommunikation in einem zentralen, durchsuchbaren System organisieren.',
      'svc5.title': 'Dokumente und Angebote',
      'svc5.p': 'Angebote erstellen, Dokumente verarbeiten, fehlende Angaben erkennen und bei Bedarf eine Freigabe anfordern.',
      'svc6.title': 'Integrationen und Reports',
      'svc6.p': 'Bestehende Tools verbinden und klare Dashboards, Berichte sowie automatische Status-Updates erstellen.',
      'flow.title': 'Von der neuen Anfrage zur vollständigen Auftragsinfo',
      'flow.intro': 'Ein praktisches Beispiel, wie Automatisierung den Arbeitsalltag unterstützen kann.',
      'flow.s1.title': 'Kunde sendet eine Anfrage',
      'flow.s1.p': 'Eine Anfrage kommt über Website, E-Mail oder WhatsApp an.',
      'flow.s2.title': 'Der Assistent antwortet sofort',
      'flow.s2.p': 'Der Kunde erhält die richtigen Fragen oder ein Formular.',
      'flow.s3.title': 'Informationen werden geordnet',
      'flow.s3.p': 'Kontaktdaten, Fotos, Standort, Anforderungen und Wunschzeiten werden erfasst.',
      'flow.s4.title': 'Ihr Team erhält eine komplette Zusammenfassung',
      'flow.s4.p': 'Der zuständige Mitarbeiter erhält alles, was für den nächsten Schritt nötig ist.',
      'ctrl.title': 'Ein 24/7-Assistent — mit Ihrem Unternehmen unter Kontrolle',
      'ctrl.lead': 'Ihr individueller Assistent kann wiederkehrende Aufgaben jederzeit erledigen. Ihr Unternehmen entscheidet, was selbstständig laufen darf und was eine menschliche Freigabe braucht.',
      'ctrl.can.title': 'Der Assistent kann',
      'ctrl.can.1': 'Neue Anfragen beantworten',
      'ctrl.can.2': 'Informationen sammeln und ordnen',
      'ctrl.can.3': 'Dokumente und Zusammenfassungen vorbereiten',
      'ctrl.can.4': 'Erinnerungen und Status-Updates senden',
      'ctrl.can.5': 'Häufige Fragen beantworten',
      'ctrl.can.6': 'Wichtige Fälle eskalieren',
      'ctrl.you.title': 'Sie behalten die Kontrolle',
      'ctrl.you.1': 'Berechtigungen und Grenzen festlegen',
      'ctrl.you.2': 'Freigabe für wichtige Aktionen verlangen',
      'ctrl.you.3': 'Aktivitätsverläufe prüfen',
      'ctrl.you.4': 'Automatisierungen pausieren oder überschreiben',
      'ctrl.you.5': 'Mitarbeiterrollen zuweisen',
      'ctrl.you.6': 'Jedes Gespräch oder jeden Prozess übernehmen',
      'ctrl.note': 'Mit Sicherheitsmechanismen, menschlicher Freigabe bei Bedarf und klarer Aktivitätsgeschichte — für volle operative Kontrolle.',
      'how.title': 'So funktioniert’s',
      'how.s1.title': 'Wir analysieren Ihren Workflow',
      'how.s1.p': 'Sie zeigen uns die Aufgaben und Prozesse, die am meisten Zeit kosten.',
      'how.s2.title': 'Wir entwerfen die Lösung',
      'how.s2.p': 'Wir klären, was automatisiert werden kann und wo menschliche Kontrolle bleiben soll.',
      'how.s3.title': 'Wir bauen und testen',
      'how.s3.p': 'Wir erstellen das System um Ihren echten Workflow und testen es mit praxisnahen Szenarien.',
      'how.s4.title': 'Wir verbessern es gemeinsam',
      'how.s4.p': 'Die Lösung kann mitwachsen, wenn sich Geschäft, Arbeitslast und Anforderungen ändern.',
      'sol.title': 'Lösungen, die zu Ihrer Größe passen',
      'sol.intro': 'Das sind mögliche Projektgrößen — keine festen Preispakete.',
      'sol.1.title': 'Mit einer Aufgabe starten',
      'sol.1.p': 'Einen wiederkehrenden Prozess automatisieren und den praktischen Nutzen schnell zeigen.',
      'sol.2.title': 'Mehrere Prozesse verbinden',
      'sol.2.p': 'Kundenanfragen, Dokumente, Erinnerungen, Kommunikation und interne Abläufe verbinden.',
      'sol.3.title': 'Ein komplettes System bauen',
      'sol.3.p': 'Eine individuelle Plattform mit Datenbanken, Dashboards, Berechtigungen und KI-Unterstützung erstellen.',
      'ind.title': 'Branchen, die wir unterstützen',
      'ind.intro': 'Workflow-Automatisierung für Unternehmen mit wiederkehrender Kunden- und Büroarbeit.',
      'ind.1': 'Handwerk und Fachbetriebe',
      'ind.2': 'Bauunternehmen',
      'ind.3': 'Immobilienverwaltung',
      'ind.4': 'Reinigungsunternehmen',
      'ind.5': 'Kfz-Werkstätten',
      'ind.6': 'Professionelle Dienstleistungen',
      'ind.more': 'Und viele mehr — darunter Logistik, Hotels, Online-Shops, Personalvermittlung, Restaurants und Weiterbildung.',
      'rev.title': 'Das sagen unsere Kunden',
      'rev.intro': 'Praktisches Feedback von Unternehmen, die mit ProcessBoost echte Abläufe automatisiert haben.',
      'rev.1.q': '„ProcessBoost hat mehrere zeitaufwendige Abläufe in unserem Unternehmen deutlich vereinfacht. Unser Team verbringt jetzt weniger Zeit mit wiederkehrenden Aufgaben und hat eine bessere Übersicht über die täglichen Prozesse. Die Lösung wurde genau an unsere Arbeitsweise angepasst.“',
      'rev.1.name': 'Herbert, Geschäftsführer',
      'rev.1.role': 'Hausverwaltung',
      'rev.2.q': '„Wir wollten keine weitere Standardsoftware, an die wir unsere Abläufe anpassen müssen. ProcessBoost hat ein individuelles System entwickelt, das wichtige Arbeitsschritte automatisiert und uns trotzdem die vollständige Kontrolle lässt. Die Zusammenarbeit war verständlich, professionell und lösungsorientiert.“',
      'rev.2.name': 'Thomas, Betriebsleiter',
      'rev.2.role': 'Personalvermittlung',
      'rev.3.q': '„Durch die neue Automatisierung können wir Anfragen und interne Informationen schneller und strukturierter bearbeiten. Viele manuelle Zwischenschritte und ständige Rückfragen sind nicht mehr notwendig. Dadurch wird unser Arbeitsalltag spürbar einfacher.“',
      'rev.3.name': 'Sven, Inhaber',
      'rev.3.role': 'Logistikunternehmen',
      'final.title': 'Starten Sie mit einer wiederkehrenden Aufgabe',
      'final.body': 'Zeigen Sie uns eine Aufgabe, die Ihre Mitarbeitenden täglich wiederholen — und wir zeigen Ihnen, wie sie schneller, zuverlässiger und mit weniger Handarbeit erledigt werden kann.',
      'services.h1': 'Unsere Leistungen',
      'services.tag': 'Individuelle KI- und Automatisierungssysteme, angepasst an die reale Arbeitsweise Ihres Unternehmens.',
      'services.page.intro': 'Von einer einzelnen wiederkehrenden Aufgabe bis zum kompletten internen System — immer mit menschlicher Kontrolle.',
      'solutions.h1': 'Lösungen nach Größe',
      'solutions.tag': 'Wählen Sie das Niveau, das zu Ihren aktuellen Bedürfnissen passt. Jede Lösung wird individuell gebaut.',
      'industries.h1': 'Branchen',
      'industries.tag': 'Wir passen Automatisierung an die echten Workflows Ihrer Branche an.',
      'contact.h1': 'Kontakt',
      'contact.tag': 'Erzählen Sie uns von einer wiederkehrenden Aufgabe — wir zeigen Ihnen, was verbessert oder automatisiert werden kann.',
      'contact.name': 'Name',
      'contact.email': 'E-Mail',
      'contact.msg': 'Nachricht',
      'contact.send': 'Nachricht senden',
      'contact.orwa': 'Oder per WhatsApp schreiben',
      'contact.whatsapp.title': 'WhatsApp',
      'contact.whatsapp.p': 'Schnellste Antwort während der Geschäftszeiten.',
      'contact.email.title': 'E-Mail',
      'contact.email.p': 'Teilen Sie Firmenname, Branche und die Aufgabe, die Sie verbessern möchten.',
      'contact.location.title': 'Beratung',
      'contact.location.p': 'Buchen Sie eine kostenlose Beratung zu Workflow und Prioritäten.',
      'contact.whatsappBtn': 'WhatsApp öffnen',
      'contact.emailBtn': 'E-Mail schreiben',
      'contact.appointmentBtn': 'Kostenlose Beratung buchen',
      'contact.intro.title': 'Hallo, ich bin Ralf.',
      'contact.intro.body': 'Ich helfe Unternehmen, manuelle Arbeit mit individuellen KI-Assistenten und Automatisierungssystemen zu reduzieren — gebaut um Ihre realen Prozesse, mit voller Kontrolle bei Ihnen.',
      'contact.photo.alt': 'Ralf — Gründer von TanzaBoost'
    },
    es: {
      'meta.title': 'Soluciones personalizadas de IA y automatización | TanzaBoost',
      'meta.description': 'TanzaBoost crea asistentes de IA, automatizaciones, bases de datos y sistemas de flujo de trabajo personalizados que ahorran tiempo, reducen el trabajo manual y mantienen el control en su empresa.',
      'nav.services': 'Servicios',
      'nav.solutions': 'Soluciones',
      'nav.how': 'Cómo funciona',
      'nav.industries': 'Sectores',
      'nav.contact': 'Contacto',
      'nav.toggle': 'Abrir menú',
      'cta.consult': 'Reservar consulta gratuita',
      'cta.automate': 'Ver qué podemos automatizar',
      'cta.discuss': 'Hablar de su flujo de trabajo',
      'cta.whatsapp': 'WhatsApp',
      'cta.whatsappContact': 'Contactar por WhatsApp',
      'link.learnMore': 'Más información →',
      'footer.tagline': 'Sistemas personalizados de IA y automatización para su negocio.',
      'footer.copy': '© <span id="year"></span> TanzaBoost. Todos los derechos reservados.',
      'hero.h1': 'Haga su negocio más rápido, simple y fácil de gestionar',
      'hero.lead': 'Creamos sistemas personalizados de IA y automatización que reducen el trabajo manual, mejoran el servicio al cliente y le dan control total sobre sus procesos.',
      'hero.benefits': 'Menos trabajo manual · Procesos más rápidos · Menos errores · Asistencia 24/7 · Control total',
      'hero.trust': 'Empiece con una tarea repetitiva. Le mostraremos cómo mejorarla o automatizarla.',
      'pos.title': 'Hacemos más que presentar IA',
      'pos.lead': 'Nuestro objetivo es ahorrar tiempo, reducir errores, mejorar el servicio al cliente y hacer su empresa más fácil de gestionar.',
      'pos.body': 'Estudiamos cómo funciona su negocio y creamos una solución que encaja con sus procesos reales — desde una automatización simple hasta un sistema interno completo.',
      'svc.section': 'Servicios',
      'svc.intro': 'Automatizaciones personalizadas alrededor del trabajo que su equipo ya realiza.',
      'svc1.title': 'Consultas de clientes',
      'svc1.p': 'Responder automáticamente a nuevas consultas, recopilar la información necesaria y enviar un resumen completo al empleado correcto.',
      'svc2.title': 'Trabajo administrativo',
      'svc2.p': 'Automatizar entradas de datos, recordatorios, aprobaciones, organización de archivos y otras tareas de oficina que consumen tiempo.',
      'svc3.title': 'Asistentes de IA',
      'svc3.p': 'Apoyar a clientes y empleados las 24 horas, mientras las decisiones importantes siguen bajo control humano.',
      'svc4.title': 'CRM y bases de datos',
      'svc4.p': 'Organizar clientes, proyectos, documentos y comunicación en un sistema central y buscable.',
      'svc5.title': 'Documentos y cotizaciones',
      'svc5.p': 'Preparar cotizaciones, procesar documentos, detectar información faltante y solicitar aprobación cuando sea necesario.',
      'svc6.title': 'Integraciones e informes',
      'svc6.p': 'Conectar sus herramientas actuales y crear paneles claros, informes y actualizaciones de estado automáticas.',
      'flow.title': 'De una nueva consulta a la información completa del trabajo',
      'flow.intro': 'Un ejemplo práctico de cómo la automatización puede apoyar el trabajo diario.',
      'flow.s1.title': 'El cliente envía una consulta',
      'flow.s1.p': 'La solicitud llega por el sitio web, correo electrónico o WhatsApp.',
      'flow.s2.title': 'El asistente responde de inmediato',
      'flow.s2.p': 'El cliente recibe las preguntas o el formulario correctos.',
      'flow.s3.title': 'La información se organiza',
      'flow.s3.p': 'Se recopilan datos de contacto, fotos, ubicación, requisitos y horarios preferidos.',
      'flow.s4.title': 'Su equipo recibe un resumen completo',
      'flow.s4.p': 'El empleado responsable recibe todo lo necesario para continuar el trabajo.',
      'ctrl.title': 'Un asistente 24/7 — con su negocio bajo control',
      'ctrl.lead': 'Su asistente personalizado puede realizar trabajo repetitivo en cualquier momento, mientras su empresa decide qué puede completar solo y qué requiere aprobación humana.',
      'ctrl.can.title': 'El asistente puede',
      'ctrl.can.1': 'Responder a nuevas consultas',
      'ctrl.can.2': 'Recopilar y organizar información',
      'ctrl.can.3': 'Preparar documentos y resúmenes',
      'ctrl.can.4': 'Enviar recordatorios y actualizaciones de estado',
      'ctrl.can.5': 'Responder preguntas frecuentes',
      'ctrl.can.6': 'Escalar casos importantes',
      'ctrl.you.title': 'Usted mantiene el control',
      'ctrl.you.1': 'Definir permisos y límites',
      'ctrl.you.2': 'Exigir aprobación para acciones importantes',
      'ctrl.you.3': 'Revisar historiales de actividad',
      'ctrl.you.4': 'Pausar o anular automatizaciones',
      'ctrl.you.5': 'Asignar roles a empleados',
      'ctrl.you.6': 'Tomar cualquier conversación o proceso',
      'ctrl.note': 'Con salvaguardas, aprobación humana cuando haga falta e historial claro de actividad — para mantener el control operativo total.',
      'how.title': 'Cómo funciona',
      'how.s1.title': 'Analizamos su flujo de trabajo',
      'how.s1.p': 'Nos muestra las tareas y procesos que consumen más tiempo.',
      'how.s2.title': 'Diseñamos la solución',
      'how.s2.p': 'Identificamos qué se puede automatizar y dónde debe permanecer el control humano.',
      'how.s3.title': 'La construimos y la probamos',
      'how.s3.p': 'Creamos el sistema alrededor de su flujo real y lo probamos con escenarios prácticos.',
      'how.s4.title': 'La mejoramos con usted',
      'how.s4.p': 'La solución puede crecer a medida que cambian su negocio, carga de trabajo y requisitos.',
      'sol.title': 'Soluciones según su escala',
      'sol.intro': 'Estos son tamaños de proyecto posibles — no paquetes de precios fijos.',
      'sol.1.title': 'Empezar con una tarea',
      'sol.1.p': 'Automatizar un proceso repetitivo y demostrar el valor práctico con rapidez.',
      'sol.2.title': 'Conectar varios procesos',
      'sol.2.p': 'Conectar consultas, documentos, recordatorios, comunicación y flujos internos.',
      'sol.3.title': 'Construir un sistema completo',
      'sol.3.p': 'Crear una plataforma personalizada con bases de datos, paneles, permisos y asistencia de IA.',
      'ind.title': 'Sectores que apoyamos',
      'ind.intro': 'Automatización de flujos para negocios con trabajo recurrente de clientes y oficina.',
      'ind.1': 'Contratistas y oficios',
      'ind.2': 'Empresas de construcción',
      'ind.3': 'Gestión inmobiliaria',
      'ind.4': 'Empresas de limpieza',
      'ind.5': 'Talleres de automoción',
      'ind.6': 'Servicios profesionales',
      'ind.more': 'Y muchos más — incluida logística, hoteles, tiendas online, reclutamiento, restaurantes y formación.',
      'rev.title': 'Lo que dicen nuestros clientes',
      'rev.intro': 'Comentarios prácticos de empresas que automatizaron flujos de trabajo reales con ProcessBoost.',
      'rev.1.q': '“ProcessBoost nos ayudó a simplificar varios procesos administrativos que requerían mucho tiempo. Ahora nuestro equipo dedica menos tiempo a tareas repetitivas y tiene una visión mucho más clara de las operaciones diarias. La solución fue diseñada específicamente para nuestra forma de trabajar.”',
      'rev.1.name': 'José, Gerente de Operaciones',
      'rev.1.role': 'Agencia de contratación',
      'rev.2.q': '“No queríamos otra herramienta estándar que nos obligara a cambiar nuestros procesos. ProcessBoost creó un sistema personalizado que automatiza pasos importantes sin quitarnos el control. Todo el proyecto se desarrolló de forma clara, práctica y profesional.”',
      'rev.2.name': 'Javi, Director General',
      'rev.2.role': 'Administración de fincas',
      'rev.3.q': '“La nueva automatización ha hecho que nuestro trabajo sea más rápido y organizado. Ahora podemos gestionar las consultas de los clientes y la información interna con menos seguimiento manual. El cambio ha reducido considerablemente la carga de trabajo diaria.”',
      'rev.3.name': 'Manolo, Propietario',
      'rev.3.role': 'Empresa de logística',
      'final.title': 'Empiece con una tarea repetitiva',
      'final.body': 'Muéstrenos una tarea que sus empleados repiten cada día, y le mostraremos cómo puede completarse más rápido, con más fiabilidad y con menos trabajo manual.',
      'services.h1': 'Nuestros servicios',
      'services.tag': 'Sistemas personalizados de IA y automatización adaptados a cómo funciona realmente su negocio.',
      'services.page.intro': 'Desde una sola tarea repetitiva hasta un sistema interno completo — siempre con control humano.',
      'solutions.h1': 'Soluciones por escala',
      'solutions.tag': 'Elija el nivel que coincida con sus necesidades actuales. Cada solución se construye de forma individual.',
      'industries.h1': 'Sectores',
      'industries.tag': 'Adaptamos la automatización a los flujos reales de su sector.',
      'contact.h1': 'Contacto',
      'contact.tag': 'Cuéntenos una tarea repetitiva — le mostraremos qué se puede mejorar o automatizar.',
      'contact.name': 'Nombre',
      'contact.email': 'Correo electrónico',
      'contact.msg': 'Mensaje',
      'contact.send': 'Enviar mensaje',
      'contact.orwa': 'O escribir por WhatsApp',
      'contact.whatsapp.title': 'WhatsApp',
      'contact.whatsapp.p': 'Respuesta más rápida en horario laboral.',
      'contact.email.title': 'Correo electrónico',
      'contact.email.p': 'Comparta el nombre de su empresa, sector y la tarea que desea mejorar.',
      'contact.location.title': 'Consulta',
      'contact.location.p': 'Reserve una consulta gratuita para hablar de su flujo de trabajo y prioridades.',
      'contact.whatsappBtn': 'Abrir WhatsApp',
      'contact.emailBtn': 'Escribir correo',
      'contact.appointmentBtn': 'Reservar consulta gratuita',
      'contact.intro.title': 'Hola, soy Ralf.',
      'contact.intro.body': 'Ayudo a las empresas a reducir el trabajo manual con asistentes de IA y sistemas de automatización personalizados — construidos alrededor de sus procesos reales, con el control en sus manos.',
      'contact.photo.alt': 'Ralf — fundador de TanzaBoost'
    }
  };

  window.applyTranslations = function (lang) {
    var dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key) return;
      var value = dict[key];
      if (typeof value !== 'string') return;

      if (el.tagName === 'META' && el.getAttribute('name') === 'description') {
        el.setAttribute('content', value);
        return;
      }
      if (el.tagName === 'TITLE') {
        document.title = value;
        return;
      }
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = value;
        var yearEl = el.querySelector('#year');
        if (yearEl) yearEl.textContent = String(new Date().getFullYear());
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      var value = dict[key];
      if (typeof value === 'string') el.setAttribute('aria-label', value);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      var value = dict[key];
      if (typeof value === 'string') el.setAttribute('alt', value);
    });
  };
})();

/* Language switcher & persistence */
(function () {
  var buttons = document.querySelectorAll('.lang-switch [data-lang]');
  var blocks = document.querySelectorAll('[data-lang-block]');
  var supported = { en: true, de: true, es: true };
  var stored = localStorage.getItem('site.lang') || 'en';
  if (!supported[stored]) stored = 'en';

  setLanguage(stored, true);

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  function setLanguage(lang, skipStorage) {
    if (!supported[lang]) lang = 'en';
    if (!skipStorage) localStorage.setItem('site.lang', lang);
    document.documentElement.setAttribute('lang', lang);

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
