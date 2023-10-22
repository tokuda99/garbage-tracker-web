import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Location } from "@/types"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method === "GET") {
      try {
          navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            res.status(200).json({ latitude, longitude });
          });
      } catch (error) {
        console.error('エラー:', error);
        res.status(500).json({ error: "内部サーバーエラー" });
      }
    } else {
      res.status(405).end();
    }
  }