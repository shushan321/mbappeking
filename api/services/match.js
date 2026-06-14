import { getPlayers } from '../database/db.js';

const weights = {
  bloodType: 0.10,
  zodiac: 0.15,
  mbti: 0.30,
  personality: 0.45
};

function calculateMatchScore(user, player) {
  let score = 0;

  if (user.bloodType === player.blood_type) {
    score += weights.bloodType;
  }

  if (user.zodiac === player.zodiac) {
    score += weights.zodiac;
  }

  if (user.mbti && player.mbti) {
    const mbtiMatch = user.mbti.split('').filter((c, i) => c === player.mbti[i]).length / 4;
    score += weights.mbti * mbtiMatch;
  }

  if (user.personality === player.personality) {
    score += weights.personality;
  }

  return score;
}

async function matchPlayer(userData) {
  const players = getPlayers();
  
  let bestMatch = null;
  let highestScore = -1;
  const tiedPlayers = [];

  for (const player of players) {
    const score = calculateMatchScore(userData, player);
    
    if (score > highestScore) {
      highestScore = score;
      bestMatch = player;
      tiedPlayers.length = 0;
    } else if (score === highestScore) {
      tiedPlayers.push(player);
    }
  }

  if (tiedPlayers.length > 0) {
    const randomIndex = Math.floor(Math.random() * (tiedPlayers.length + 1));
    if (randomIndex === tiedPlayers.length) {
      return bestMatch;
    }
    return tiedPlayers[randomIndex];
  }

  return bestMatch;
}

export { getPlayers, matchPlayer };
