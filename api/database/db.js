let players = [
  { id: '1', name: '梅西', country: '阿根廷', flag: '🇦🇷', age: 39, skill: '球王级盘带与传球，任意球大师', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20Argentina%20soccer%20player%20Messi%20with%20number%2010%20jersey%20chibi%20style%20green%20background&image_size=square', blood_type: 'A', zodiac: '双子座', mbti: 'INTJ', personality: '温和' },
  { id: '2', name: '阿尔瓦雷斯', country: '阿根廷', flag: '🇦🇷', age: 26, skill: '年轻前锋，速度与射术兼备', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20Argentina%20soccer%20player%20Alvarez%20chibi%20style%20green%20background&image_size=square', blood_type: 'O', zodiac: '水瓶座', mbti: 'ESTP', personality: '冲动' },
  { id: '3', name: '德保罗', country: '阿根廷', flag: '🇦🇷', age: 33, skill: '中场铁闸，拦截能力出众', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20Argentina%20soccer%20player%20De%20Paul%20chibi%20style%20green%20background&image_size=square', blood_type: 'B', zodiac: '金牛座', mbti: 'ISTJ', personality: '隐忍' },
  { id: '4', name: '内马尔', country: '巴西', flag: '🇧🇷', age: 34, skill: '华丽盘带，过人如麻', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20Brazil%20soccer%20player%20Neymar%20with%20number%2010%20jersey%20chibi%20style%20yellow%20background&image_size=square', blood_type: 'AB', zodiac: '双鱼座', mbti: 'ENFP', personality: '傻乐' },
  { id: '5', name: '维尼修斯', country: '巴西', flag: '🇧🇷', age: 26, skill: '速度飞快，突破犀利', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20Brazil%20soccer%20player%20Vinicius%20Jr%20chibi%20style%20green%20background&image_size=square', blood_type: 'O', zodiac: '巨蟹座', mbti: 'ESFP', personality: '冲动' },
  { id: '6', name: '罗德里戈', country: '巴西', flag: '🇧🇷', age: 25, skill: '射术精湛，门前嗅觉灵敏', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20Brazil%20soccer%20player%20Rodrygo%20chibi%20style%20yellow%20background&image_size=square', blood_type: 'A', zodiac: '白羊座', mbti: 'ISFP', personality: '温和' },
  { id: '7', name: '姆巴佩', country: '法国', flag: '🇫🇷', age: 28, skill: '闪电速度，终结能力超强', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20France%20soccer%20player%20Mbappe%20with%20number%2010%20jersey%20chibi%20style%20blue%20background&image_size=square', blood_type: 'O', zodiac: '射手座', mbti: 'ESTP', personality: '冲动' },
  { id: '8', name: '拉比奥特', country: '法国', flag: '🇫🇷', age: 31, skill: '全能中场，攻守兼备', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20France%20soccer%20player%20Rabiot%20chibi%20style%20red%20background&image_size=square', blood_type: 'A', zodiac: '白羊座', mbti: 'ISTJ', personality: '温和' },
  { id: '9', name: '坎特', country: '法国', flag: '🇫🇷', age: 35, skill: '中场抢断王，覆盖面积大', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20France%20soccer%20player%20Kante%20chibi%20style%20blue%20background&image_size=square', blood_type: 'B', zodiac: '双鱼座', mbti: 'ISTP', personality: '隐忍' },
  { id: '10', name: '穆西亚拉', country: '德国', flag: '🇩🇪', age: 23, skill: '天才中场，盘带突破出色', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20Germany%20soccer%20player%20Musiala%20chibi%20style%20red%20background&image_size=square', blood_type: 'AB', zodiac: '水瓶座', mbti: 'ENFP', personality: '傻乐' },
  { id: '11', name: '哈弗茨', country: '德国', flag: '🇩🇪', age: 26, skill: '全能中场，技术细腻', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20Germany%20soccer%20player%20Havertz%20chibi%20style%20yellow%20background&image_size=square', blood_type: 'AB', zodiac: '双子座', mbti: 'INFJ', personality: '温和' },
  { id: '12', name: '基米希', country: '德国', flag: '🇩🇪', age: 31, skill: '后场万金油，传球精准', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20Germany%20soccer%20player%20Kimmich%20chibi%20style%20white%20background&image_size=square', blood_type: 'O', zodiac: '水瓶座', mbti: 'ESTJ', personality: '隐忍' },
  { id: '13', name: '佩德里', country: '西班牙', flag: '🇪🇸', age: 23, skill: '中场天才，控球能力出众', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20Spain%20soccer%20player%20Pedri%20chibi%20style%20red%20background&image_size=square', blood_type: 'A', zodiac: '天蝎座', mbti: 'INTJ', personality: '温和' },
  { id: '14', name: '加维', country: '西班牙', flag: '🇪🇸', age: 22, skill: '活力四射，跑动积极', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20Spain%20soccer%20player%20Gavi%20chibi%20style%20yellow%20background&image_size=square', blood_type: 'O', zodiac: '狮子座', mbti: 'ESFJ', personality: '傻乐' },
  { id: '15', name: '费兰·托雷斯', country: '西班牙', flag: '🇪🇸', age: 26, skill: '边锋快马，传射俱佳', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20Spain%20soccer%20player%20Ferran%20Torres%20chibi%20style%20red%20background&image_size=square', blood_type: 'B', zodiac: '双鱼座', mbti: 'ESFP', personality: '冲动' },
  { id: '16', name: '凯恩', country: '英格兰', flag: '🏴', age: 33, skill: '顶级射手，射术精湛', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20England%20soccer%20player%20Kane%20with%20number%209%20jersey%20chibi%20style%20white%20background&image_size=square', blood_type: 'A', zodiac: '狮子座', mbti: 'ISTJ', personality: '温和' },
  { id: '17', name: '贝林厄姆', country: '英格兰', flag: '🏴', age: 23, skill: '中场新星，全能战士', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20England%20soccer%20player%20Bellingham%20chibi%20style%20white%20background&image_size=square', blood_type: 'O', zodiac: '巨蟹座', mbti: 'ENTJ', personality: '冲动' },
  { id: '18', name: '萨卡', country: '英格兰', flag: '🏴', age: 24, skill: '边路快马，传中精准', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20England%20soccer%20player%20Saka%20chibi%20style%20red%20background&image_size=square', blood_type: 'AB', zodiac: '处女座', mbti: 'ESFP', personality: '傻乐' },
  { id: '19', name: 'C罗', country: '葡萄牙', flag: '🇵🇹', age: 41, skill: '历史最佳射手之一，弹跳惊人', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20Portugal%20soccer%20player%20Ronaldo%20with%20number%207%20jersey%20chibi%20style%20red%20background&image_size=square', blood_type: 'O', zodiac: '水瓶座', mbti: 'ESTP', personality: '冲动' },
  { id: '20', name: 'B费', country: '葡萄牙', flag: '🇵🇹', age: 32, skill: '中场发动机，传球犀利', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20Portugal%20soccer%20player%20Bruno%20Fernandes%20chibi%20style%20green%20background&image_size=square', blood_type: 'A', zodiac: '处女座', mbti: 'ENTJ', personality: '隐忍' },
  { id: '21', name: '菲利克斯', country: '葡萄牙', flag: '🇵🇹', age: 26, skill: '技术天才，盘带华丽', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20Portugal%20soccer%20player%20Felix%20chibi%20style%20red%20background&image_size=square', blood_type: 'AB', zodiac: '天蝎座', mbti: 'INFP', personality: '傻乐' },
  { id: '22', name: '孙兴慜', country: '韩国', flag: '🇰🇷', age: 34, skill: '亚洲一哥，速度与射术兼备', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20South%20Korea%20soccer%20player%20Son%20with%20number%207%20jersey%20chibi%20style%20red%20background&image_size=square', blood_type: 'B', zodiac: '巨蟹座', mbti: 'ISTP', personality: '温和' },
  { id: '23', name: '黄喜灿', country: '韩国', flag: '🇰🇷', age: 30, skill: '前场多面手，跑动积极', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20South%20Korea%20soccer%20player%20Hwang%20chibi%20style%20white%20background&image_size=square', blood_type: 'O', zodiac: '摩羯座', mbti: 'ESFP', personality: '傻乐' },
  { id: '24', name: '李刚仁', country: '韩国', flag: '🇰🇷', age: 24, skill: '中场新星，技术细腻', avatar: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20cartoon%20South%20Korea%20soccer%20player%20Lee%20Kang%20In%20chibi%20style%20blue%20background&image_size=square', blood_type: 'A', zodiac: '水瓶座', mbti: 'INFJ', personality: '隐忍' },
];

let testRecords = [];

function getPlayers() {
  return players;
}

function getPlayerById(id) {
  return players.find(p => p.id === id);
}

function addTestRecord(record) {
  const newRecord = {
    ...record,
    id: Date.now().toString(),
    created_at: new Date().toISOString()
  };
  testRecords.push(newRecord);
  return newRecord;
}

function getTestRecords() {
  return testRecords.map(record => {
    const player = getPlayerById(record.player_id);
    return {
      ...record,
      player_name: player?.name || '',
      player_country: player?.country || '',
      player_flag: player?.flag || ''
    };
  }).reverse();
}

function getTestRecordById(id) {
  return testRecords.find(r => r.id === id);
}

export { getPlayers, getPlayerById, addTestRecord, getTestRecords, getTestRecordById };
