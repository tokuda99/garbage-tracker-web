import axios from "axios";

// export const postJSON = async (): Promise<any> => {
//   axios.post('https://api.clip-viewer-lite.com/auth/token', {
//         username: '233427034@ccmailg.meijo-u.ac.jp',
//         password: 'Meijou128'
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

//         // setGarbageTrackerCenter({
//         //   gbt_lat: numericValues[0] + numericValues[1]*0.01,
//         //   gbt_lng: numericValues[2] + numericValues[3]*0.01,
//         // })
//         console.log('sendDateTime:',sendDateTime);
//     });
//   });
// };