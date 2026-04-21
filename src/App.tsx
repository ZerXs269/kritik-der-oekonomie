import React, { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { topics, Flashcard, Category } from './data';
import { X, CheckCircle2, BookOpen, ArrowRight, EyeOff, Brain, Hammer, Microscope, Coins, Activity, MonitorPlay } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'intro' | 'learning'>('intro');
  const [activeCategory, setActiveCategory] = useState<Category>('gegenstand');
  const [activeTopicId, setActiveTopicId] = useState<string>('');
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [completedCards, setCompletedCards] = useState<string[]>([]);

  const filteredTopics = useMemo(() => topics.filter(t => t.category === activeCategory), [activeCategory]);
  
  useEffect(() => {
    if (filteredTopics.length > 0) {
      setActiveTopicId(filteredTopics[0].id);
    }
  }, [activeCategory, filteredTopics]);

  const activeTopic = topics.find((t) => t.id === activeTopicId) || filteredTopics[0] || topics[0];
  const activeCard = activeTopic?.cards.find((c) => c.id === activeCardId);
  const totalCards = topics.reduce((acc, t) => acc + t.cards.length, 0);

  const handleCompleteCard = (id: string) => {
    if (!completedCards.includes(id)) {
      setCompletedCards([...completedCards, id]);
    }
  };

  const navCategories: {id: Category, label: string, icon?: React.ReactNode}[] = [
    { id: 'gegenstand', label: 'Gegenstand' },
    { id: 'abstraktion', label: 'Abstraktion' },
    { id: 'logik', label: 'Logik' },
    { id: 'leseempfehlungen', label: 'Lernmaterial', icon: <BookOpen className="w-4 h-4 inline-block mr-2 -mt-1" /> }
  ];

  if (currentView === 'intro') {
    return <IntroView onStart={() => setCurrentView('learning')} />;
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-ink)] relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
      
      {/* Header */}
      <header className="h-16 md:h-20 brutal-border-b-2 flex items-center justify-between px-6 md:px-8 bg-[var(--color-ink)] text-white shrink-0 z-10">
        <div 
          className="font-black text-xl md:text-2xl tracking-tighter cursor-pointer"
          onClick={() => setCurrentView('intro')}
        >
          KRITIK. <span className="text-[var(--color-accent)]">ÖKONOMIE</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-bold items-center">
          {navCategories.map((cat) => (
            <span 
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`cursor-pointer transition-opacity flex items-center ${activeCategory === cat.id ? 'text-white opacity-100' : 'opacity-50 hover:opacity-100'} ${cat.id === 'leseempfehlungen' ? 'border-l-2 border-dashed border-gray-600 pl-8 ml-2 text-[var(--color-accent)]' : ''}`}
            >
              {cat.icon}{cat.label}
            </span>
          ))}
        </div>
      </header>

      {/* Main Area */}
      <div className="flex flex-1 overflow-hidden relative z-10">
        {/* Sidebar */}
        <aside className="w-64 md:w-80 brutal-border-r-2 p-6 md:p-8 bg-[#ecece9]/90 backdrop-blur-md flex flex-col shrink-0 overflow-y-auto">
          <nav className="flex flex-col gap-4">
            {filteredTopics.map((topic) => (
              <div
                key={topic.id}
                onClick={() => setActiveTopicId(topic.id)}
                className={`py-2 text-[0.8rem] md:text-[0.85rem] font-semibold border-b border-transparent cursor-pointer flex justify-between transition-colors ${
                  activeTopicId === topic.id
                    ? 'text-[var(--color-accent)] border-[var(--color-accent)]'
                    : 'hover:border-[var(--color-border-dark)]'
                }`}
              >
                <span className="pr-4">{topic.number}. {topic.title}</span>
                <span className={activeTopicId === topic.id ? 'opacity-100 text-[var(--color-accent)]' : 'opacity-0'}>→</span>
              </div>
            ))}
          </nav>

          {activeTopic && (
            <div className="mt-auto font-serif italic text-[0.8rem] md:text-[0.85rem] border-l-4 border-[var(--color-accent)] pl-4 leading-relaxed mt-12 bg-white/50 p-4 brutal-border">
              {activeTopic.quote}
            </div>
          )}
          
          <div className="mt-8 bg-white brutal-border p-4">
            <div className="text-[10px] font-bold mb-2 uppercase tracking-tight flex justify-between">
              <span>Lernfortschritt</span>
              <span>{completedCards.length} / {totalCards}</span>
            </div>
            <div className="h-2 w-full bg-[var(--color-bg)] brutal-border">
              <div 
                className="h-full bg-[var(--color-accent)] transition-all duration-500 ease-in-out" 
                style={{ width: `${(completedCards.length / totalCards) * 100}%` }}>
              </div>
            </div>
          </div>
        </aside>

        {/* Dynamic Content Space */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto section-scroll">
          {activeTopic?.category === 'leseempfehlungen' ? (
            <LibraryListView cards={activeTopic.cards} completedCards={completedCards} onReadMore={setActiveCardId} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-[minmax(280px,_auto)] pb-16" style={{ gridAutoFlow: 'dense' }}>
              <AnimatePresence mode="popLayout">
                {activeTopic && activeTopic.cards.map((card) => (
                  <CardComponent 
                    key={card.id} 
                    card={card} 
                    isCompleted={completedCards.includes(card.id)}
                    onReadMore={() => setActiveCardId(card.id)} 
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </main>

        {/* Reading Overlay Modal */}
        <AnimatePresence>
          {activeCard && (
            <ReadingModal 
              card={activeCard} 
              onClose={() => setActiveCardId(null)} 
              onComplete={handleCompleteCard}
              isCompleted={completedCards.includes(activeCard.id)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function CardComponent({ card, isCompleted, onReadMore }: { key?: string; card: Flashcard; isCompleted: boolean; onReadMore: () => void }) {
  // Theme definitions mapped to Tailwind classes
  const tStyles = useMemo(() => ({
    default: {
      wrapper: 'bg-white text-[var(--color-ink)] border-[var(--color-border-dark)] hover:shadow-[8px_8px_0px_var(--color-border-dark)]',
      tag: 'bg-[var(--color-ink)] text-white border-[var(--color-ink)]',
      divider: 'border-[#333]'
    },
    dark: {
      wrapper: 'bg-[var(--color-ink)] text-white border-[var(--color-ink)] hover:shadow-[8px_8px_0px_var(--color-accent)]',
      tag: 'bg-white text-[var(--color-ink)] border-white',
      divider: 'border-white/20'
    },
    accent: {
      wrapper: 'bg-[var(--color-accent)] text-white border-[var(--color-border-dark)] hover:shadow-[8px_8px_0px_var(--color-ink)]',
      tag: 'bg-white text-[var(--color-ink)] border-white',
      divider: 'border-white/30'
    },
    outlined: {
      wrapper: 'bg-[#ecece9] text-[var(--color-ink)] border-[var(--color-border-dark)] border-2 hover:shadow-[8px_8px_0px_var(--color-border-dark)]',
      tag: 'bg-[var(--color-ink)] text-white border-[var(--color-ink)]',
      divider: 'border-[#333]'
    }
  }), []);

  const themeStr = card.theme && card.theme in tStyles ? card.theme as keyof typeof tStyles : 'default';
  const theme = tStyles[themeStr];

  const getCheckIconColor = () => {
    switch (themeStr) {
      case 'dark':
      case 'accent':
        return 'text-white';
      default:
        return 'text-green-600';
    }
  };

  // 1. Wide Card - 2 Columns (Text left, explanation right)
  if (card.size === 'wide') {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={onReadMore}
        className={`col-span-1 xl:col-span-2 row-span-1 brutal-border ${theme.wrapper} p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1 facet-corner`}
      >
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="uppercase tracking-widest text-[10px] font-bold opacity-60 bg-black/10 px-2 py-1 inline-block">{card.number}</span>
              {isCompleted && <CheckCircle2 size={16} className={getCheckIconColor()} />}
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">{card.title}</h3>
            <p className="text-[1.05rem] md:text-lg font-bold leading-snug">{card.front}</p>
          </div>
          <div className="mt-8">
            <span className={`text-[0.7rem] uppercase font-bold px-3 py-1 inline-block brutal-border ${theme.tag}`}>
              {card.tag}
            </span>
          </div>
        </div>
        <div className={`flex-1 flex flex-col justify-between border-t md:border-t-0 md:border-l ${theme.divider} md:pl-8 pt-4 md:pt-0`}>
          <p className="text-[0.95rem] opacity-90 leading-relaxed font-serif italic mb-6">{card.back}</p>
          <div className="mt-auto self-start md:self-end font-bold uppercase tracking-widest text-sm flex items-center gap-2 group">
            Zur Vertiefung <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform"/>
          </div>
        </div>
      </motion.div>
    );
  }

  // 2. Tall Card - Vertical Stack
  if (card.size === 'tall') {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={onReadMore}
        className={`col-span-1 row-span-2 brutal-border ${theme.wrapper} p-6 md:p-8 flex flex-col cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1 facet-corner`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="uppercase tracking-widest text-[10px] font-bold opacity-60 bg-black/10 px-2 py-1 inline-block">{card.number}</span>
          {isCompleted && <CheckCircle2 size={16} className={getCheckIconColor()} />}
        </div>
        <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{card.title}</h3>
        <p className="text-xl font-bold mb-8 leading-snug max-w-[90%]">{card.front}</p>
        
        <div className={`border-t-4 ${theme.divider} pt-6 mb-8`}>
          <p className="font-serif italic text-base opacity-90 leading-relaxed">{card.back}</p>
        </div>
        
        <div className="flex justify-between items-center mt-auto border-t border-current/20 pt-4">
          <span className={`text-[0.7rem] uppercase font-bold px-3 py-1 inline-block brutal-border ${theme.tag}`}>
            {card.tag}
          </span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>
    );
  }

  // 3. Featured Card - Extra Large Block
  if (card.size === 'featured') {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={onReadMore}
        className={`col-span-1 md:col-span-2 xl:col-span-2 row-span-2 brutal-border-2 ${theme.wrapper} p-8 md:p-12 cursor-pointer transition-all duration-200 hover:-translate-y-2 hover:-translate-x-2 flex flex-col relative overflow-hidden facet-corner`}
      >
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <span className="uppercase tracking-widest text-xs font-bold opacity-60 bg-black/10 px-3 py-1 inline-block">{card.number}</span>
          {isCompleted && <CheckCircle2 size={24} className={getCheckIconColor()} />}
        </div>
        <h3 className="text-3xl md:text-5xl lg:text-5xl font-black uppercase tracking-tighter mb-8 leading-none relative z-10">{card.title}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 flex-1 relative z-10">
          <p className="text-xl md:text-2xl font-bold leading-snug">{card.front}</p>
          <div className="flex flex-col justify-between">
            <p className="text-[1.05rem] opacity-90 leading-relaxed font-serif mb-8 md:mb-0">{card.back}</p>
            <div className={`mt-auto brutal-border px-6 py-4 flex justify-between items-center group font-bold uppercase tracking-widest ${themeStr === 'dark' || themeStr === 'accent' ? 'bg-white text-black hover:bg-gray-200' : 'bg-[var(--color-ink)] text-white hover:bg-[var(--color-accent)]'} transition-colors`}>
              <span>Vertiefung & Analyse</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // 4. Normal Card - Standard Block
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onClick={onReadMore}
      className={`col-span-1 row-span-1 brutal-border ${theme.wrapper} p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1 facet-corner group`}
    >
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="uppercase tracking-widest text-[10px] font-bold opacity-60 bg-black/10 px-2 py-1 inline-block">{card.number}</span>
          {isCompleted && <CheckCircle2 size={16} className={getCheckIconColor()} />}
        </div>
        <h3 className="text-xl font-extrabold uppercase tracking-tight mb-4">{card.title}</h3>
        <p className="font-medium opacity-90 text-[0.95rem] leading-snug">{card.front}</p>
      </div>
      
      <div className={`mt-8 flex justify-between items-center border-t border-current/20 pt-4`}>
        <span className={`text-[0.65rem] uppercase font-bold px-2 py-1 inline-block brutal-border ${theme.tag}`}>
          {card.tag}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest group-hover:underline flex items-center gap-1">
          Analyse <ArrowRight size={14}/>
        </span>
      </div>
    </motion.div>
  );
}

function ReadingModal({ card, onClose, onComplete, isCompleted }: { card: Flashcard; onClose: () => void; onComplete: (id: string) => void; isCompleted: boolean; }) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[var(--color-ink)]/95 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ y: 50, opacity: 0, scale: 0.95 }} 
        animate={{ y: 0, opacity: 1, scale: 1 }} 
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-4xl max-h-full overflow-y-auto brutal-border-2 brutal-shadow-lg flex flex-col relative"
      >
        <div className="absolute inset-0 pointer-events-none bg-dot-pattern opacity-[0.03]"></div>
        
        <div className="sticky top-0 bg-white brutal-border-b-2 p-6 md:p-8 flex justify-between items-center shrink-0 z-20">
          <div>
            <div className="font-serif italic text-sm opacity-60 bg-[var(--color-bg)] px-2 py-1 inline-block text-[var(--color-accent)] font-bold">{card.number} // Theorie-Lektüre</div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mt-3">{card.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-3 hover:bg-[var(--color-accent)] brutal-border transition-colors group bg-[var(--color-bg)] shadow-[2px_2px_0px_#1a1a1a] active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
          >
            <X size={24} className="group-hover:text-white" />
          </button>
        </div>
        
        <div className="p-6 md:p-12 pb-16 prose prose-stone max-w-none relative z-10 flex-1">
          {/* Markdown Simulation */}
          {card.content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
             return <h3 key={i} className="text-2xl font-extrabold uppercase tracking-tight mt-12 mb-6 border-b-[3px] border-[var(--color-bg)] pb-2 text-[var(--color-ink)]">{paragraph.replace('## ', '')}</h3>
            }
            if (paragraph.startsWith('---')) {
              return <hr key={i} className="my-8 border-t-[3px] border-dashed border-[var(--color-border-dark)]" />
            }
            
            // Handle markdown links [text](url)
            const linkRegex = /\[([^\[]+)\]\((.*?)\)/g;
            let parts: React.ReactNode[] = [];
            let lastIndex = 0;
            let match;
            
            while ((match = linkRegex.exec(paragraph)) !== null) {
              const prevText = paragraph.substring(lastIndex, match.index);
              if (prevText) {
                const boldParts = prevText.split(/(\*\*.*?\*\*)/).map((p, idx) => {
                  if (p.startsWith('**') && p.endsWith('**')) return <strong key={idx} className="font-bold text-[var(--color-accent)] bg-red-50 px-1">{p.substring(2, p.length - 2)}</strong>;
                  return p;
                });
                parts.push(...boldParts);
              }
              
              parts.push(
                <a key={match.index} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] underline hover:bg-[var(--color-accent)] hover:text-white transition-colors px-1 font-bold">
                  {match[1]}
                </a>
              );
              
              lastIndex = match.index + match[0].length;
            }
            
            const remainingText = paragraph.substring(lastIndex);
            if (remainingText) {
              const boldParts = remainingText.split(/(\*\*.*?\*\*)/).map((p, idx) => {
                if (p.startsWith('**') && p.endsWith('**')) return <strong key={`last-${idx}`} className="font-bold text-[var(--color-accent)] bg-red-50 px-1">{p.substring(2, p.length - 2)}</strong>;
                return p;
              });
              parts.push(...boldParts);
            }

            return <p key={i} className="mb-6 text-[1.05rem] md:text-lg leading-relaxed text-gray-800 font-medium">{parts}</p>
          })}

          {/* Quiz Section */}
          {card.quiz && (
            <div className="mt-20 brutal-border-2 bg-[var(--color-bg)] relative shadow-[8px_8px_0px_#1a1a1a]">
              <div className="absolute -top-4 left-6 bg-[var(--color-ink)] text-white text-[12px] font-bold uppercase tracking-widest px-4 py-1">
                Materialistischer Wissens-Check
              </div>
              <div className="p-6 md:p-10 pt-10">
                <p className="font-bold text-xl mb-8 leading-tight">{card.quiz.question}</p>
                <div className="flex flex-col gap-4">
                  {card.quiz.options.map((opt, idx) => {
                    let btnClass = "text-left p-5 brutal-border border-2 text-[1rem] md:text-[1.1rem] transition-all font-medium cursor-pointer ";
                    if (showResult) {
                      if (idx === card.quiz!.correctIndex) {
                        btnClass += "bg-white border-green-600 shadow-[inset_8px_0px_0px_#16a34a] pointer-events-none";
                      } else if (idx === selectedOption) {
                        btnClass += "bg-red-50 border-red-500 opacity-60 pointer-events-none";
                      } else {
                        btnClass += "opacity-30 bg-gray-50 border-gray-300 pointer-events-none";
                      }
                    } else {
                      btnClass += "bg-white hover:bg-[var(--color-ink)] hover:text-white hover:border-[var(--color-ink)] shadow-[4px_4px_0px_#333] active:shadow-none active:translate-y-[4px] active:translate-x-[4px]";
                    }

                    return (
                      <button
                        key={idx}
                        disabled={showResult}
                        onClick={() => {
                          if (!showResult && card.quiz) {
                            setSelectedOption(idx);
                            setShowResult(true);
                            if (idx === card.quiz.correctIndex) {
                              onComplete(card.id);
                            }
                          }
                        }}
                        className={btnClass}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>

                {showResult && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-8 p-6 md:p-8 brutal-border-2 text-base md:text-lg ${selectedOption === card.quiz.correctIndex ? 'bg-white border-green-600' : 'bg-red-50 border-red-500'}`}
                  >
                    <span className="font-black uppercase tracking-wide mb-3 block text-xl">
                      {selectedOption === card.quiz.correctIndex ? 'Korrekt Erfasst!' : 'Analytischer Fehler.'}
                    </span>
                    <p className="leading-relaxed font-medium text-gray-800">{card.quiz.explanation}</p>
                    
                    {selectedOption !== card.quiz.correctIndex && !isCompleted && (
                       <button 
                         onClick={() => {
                           setShowResult(false);
                           setSelectedOption(null);
                         }}
                         className="mt-6 font-bold uppercase tracking-wider text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors px-4 py-2 brutal-border"
                       >
                         Erneut Analysieren
                       </button>
                    )}
                    {selectedOption === card.quiz.correctIndex && (
                       <button 
                         onClick={onClose}
                         className="mt-8 px-8 py-4 brutal-border-2 bg-[var(--color-ink)] text-white font-bold uppercase tracking-widest transition-all hover:bg-[var(--color-accent)] shadow-[4px_4px_0px_#1a1a1a] active:shadow-none active:translate-x-1 active:translate-y-1 block"
                       >
                         Abschließen & Weiter
                       </button>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function IntroView({ onStart }: { onStart: () => void }) {
  return (
    <div className="h-screen w-screen relative bg-[var(--color-bg)] overflow-y-auto overflow-x-hidden text-[var(--color-ink)] section-scroll">
      {/* Background Overlays - Fixed */}
      <div className="fixed inset-0 z-0 bg-marx-pattern opacity-[0.08] mix-blend-multiply filter grayscale contrast-150 pointer-events-none" style={{ backgroundPosition: 'center 20%' }}></div>
      <div className="fixed inset-0 z-0 bg-grid-pattern opacity-10 pointer-events-none border-b-2 border-[var(--color-border-dark)]"></div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[90vh] flex flex-col justify-center items-center px-6 py-20 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl w-full bg-white brutal-border-2 brutal-shadow-lg p-8 md:p-16 flex flex-col items-center text-center facet-corner relative"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-accent)]"></div>
          <div className="w-20 h-20 bg-[var(--color-ink)] text-white flex items-center justify-center mb-8 rotate-3 hover:rotate-0 transition-transform">
            <BookOpen className="w-10 h-10" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
            KRITIK.<br/><span className="text-[var(--color-accent)]">ÖKONOMIE</span>
          </h1>
          <p className="font-serif italic text-xl md:text-2xl text-gray-600 max-w-3xl md:mb-12 leading-relaxed">
            Ein interaktives Leersystem zur Erarbeitung der Kritik der politischen Ökonomie. Keine Reformutopien, keine Moral. Die schonungslose Analyse von Wert, Profit und Mystifikation.
          </p>
        </motion.div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
          <span className="text-[10px] uppercase font-bold tracking-widest mb-2">Warum das Ganze?</span>
          <ArrowRight className="rotate-90" size={16} />
        </div>
      </section>

      {/* Why it matters section */}
      <section className="relative z-10 bg-white border-y-2 border-[var(--color-border-dark)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-between mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter max-w-xl leading-none">
              Warum die Verhältnisse verstehen?
            </h2>
            <p className="font-serif text-lg md:text-xl max-w-lg border-l-4 border-[var(--color-accent)] pl-6 text-gray-700">
              Empörung allein ändert nichts. Wer die zugrundeliegende Mechanik der Herrschaft nicht durchschaut, wird sie mit jeder vermeintlichen "Alternatividee" unfreiwillig bloß reproduzieren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Objektiver Schein",
                text: "Der Kapitalismus täuscht nicht primär durch Medien, sondern durch seine Form selbst. Der Lohn sieht aus wie 'gerechte Bezahlung' für Arbeit. Die Kritik zerreißt diesen Schleier.",
                icon: <EyeOff className="w-6 h-6 text-[var(--color-ink)]" />
              },
              {
                title: "Logik statt Moral",
                text: "Wirtschaftsakteure handeln nicht aus Gier, sondern gehorchen stummen Zwängen (Konkurrenz, Profitrate).",
                icon: <Brain className="w-6 h-6 text-[var(--color-ink)]" />
              },
              {
                title: "Radikale Intervention",
                text: "Kein Bedingungsloses Grundeinkommen und keine Reichensteuer stoppt den Krisenmotor. Nur das Begreifen der Warenform und des Werts zeigt den Ansatzpunkt zur echten Aufhebung.",
                icon: <Hammer className="w-6 h-6 text-[var(--color-ink)]" />
              }
            ].map((item, i) => (
              <div key={i} className="brutal-border p-8 hover:-translate-y-2 transition-transform bg-[var(--color-bg)] facet-corner relative">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-4xl font-black text-[var(--color-accent)] opacity-40">0{i+1}</div>
                  <div className="p-3 bg-white brutal-border shadow-[2px_2px_0px_#1a1a1a]">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="font-medium text-gray-700 leading-relaxed text-[0.95rem]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="relative z-10 py-32 px-6 bg-[var(--color-bg)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter bg-white border-2 border-[var(--color-ink)] px-8 py-4 brutal-shadow-lg inline-block relative">
              Die Architektur der Kritik
            </h2>
            <p className="mt-8 font-serif text-xl max-w-2xl mx-auto text-gray-700">
              Dieses System ist in vier Module unterteilt. Du folgst der Methode von der grundlegenden Anatomie bis in die tiefen Krisenmechanismen - und erhältst am Ende die empfohlene Primärliteratur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-1 border-t-4 border-dashed border-[var(--color-border-dark)] opacity-40 z-0"></div>

            {[
              {
                step: "01",
                module: "Gegenstand",
                title: "Die Elemente",
                desc: "Die Anatomie der bürgerlichen Gesellschaft. Hier zerlegen wir die harten Kategorien: Ware, Geld, Kapital, Lohnarbeit und fiktives Kapital.",
                color: "bg-[var(--color-accent)]",
                icon: <Coins className="w-10 h-10 mb-4 opacity-80" />
              },
              {
                step: "02",
                module: "Abstraktion",
                title: "Die Methodik",
                desc: "Wie durchschaut man den Trug der Oberfläche? Die Kritik beginnt mit der Aufdeckung von Warenfetisch, realer Abstraktion und dem objektiven Schein der Zirkulation.",
                color: "bg-[var(--color-ink)]",
                icon: <Microscope className="w-10 h-10 mb-4 opacity-80" />
              },
              {
                step: "03",
                module: "Logik",
                title: "Die Maschinerie",
                desc: "Wie das System sich selbst treibt und zerstört. Die zwingende Logik der Konkurrenz, der Tendenzfall der Profitrate und der Motor der Krise.",
                color: "bg-[#4a4a4a]",
                icon: <Activity className="w-10 h-10 mb-4 opacity-80" />
              },
              {
                step: "04",
                module: "Material",
                title: "Lernmaterial",
                desc: "Die Primärtexte, Einführungen und radikalen Schriften. Hier tauchst du direkt in die Literatur ein, die diesen Systemapparat seziert.",
                color: "bg-[var(--color-border-dark)]",
                icon: <BookOpen className="w-10 h-10 mb-4 opacity-80" />
              }
            ].map((node, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                {/* Step Connector Node */}
                <div className={`w-20 h-20 rounded-full border-4 border-[var(--color-bg)] ${node.color} text-white flex items-center justify-center text-3xl font-black shadow-[4px_4px_0px_#1a1a1a] mb-8`}>
                  {node.step}
                </div>
                
                {/* Content Box */}
                <div className="bg-white brutal-border-2 p-8 w-full facet-corner shadow-[8px_8px_0px_#1a1a1a] hover:-translate-y-2 hover:shadow-[12px_12px_0px_#1a1a1a] transition-all text-center flex flex-col items-center">
                  {node.icon}
                  <span className="text-[var(--color-accent)] font-black tracking-widest uppercase text-sm mb-2 block">
                    Modul {node.step}: {node.module}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-[var(--color-ink)]">
                    {node.title}
                  </h3>
                  <div className="w-12 h-1 bg-[var(--color-border-dark)] mx-auto mb-6"></div>
                  <p className="text-[1.05rem] font-medium text-gray-700 leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Action Area */}
          <div className="mt-32 text-center pb-24 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-16 h-12 w-1 border-l-4 border-dashed border-[var(--color-border-dark)] opacity-40"></div>
            <button 
              onClick={onStart}
              className="px-16 py-6 bg-[var(--color-ink)] text-[var(--color-bg)] md:text-2xl font-black uppercase tracking-widest hover:bg-[var(--color-accent)] hover:text-white transition-all shadow-[8px_8px_0px_#b22222] hover:shadow-[12px_12px_0px_#1a1a1a] active:translate-y-2 active:translate-x-2 active:shadow-none inline-flex items-center gap-4 group"
            >
              Theorie Beginnen <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function LibraryListView({ cards, completedCards, onReadMore }: { cards: Flashcard[], completedCards: string[], onReadMore: (id: string) => void }) {
  const books = cards.filter((c) => c.tag !== 'Vorträge (Audio)');
  const lectures = cards.filter((c) => c.tag === 'Vorträge (Audio)');

  const renderCard = (card: Flashcard, i: number) => {
    const isCompleted = completedCards.includes(card.id);
    const parts = card.front.split(/ - | -/);
    const authorInfo = parts[0] ? parts[0] : card.front;
    const shortDesc = parts.slice(1).join(' - ') || card.back;
    
    return (
      <motion.div
        layout
        key={card.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        onClick={() => onReadMore(card.id)}
        className={`flex flex-col md:flex-row brutal-border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_#1a1a1a] overflow-hidden group ${isCompleted ? 'bg-[#ecece9] opacity-90' : 'bg-white'}`}
      >
        {/* Module/Logo Section */}
        <div className={`md:w-32 flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[var(--color-border-dark)] transition-colors ${isCompleted ? 'bg-gray-300 text-gray-700' : 'bg-[var(--color-ink)] text-white group-hover:bg-[var(--color-accent)]'}`}>
          {card.id === 'lesen7' ? <MonitorPlay className="w-10 h-10 mb-4 opacity-90" /> : <BookOpen className="w-10 h-10 mb-4 opacity-90" />}
          <span className="font-mono font-bold text-xl tracking-widest leading-none text-center">
            {card.number.split('/')[0].replace('Buch ', 'VOL.').replace('Media ', 'EXT.')}
          </span>
        </div>
        
        {/* Content Section */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center relative">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 pr-8">
            <div>
              <div className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest mb-2 inline-block">
                {authorInfo}
              </div>
              <h3 className="font-black text-2xl md:text-3xl uppercase tracking-tight leading-none">{card.title}</h3>
            </div>
            {isCompleted && <CheckCircle2 className="w-6 h-6 text-gray-400 absolute top-6 right-6" />}
          </div>
          
          <p className="text-[1.05rem] text-gray-700 font-serif leading-relaxed line-clamp-2 md:line-clamp-none max-w-3xl">
            {shortDesc}
          </p>
          
          <div className="mt-6 flex flex-wrap gap-4 items-center justify-between border-t border-gray-200 pt-4">
            <span className={`text-[0.65rem] uppercase font-bold px-3 py-1 inline-block brutal-border bg-[var(--color-ink)] text-white`}>
              {card.tag}
            </span>
            
            <div className="flex items-center text-xs font-black uppercase tracking-widest text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
              Dokument Öffnen <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col gap-6 pb-16 max-w-5xl mx-auto pt-4 relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter bg-white border-2 border-[var(--color-ink)] px-8 py-4 brutal-shadow-lg inline-block relative facet-corner-sm">
          Lernmaterial
        </h2>
        <div className="w-16 h-2 bg-[var(--color-accent)] mx-auto mt-6"></div>
      </div>

      <div className="mb-2 mt-4 ml-2 md:ml-0 md:-translate-x-4">
        <h3 className="text-2xl font-black uppercase tracking-tighter bg-[var(--color-bg)] border-l-[6px] border-[var(--color-ink)] pl-4 py-2 inline-block">
          01. Bücher
        </h3>
      </div>

      {books.map(renderCard)}

      <div className="mb-2 mt-12 ml-2 md:ml-0 md:-translate-x-4">
        <h3 className="text-2xl font-black uppercase tracking-tighter bg-[var(--color-bg)] border-l-[6px] border-[var(--color-accent)] pl-4 py-2 inline-block text-[var(--color-accent)]">
          02. Vorträge
        </h3>
      </div>

      {lectures.map(renderCard)}
    </div>
  );
}


