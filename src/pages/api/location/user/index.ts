import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Location } from "@/types"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method === "GET") {
      try {
          // navigator.geolocation.getCurrentPosition(position => {
          //   const { latitude, longitude } = position.coords;
          //   console.log(position.coords)
          //   res.status(200).json({data:{latitude, longitude }});
          // });

        // 仮の緯度と経度のデータを非同期で取得
        const latitude = "35 08.1118";
        const longitude = "0136 58.6933";
        const sendDateTime = "2023-10-04 18:43:47";

        const locationData = {
          data: {
            sendDateTime,
            gps: `${latitude} ${longitude}`,
          },
        };

        // レスポンスとしてJSONデータを返す
        res.status(200).json(locationData);
      } catch (error) {
        console.error('エラー:', error);
        res.status(500).json({ error: "内部サーバーエラー" });
      }
    } else {
      res.status(405).end();
    }
  }
