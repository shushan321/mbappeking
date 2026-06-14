import express from 'express';
import { addTestRecord, getTestRecords, getTestRecordById } from '../database/db.js';
import { matchPlayer, getPlayers } from '../services/match.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, bloodType, zodiac, mbti, personality } = req.body;

    if (!name || !bloodType || !zodiac || !mbti || !personality) {
      return res.status(400).json({ success: false, message: '请填写完整信息' });
    }

    const matchedPlayer = await matchPlayer({ name, bloodType, zodiac, mbti, personality });

    if (!matchedPlayer) {
      return res.status(500).json({ success: false, message: '匹配失败' });
    }

    addTestRecord({
      name,
      blood_type: bloodType,
      zodiac,
      mbti,
      personality,
      player_id: matchedPlayer.id
    });

    res.json({
      success: true,
      data: {
        user: { id: Date.now().toString(), name, bloodType, zodiac, mbti, personality },
        player: {
          id: matchedPlayer.id,
          name: matchedPlayer.name,
          country: matchedPlayer.country,
          flag: matchedPlayer.flag,
          age: matchedPlayer.age,
          skill: matchedPlayer.skill,
          avatar: matchedPlayer.avatar,
          mbti: matchedPlayer.mbti
        }
      }
    });
  } catch (error) {
    console.error('匹配过程出错:', error);
    res.status(500).json({ success: false, message: '服务器内部错误' });
  }
});

router.get('/', async (req, res) => {
  try {
    const records = getTestRecords();
    res.json({ success: true, data: records });
  } catch (error) {
    res.status(500).json({ success: false, message: '获取记录失败' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const record = getTestRecordById(req.params.id);

    if (!record) {
      return res.status(404).json({ success: false, message: '记录不存在' });
    }

    res.json({ success: true, data: record });
  } catch (error) {
    res.status(500).json({ success: false, message: '获取记录失败' });
  }
});

export default router;
