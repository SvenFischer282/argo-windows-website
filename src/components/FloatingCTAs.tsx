import { useState, useEffect } from 'react';
import { Flame, ChevronLeft, ChevronRight } from 'lucide-react';

const FloatingCTAs = () => {
  const [leftExpanded, setLeftExpanded] = useState(true);
  const [rightExpanded, setRightExpanded] = useState(true);
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setAnimateLeft(true), 100);
    setTimeout(() => setAnimateRight(true), 200);
  }, []);

  const toggleLeft = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLeftExpanded(!leftExpanded);
  };

  const toggleRight = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setRightExpanded(!rightExpanded);
  };

  // Custom wood/log icon
  const WoodIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M2 12c0-3.5 2.5-6 6-6h8c3.5 0 6 2.5 6 6s-2.5 6-6 6H8c-3.5 0-6-2.5-6-6z" />
      <circle cx="8" cy="12" r="2" />
      <circle cx="16" cy="12" r="1.5" />
      <path d="M12 6v12" />
    </svg>
  );

  return (
    <>
      {/* Left CTA - Kotly na pelety */}
      <div
        className={`fixed bottom-4 left-0 z-50 flex items-center transition-all duration-300 ${
          animateLeft 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{
          transform: animateLeft 
            ? `translateX(${leftExpanded ? '16px' : '-100%'}) translateX(${leftExpanded ? '0' : '44px'})` 
            : 'translateY(32px)'
        }}
      >
        <a
          href="https://kotlynapelety.sk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-primary text-primary-foreground px-5 py-3 shadow-sm transition-all duration-300 hover:bg-primary/90 border border-primary/20"
        >
          <Flame className="w-5 h-5 shrink-0 opacity-80" strokeWidth={1.5} />
          <span className="font-light text-sm tracking-wide whitespace-nowrap">
            Kotly na pelety
          </span>
        </a>
        <button
          onClick={toggleLeft}
          className="bg-primary text-primary-foreground p-2 shadow-sm transition-all duration-300 hover:bg-primary/90 border border-l-0 border-primary/20"
          aria-label={leftExpanded ? "Skryť" : "Zobraziť"}
        >
          {leftExpanded ? (
            <ChevronLeft className="w-5 h-5 opacity-80" strokeWidth={1.5} />
          ) : (
            <ChevronRight className="w-5 h-5 opacity-80" strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Right CTA - Brikety RUF */}
      <div
        className={`fixed bottom-4 right-0 z-50 flex items-center transition-all duration-300 ${
          animateRight 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{
          transform: animateRight 
            ? `translateX(${rightExpanded ? '-16px' : '100%'}) translateX(${rightExpanded ? '0' : '-44px'})` 
            : 'translateY(32px)'
        }}
      >
        <button
          onClick={toggleRight}
          className="bg-foreground text-background p-2 shadow-sm transition-all duration-300 hover:bg-foreground/90 border border-r-0 border-foreground/20"
          aria-label={rightExpanded ? "Skryť" : "Zobraziť"}
        >
          {rightExpanded ? (
            <ChevronRight className="w-5 h-5 opacity-80" strokeWidth={1.5} />
          ) : (
            <ChevronLeft className="w-5 h-5 opacity-80" strokeWidth={1.5} />
          )}
        </button>
        <a
          href="https://briketyruf.sk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-foreground text-background px-5 py-3 shadow-sm transition-all duration-300 hover:bg-foreground/90"
        >
          <WoodIcon />
          <span className="font-light text-sm tracking-wide whitespace-nowrap">
            Brikety RUF
          </span>
        </a>
      </div>

      {/* Mobile stacking styles */}
      <style>{`
        @media (max-width: 480px) {
          .fixed.bottom-4 {
            left: 50% !important;
            right: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingCTAs;
