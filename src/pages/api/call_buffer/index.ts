import { NextApiRequest, NextApiResponse } from 'next';

let isCalled: boolean = false;
  
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      // データをファイルに保存
      const requestData = JSON.parse(req.body) as boolean;
      isCalled = requestData;
      res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
      res.status(400).json({ message: 'Invalid JSON data format' });
    }
  } else if (req.method === 'GET') {
    try {
      res.status(200).json({ isCalled });
    } catch (error) {
      res.status(500).json({ error: 'Error reading data' });
    }
  } else {
    res.status(405).end();
  }
};