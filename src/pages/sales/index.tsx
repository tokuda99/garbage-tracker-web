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
      setLocation({
        latitude: response.data.latitude,
        longitude: response.data.longitude,
        latitude2: response.data.latitude2,
        longitude2: response.data.longitude2,
      });
      console.log(response);

    } catch (e) {
      console.log(e);
    }
  }, []);
  return <div>{location?.latitude} {location?.longitude}</div>;
};

export default Sales;