import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'POST') {
//     const { latitude, longitude } = req.body;
//     try {
//       res.status(200).json({ latitude, longitude });
//       const response = await axios.post('http://192.168.50.12:5000', { latitude, longitude });
//       console.log('位置情報がPOSTされました', response.data);
//     }
//     catch (error) {
//       console.error('エラー:', error);
//       res.status(500).json({ error: '内部サーバーエラー' });
//     }
//   } else {
//     res.status(405).json({ message: 'POSTメソッドのみサポートされています' });
//   }  
// };

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { lat, lng } = req.body;
    try {
      res.status(200).json({ lat, lng });
      const response = await axios.post('http://192.168.50.12:5000', { lat, lng });
      console.log('位置情報がPOSTされました', response.data);
    }
    catch (error) {
      console.error('エラー:', error);
      res.status(500).json({ error: '内部サーバーエラー' });
    }
  }
  else if (req.method === 'GET') {
    try {
      res.status(200).json({ lat: 35.13542, lng: 136.97875});
    }
    catch (error) {
      res.status(500).json({ error: '内部サーバーエラー' });
    }
  } 
  else {
    res.status(405).json({ message: 'POSTメソッドのみサポートされています' });
  }  
};