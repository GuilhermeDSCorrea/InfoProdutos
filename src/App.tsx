import { useState, useEffect } from 'react';
import { 
  Zap, 
  Target, 
  Brain, 
  Dumbbell, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  ArrowRight,
  ShieldCheck,
  Clock,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isStickyBtnVisible, setIsStickyBtnVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsStickyBtnVisible(true);
      } else {
        setIsStickyBtnVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-blue-200">
      {/* 1. HERO SECTION - DARK */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-[#050505] text-white px-4 py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-700 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl w-full text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold text-xs md:text-sm tracking-widest uppercase mb-8"
          >
            MASTER TESTO NATURAL
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black md:leading-[1.1] tracking-tight mb-6"
          >
            O protocolo natural que está ajudando homens comuns a recuperarem <span className="text-blue-500">disposição, foco e vitalidade</span> sem gastar fortunas
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center mt-12 animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-slate-500" />
          </motion.div>
        </div>
      </section>

      {/* 2. PAIN POINTS - WHITE */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 italic">
              Quantas vezes você já se olhou no espelho e pensou:
            </h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              “Eu não tenho mais a mesma energia de antes…”
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 mb-16"
          >
            {[
              "O cansaço aumenta.",
              "A motivação diminui.",
              "O rendimento físico cai.",
              "A mente fica lenta.",
              "A disposição desaparece."
            ].map((text, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-center gap-4 p-4 border-l-4 border-blue-500 bg-slate-50 rounded-r-lg">
                <AlertCircle className="text-blue-500 shrink-0" />
                <p className="text-lg md:text-xl font-medium text-slate-700">{text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-red-50 p-8 md:p-12 rounded-3xl border border-red-100"
          >
            <p className="text-xl font-bold text-slate-800 mb-8 uppercase tracking-wider text-center">
              E aos poucos você começa a perceber:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Menos foco",
                "Menos produtividade",
                "Menos confiança",
                "Menos desempenho",
                "Menos vontade até de treinar"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <XCircle className="text-red-500 shrink-0" />
                  <span className="text-xl font-extrabold text-slate-900">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-lg md:text-xl text-slate-600 font-medium">
              A verdade é que milhares de homens vivem isso diariamente… sem entender o motivo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. THE ERROR - LIGHT GRAY */}
      <section className="py-24 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-red-600 font-black text-sm tracking-[0.2em] uppercase mb-4 block underline underline-offset-8">
              O PIOR ERRO QUE A MAIORIA COMETE
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-8 mb-12">
              Quando percebem esses sinais, muitos acabam:
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              { icon: AlertCircle, text: "Gastando centenas de reais em suplementos aleatórios" },
              { icon: AlertCircle, text: "Comprando “fórmulas milagrosas” da internet" },
              { icon: AlertCircle, text: "Tentando soluções extremas" },
              { icon: AlertCircle, text: "Pulando de estratégia em estratégia sem resultado" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
              >
                <item.icon className="text-blue-600 shrink-0 mt-1" />
                <p className="text-lg font-bold text-slate-800 leading-snug tracking-tight">⚠ {item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 text-2xl font-bold text-slate-500 italic"
          >
            E no final continuam cansados, frustrados e sem evolução.
          </motion.p>
        </div>
      </section>

      {/* 4. THE SOLUTION - DARK */}
      <section className="py-24 px-4 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.1)_0%,transparent_50%)]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-blue-500 font-bold mb-6 tracking-widest uppercase">FOI POR ISSO QUE CRIAMOS O</p>
            <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter">MASTER TESTO NATURAL</h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Um protocolo digital simples, direto e natural para homens que querem recuperar vitalidade, disposição e desempenho.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              "Sem enrolação.",
              "Sem fórmulas absurdas.",
              "Sem promessas irreais."
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm"
              >
                <p className="text-xl font-black text-blue-500 uppercase">{text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 text-xl md:text-2xl font-medium text-slate-400"
          >
            Apenas estratégias práticas que você consegue aplicar na rotina.
          </motion.p>
        </div>
      </section>

      {/* 5. WHAT'S INSIDE - WHITE */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 px-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              DENTRO DO MASTER TESTO NATURAL VOCÊ VAI DESCOBRIR:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            {[
              { icon: Zap, text: "Os hábitos que estão destruindo sua energia sem você perceber" },
              { icon: Brain, text: "Estratégias naturais para melhorar disposição física e mental" },
              { icon: Dumbbell, text: "Como aumentar performance e constância nos treinos" },
              { icon: Target, text: "Ajustes simples que favorecem vitalidade masculina" },
              { icon: TrendingUp, text: "O passo a passo completo para aplicar imediatamente" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-8 bg-slate-50 border border-slate-100 rounded-3xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0">
                  <item.icon className="text-white w-6 h-6" />
                </div>
                <p className="text-lg md:text-xl font-bold text-slate-800 leading-snug">
                  ✔ {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. IMAGINE - GRADIENT */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">IMAGINE COMO SERIA:</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Acordar com mais disposição",
              "Sentir mais energia durante o dia",
              "Voltar a ter motivação para treinar",
              "Melhorar foco e produtividade",
              "Recuperar sua confiança naturalmente"
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex flex-col items-center text-center justify-center gap-4"
              >
                <CheckCircle2 className="w-8 h-8 text-white scale-125" />
                <p className="text-xl font-black">✅ {text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 text-center text-2xl font-bold"
          >
            Tudo isso começando por pequenas mudanças estratégicas.
          </motion.p>
        </div>
      </section>

      {/* 7. ANCHORING - LIGHT GRAY */}
      <section className="py-24 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-12">QUANTO VALERIA TER ISSO?</h2>
          <p className="text-xl md:text-2xl text-slate-600 mb-16 leading-relaxed max-w-2xl mx-auto">
            Se você fosse buscar esse tipo de informação separadamente…
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {[
              { text: "Protocolos especializados", price: "R$ 197" },
              { text: "Consultorias", price: "R$ 197" },
              { text: "Estratégias de rotina", price: "R$ 297" },
              { text: "Conteúdos organizados", price: "E muito mais" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
                <p className="font-bold text-slate-500 mb-2 uppercase text-xs tracking-widest">{item.text}</p>
                <p className="text-2xl font-black text-slate-900">{item.price}</p>
              </div>
            ))}
          </div>

          <p className="text-3xl md:text-5xl font-black text-slate-800 mb-8 italic">
            Ou até mais.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-slate-400">
            Mas hoje você não vai pagar nada perto disso.
          </p>
        </div>
      </section>

      {/* 8. OFFER SECTION - SPECIAL CALLOUT */}
      <section id="offer" className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto bg-slate-900 rounded-[3rem] p-8 md:p-16 text-center text-white border-8 border-blue-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15)_0%,transparent_70%)]" />
          
          <div className="relative z-10">
            <span className="inline-block px-6 py-2 rounded-full bg-blue-600 text-slate-900 font-extrabold text-sm tracking-widest uppercase mb-8">
              OFERTA PROMOCIONAL DE HOJE
            </span>

            <p className="text-3xl md:text-4xl font-bold text-slate-400 line-through mb-4">De R$ 97,90</p>
            <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase tracking-tighter">por apenas</h3>
            
            <div className="flex flex-col items-center mb-8">
              <p className="text-4xl md:text-6xl font-black text-blue-500">
                12x de <span className="text-5xl md:text-8xl">R$ 2,79</span>
              </p>
              <p className="text-2xl md:text-4xl font-bold text-slate-300 mt-2">ou R$ 27,90 à vista</p>
            </div>

            <p className="text-xl md:text-2xl text-blue-400 font-black mb-12 italic">
              Sim… menos do que você provavelmente gasta em um lanche.
            </p>

            <motion.a 
              href="https://pay.kiwify.com.br/fkqFCov"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-6 bg-blue-600 hover:bg-blue-500 text-slate-900 font-black text-xl md:text-3xl rounded-3xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.3)]"
            >
              🔥 QUERO MEU ACESSO AGORA!
              <ArrowRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <div className="flex items-center justify-center gap-8 mt-12 text-slate-400 font-bold uppercase text-xs tracking-widest">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <span>Seguro & Criptografado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHY SO CHEAP - LIGHT GRAY */}
      <section className="py-24 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">POR QUE O VALOR ESTÁ TÃO BAIXO?</h2>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12">
            Porque queremos que o máximo de pessoas consiga acessar o protocolo agora.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 bg-red-100 border border-red-200 text-red-700 rounded-3xl"
          >
            <p className="text-2xl font-black mb-4">⚠ Mas atenção:</p>
            <p className="text-xl font-bold">Esse preço promocional pode sair do ar a qualquer momento.</p>
            <p className="mt-4 text-lg">Depois disso, o valor volta ao normal.</p>
          </motion.div>
        </div>
      </section>

      {/* 10. GUARANTEE - WHITE */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-slate-50 p-12 rounded-[3rem] border border-slate-200">
          <div className="shrink-0">
            <ShieldCheck className="w-32 h-32 md:w-48 md:h-48 text-blue-600" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">VOCÊ NÃO TEM RISCO</h2>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              Você terá garantia para acessar o conteúdo e conhecer o protocolo com tranquilidade.
            </p>
            <p className="mt-6 text-xl md:text-2xl font-bold text-slate-800">
              Se dentro do prazo informado você perceber que o material não é para você, basta solicitar o reembolso conforme as regras da plataforma.
            </p>
          </div>
        </div>
      </section>

      {/* 11. WHO IS IT FOR - LIGHT GRAY */}
      <section className="py-24 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase">PARA QUEM É?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Homens cansados de se sentirem sem energia",
              "Quem quer melhorar desempenho físico e mental",
              "Homens que desejam recuperar disposição naturalmente",
              "Quem quer mais foco, produtividade e constância",
              "Quem busca um protocolo simples e aplicável"
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm"
              >
                <CheckCircle2 className="text-blue-500 shrink-0 w-8 h-8" />
                <p className="text-xl font-bold text-slate-800 leading-tight">✔ {text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL DECISION - DARK */}
      <section className="py-24 px-4 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.05)_0%,transparent_60%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter italic uppercase text-blue-500">A DECISÃO É SUA</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-20">
            <div className="p-8 border-2 border-white/10 rounded-3xl bg-white/5 opacity-50 grayscale">
              <p className="text-2xl font-black mb-4 uppercase tracking-wider text-slate-500 italic underline underline-offset-8 decoration-red-500">Você pode continuar adiando…</p>
              <p className="text-xl text-slate-400 font-medium">E aceitar a queda de energia como algo “normal”.</p>
            </div>
            <div className="p-8 border-2 border-blue-500/50 rounded-3xl bg-blue-500/5 shadow-[0_0_50px_rgba(37,99,235,0.1)]">
              <p className="text-2xl font-black mb-4 uppercase tracking-wider text-blue-400 italic underline underline-offset-8">OU</p>
              <p className="text-xl text-slate-100 font-bold">Pode começar hoje mesmo a mudar sua rotina com um método simples, acessível e natural.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA - WHITE */}
      <section className="py-24 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">🔥 GARANTA SEU ACESSO AGORA</h2>
            <p className="text-xl md:text-2xl text-slate-500 font-medium mb-12">
              Clique no botão abaixo e aproveite o valor promocional de apenas:
            </p>
            
            <div className="mb-16">
              <p className="text-7xl md:text-9xl font-black text-slate-900 tracking-tight">R$ 27,90</p>
              <p className="text-xl md:text-2xl text-blue-600 font-black mt-4 uppercase tracking-[0.2em]">Oferta por tempo limitado.</p>
            </div>

            <motion.a 
              href="https://pay.kiwify.com.br/fkqFCov"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 px-12 py-8 bg-blue-600 hover:bg-blue-500 text-slate-900 font-black text-2xl md:text-4xl rounded-full transition-all shadow-[0_20px_50px_rgba(37,99,235,0.4)]"
            >
              QUERO O PROTOCOLO COMPLETO!
              <ArrowRight className="w-10 h-10" />
            </motion.a>

            <div className="mt-12 flex flex-col items-center gap-4 text-slate-400 font-bold uppercase text-sm tracking-widest">
              <p>Acesso imediato + protocolo completo + garantia</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STICKY CTA */}
      <AnimatePresence>
        {isStickyBtnVisible && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full p-4 z-[999] md:hidden pointer-events-none"
          >
            <a 
              href="https://pay.kiwify.com.br/fkqFCov"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto w-full flex items-center justify-center py-5 bg-blue-600 text-slate-900 font-black text-xl rounded-2xl shadow-2xl"
            >
              GARANTIR ACESSO - R$ 27,90
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="py-12 bg-slate-950 text-slate-600 text-center text-sm font-medium px-4">
        <div className="max-w-4xl mx-auto border-t border-white/5 pt-8">
          <p>© 2026 Master Testo Natural - Todos os direitos reservados.</p>
          <p className="mt-4 max-w-2xl mx-auto opacity-50">
            Aviso: Este produto não substitui o aconselhamento médico especializado. Sempre consulte um profissional de saúde antes de iniciar qualquer protocolo ou mudança de estilo de vida.
          </p>
        </div>
      </footer>
    </div>
  );
}
