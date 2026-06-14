import { useState } from 'react';
import { ArrowLeft, Share2, RotateCcw, Heart, Star, Zap, Globe } from 'lucide-react';
import type { Player, TestRequest } from '../types';

export default function ResultPage({
  player,
  user,
  onBack,
}: {
  player: Player;
  user: TestRequest;
  onBack: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareText = `我匹配到了${player.flag} ${player.name}！我是哪个世界杯球员？快来测试看看你会匹配到哪位球星！`;
    
    if (navigator.share) {
      await navigator.share({
        title: '你是哪个世界杯球员？',
        text: shareText,
      });
    } else {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const personalityEmoji = {
    '温和': '😊',
    '冲动': '🔥',
    '隐忍': '😌',
    '傻乐': '😄',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-worldcup-green via-field-green to-grass-dark grass-pattern py-6 px-4">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:text-worldcup-gold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回</span>
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 text-white hover:text-worldcup-gold transition-colors"
          >
            <Share2 className="w-5 h-5" />
            <span>{copied ? '已复制' : '分享'}</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl p-6 card-shadow animate-slide-up">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-worldcup-gold/20 rounded-full px-4 py-2 mb-4">
              <Star className="w-5 h-5 text-worldcup-gold" />
              <span className="text-worldcup-gold font-bold">匹配成功！</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              你是 <span className="text-worldcup-green">{player.name}</span>
            </h1>
            <p className="text-gray-500">{player.flag} {player.country}球星</p>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-worldcup-gold/20 to-yellow-200/20 rounded-full blur-xl" />
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-worldcup-gold shadow-xl bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                src={player.avatar}
                alt={player.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%234CAF50'/%3E%3Cstop offset='100%25' stop-color='%232E7D32'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='90' fill='url(%23g)'/%3E%3Ctext x='100' y='115' text-anchor='middle' fill='white' font-size='32' font-weight='bold'%3E⚽%3C/text%3E%3C/svg%3E`;
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 rounded-2xl p-4 text-center">
              <Globe className="w-6 h-6 text-worldcup-blue mx-auto mb-2" />
              <p className="text-gray-500 text-sm">国家</p>
              <p className="font-bold text-gray-800">{player.country}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4 text-center">
              <Heart className="w-6 h-6 text-worldcup-red mx-auto mb-2" />
              <p className="text-gray-500 text-sm">年龄</p>
              <p className="font-bold text-gray-800">{player.age}岁</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4 text-center">
              <Star className="w-6 h-6 text-worldcup-gold mx-auto mb-2" />
              <p className="text-gray-500 text-sm">MBTI</p>
              <p className="font-bold text-gray-800">{player.mbti}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-worldcup-green/10 to-field-green/10 rounded-2xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <Zap className="w-6 h-6 text-worldcup-gold flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-800 mb-1">技术特点</h3>
                <p className="text-gray-600">{player.skill}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 mb-6">
            <h3 className="font-bold text-gray-800 mb-3">你的测试信息</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">昵称</span>
                <span className="font-semibold text-gray-800">{user.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">血型</span>
                <span className="font-semibold text-gray-800">{user.bloodType}型</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">星座</span>
                <span className="font-semibold text-gray-800">{user.zodiac}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">MBTI</span>
                <span className="font-semibold text-gray-800">{user.mbti}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">性格</span>
                <span className="font-semibold text-gray-800">
                  {personalityEmoji[user.personality as keyof typeof personalityEmoji]} {user.personality}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onBack}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            再测一次
          </button>
        </div>

        <footer className="text-center mt-6 text-white/60 text-sm">
          <p>© 2026 FIFA World Cup 趣味测试</p>
          <p className="mt-1">测试结果仅供娱乐参考</p>
        </footer>
      </div>
    </div>
  );
}
