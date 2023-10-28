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

          const latitude = 35.682839;
          const longitude = 139.759455;
          const latitude2 = 35.682839;
          const longitude2 = 139.759455;
          const locationData = {
              latitude,
              longitude,
              latitude2,
              longitude2,
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
