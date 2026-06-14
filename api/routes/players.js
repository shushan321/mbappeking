import express from 'express';
import { getPlayers } from '../services/match.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const players = await getPlayers();
    res.json({ success: true, data: players });
  } catch (error) {
    res.status(500).json({ success: false, message: '获取球员列表失败' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const players = await getPlayers();
    const player = players.find(p => p.id === req.params.id);
    if (player) {
      res.json({ success: true, data: player });
    } else {
      res.status(404).json({ success: false, message: '球员不存在' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: '获取球员信息失败' });
  }
});

export default router;
