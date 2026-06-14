import { useState, useEffect } from 'react';
import { Trophy, Play, Star, Users, Calendar } from 'lucide-react';
import { getPlayers } from '../api';
import type { Player } from '../types';

export default function HomePage({ onStartTest }: { onStartTest: () => void }) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPlayers().then((res) => {
      if (res.success) {
        setPlayers(res.data.slice(0, 6));
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-worldcup-green via-field-green to-grass-dark grass-pattern">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Calendar className="w-5 h-5 text-worldcup-gold" />
            <span className="text-white font-semibold">2026 FIFA World Cup</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            你是哪个世界杯球员？
          </h1>
          <p className="text-white/80 text-lg max-w-md mx-auto">
            通过你的性格特征，匹配2026年世界杯最适合你的球星
          </p>
        </header>

        <section className="relative mb-12">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 bg-worldcup-gold/20 rounded-full pulse-ring" />
            <div className="absolute inset-2 bg-gradient-to-br from-worldcup-gold to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
              <Trophy className="w-16 h-16 text-white" />
            </div>
          </div>

          <button
            onClick={onStartTest}
            className="btn-primary text-xl inline-flex items-center gap-3 mx-auto block"
          >
            <Play className="w-6 h-6" />
            开始测试
          </button>
        </section>

        <section className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 mb-8">
          <h2 className="text-white text-xl font-bold mb-4 text-center">测试说明</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-worldcup-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">📝</span>
              </div>
              <p className="text-white text-sm">填写个人信息</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-worldcup-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">⚽</span>
              </div>
              <p className="text-white text-sm">系统智能匹配</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-worldcup-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🏆</span>
              </div>
              <p className="text-white text-sm">获取匹配结果</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-worldcup-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">📤</span>
              </div>
              <p className="text-white text-sm">分享给好友</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-xl font-bold flex items-center gap-2">
              <Star className="w-5 h-5 text-worldcup-gold" />
              热门球星
            </h2>
            <span className="text-white/60 text-sm flex items-center gap-1">
              <Users className="w-4 h-4" />
              {players.length}位球星
            </span>
          </div>

          {isLoading ? (
            <div className="flex justify-center">
              <div className="w-8 h-8 border-4 border-worldcup-gold border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {players.map((player, index) => (
                <div
                  key={player.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden border-2 border-worldcup-gold/50">
                    <img
                      src={player.avatar}
                      alt={player.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-white font-semibold text-sm truncate">{player.name}</p>
                  <p className="text-white/60 text-xs">{player.flag} {player.country}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        <footer className="text-center mt-12 text-white/60 text-sm">
          <p>© 2026 FIFA World Cup 趣味测试</p>
          <p className="mt-1">测试结果仅供娱乐参考</p>
        </footer>
      </div>
    </div>
  );
}
