/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  ArrowRight, 
  Check, 
  Instagram, 
  Youtube, 
  ChevronDown, 
  ChevronUp,
  Star,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

import { GoogleGenAI } from "@google/genai";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-md text-dark' : 'bg-transparent py-6 text-white'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-baseline">
          <span className="font-serif italic text-2xl font-bold">yogame</span>
          <span className="text-xs ml-1 opacity-70">(club)</span>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          {['O FORMACIE', 'DLA KOGO', 'O INSTRUKTORCE', 'OPINIE'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className={`text-xs font-bold tracking-widest transition-colors ${isScrolled ? 'hover:text-accent' : 'hover:text-accent/80'}`}
            >
              {item}
            </a>
          ))}
        </div>

        <button className="btn-primary py-2 px-6 text-sm">ZACZNIJ TERAZ</button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const heroImage = "https://lh3.googleusercontent.com/d/1DppFCwGzn4CRVfNdRebIcDIP6mEUUYbR";

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Full-screen Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Yoga practice background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-[clamp(60px,10vw,120px)] leading-[0.85] font-black mb-6 text-white drop-shadow-md">
            yoga<span className="font-serif italic text-accent">me</span>
            <span className="text-xl align-top ml-2 opacity-70 font-normal text-white">(club)</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 font-medium max-w-md text-white drop-shadow-sm">
            Twoja przestrzeń do prawdziwej praktyki jogi. Wyjątkowa atmosfera, profesjonalni instruktorzy.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary px-10 py-4 shadow-xl">ZACZNIJ TERAZ</button>
            <button className="px-10 py-4 rounded-full font-medium border border-white/60 bg-white/10 backdrop-blur-lg text-white hover:bg-linear-to-r hover:from-accent hover:to-[#7a9fe8] hover:border-transparent transition-all duration-300 shadow-2xl">
              DOWIEDZ SIĘ WIĘCEJ
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative watermark */}
      <div className="absolute bottom-10 right-10 text-[15vw] font-black opacity-[0.03] pointer-events-none select-none leading-none">
        YOGAME
      </div>
    </section>
  );
};

const MainGoal = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
          GŁÓWNY CEL ONLINE-PRZESTRZENI
        </span>
        <h2 className="text-3xl md:text-5xl font-light leading-tight mb-16">
          Wyrobić nawyk dbania o siebie poprzez <br />
          <span className="font-serif italic font-bold">świadomy ruch i praktykę jogi.</span> <br />
          Rozpocznij drogę wewnętrznych i zewnętrznych zmian.
        </h2>
        
        <div className="relative group cursor-pointer mb-12">
          <div className="aspect-video bg-bg-light rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/d/1Jda754SZaUXG5aY2zJhU5FHGIKk84eW5" 
              alt="Yoga Video Preview" 
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                <Play fill="currentColor" size={32} className="ml-1" />
              </div>
            </div>
          </div>
        </div>
        
        <button className="btn-primary rounded-full px-12 py-4 shadow-lg hover:shadow-accent/30">
          SPRÓBUJ BEZPŁATNIE
        </button>
      </div>
    </section>
  );
};

