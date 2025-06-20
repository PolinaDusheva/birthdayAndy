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
        
        <div className="prose prose-lg max-w-none text-foreground text-center">
          <p className="text-lg leading-relaxed text-muted-foreground italic">
            за най прекрасната капибара в живота ми...
          </p>
          
          <div className="bg-accent/30 rounded-lg p-6 my-6 text-center">
            <p className="mb-4 text-center">
              И още една година от нашия живот измина и неусетно осъзнаваме колко неща сме преживели заедно.
              Нещо, което не бихме могли да си представим преди да се срещнем.
            </p>
            <p className="mb-4 text-center">
              
              Днес е повод да се радваш на това което си постигнал въпреки трудностите, защото го заслужавш. 
              Често предизвикатекствата ни правят по-силни, а хората ни правят това което сме. 
              Всичко се случва с причина и често не е под наш контрол. Причината за ммоето щастие си ти!
            </p>
            <p className="text-center">
              Бъди все така целеустремен и не спирай да преследваш мечтите си.
              Когато в живота ти се случва нещо невероятно, знай че винаги ще те подкрепям и ще се радвам да съм част от твоите приключения.
              Честит Рожден ден! 🥳
            </p>
          </div>
          
          <p className="text-lg font-semibold text-primary">
            С цялата си любов,
          </p>
          <p className="text-base text-muted-foreground italic">
            Твоята Капибара 💕
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-destructive/5 rounded-2xl pointer-events-none"></div>
    </div>
  );
};

export default BirthdayMessage;