import React from "react";
import axios from "axios";
import { useState} from "react";
import { useAsync } from "react-use";

const Sales: React.FC = () => {
  const [location, setLocation] = useState<{latitude: string; longitude: string; latitude2: string; longitude2: string} | null>(null);

  useAsync(async () => {
    try {
      // 中間APIのエンドポイントに変更
      const response = await axios.get("https://www.garbage-tracker.com/api/location/user");
      console.log(response);
      setLocation(response.data);
      console.log(response);

    } catch (e) {
      console.log(e);
    }
  }, []);
  return <div>{location?.latitude} {location?.longitude}</div>;
};

export default Sales;