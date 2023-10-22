import axios from "axios";
import type { NextPage } from "next";

// hooks
import { useState } from "react";
import { useAsync } from "react-use";

// types
type PostType = {
  sendDateTime: string;
  gps: string;
};

const Page: NextPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [gps, setGPS] = useState<string>("");
  const [sendDateTime, setSendDateTime] = useState<string>("");

  useAsync(async () => {
    try {
      // 中間APIのエンドポイントに変更
      const response = await axios.get("http://localhost:3000/api/post");
      console.log(response.data);
      setPosts(response.data);
      setGPS(response.data.gps);
      setSendDateTime(response.data.sendDateTime);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      <h1>Send Date Time: {sendDateTime}</h1>
      <p>GPS: {gps}</p>
    </div>
  );
};

export default Page;