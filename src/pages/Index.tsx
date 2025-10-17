import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const trendingMovies = [
    {
      id: 1,
      title: 'Оппенгеймер',
      year: 2023,
      rating: 8.8,
      genre: 'Биография',
      image: 'https://cdn.poehali.dev/projects/805b3fe5-ec51-46e7-88f8-f9afe6fd3fda/files/9b7449f9-0e7e-4624-b733-4a2a641b7107.jpg',
      description: 'История Роберта Оппенгеймера и создания атомной бомбы'
    },
    {
      id: 2,
      title: 'Барби',
      year: 2023,
      rating: 7.5,
      genre: 'Комедия',
      image: 'https://cdn.poehali.dev/projects/805b3fe5-ec51-46e7-88f8-f9afe6fd3fda/files/662996d6-fd36-4bec-beda-e088e6fe7d8e.jpg',
      description: 'Барби покидает идеальный мир и отправляется в реальный'
    },
    {
      id: 3,
      title: 'Дюна: Часть вторая',
      year: 2024,
      rating: 8.9,
      genre: 'Фантастика',
      image: 'https://cdn.poehali.dev/projects/805b3fe5-ec51-46e7-88f8-f9afe6fd3fda/files/8211c0c9-2d45-4b72-bcc3-f2bc5e4d1327.jpg',
      description: 'Продолжение эпической саги о пустынной планете'
    }
  ];

  const topMovies = [
    { id: 1, title: 'Побег из Шоушенка', year: 1994, rating: 9.3, votes: '2.8M' },
    { id: 2, title: 'Крёстный отец', year: 1972, rating: 9.2, votes: '2.1M' },
    { id: 3, title: 'Тёмный рыцарь', year: 2008, rating: 9.0, votes: '2.9M' },
    { id: 4, title: 'Криминальное чтиво', year: 1994, rating: 8.9, votes: '2.2M' },
    { id: 5, title: 'Форрест Гамп', year: 1994, rating: 8.8, votes: '2.3M' }
  ];

  const reviews = [
    {
      id: 1,
      movie: 'Оппенгеймер',
      author: 'Иван Петров',
      rating: 9,
      text: 'Невероятная работа Кристофера Нолана. Визуально ошеломляющий и эмоционально насыщенный фильм.',
      date: '15 окт 2024'
    },
    {
      id: 2,
      movie: 'Дюна: Часть вторая',
      author: 'Мария Сидорова',
      rating: 10,
      text: 'Эпическое кино! Вильнёв превзошёл все ожидания. Визуальные эффекты на высшем уровне.',
      date: '12 окт 2024'
    }
  ];

  const genres = [
    { name: 'Боевик', count: 1234, icon: 'Zap' },
    { name: 'Драма', count: 2156, icon: 'Heart' },
    { name: 'Комедия', count: 1843, icon: 'Smile' },
    { name: 'Фантастика', count: 987, icon: 'Sparkles' },
    { name: 'Триллер', count: 1456, icon: 'Eye' },
    { name: 'Ужасы', count: 654, icon: 'Ghost' }
  ];

  const directors = [
    { name: 'Кристофер Нолан', movies: 12, rating: 8.7 },
    { name: 'Квентин Тарантино', movies: 10, rating: 8.5 },
    { name: 'Мартин Скорсезе', movies: 25, rating: 8.4 },
    { name: 'Дени Вильнёв', movies: 11, rating: 8.3 }
  ];

  const shareToSocial = (platform: string) => {
    const url = window.location.href;
    const text = 'Смотрите лучшие фильмы на CineVerse!';
    
    const urls: Record<string, string> = {
      vk: `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
    };
    
    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cinema-dark via-black to-cinema-dark">
      <header className="sticky top-0 z-50 bg-cinema-dark/95 backdrop-blur-lg border-b border-gold/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Film" className="text-gold" size={32} />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gold to-cinema-red bg-clip-text text-transparent">
                CineVerse
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#main" className="text-foreground/80 hover:text-gold transition-colors">Главная</a>
              <a href="#tops" className="text-foreground/80 hover:text-gold transition-colors">Топы</a>
              <a href="#reviews" className="text-foreground/80 hover:text-gold transition-colors">Рецензии</a>
              <a href="#genres" className="text-foreground/80 hover:text-gold transition-colors">Жанры</a>
              <a href="#directors" className="text-foreground/80 hover:text-gold transition-colors">Режиссёры</a>
            </nav>
            <Button className="bg-gold text-cinema-dark hover:bg-gold/90">
              <Icon name="Search" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <section id="main" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cinema-dark via-transparent to-cinema-dark" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-gold via-cinema-red to-gold bg-clip-text text-transparent">
              Мир Кинематографа
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Откройте для себя лучшие фильмы, читайте рецензии и делитесь впечатлениями
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {trendingMovies.map((movie, index) => (
              <Card 
                key={movie.id} 
                className="group bg-card/50 backdrop-blur border-gold/20 hover:border-gold/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold/20 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={movie.image} 
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cinema-dark via-cinema-dark/50 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-cinema-red text-white border-0">
                    <Icon name="Star" size={14} className="mr-1" />
                    {movie.rating}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-2 bg-gold/20 text-gold border-gold/30">{movie.genre}</Badge>
                  <h3 className="text-2xl font-bold mb-2">{movie.title}</h3>
                  <p className="text-sm text-foreground/60 mb-4">{movie.year}</p>
                  <p className="text-foreground/80 line-clamp-2">{movie.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Button 
              variant="outline" 
              className="border-gold/30 text-gold hover:bg-gold/10"
              onClick={() => shareToSocial('vk')}
            >
              <Icon name="Share2" size={16} className="mr-2" />
              ВКонтакте
            </Button>
            <Button 
              variant="outline" 
              className="border-gold/30 text-gold hover:bg-gold/10"
              onClick={() => shareToSocial('telegram')}
            >
              <Icon name="Send" size={16} className="mr-2" />
              Telegram
            </Button>
            <Button 
              variant="outline" 
              className="border-gold/30 text-gold hover:bg-gold/10"
              onClick={() => shareToSocial('twitter')}
            >
              <Icon name="Twitter" size={16} className="mr-2" />
              Twitter
            </Button>
          </div>
        </div>
      </section>

      <section id="tops" className="py-16 bg-cinema-dark/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <Icon name="Trophy" className="inline mr-3 text-gold" size={36} />
            Топ-250 фильмов
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {topMovies.map((movie) => (
              <Card key={movie.id} className="bg-card/30 backdrop-blur border-gold/10 hover:border-gold/40 transition-all cursor-pointer">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="text-5xl font-bold text-gold/30">#{movie.id}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{movie.title}</h3>
                    <p className="text-sm text-foreground/60 mb-2">{movie.year}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Icon name="Star" className="text-cinema-red" size={16} />
                        <span className="font-bold text-lg">{movie.rating}</span>
                      </div>
                      <span className="text-sm text-foreground/50">{movie.votes} голосов</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <Icon name="MessageSquare" className="inline mr-3 text-gold" size={36} />
            Рецензии критиков
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="bg-card/30 backdrop-blur border-gold/10 hover:border-gold/40 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{review.movie}</h3>
                    <Badge className="bg-cinema-red text-white border-0">
                      {review.rating}/10
                    </Badge>
                  </div>
                  <p className="text-foreground/80 mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center justify-between text-sm text-foreground/50">
                    <span className="flex items-center gap-2">
                      <Icon name="User" size={16} />
                      {review.author}
                    </span>
                    <span>{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="genres" className="py-16 bg-cinema-dark/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <Icon name="Clapperboard" className="inline mr-3 text-gold" size={36} />
            Жанры
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {genres.map((genre) => (
              <Card 
                key={genre.name} 
                className="bg-gradient-to-br from-card/40 to-card/20 backdrop-blur border-gold/20 hover:border-gold hover:scale-105 transition-all cursor-pointer group"
              >
                <CardContent className="p-6 text-center">
                  <Icon 
                    name={genre.icon as any} 
                    className="mx-auto mb-3 text-gold group-hover:scale-110 transition-transform" 
                    size={32} 
                  />
                  <h3 className="font-bold mb-1">{genre.name}</h3>
                  <p className="text-sm text-foreground/60">{genre.count} фильмов</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="directors" className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                <Icon name="Users" className="inline mr-3 text-gold" size={36} />
                Режиссёры
              </h2>
              <div className="space-y-4">
                {directors.map((director) => (
                  <Card key={director.name} className="bg-card/30 backdrop-blur border-gold/10 hover:border-gold/40 transition-all cursor-pointer">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold mb-1">{director.name}</h3>
                        <p className="text-sm text-foreground/60">{director.movies} фильмов</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" className="text-gold" size={16} />
                        <span className="font-bold">{director.rating}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8">
                <Icon name="Calendar" className="inline mr-3 text-gold" size={36} />
                Календарь премьер
              </h2>
              <Card className="bg-card/30 backdrop-blur border-gold/20">
                <CardContent className="p-6">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border-0"
                  />
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gold/10 rounded-lg border border-gold/30">
                      <span className="font-semibold">Дюна 3</span>
                      <Badge className="bg-gold text-cinema-dark">18 дек 2025</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gold/10 rounded-lg border border-gold/30">
                      <span className="font-semibold">Аватар 4</span>
                      <Badge className="bg-gold text-cinema-dark">20 дек 2026</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-cinema-dark border-t border-gold/20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Film" className="text-gold" size={28} />
            <h3 className="text-2xl font-bold text-gold">CineVerse</h3>
          </div>
          <p className="text-foreground/60 mb-6">Ваш проводник в мир кинематографа</p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="hover:text-gold">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-gold">
              <Icon name="Youtube" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-gold">
              <Icon name="Twitter" size={20} />
            </Button>
          </div>
          <p className="text-sm text-foreground/40 mt-6">© 2024 CineVerse. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
