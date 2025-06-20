import BirthdayMessage from '@/components/BirthdayMessage';
import FilmStrip from '@/components/FilmStrip';

const Index = () => {
  const topImages = [
    'photo-1649972904349-6e44c42644a7', // woman sitting on a bed using a laptop
    'photo-1488590528505-98d2b5aba04b', // turned on gray laptop computer
    'photo-1518770660439-4636190af475', // macro photography of black circuit board
  ];

  const bottomImages = [
    'photo-1461749280684-dccba630e2f6', // monitor showing Java programming
    'photo-1486312338219-ce68d2c6f44d', // person using MacBook Pro
    'photo-1649972904349-6e44c42644a7', // woman sitting on a bed using a laptop
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-destructive/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-12">
        {/* Top Film Strip */}
        <div className="mb-8">
          <FilmStrip direction="left" images={topImages} />
        </div>

        {/* Central Message */}
        <div className="container mx-auto px-4 my-16">
          <BirthdayMessage />
        </div>

        {/* Bottom Film Strip */}
        <div className="mt-8">
          <FilmStrip direction="right" images={bottomImages} />
        </div>

        {/* Floating hearts decoration */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 text-primary/20 text-2xl animate-pulse">💖</div>
          <div className="absolute top-3/4 right-1/4 text-destructive/20 text-xl animate-pulse" style={{animationDelay: '1s'}}>💕</div>
          <div className="absolute top-1/2 right-1/3 text-accent-foreground/20 text-lg animate-pulse" style={{animationDelay: '2s'}}>✨</div>
          <div className="absolute bottom-1/4 left-1/3 text-primary/20 text-2xl animate-pulse" style={{animationDelay: '0.5s'}}>🎈</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
