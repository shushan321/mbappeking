import { useState } from 'react';
import { ArrowLeft, User, Droplets, Brain, Heart, Send } from 'lucide-react';
import { submitTest } from '../api';
import {
  BLOOD_TYPES,
  ZODIAC_SIGNS,
  MBTI_TYPES,
  PERSONALITY_TYPES,
  type TestRequest,
  type Player,
} from '../types';

export default function TestFormPage({
  onBack,
  onResult,
}: {
  onBack: () => void;
  onResult: (player: Player, user: TestRequest) => void;
}) {
  const [formData, setFormData] = useState<TestRequest>({
    name: '',
    bloodType: '',
    zodiac: '',
    mbti: '',
    personality: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: '基本信息', icon: User },
    { id: 2, title: '血型星座', icon: Droplets },
    { id: 3, title: '性格特质', icon: Heart },
  ];

  const handleSubmit = async () => {
    if (!formData.name || !formData.bloodType || !formData.zodiac || !formData.mbti || !formData.personality) {
      alert('请填写完整信息');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitTest(formData);
      if (response.success && response.data) {
        onResult(response.data.player, formData);
      } else {
        alert(response.message || '匹配失败，请重试');
      }
    } catch (error) {
      alert('网络错误，请重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    if (currentStep === 1) return formData.name;
    if (currentStep === 2) return formData.bloodType && formData.zodiac;
    if (currentStep === 3) return formData.mbti && formData.personality;
    return false;
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
          <div className="flex items-center gap-1">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  currentStep >= step.id
                    ? 'bg-worldcup-gold text-gray-900'
                    : 'bg-white/20 text-white/60'
                }`}
              >
                {step.id}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 card-shadow">
          <div className="mb-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center gap-3 mb-2 ${
                  currentStep === step.id ? 'text-worldcup-green' : 'text-gray-400'
                }`}
              >
                <step.icon className="w-5 h-5" />
                <span className="font-semibold">{step.title}</span>
              </div>
            ))}
          </div>

          {currentStep === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-xl font-bold text-gray-800 mb-4">请输入你的昵称</h3>
              <input
                type="text"
                placeholder="你的名字"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input text-lg"
                maxLength={20}
              />
            </div>
          )}

          {currentStep === 2 && (
            <div className="animate-fade-in">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">选择你的血型</h3>
                <div className="grid grid-cols-4 gap-3">
                  {BLOOD_TYPES.map((type) => (
                    <button
                      key={type}
                      onClick={() => setFormData({ ...formData, bloodType: type })}
                      className={`option-card text-center ${
                        formData.bloodType === type ? 'selected' : ''
                      }`}
                    >
                      <div className="text-2xl mb-1">🩸</div>
                      <span className="font-bold text-gray-800">{type}型</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">选择你的星座</h3>
                <select
                  value={formData.zodiac}
                  onChange={(e) => setFormData({ ...formData, zodiac: e.target.value })}
                  className="form-select text-lg"
                >
                  <option value="">请选择星座</option>
                  {ZODIAC_SIGNS.map((sign) => (
                    <option key={sign} value={sign}>{sign}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="animate-fade-in">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Brain className="w-6 h-6" />
                  你的MBTI类型
                </h3>
                <select
                  value={formData.mbti}
                  onChange={(e) => setFormData({ ...formData, mbti: e.target.value })}
                  className="form-select text-lg"
                >
                  <option value="">请选择MBTI</option>
                  {MBTI_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6" />
                  你的性格特点
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {PERSONALITY_TYPES.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setFormData({ ...formData, personality: type.value })}
                      className={`option-card ${
                        formData.personality === type.value ? 'selected' : ''
                      }`}
                    >
                      <div className="text-3xl mb-2">{type.emoji}</div>
                      <span className="font-bold text-gray-800">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex gap-4">
          {currentStep > 1 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="btn-secondary flex-1"
            >
              上一步
            </button>
          )}
          {currentStep < 3 ? (
            <button
              onClick={() => canProceed() && setCurrentStep(currentStep + 1)}
              disabled={!canProceed()}
              className={`flex-1 py-3 px-6 rounded-full font-bold transition-all ${
                canProceed()
                  ? 'btn-primary'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              下一步
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn-primary flex-1 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  开始匹配
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
