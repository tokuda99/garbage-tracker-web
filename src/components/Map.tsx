import React, { useState, useEffect, useRef} from "react";
import axios from "axios";
import { useAsync } from "react-use";
import { GoogleMap, LoadScript, CircleF, MarkerF, InfoWindowF } from "@react-google-maps/api";
import { PiHandsClappingDuotone } from 'react-icons/pi';

const containerStyle = {
  width: "100%",
  height: "86vh",
};

// const garbage_tracker_center = {
//   lat: 35.1354425,
//   lng: 136.9784947,
// };

const garbage_tracker_markerLabel = {
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

// type LatLng = {
//   lat: number;
//   lng: number;
// };

type Watch = {
  isWatching: boolean;
  watchId: number | null;
};



export const Map = () => {

  const [show_info_window, setShowInfoWindow] = useState(false);
  // const [isAvailable, setAvailable] = useState(false);
  const [user_center, setUserCenter] = useState<google.maps.LatLngLiteral | undefined>(undefined);
  const [garbage_tracker_center, setGarbageTrackerCenter] = useState<google.maps.LatLngLiteral | google.maps.LatLngLiteral>({lat: 36.0, lng: 137.166667});
  const [isCalled, setCalled] = useState<boolean>(false);
  const [watchStatus, setWatchStatus] = useState<Watch>({isWatching: false, watchId: null});

    // const isFirstRef = useRef(true);
  useEffect(() => {
    getCurrentPosition();
  }, []);

  const startWatchPosition = () => {
    const watchId = navigator.geolocation.watchPosition(position => {
      const { latitude, longitude } = position.coords;
      setUserCenter({ lat: latitude, lng: longitude});
    });

    setWatchStatus({ isWatching: true, watchId });
  };

  const stopWatchPosition = (watchId: number | null) => {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
      setWatchStatus({ isWatching: false, watchId: null });
    }
  }

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setUserCenter({ lat: latitude, lng: longitude});
    });
  };

  const callGarbageTracker = () => {
    getCurrentPosition();
    axios.post('https://www.garbage-tracker.com/api/location/user', { latitude: user_center?.lat, longitude: user_center?.lng })
    .then((response) => {
      console.log('位置情報がPOSTされました', response.data);

      setCalled(true);
    })
    .catch((error) => {
      console.error('位置情報のPOSTに失敗しました', error);
    });
    axios.post('https://www.garbage-tracker.com/api/call_buffer', { isCalled })
    .then((response) => {
      console.log('呼び出し中', response.data);
    })
    .catch((error) => {
      console.error('呼び出しに失敗しました', error);
    });
    
  };

  useAsync(async () => {
    try {
      // 中間APIのエンドポイントに変更
      const response = await axios.get("https://www.garbage-tracker.com/api/location/garbage_tracker");
      const gbg_tracker_lat = response.data.lat;
      const gbg_tracker_lng = response.data.lng;
      setGarbageTrackerCenter({ lat: gbg_tracker_lat, lng: gbg_tracker_lng});
      console.log(gbg_tracker_lat)
    } catch (e) {
      console.log(e);
    }
  }, [garbage_tracker_center]);

  // if (isFirstRef.current) return <div className="App">Loading...</div>;

  return (
    <LoadScript googleMapsApiKey="AIzaSyCLCUrzB2zAKgoN86_kp8hppPhgt1icFZQ">
      <GoogleMap onClick={() => setShowInfoWindow(false)} mapContainerStyle={containerStyle} center={user_center} zoom={zoom}>
        <CircleF center={user_center} radius={10} options={circleOptions} />
          <MarkerF position={garbage_tracker_center} label={garbage_tracker_markerLabel} icon={"https://maps.google.com/mapfiles/ms/micons/drinking_water.png"} onClick={() => setShowInfoWindow(true)}>
          {show_info_window && <InfoWindowF options={infoWindowOptions} onCloseClick={() => setShowInfoWindow(false)}>
            <div className={'flex flex-col flex-grow items-center'}>
              <button className="hover:text-orange-400 text-orange-500 font-medium rounded px-4 py-2" onClick={callGarbageTracker}> COME ON!</button>
              <PiHandsClappingDuotone color={'black'} size={30} onClick={callGarbageTracker}/>
            </div>
          </InfoWindowF>}
        </MarkerF>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;


// export const Map = () => {

//   const [show_info_window, setShowInfoWindow] = useState(false);
//   // const [isAvailable, setAvailable] = useState(false);
//   const [user_center, setUserCenter] = useState<google.maps.LatLngLiteral | undefined>(undefined);
//   const [garbage_tracker_center, setGarbageTrackerCenter] = useState<google.maps.LatLngLiteral | LatLng>({lat: 36.0, lng: 137.166667});
//   const [isCalled, setCalled] = useState<boolean>(false);
//   const [watchStatus, setWatchStatus] = useState<Watch>({isWatching: false, watchId: null});

//     // const isFirstRef = useRef(true);
//   useEffect(() => {
//     getCurrentPosition();
//   }, []);

//   const startWatchPosition = () => {
//     const watchId = navigator.geolocation.watchPosition(position => {
//       const { latitude, longitude } = position.coords;
//       setUserCenter({ lat: latitude, lng: longitude});
//     });

//     setWatchStatus({ isWatching: true, watchId });
//   };

//   const stopWatchPosition = (watchId: number | null) => {
//     if (watchId !== null) {
//       navigator.geolocation.clearWatch(watchId);
//       setWatchStatus({ isWatching: false, watchId: null });
//     }
//   }

//   const getCurrentPosition = () => {
//     navigator.geolocation.getCurrentPosition(position => {
//       const { latitude, longitude } = position.coords;
//       setUserCenter({ lat: latitude, lng: longitude});
//     });
//   };

//   const callGarbageTracker = () => {
//     navigator.geolocation.getCurrentPosition(position => {
//       const { latitude, longitude } = position.coords;
//       setUserCenter({ lat: latitude, lng: longitude});
//       const data = {
//         latitude,
//         longitude,
//       };
//       axios.post('https://www.garbage-tracker.com/api/location/user', data)
//       .then((response) => {
//         console.log('位置情報がPOSTされました', response.data);
//         setCalled(true);
//       })
//       .catch((error) => {
//         console.error('位置情報のPOSTに失敗しました', error);
//       });
//     });

//     axios.post('https://www.garbage-tracker.com/api/call_buffer', { isCalled })
//     .then((response) => {
//       console.log('呼び出し中', response.data);
//     })
//     .catch((error) => {
//       console.error('呼び出しに失敗しました', error);
//     });
    
//   };

//   useAsync(async () => {
//     try {
//       // 中間APIのエンドポイントに変更
//       const response = await axios.get("https://www.garbage-tracker.com/api/location/garbage_tracker");
//       const gbg_tracker_lat = response.data.lat;
//       const gbg_tracker_lng = response.data.lng;
//       setGarbageTrackerCenter({ lat: gbg_tracker_lat, lng: gbg_tracker_lng});
//       console.log(gbg_tracker_lat)
//     } catch (e) {
//       console.log(e);
//     }
//   }, [garbage_tracker_center]);

//   // if (isFirstRef.current) return <div className="App">Loading...</div>;

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyCLCUrzB2zAKgoN86_kp8hppPhgt1icFZQ">
//       <GoogleMap onClick={() => setShowInfoWindow(false)} mapContainerStyle={containerStyle} center={user_center} zoom={zoom}>
//         <CircleF center={user_center} radius={10} options={circleOptions} />
//           <MarkerF position={garbage_tracker_center} label={garbage_tracker_markerLabel} icon={"https://maps.google.com/mapfiles/ms/micons/drinking_water.png"} onClick={() => setShowInfoWindow(true)}>
//           {show_info_window && <InfoWindowF options={infoWindowOptions} onCloseClick={() => setShowInfoWindow(false)}>
//             <div className={'flex flex-col flex-grow'}>
//               <button className="bg-orange-500 hover:bg-orange-300 text-white font-medium rounded px-4 py-2" onClick={callGarbageTracker}>COME ON!</button>
//                 </div>
//           </InfoWindowF>}
//         </MarkerF>
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Map;