const ForWhom = () => {
  const items = [
    { id: '01', title: 'Chcesz zacząć praktykę jogi od podstaw', desc: 'Idealne dla osób, które nigdy nie stały na macie.' },
    { id: '02', title: 'Szukasz spokoju i równowagi ciała i umysłu', desc: 'Praktyki skupione na redukcji stresu i wyciszeniu.' },
    { id: '03', title: 'Pragniesz elastyczności i siły przez 20-30 min dziennie', desc: 'Krótkie, ale intensywne sesje dopasowane do Twojego dnia.' },
    { id: '04', title: 'Czujesz się zagubiona w natłoku różnych programów', desc: 'Uporządkowana ścieżka rozwoju krok po kroku.' },
    { id: '05', title: 'Chcesz ćwiczyć we własnym tempie i harmonogramie', desc: 'Dostęp 24/7 z dowolnego miejsca na świecie.' },
    { id: '06', title: 'Marzysz o regularnej praktyce połączonej ze społecznością', desc: 'Wsparcie innych kobiet na tej samej drodze.' },
  ];

  return (
    <section id="dla-kogo" className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-16 font-light">
          Ten format dla Ciebie <span className="font-serif italic font-bold">jeśli...</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-4xl font-black text-accent opacity-40 mb-4 block">{item.id}</span>
              <h3 className="text-xl font-bold mb-4 leading-snug">{item.title}</h3>
              <p className="opacity-70 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SubscriptionContent = () => {
  const features = [
    "Dostęp do biblioteki 50+ praktyk jogi",
    "3 poziomy zaawansowania i 3 style jogi",
    "Chat ze społecznością yogame club",
    "Wykłady o teorii, filozofii jogi i technikach",
    "Nagrania sesji na żywo Q&A z instruktorką",
    "Markowe karty do ćwiczeń i notatek",
    "Mini-konstruktor do budowania własnej praktyki",
    "Specjalne promocje od polskich wellness marek",
    "Playlisty do zajęć"
  ];

  return (
    <section id="o-formacie" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/d/1kGdMBJFt6u9jvYLeGfryiB8UZO8E70zn" 
              alt="Yoga Subscription" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-3xl text-white shadow-xl hidden md:block">
            <p className="text-3xl font-bold">50+</p>
            <p className="text-xs uppercase tracking-widest opacity-80">praktyk wideo</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-4xl font-light mb-10">Co wchodzi w <span className="font-serif italic font-bold">subskrypcję?</span></h2>
          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center space-x-4 group"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <ArrowRight size={16} />
                </div>
                <span className="text-lg opacity-80">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="py-24 bg-bg-light relative overflow-hidden">
      <div className="watermark-text top-10 left-1/2 -translate-x-1/2 opacity-10">taryfy</div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex justify-between items-center mb-12">
          <button className="text-xs font-bold tracking-widest flex items-center space-x-2 opacity-50 hover:opacity-100 transition-opacity">
            <span>←</span> <span>WSZYSTKIE TARYFY</span>
          </button>
          <button className="text-xs font-bold tracking-widest flex items-center space-x-2 opacity-50 hover:opacity-100 transition-opacity">
            <span>PORÓWNAJ TARYFY</span> <span>→</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {/* Start */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="pricing-card"
          >
            <h3 className="text-2xl font-bold mb-6">Start</h3>
            <ul className="space-y-4 mb-10 opacity-70">
              <li className="flex items-center space-x-2"><Check size={16} className="text-accent" /> <span>1 miesiąc</span></li>
              <li className="flex items-center space-x-2"><Check size={16} className="text-accent" /> <span>3 poziomy po 10 praktyk</span></li>
              <li className="flex items-center space-x-2"><Check size={16} className="text-accent" /> <span>30 praktyk</span></li>
            </ul>
            <div className="mb-8">
              <span className="text-4xl font-black">79 zł</span>
              <span className="opacity-50 ml-2">/mies</span>
            </div>
            <button className="btn-outline w-full">DOŁĄCZ</button>
          </motion.div>
          
          {/* Progress */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -15, scale: 1.06 }}
            className="pricing-card featured relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-dark to-accent text-white text-[10px] font-bold px-4 py-1 rounded-full tracking-widest shadow-md">
              20% TANIEJ
            </div>
            <h3 className="text-2xl font-bold mb-6">Postęp</h3>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center space-x-2"><Check size={16} /> <span>3 miesiące</span></li>
              <li className="flex items-center space-x-2"><Check size={16} /> <span>Dostęp do 3 stylów</span></li>
              <li className="flex items-center space-x-2"><Check size={16} /> <span>95 praktyk</span></li>
            </ul>
            <div className="mb-8">
              <span className="block text-sm line-through opacity-60">237 zł</span>
              <span className="text-4xl font-black">189 zł</span>
              <span className="opacity-60 ml-2">/3 mies</span>
            </div>
            <button className="bg-white text-accent rounded-full w-full py-4 font-bold hover:bg-linear-to-r hover:from-accent hover:to-[#7a9fe8] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">DOŁĄCZ</button>
          </motion.div>
          
          {/* Result */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -10 }}
            className="pricing-card relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold px-4 py-1 rounded-full tracking-widest">
              30% TANIEJ
            </div>
            <h3 className="text-2xl font-bold mb-6">Rezultat</h3>
            <ul className="space-y-4 mb-10 opacity-70">
              <li className="flex items-center space-x-2"><Check size={16} className="text-accent" /> <span>6 miesięcy</span></li>
              <li className="flex items-center space-x-2"><Check size={16} className="text-accent" /> <span>Dostęp do całej biblioteki</span></li>
              <li className="flex items-center space-x-2"><Check size={16} className="text-accent" /> <span>Nowe praktyki co tydzień</span></li>
            </ul>
            <div className="mb-8">
              <span className="block text-sm line-through opacity-40">474 zł</span>
              <span className="text-4xl font-black">339 zł</span>
              <span className="opacity-50 ml-2">/6 mies</span>
            </div>
            <button className="btn-outline w-full">DOŁĄCZ</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Instructor = () => {
  return (
    <section id="o-instruktorce" className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-accent to-[#7a9fe8] rounded-[40px] overflow-hidden text-white shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[400px] lg:h-auto relative">
            <img 
              src="https://lh3.googleusercontent.com/d/15FcFmzadOk0enTl2dsb1JtIKzwZF4j2R" 
              alt="Anna Kowalska" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-10 lg:p-20 flex flex-col justify-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70 mb-6 block">
              O INSTRUKTORCE I AUTORCE KURSU
            </span>
            <h2 className="text-3xl mb-2 font-light">Cześć, mam na imię</h2>
            <h3 className="text-5xl md:text-7xl font-serif italic font-bold mb-8">Anna Kowalska,</h3>
            <p className="text-lg opacity-90 mb-12 leading-relaxed max-w-lg">
              certyfikowana instruktorka jogi, założycielka Yogame Studio. Moim celem jest pokazanie Ci, 
              że joga to nie tylko asany, ale styl życia, który przynosi spokój i siłę.
            </p>
            
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-black">7 lat</p>
                <p className="text-[10px] uppercase tracking-widest opacity-70">doświadczenia</p>
              </div>
              <div>
                <p className="text-3xl font-black">+2000</p>
                <p className="text-[10px] uppercase tracking-widest opacity-70">uczennic</p>
              </div>
              <div>
                <p className="text-3xl font-black">+300</p>
                <p className="text-[10px] uppercase tracking-widest opacity-70">praktyk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  const reviews = [
    { name: "Marta", text: "Klub yogame to najlepsza inwestycja w moje zdrowie psychiczne. Praktyki są idealnie dobrane do mojego nastroju.", stars: 5 },
    { name: "Kasia", text: "Nigdy nie sądziłam, że będę ćwiczyć regularnie w domu. Anna tłumaczy wszystko tak prosto i spokojnie.", stars: 5 },
    { name: "Ola", text: "Biblioteka praktyk jest ogromna! Uwielbiam to, że mogę wybrać sesję na 20 minut, gdy mam mało czasu.", stars: 5 },
    { name: "Julia", text: "Cudowna społeczność. Czuję się częścią czegoś większego, nawet ćwicząc sama w salonie.", stars: 5 },
    { name: "Ewa", text: "Moje plecy przestały boleć po zaledwie dwóch tygodniach regularnych sesji. Polecam każdemu!", stars: 5 },
    { name: "Magda", text: "Design strony i jakość nagrań są na najwyższym poziomie. Czysta przyjemność z praktyki.", stars: 5 },
  ];

  return (
    <section id="opinie" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <motion.div 
        style={{ y }}
        className="watermark-text top-20 right-0 opacity-10"
      >
        reviews
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-light text-center mb-16">Wasze <span className="font-serif italic font-bold">opinie</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="review-card"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-bg-light overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${review.name}`} alt={review.name} referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(review.stars)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
                <Quote className="ml-auto text-accent opacity-20" size={32} />
              </div>
              <p className="opacity-80 italic text-sm leading-relaxed">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Equipment = () => {
  const items = [
    { name: "Mata do jogi", size: "183 x 61 cm", shape: "rounded-lg", image: "https://lh3.googleusercontent.com/d/1YNBij0TjnU61ik_VvpEapY2ctibMzy6-" },
    { name: "Blok do jogi", size: "23 x 15 x 7.5 cm", shape: "rounded-xl", image: "https://lh3.googleusercontent.com/d/1Twpb93-CyohjOlD1x-Kcv7iwZm_asblX" },
    { name: "Wałek / Bolster", size: "60 x 20 cm", shape: "rounded-full", image: "https://lh3.googleusercontent.com/d/147bCJ3WVedTg5IQ7JUQnoWt4GmYKsbph" },
  ];

  return (
    <section className="py-24 bg-bg-light relative overflow-hidden">
      <div className="watermark-text bottom-10 left-0 opacity-10">rekwizyty</div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl font-light mb-16">Sprzęt, który będzie Ci potrzebny do praktyki:</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className={`w-48 h-48 bg-white/50 mb-8 flex items-center justify-center ${item.shape} shadow-inner overflow-hidden`}>
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className={`w-32 h-32 bg-accent/20 ${item.shape}`}></div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-sm opacity-50 uppercase tracking-widest">{item.size}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "PRZECIWWSKAZANIA DO UCZESTNICTWA", a: "Główne przeciwwskazania to ostre stany zapalne, niedawne operacje, zaawansowane nadciśnienie oraz niektóre urazy kręgosłupa. Zawsze skonsultuj się z lekarzem przed rozpoczęciem nowej aktywności fizycznej." },
    { q: "JAK DZIAŁA SUBSKRYPCJA YOGAME?", a: "Subskrypcja daje Ci nielimitowany dostęp do wszystkich materiałów wideo, chatu społeczności i materiałów dodatkowych przez wybrany okres czasu (1, 3 lub 6 miesięcy)." },
    { q: "JAK ANULOWAĆ SUBSKRYPCJĘ?", a: "Możesz anulować subskrypcję w dowolnym momencie w ustawieniach swojego profilu. Dostęp do materiałów zachowasz do końca opłaconego okresu." },
    { q: "CZY MOGĘ ĆWICZYĆ BEZ DOŚWIADCZENIA?", a: "Tak! Nasz program 'Start' jest stworzony specjalnie dla osób początkujących. Anna prowadzi Cię za rękę od pierwszego oddechu." },
    { q: "NA JAKICH URZĄDZENIACH MOGĘ ĆWICZYĆ?", a: "Platforma działa na komputerach, tabletach i smartfonach. Wystarczy połączenie z internetem i przeglądarka." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div>
          <h2 className="text-[120px] font-black text-accent leading-none opacity-20">FAQ</h2>
        </div>
        
        <div className="lg:col-span-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left group"
              >
                <span className="text-lg font-bold tracking-wide group-hover:text-accent transition-colors">{faq.q}</span>
                {openIndex === idx ? <ChevronUp className="text-accent" /> : <ChevronDown className="opacity-30" />}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 pb-2 opacity-70 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          
          <div className="mt-16 text-center lg:text-left">
            <p className="text-xl mb-6">Masz jeszcze pytania?</p>
            <button className="btn-primary">NAPISZ DO NAS</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bg-light pt-24 pb-12 relative overflow-hidden">
      <div className="watermark-text bottom-0 left-1/2 -translate-x-1/2 opacity-5">yogame</div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-baseline mb-8">
              <span className="font-serif italic text-2xl font-bold">yogame</span>
              <span className="text-xs ml-1 opacity-70">(club)</span>
            </div>
            <div className="flex flex-col space-y-4">
              {['O FORMACIE', 'DLA KOGO', 'O INSTRUKTORCE', 'OPINIE'].map((item) => (
                <a key={item} href="#" className="text-sm font-bold tracking-widest hover:text-accent transition-colors">{item}</a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase mb-8 opacity-50">NEWSLETTER</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Twój e-mail" 
                className="bg-white rounded-l-full px-6 py-3 w-full focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <button className="bg-linear-to-r from-accent to-[#7a9fe8] text-white rounded-r-full px-6 py-3 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase mb-8 opacity-50">SOCIAL MEDIA</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase mb-8 opacity-50">DOKUMENTY</h4>
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">POLITYKA PRYWATNOŚCI</a>
              <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">REGULAMIN</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-accent/20 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest opacity-40">
          <p>© 2026 YOGAME CLUB. WSZYSTKIE PRAWA ZASTRZEŻONE.</p>
          <p className="mt-4 md:mt-0">DESIGNED WITH LOVE FOR YOGA</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <MainGoal />
        <ForWhom />
        <SubscriptionContent />
        <Pricing />
        <Instructor />
        <Reviews />
        <Equipment />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
