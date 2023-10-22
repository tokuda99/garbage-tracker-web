import React from "react";
import { GoogleMap, LoadScript, CircleF, MarkerF, InfoWindowF } from "@react-google-maps/api";
import { useState, useEffect, useRef} from "react";
import axios from "axios";
import { useAsync } from "react-use";

const containerStyle = {
  width: "100%",
  height: "86vh",
};

let center = {
  lat: 35.1354425,
  lng: 136.9785947,
};

const garbage_tracker_center = {
  lat: 35.1354425,
  lng: 136.9784947,
};
const garbage_tracker_info_center = {
  lat: 35.1354425+0.0001,
  lng: 136.9784947,
};
const garbage_tracker_markerLabe = {
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "15px",
  fontWeight: "100",
  text: "5",
};
const infoWindowOptions = {
  // content: true,
};
const circleOptions = {
  strokeColor: "#136FFF",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#136FFF",
  fillOpacity: 0.35,
  clickable: true,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,
};

const zoom = 20;

type Center = {
  lat: number;
  lng: number;
}



export const Map = () => {

  const [show_info_window, setShowInfoWindow] = useState(false);
  const [isAvailable, setAvailable] = useState(false);
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const isFirstRef = useRef(true);
  useEffect(() => {
    isFirstRef.current = false;
    if ('geolocation' in navigator) {
      setAvailable(true);
    }
  }, [isAvailable]);

  // const getCurrentPosition = () => {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     const { latitude, longitude } = position.coords;
  //     setPosition({ latitude, longitude });
  //     center = { latitude, longitude}
  //   });
  // };

  const [gps, setGPS] = useState<string>("");
  const [sendDateTime, setSendDateTime] = useState<string>("");

  useAsync(async () => {
    try {
      // 中間APIのエンドポイントに変更
      const response = await axios.get("https://garbage-tracker-k2gruawvb-tokuda99s-projects.vercel.app/api/post");
      console.log(response.data);
      setGPS(response.data.gps);
      setSendDateTime(response.data.sendDateTime);
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (isFirstRef.current) return <div className="App">Loading...</div>;

  return (
    <LoadScript googleMapsApiKey="AIzaSyCLCUrzB2zAKgoN86_kp8hppPhgt1icFZQ">
      <h1>Send Date Time: {sendDateTime}</h1>
        <p>GPS: {gps}</p>
      <GoogleMap onClick={() => setShowInfoWindow(false)} mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        <CircleF center={center} radius={10} options={circleOptions} />
          <MarkerF position={garbage_tracker_center} label={garbage_tracker_markerLabe} icon={"https://maps.google.com/mapfiles/ms/micons/drinking_water.png"} onClick={() => setShowInfoWindow(true)}>
          {show_info_window && <InfoWindowF options={infoWindowOptions} onCloseClick={() => setShowInfoWindow(false)}>
            <div className={'flex flex-col flex-grow'}>
              <button className="bg-green-900 hover:bg-green-500 text-white font-medium rounded px-4 py-2" onClick={function (){
              alert(123);
            }}>COME ON!</button>
                </div>
          </InfoWindowF>}
        </MarkerF>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;






  // const [garbageTrackerCenter, setGarbageTrackerCenter] = useState<{ gbt_lat: number; gbt_lng: number }>({
  //     gbt_lat: 0,
  //     gbt_lng: 0,
  //   }
  // );

  // useEffect(() => {
  //   axios.post('https://api.clip-viewer-lite.com/auth/token', {
  //     username: '233427034@ccmailg.meijo-u.ac.jp',
  //     password: 'Meijou128'
  //     }, {
  //         headers: {
  //             'X-API-Key': 'jd3J5V2Ohx8F66iiRAXwf4EfSnWG0kJkassTO4Ce'
  //         }
  //   })
  //   .then(response => {
  //     const authToken = response.data.token;
  //     // 取得したトークンを使用して GET リクエストを送信する
  //     axios.get('https://api.clip-viewer-lite.com/payload/latest/000101979d', {
  //         headers: {
  //             'X-API-Key': 'jd3J5V2Ohx8F66iiRAXwf4EfSnWG0kJkassTO4Ce',
  //             'Authorization': authToken
  //         }
  //     })
  //     .then(response => {
  //         // GET リクエストの結果を処理する
  //         console.log(response.data);
  //         console.log("");
  //         // sendDateTimeとgpsを抽出
  //         const payloadData = response.data.payload[0]; // レスポンス内の最初のデータを取得
  //         const sendDateTime = payloadData.sendDateTime;
  //         const gps = payloadData.gps;
  //         const parts = gps.split(' ');

  //         // 数値型に変換
  //         const numericValues = parts
  //           .filter(part => !isNaN(parseFloat(part)))
  //           .map(part => parseFloat(part));
  //         let gbt_lat: number = numericValues[0] + numericValues[1]*0.01;
  //         let gbt_lng: number = numericValues[2] + numericValues[3]*0.01;
  //         const garbage_tracker_center: Center = {
  //           lat: {gbt_lat},
  //           lng: {gbt_lng}
  //         }
  //         // setGarbageTrackerCenter({
  //         //   gbt_lat: numericValues[0] + numericValues[1]*0.01,
  //         //   gbt_lng: numericValues[2] + numericValues[3]*0.01,
  //         // })
  //         console.log('sendDateTime:',sendDateTime);
  //         console.log('sendDateTime:',sendDateTime);

  //     });
  //   });
  // }, []);
  // const handleClick = (e) => {
  // }
