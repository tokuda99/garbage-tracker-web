import React from "react";
import axios from "axios";
import { useState} from "react";
import { useAsync } from "react-use";

const Sales: React.FC = () => {
  const [location, setLocation] = useState<string>("");

  useAsync(async () => {
    try {
      // 中間APIのエンドポイントに変更
      const response = await axios.get("https://garbage-tracker-k2gruawvb-tokuda99s-projects.vercel.app/api/location/user");
      console.log(response.data);
      setLocation(response.data);
    } catch (e) {
      console.log(e);
    }
  }, []);
  return <div>{location}</div>;
};

export default Sales;