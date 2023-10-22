import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method === "GET") {
      try {
        const response = await axios.post('https://api.clip-viewer-lite.com/auth/token', {
          username: '233427034@ccmailg.meijo-u.ac.jp',
          password: 'Meijou128'
        }, {
          headers: {
            'X-API-Key': 'jd3J5V2Ohx8F66iiRAXwf4EfSnWG0kJkassTO4Ce'
          }
        });
  
        const authToken = response.data.token;
  
        const payloadResponse = await axios.get('https://api.clip-viewer-lite.com/payload/latest/000101979d', {
          headers: {
            'X-API-Key': 'jd3J5V2Ohx8F66iiRAXwf4EfSnWG0kJkassTO4Ce',
            'Authorization': authToken
          }
        });
  
        const payloadData = payloadResponse.data.payload[0];
        const sendDateTime = payloadData.sendDateTime;
        const gps = payloadData.gps;
  
        res.status(200).json({ sendDateTime, gps });
      } catch (error) {
        console.error('エラー:', error);
        res.status(500).json({ error: "内部サーバーエラー" });
      }
    } else {
      res.status(405).end();
    }
  }