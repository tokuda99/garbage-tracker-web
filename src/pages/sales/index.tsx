import { useState, useEffect } from 'react';

interface Location {
  latitude: string;
  longitude: string;
}

export default function LocationInfo() {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    // サーバーサイドで位置情報を取得するAPIを呼び出す
    fetch('/api/getGeolocation')
      .then((response) => response.json())
      .then((data: Location) => setLocation(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {location ? (
        <div>
          <p>緯度: {location.latitude}</p>
          <p>経度: {location.longitude}</p>
        </div>
      ) : (
        <p>位置情報を取得中...</p>
      )}
    </div>
  );
}