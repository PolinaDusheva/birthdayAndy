import BirthdayMessage from '@/components/BirthdayMessage';
import PhotoFrame from '@/components/PhotoFrame';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-destructive/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {/* Top row photos */}
          <div className="hidden md:block">
            <PhotoFrame className="w-full aspect-square" />
          </div>
          <div className="hidden lg:block">
            <PhotoFrame className="w-full aspect-square" />
          </div>
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <PhotoFrame className="w-full aspect-square" />
              <PhotoFrame className="w-full aspect-square" />
            </div>
          </div>
          <div className="hidden lg:block">
            <PhotoFrame className="w-full aspect-square" />
          </div>
          <div className="hidden md:block">
            <PhotoFrame className="w-full aspect-square" />
          </div>
        </div>

        {/* Central Message */}
        <div className="my-16">
          <BirthdayMessage />
        </div>

        {/* Bottom Photo Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
          <div className="hidden md:block">
            <PhotoFrame className="w-full aspect-square" />
          </div>
          <PhotoFrame className="w-full aspect-square" />
          <div className="hidden md:block">
            <PhotoFrame className="w-full aspect-square" />
          </div>
          <PhotoFrame className="w-full aspect-square" />
          <div className="hidden md:block">
            <PhotoFrame className="w-full aspect-square" />
          </div>
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
