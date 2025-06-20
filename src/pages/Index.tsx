import BirthdayMessage from '@/components/BirthdayMessage';
import FilmStrip from '@/components/FilmStrip';

const Index = () => {
  const topImages = [
    '/lovable-uploads/8cce4fbf-bd5e-46dd-8ed5-c7cd55685801.png',
    '/lovable-uploads/f584dd4c-5932-4e16-ad26-1b2cfbe4369e.png',
    '/lovable-uploads/5b2c352c-5f16-4718-94e0-c50a3c452cca.png',
    '/lovable-uploads/dff0c834-55ab-499f-84b2-b2e184d113f6.png',
    '/lovable-uploads/26492936-5959-45c3-a3fb-05a9d90e6877.png',
  ];

  const bottomImages = [
    '/lovable-uploads/7906af4d-2264-4615-869a-977d7e355a3c.png',
    '/lovable-uploads/a3809b2c-ffb3-447c-b6c5-0f9977dc23a8.png',
    '/lovable-uploads/9b5f35c2-0c69-46ad-8ae2-61ee1fcf65bb.png',
    '/lovable-uploads/53b669dc-2b93-4345-8b57-a9df84ce71b6.png',
    '/lovable-uploads/515d3d29-2a35-48fc-8006-770d0827f309.png',
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
