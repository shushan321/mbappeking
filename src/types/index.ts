export interface Player {
  id: string;
  name: string;
  country: string;
  flag: string;
  age: number;
  skill: string;
  avatar: string;
  mbti: string;
}

export interface TestRequest {
  name: string;
  bloodType: string;
  zodiac: string;
  mbti: string;
  personality: string;
}

export interface TestResponse {
  success: boolean;
  data?: {
    user: TestRequest & { id: string };
    player: Player;
  };
  message?: string;
}

export interface TestRecord {
  id: string;
  name: string;
  blood_type: string;
  zodiac: string;
  mbti: string;
  personality: string;
  player_id: string;
  player_name: string;
  player_country: string;
  player_flag: string;
  created_at: string;
}

export const BLOOD_TYPES = ['A', 'B', 'AB', 'O'];

export const ZODIAC_SIGNS = [
  '白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座',
  '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'
];

export const MBTI_TYPES = [
  'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
  'ISTP', 'ISFP', 'INFP', 'INTP',
  'ESTP', 'ESFP', 'ENFP', 'ENTP',
  'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'
];

export const PERSONALITY_TYPES = [
  { value: '温和', label: '温和', emoji: '😊' },
  { value: '冲动', label: '冲动', emoji: '🔥' },
  { value: '隐忍', label: '隐忍', emoji: '😌' },
  { value: '傻乐', label: '傻乐', emoji: '😄' }
];
