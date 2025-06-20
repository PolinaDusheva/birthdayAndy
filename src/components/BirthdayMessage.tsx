const BirthdayMessage = () => {
  return (
    <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-accent/50 max-w-2xl mx-auto">
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-destructive rounded-full opacity-20"></div>
      <div className="absolute -top-2 -right-6 w-6 h-6 bg-primary rounded-full opacity-30"></div>
      <div className="absolute -bottom-3 -left-2 w-5 h-5 bg-accent rounded-full opacity-40"></div>
      
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">
            Happy Birthday!
          </h1>
          <div className="flex items-center justify-center space-x-2 text-2xl">
            <span>🎉</span>
            <span>❤️</span>
            <span>🎂</span>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-lg leading-relaxed text-muted-foreground italic">
            "To the most amazing person in my life..."
          </p>
          
          <div className="bg-accent/30 rounded-lg p-6 my-6 text-left">
            <p className="mb-4">
              Another year of your incredible existence, and I couldn't be more grateful to share this journey with you. 
            </p>
            <p className="mb-4">
              You bring so much joy, laughter, and love into my life every single day. Your kindness, your humor, and the way you make even ordinary moments feel magical - that's what makes you so special.
            </p>
            <p>
              Here's to celebrating you today and creating even more beautiful memories together. Happy Birthday, my love! 🥳
            </p>
          </div>
          
          <p className="text-lg font-semibold text-primary">
            With all my love,
          </p>
          <p className="text-base text-muted-foreground italic">
            Your [Your Name] 💕
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-destructive/5 rounded-2xl pointer-events-none"></div>
    </div>
  );
};

export default BirthdayMessage;