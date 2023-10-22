import axios from "axios";

// GETリクエスト
export const getJSON = async (): Promise<any> => {
    axios.post('https://api.clip-viewer-lite.com/auth/token', {
        username: '233427034@ccmailg.meijo-u.ac.jp',
        password: 'Meijou128'
    }, {
        headers: {
            'X-API-Key': 'jd3J5V2Ohx8F66iiRAXwf4EfSnWG0kJkassTO4Ce',
            "Access-Control-Allow-Origin": "*",
        }
    })
    // .then(response => {
    //     const authToken = response.data.token;
    //     console.log(response.data.token)
    //     // 取得したトークンを使用して GET リクエストを送信す
    // })
    .catch(error => {
        console.error('POST リクエストエラー:', error);
    });

};

// POSTリクエスト
// export const postJSON = async (): Promise<any> => {
//   const url = "https://jsonplaceholder.typicode.com/posts"; // サンプルコード用、実際リクエストはしない
//   const data = {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   };
//   const response = await axios.post(url, data);
//   console.log(response.data);
// };

