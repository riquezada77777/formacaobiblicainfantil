/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  BookOpen, 
  Palette, 
  Gamepad2, 
  Flame, 
  Star, 
  ShieldCheck, 
  ChevronDown, 
  Gift, 
  FolderOpen,
  ArrowRight,
  Heart,
  X,
  Target,
  Sparkles,
  Zap,
  ShieldAlert,
  Users,
  User,
  Lightbulb,
  Clock,
  Layout,
  Shield,
  Check,
  CheckCircle2,
  AlertCircle,
  Image as ImageIcon
} from 'lucide-react';

// --- Types ---
interface Plan {
  id: string;
  name: string;
  badge?: string;
  internalBadge?: string;
  priceOriginal: string;
  price: string;
  savings?: string;
  highlighted: boolean;
  benefits: string[];
  bonuses?: string[];
  cta: string;
}

// --- Components ---

const TopBar = () => (
  <div className="bg-brand-orange text-white py-2 px-4 text-center font-bold text-[10px] sm:text-xs tracking-widest uppercase">
    <motion.span
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      Atenção: Condições especiais válidas apenas para hoje
    </motion.span>
  </div>
);

const SectionTitle = ({ title, subtitle, color = "text-brand-blue" }: { title: string, subtitle?: string, color?: string }) => (
  <div className="text-center mb-10 sm:mb-12 px-6">
    <h2 className={`font-display text-2xl sm:text-4xl font-extrabold mb-3 sm:mb-4 leading-tight ${color}`}>
      {title}
    </h2>
    {subtitle && <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">{subtitle}</p>}
  </div>
);

const FeatureCard: React.FC<{ icon: any, title: string }> = ({ icon: Icon, title }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] shadow-soft flex flex-col items-center text-center border border-gray-100"
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-bg text-brand-orange rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6">
        <Icon size={24} className="sm:w-8 sm:h-8" />
      </div>
      <h3 className="font-display font-extrabold text-brand-blue text-sm sm:text-base leading-tight">
        {title}
      </h3>
    </motion.div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0 py-2">
      <button 
        type="button"
        onClick={() => { setIsOpen(!isOpen); }}
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="font-bold text-gray-700 group-hover:text-brand-blue transition-colors pr-8">{question}</span>
        <ChevronDown size={20} className={`text-brand-orange transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-500 text-sm sm:text-base leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TestimonialCarousel = () => {
  const testimonials = [
    { 
      text: "Meu filho só ficava no celular… agora ele mesmo pede pra fazer as atividades. Mudou muito aqui em casa.", 
      author: "Juliana R.", 
      role: "mãe", 
      color: "bg-pink-100 text-pink-600",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
    },
    { 
      text: "Eu não sabia como ensinar a Bíblia pra minha filha. Agora ficou simples, só abro e uso.", 
      author: "Marcos S.", 
      role: "pai", 
      color: "bg-blue-100 text-blue-600",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
    },
    { 
      text: "Usei com meus sobrinhos e eles realmente se interessaram mais. Ficou leve e divertido.", 
      author: "Fernanda A.", 
      role: "tia", 
      color: "bg-purple-100 text-purple-600",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces"
    },
    { 
      text: "Uso com meus netos e eles prestam mais atenção nas histórias. Gostei muito.", 
      author: "Maria L.", 
      role: "avó", 
      color: "bg-orange-100 text-orange-600",
      image: "https://images.unsplash.com/photo-1544161513-0179fe746ef5?w=150&h=150&fit=crop&crop=faces"
    },
    { 
      text: "Excelente para ensinar de forma simples. Uso até com meus alunos.", 
      author: "Ana Paula M.", 
      role: "professora", 
      color: "bg-brand-blue/10 text-brand-blue",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces"
    },
  ];

  // Duplicate the array to create the infinite effect
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden py-10 relative">
      <div className="flex animate-infinite-scroll w-max gap-6">
        {doubledTestimonials.map((t, i) => (
          <div 
            key={i} 
            className="flex-shrink-0 w-[280px] sm:w-[350px] bg-white p-6 rounded-3xl shadow-soft border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-gray-600 text-sm sm:text-base italic leading-relaxed mb-6 font-medium">
                "{t.text}"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm overflow-hidden flex-shrink-0 ${t.color}`}>
                {t.image ? (
                  <img src={t.image} alt={t.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  <User size={20} />
                )}
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm leading-tight">{t.author}</h4>
                <p className="text-gray-400 text-xs font-medium">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const plans: Plan[] = [
    {
      id: 'full', // Complete Plan (Right on desktop, First on mobile)
      name: 'Formação Completa',
      badge: 'MAIS ESCOLHIDO',
      internalBadge: 'FORMAÇÃO COMPLETA',
      priceOriginal: '97,00',
      price: '22,90',
      savings: 'Economize R$74,10',
      highlighted: true,
      benefits: [
        'Tudo do plano essencial',
        '+160 atividades bíblicas',
        '+100 desenhos bíblicos',
        'Álbum de figurinhas',
        'Mini Bíblia',
        'Bônus exclusivos completos',
        'Acesso vitalício'
      ],
      bonuses: [
        'O que fazer quando seu filho pede o celular na hora',
        'Atividades pra usar nos momentos mais difíceis do dia',
        'Desafios que prendem a atenção imediatamente',
        'Cartões simples que ajudam seu filho a lembrar sem esforço'
      ],
      cta: '🎁 Quero Acesso Completo!'
    },
    {
      id: 'basic', // Essential Plan (Left on desktop, Second on mobile)
      name: 'Plano Essencial',
      badge: 'PLANO ESSENCIAL',
      priceOriginal: '67,00',
      price: '12,00',
      highlighted: false,
      benefits: [
        'Atividades bíblicas base',
        'Desenhos para colorir',
        'Histórias bíblicas',
        'Acesso vitalício'
      ],
      cta: 'Quero Acesso Essencial'
    }
  ];

  const handlePlanClick = (planId: string) => {
    if (planId === 'basic') {
      setIsUpgradeModalOpen(true);
    } else {
      window.location.href = 'https://pagamentosimples.com.br/glFKkcyL';
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-orange selection:text-white">
      <TopBar />

      {/* --- HERO SECTION --- (Headline baseada em dor real) */}
      <section className="relative pt-8 sm:pt-16 pb-16 sm:pb-24 px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-[9px] sm:text-xs font-black uppercase tracking-widest mb-6 sm:mb-8">
            <Zap size={14} /> Pare de brigar com seu filho por causa do celular (faça isso em minutos)
          </span>
          <h1 className="font-display text-4xl sm:text-7xl font-black text-brand-blue leading-[1.05] mb-6 sm:mb-8">
            Seu filho não larga o <span className="text-brand-orange bg-brand-orange/10 px-2 sm:px-3 rounded-lg">celular</span> e tudo vira briga?
          </h1>
          <p className="text-gray-600 text-lg sm:text-2xl mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-bold">
            Substitua o celular por atividades que prendem a atenção — sem gritar, sem forçar e sem precisar preparar nada
          </p>

          <div className="relative mb-14 max-w-4xl mx-auto group">
            <div className="relative z-10 bg-white p-3 sm:p-4 rounded-[2rem] shadow-2xl border-8 border-white/50 overflow-hidden transform group-hover:scale-[1.01] transition-transform duration-500">
              <div className="aspect-[16/9] w-full bg-gradient-to-br from-brand-bg to-brand-gold/5 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://i.ibb.co/wN39x39n/69f11fd6-6d90-4ab7-8bf7-0e0944e704c6.png" 
                  alt="Mockup do Acervo Bíblico Infantil"
                  className="w-full h-full object-contain p-2"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 right-4 bg-brand-blue text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-lg">
                   Acesso Imediato em PDF
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl opacity-50 -z-10"></div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full max-w-md bg-brand-green hover:bg-green-600 text-white font-black py-6 px-8 rounded-3xl shadow-2xl shadow-green-200/50 transition-all text-2xl uppercase tracking-tight"
            >
              QUERO MEU FILHO APRENDENDO SOBRE DEUS
            </motion.button>
            <div className="flex items-center gap-2 text-brand-blue font-black text-sm">
               <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />)}
               </div>
               <span>Mais de 1.000 famílias já estão usando</span>
            </div>
            <p className="text-gray-400 text-xs font-black uppercase tracking-widest">
              Acesso imediato • Pagamento único • Sem mensalidade
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- PROBLEMA (Ampliando a dor emocional) --- */}
      <section className="py-16 sm:py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 bg-brand-orange/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center mb-6 sm:mb-8">
             <div className="w-16 h-1 bg-brand-orange rounded-full"></div>
          </div>
          <h2 className="text-center font-display text-3xl sm:text-5xl font-black text-brand-blue mb-10 sm:mb-14">
            Seja sincero...
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
               <p className="text-red-700 font-bold mb-2 flex items-center gap-2">
                 <AlertCircle size={18} /> Você tira o celular... e vira briga
               </p>
               <p className="text-red-900/60 text-sm leading-relaxed">Aquela paz que você queria se transforma em estresse e choro em segundos.</p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
               <p className="text-red-700 font-bold mb-2 flex items-center gap-2">
                 <AlertCircle size={18} /> Seu filho só presta atenção na tela
               </p>
               <p className="text-red-900/60 text-sm leading-relaxed">Parece impossível competir com o brilho e a velocidade dos vídeos do YouTube.</p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
               <p className="text-red-700 font-bold mb-2 flex items-center gap-2">
                 <AlertCircle size={18} /> Você quer ensinar algo bom, mas não sabe como começar
               </p>
               <p className="text-red-900/60 text-sm leading-relaxed">Você sabe que ele precisa de Deus, mas sentar para ler a Bíblia parece uma tarefa difícil demais.</p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
               <p className="text-red-700 font-bold mb-2 flex items-center gap-2">
                 <AlertCircle size={18} /> No fim do dia, parece que o celular ganhou
               </p>
               <p className="text-red-900/60 text-sm leading-relaxed">Fica aquela culpa de no fundo saber que as telas estão educando seu filho.</p>
            </div>
          </div>
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-brand-orange font-black uppercase tracking-widest text-xs mb-4">A mudança começa aqui</p>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-brand-blue leading-tight italic">
              "Foi assim que eu parei de brigar com meu filho por causa do celular."
            </h3>
          </div>
        </div>
      </section>

      {/* --- APRESENTAÇÃO DO PRODUTO (Foco em Solução Prática) --- */}
      <section className="py-16 sm:py-24 px-6">
        <SectionTitle 
          title="Uma forma simples de tirar seu filho do celular sem estresse" 
          subtitle="Você só precisa imprimir e começar — seu filho se envolve sozinho"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'Seu filho aprende enquanto se diverte', icon: BookOpen },
            { title: 'Mais tempo de verdade com seu filho', icon: Users },
            { title: 'Jogos que Ensinam Valores', icon: Gamepad2 },
            { title: 'Mini Bíblia Personalizada', icon: Heart },
          ].map((item, i) => (
            <FeatureCard key={i} title={item.title} icon={item.icon} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 p-8 border-2 border-dashed border-gray-200 rounded-[2rem] bg-gray-50 flex flex-col items-center justify-center text-center">
          <ImageIcon size={48} className="text-gray-300 mb-4" />
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs sm:text-sm">
            [INSERIR AQUI IMAGENS REAIS DE CRIANÇA USANDO O MATERIAL]
          </p>
        </div>
      </section>

      {/* --- POR QUE É TÃO COMPLETO (Gatilhos Mentais Fortes) --- */}
      <section className="py-16 sm:py-24 px-6 bg-white">
        <SectionTitle 
          title="⭐ Por que esse acervo é tão completo?" 
          subtitle="Tudo o que você precisa para uma educação bíblica transformadora e sem estresse."
        />
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Você não precisa preparar nada", 
                text: "É só abrir e usar com seu filho. Sem estresse.",
                icon: Zap
              },
              { 
                title: "Tudo organizado e fácil", 
                text: "Sem bagunça, sem confusão. Pronto para imprimir.",
                icon: FolderOpen
              },
              { 
                title: "Diversão com propósito", 
                text: "Seu filho aprende enquanto se diverte. O melhor dos dois mundos.",
                icon: Sparkles
              },
              { 
                title: "Mais tempo longe das telas", 
                text: "Substitui o celular por algo melhor. Recupere a atenção do seu filho.",
                icon: Smartphone
              },
              { 
                title: "Mesmo sem experiência", 
                text: "Simples, direto e fácil de aplicar. Não precisa ser teólogo.",
                icon: Lightbulb
              },
              { 
                title: "Momentos em família", 
                text: "Crie conexão real dentro de casa. Momentos que ficam para sempre.",
                icon: Users
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] border border-gray-100 hover:border-brand-orange/20 hover:shadow-soft transition-all group"
              >
                 <div className="w-12 h-12 bg-brand-bg text-brand-orange rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <item.icon size={28} />
                 </div>
                 <h5 className="font-black text-brand-blue text-lg mb-3 leading-tight">{item.title}</h5>
                 <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.text}</p>
              </motion.div>
            ))}
        </div>
      </section>

      {/* --- BÔNUS EXCLUSIVOS (GRÁTIS HOJE) --- */}
      <section className="py-16 sm:py-24 px-6 bg-brand-gold/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -ml-32 -mt-32"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <SectionTitle 
            title="🎁 BÔNUS EXCLUSIVOS (GRÁTIS HOJE)" 
            subtitle="Você leva tudo isso sem pagar nada a mais hoje"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "O que fazer quando seu filho pede o celular na hora",
                desc: "Estratégias práticas para lidar com a dependência digital.",
                benefits: ["Ajuda no início", "Simples no dia a dia", "Facilita o aprendizado"],
                originalPrice: "R$37",
                icon: BookOpen
              },
              {
                title: "Atividades pra usar nos momentos mais difíceis do dia",
                desc: "Ideias simples para ensinar em poucos minutos, perfeito para pressa.",
                benefits: ["Piedade em minutos", "Fácil de aplicar", "Uso imediato"],
                originalPrice: "R$27",
                icon: Clock
              },
              {
                title: "Desafios que prendem a atenção imediatamente",
                desc: "Desafios leves e divertidos que engajam a criança na hora.",
                benefits: ["Aumenta o interesse", "Dinâmico", "Divertido"],
                originalPrice: "R$47",
                icon: Flame
              },
              {
                title: "Cartões simples que ajudam seu filho a lembrar sem esforço",
                desc: "Mensagens simples e visuais bonitos para memorizar valores.",
                benefits: ["Fácil de entender", "Ajuda na memória", "Uso diário"],
                originalPrice: "R$17",
                icon: Layout
              }
            ].map((bonus, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-[3rem] shadow-soft border-2 border-brand-gold/5 text-left flex flex-col group justify-between h-full relative hover:shadow-xl hover:shadow-brand-gold/10 transition-all font-sans"
              >
                <div>
                  <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold rounded-2xl flex items-center justify-center mb-6 shadow-inner ring-4 ring-brand-gold/5">
                    <bonus.icon size={28} />
                  </div>
                  <h4 className="font-extrabold text-brand-blue text-lg mb-3 leading-tight group-hover:text-brand-orange transition-colors">
                    🎁 {bonus.title}
                  </h4>
                  <p className="text-gray-500 text-xs mb-6 leading-relaxed font-bold italic opacity-80">
                    “{bonus.desc}”
                  </p>
                  <ul className="space-y-2 mb-8">
                    {bonus.benefits.map((b, j) => (
                      <li key={j} className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-tight">
                        <Check size={12} className="text-brand-green" strokeWidth={3} /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-gray-50">
                   <div className="flex flex-col gap-0.5">
                     <span className="text-[10px] font-bold text-gray-300 line-through">DE {bonus.originalPrice}</span>
                     <div className="flex items-center justify-between">
                       <span className="text-xl font-black text-brand-green tracking-tighter">R$0 HOJE</span>
                       <Gift size={20} className="text-brand-gold/20" />
                     </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-blue text-white p-6 sm:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles size={120} />
            </div>
            <p className="text-lg sm:text-2xl font-bold leading-relaxed relative z-10">
              🔥 Só nesses bônus você já estaria pagando <span className="text-brand-orange">mais de R$128…</span> <br className="hidden sm:block" />
              mas hoje você recebe tudo isso <span className="underline decoration-brand-orange/50 underline-offset-4">sem pagar nada a mais.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PROVA SOCIAL (CARROSSEL) --- */}
      <section className="py-16 sm:py-24 px-0 bg-white overflow-hidden border-b border-gray-50">
        <div className="px-6">
          <SectionTitle 
            title="Famílias já estão usando e vendo diferença no dia a dia" 
            subtitle="Pais, mães e educadores já estão aplicando e aprovando"
          />
        </div>
        
        <TestimonialCarousel />
      </section>

      {/* --- PLANOS (Design Replicado de Alta Conversão) --- */}
      <section id="plans" className="py-16 sm:py-24 px-6 bg-[#FDFCF9] relative text-brand-blue">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display text-2xl sm:text-4xl font-black mb-4">
              💰 Escolha seu acesso à <span className="text-brand-orange text-shadow-sm">Formação Bíblica</span> Infantil em Casa
            </h2>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">
              Acesso imediato após a compra. Conteúdo digital pronto para usar.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center gap-8 sm:gap-6">
            {plans.map((plan) => (
              <motion.div 
                key={plan.id}
                whileHover={{ y: -8 }}
                className={`w-full max-w-sm rounded-[2.5rem] relative flex flex-col transition-all duration-500 ${
                  plan.highlighted 
                    ? 'bg-white border-[3px] border-brand-orange shadow-[0_32px_64px_-12px_rgba(255,107,53,0.15)] z-20 order-2 py-12 px-8 sm:px-10' 
                    : 'bg-white border border-gray-100 shadow-xl z-10 order-1 py-10 px-8 opacity-90 sm:scale-95 sm:translate-y-4'
                }`}
              >
                {/* Badge Superior */}
                {plan.highlighted ? (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg whitespace-nowrap z-30">
                    {plan.badge}
                  </div>
                ) : (
                  <div className="inline-block self-center mb-6 bg-gray-50 text-gray-400 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border border-gray-100">
                    {plan.badge}
                  </div>
                )}

                {/* Nome do Plano (Apenas para o Premium possui badge interno) */}
                {plan.highlighted && (
                  <div className="text-center mb-2">
                    <span className="text-[11px] font-black text-brand-blue/30 uppercase tracking-[0.3em]">
                      {plan.internalBadge}
                    </span>
                  </div>
                )}
                {!plan.highlighted && (
                   <h3 className="text-center font-display text-xl font-black text-brand-blue mb-4 uppercase tracking-tighter">
                     {plan.name}
                   </h3>
                )}
                
                {/* Área de Preço */}
                <div className="text-center mb-8">
                  <p className="text-gray-400 text-sm font-bold line-through mb-1">
                    de R${plan.priceOriginal}
                  </p>
                  <div className="flex items-start justify-center gap-1">
                    <span className="text-lg font-black text-brand-blue mt-2">R$</span>
                    <span className={`font-black text-brand-blue leading-none tracking-tighter ${plan.highlighted ? 'text-6xl' : 'text-5xl'}`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mt-2">pagamento único</p>
                  
                  {plan.highlighted && (
                    <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-[10px] font-black uppercase mt-4">
                      💸 {plan.savings}
                    </div>
                  )}
                </div>
                
                {/* Lista de Benefícios */}
                <ul className="space-y-4 mb-8 flex-grow text-left">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-bold text-gray-500 leading-tight">
                      <div className="w-5 h-5 bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-brand-green" strokeWidth={4} />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Bloco de Bônus (Apenas Plano Completo) */}
                {plan.highlighted && (
                  <div className="mb-10 pt-8 border-t border-gray-50 text-left">
                    <p className="text-brand-orange text-[9px] font-black uppercase tracking-[0.2em] mb-4">
                      BÔNUS INCLUSOS:
                    </p>
                    <div className="space-y-3">
                      {plan.bonuses?.map((bonus, i) => (
                        <div key={i} className="flex items-center gap-2">
                           <span className="bg-brand-orange text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase">BÔNUS</span>
                           <span className="text-xs font-black text-brand-blue/70">{bonus}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Botão de Compra */}
                <button 
                  type="button"
                  onClick={() => {
                    handlePlanClick(plan.id);
                  }}
                  className={`w-full py-5 rounded-full font-black text-base shadow-xl transition-all uppercase tracking-tight mb-8 ${
                    plan.highlighted 
                      ? 'bg-brand-green text-white hover:bg-green-600 shadow-green-200' 
                      : 'bg-white text-brand-blue border-2 border-gray-100 hover:border-gray-200 shadow-none'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Rodapé do Card */}
                <div className="flex items-center justify-center gap-3 border-t border-gray-50 pt-6">
                  {[
                    { icon: Shield, label: 'Compra Segura' },
                    { icon: Star, label: 'Satisfação Garantida' },
                    { icon: Zap, label: 'Acesso Imediato' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-1 opacity-20 group hover:opacity-40 transition-opacity">
                      <item.icon size={10} className="text-brand-blue" />
                      <span className="text-[7px] font-black text-brand-blue uppercase whitespace-nowrap">{item.label}</span>
                    </div>
                  ))}
                </div>

                {plan.highlighted && (
                  <p className="text-center text-[10px] font-black text-brand-orange mt-4 uppercase tracking-widest animate-pulse">
                    ⏰ Oferta por tempo limitado
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GARANTIA (Risco Zero) --- */}
      <section className="py-16 sm:py-24 px-6 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[200px_1fr] items-center gap-8 sm:gap-12">
        <div className="flex justify-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-brand-gold/10 rounded-full flex items-center justify-center relative">
             <Shield size={48} className="text-brand-gold sm:w-16 sm:h-16" />
             <div className="absolute -bottom-2 bg-brand-gold text-white font-black text-[9px] sm:text-xs px-3 py-1 rounded-full shadow-lg border-2 border-white whitespace-nowrap">100% SEGURO</div>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="font-display text-2xl sm:text-4xl font-black text-brand-blue mb-4 sm:mb-6">
            Teste sem risco.
          </h2>
          <p className="text-gray-600 text-base sm:text-xl leading-relaxed mb-6 font-bold">
            Se você não gostar, devolvemos 100% do seu dinheiro.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4">
             <div className="flex items-center justify-center sm:justify-start gap-2 text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-widest">🛡️ Reembolso em 1 clique</div>
             <div className="flex items-center justify-center sm:justify-start gap-2 text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-widest">📅 7 Dias de garantia total</div>
          </div>
        </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-16 sm:py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
             <h3 className="font-display text-2xl font-black text-brand-blue mb-2">Ainda tem alguma dúvida?</h3>
             <p className="text-gray-500 font-bold text-xs sm:text-sm tracking-wide tracking-[2px]">Tire suas dúvidas e comece hoje</p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-soft border border-gray-50">
            <FAQItem 
              question="O acesso é imediato?" 
              answer="Com certeza. Assim que o pagamento for aprovado, os dados de acesso chegarão automaticamente no seu e-mail."
            />
            <FAQItem 
              question="Preciso pagar mensalidade?" 
              answer="Não! Diferente de outros acervos, o nosso pagamento é único. Você paga uma vez e tem acesso para sempre."
            />
            <FAQItem 
              question="O material serve para qualquer denominação?" 
              answer="Sim. O foco é estritamente bíblico, baseado nas histórias e mandamentos de Deus, respeitando a sã doutrina cristã."
            />
            <FAQItem 
              question="Posso imprimir em preto e branco?" 
              answer="Sim! O material foi otimizado para que, mesmo em preto e branco, os desenhos e atividades fiquem perfeitos para as crianças."
            />
          </div>
        </div>
      </section>

      {/* --- FINAL CTA (Urgência e Emoção) --- */}
      <section className="py-20 sm:py-28 px-6 bg-brand-blue text-white overflow-hidden relative">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="max-w-3xl mx-auto text-center"
        >
          <div className="text-brand-orange mb-6 sm:mb-8 flex justify-center">
            <Heart size={48} className="text-brand-orange fill-brand-orange animate-pulse sm:w-16 sm:h-16" />
          </div>
          <h2 className="font-display text-3xl sm:text-6xl font-black mb-8 sm:mb-10 leading-[1.1]">
            O celular já está ocupando um espaço que deveria ser seu.
          </h2>
          <div className="mb-10 sm:mb-14 space-y-4">
            <p className="text-blue-100 text-lg sm:text-2xl font-black max-w-xl mx-auto leading-relaxed italic">
              "Se você não agir agora, o celular continua ocupando esse espaço."
            </p>
            <p className="text-blue-100/60 text-sm sm:text-lg font-bold uppercase tracking-widest">Quanto mais você espera, mais isso vira rotina.</p>
          </div>
          <motion.button 
             type="button"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.98 }}
             onClick={() => {
               document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
             }}
             className="w-full max-w-lg bg-brand-green text-white font-black py-5 sm:py-7 px-8 sm:px-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-3xl shadow-blue-900/40 transition-all text-xl sm:text-2xl tracking-tighter uppercase"
          >
            QUERO COMEÇAR HOJE
          </motion.button>
        </motion.div>
      </section>

      {/* --- RODAPÉ --- */}
      <footer className="bg-[#0A1128] py-16 px-6 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <BookOpen className="mx-auto mb-8 text-brand-orange/40" size={40} />
          <nav className="flex flex-wrap justify-center gap-8 mb-10 text-xs font-black text-blue-200/30 uppercase tracking-widest leading-loose">
             <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
             <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
             <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
             <a href="#" className="hover:text-white transition-colors">Suporte ao Cliente</a>
          </nav>
          <p className="text-xs font-bold text-blue-200/20 mb-4 italic">© 2026 Formação Bíblica Infantil em Casa. Fundamentando crianças na Rocha.</p>
          <p className="text-[10px] text-blue-200/10 max-w-lg mx-auto leading-relaxed">
            Atenção: Este produto é distribuído exclusivamente em formato digital (PDF). Não há envio físico pelos Correios. Ao adquirir, você será direcionado para uma área de membros segura.
          </p>
        </div>
      </footer>

      {/* --- UPGRADE MODAL --- */}
      <AnimatePresence>
        {isUpgradeModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsUpgradeModalOpen(false)}
              className="absolute inset-0 bg-brand-blue/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="bg-white rounded-[2rem] sm:rounded-[3rem] w-[92%] sm:max-w-lg overflow-hidden relative z-10 shadow-4xl border-2 sm:border-4 border-brand-orange"
            >
              <button 
                type="button"
                onClick={() => {
                  setIsUpgradeModalOpen(false);
                }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-300 hover:text-gray-500 transition-colors z-20"
                aria-label="Fechar pop-up"
              >
                <X size={24} className="sm:w-7 sm:h-7" />
              </button>
              
              <div className="bg-brand-orange/5 p-6 sm:p-10 pt-10 sm:pt-12 text-center">
                <div className="flex items-center justify-center gap-3 text-brand-orange font-black mb-3 text-[10px] sm:text-xs uppercase tracking-[0.3em]">
                  <Flame size={14} className="sm:w-4 sm:h-4" /> OFERTA ESPECIAL
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-blue leading-[1.1] mb-2 sm:mb-4">
                  ⚠️ ESPERE!
                </h3>
                <p className="text-gray-600 font-bold text-xs sm:text-sm">Leve o acesso ampliado com mais conteúdos por um valor reduzido</p>
              </div>

              <div className="p-6 sm:p-10">
                <div className="mb-6 text-center">
                  <div className="inline-block mb-2 text-gray-400 text-[10px] sm:text-xs font-bold line-through">de R$67,00</div>
                  <h4 className="text-lg sm:text-xl font-black text-brand-blue mb-1">Acesso Ampliado</h4>
                  <p className="text-3xl sm:text-4xl font-black text-brand-orange tracking-tighter">R$ 17,90</p>
                  <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase mt-1">Mais conteúdos para manter seu filho ainda mais interessado</p>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 bg-gray-50 p-4 sm:p-6 rounded-2xl">
                  {[
                    'Tudo do plano essencial',
                    'Mais variedade de conteúdos',
                    'Mais opções prontas para usar',
                    'Melhor custo-benefício antes do completo'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Zap size={14} className="text-brand-orange flex-shrink-0 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm font-black text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:gap-4">
                  <a 
                    href="https://pagamentosimples.com.br/QpUYvFwk"
                    className="w-full bg-brand-green hover:bg-green-600 text-white font-black py-4 sm:py-5 rounded-2xl shadow-xl shadow-green-100 transition-all flex items-center justify-center gap-3 text-base sm:text-lg no-underline"
                  >
                    Quero Aproveitar por R$17,90 <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a 
                    href="https://pagamentosimples.com.br/UkiZwdKw"
                    className="w-full bg-transparent text-gray-400 hover:text-gray-600 font-black py-2 text-[9px] sm:text-[10px] uppercase tracking-widest transition-all text-center no-underline"
                  >
                    Não, quero continuar com o Essencial
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
