import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  // 指定されたJSONレスポンスを作成
  const response = {
    args: {},
    origin: "202.11.6.60",
    url: "https://httpbin.org/get",
  };

  // JSONレスポンスを返す
  res.status(200).json(response);
};