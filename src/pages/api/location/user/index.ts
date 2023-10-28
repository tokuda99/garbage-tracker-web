import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { latitude, longitude } = req.body;
    try {
      console.log('latitude:', latitude);
      console.log('longitude:', longitude);
      res.status(200).json({ latitude, longitude });
    }
    catch (error) {
      console.error('エラー:', error);
      res.status(500).json({ error: '内部サーバーエラー' });
    }
  } else {
    res.status(405).json({ message: 'POSTメソッドのみサポートされています' });
  }  
};