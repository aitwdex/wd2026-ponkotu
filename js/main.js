import { codeToText } from "./weatherText.js";

document.getElementById("getBtn").addEventListener("click", () => {
  getWeather();
});
// 天気を取得して表示する非同期関数
async function getWeather() {
 try{
  const city = document.getElementById("city").value;

  let latitude;
  let longitude;

  // 選択された都市によって緯度経度を変更
   if (city === "sapporo") {
    latitude = 43.06;
    longitude = 141.35;
  }
  if (city === "sendai") {
    latitude = 38.26;
    longitude = 140.86;
  }
  else if (city === "tokyo") {
    latitude = 35.68;
    longitude = 139.76;
  }
  else if (city === "yokohama") {
    latitude = 35.44;
    longitude = 139.63;
  }
  else if (city === "nagoya") {
    latitude = 35.18;
    longitude = 136.91;
  }
  else if (city === "osaka") {
    latitude = 34.69;
    longitude = 135.50;
  }
  else if (city === "koube") {
    latitude = 34.69;
    longitude = 135.19;
  }
  else if(city == "hirosima"){
    latitude = 34.38;
    longitude = 132.45;
  }
  else if (city === "hukuoka") {
    latitude = 33.59
    longitude = 130.401;
  }
  else if (city === "naha") {
    latitude = 26.21;
    longitude = 127.67;
  }
  
  // 緯度経度から都市の現在の天気を取得するURL
  const url =`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  //APIにアクセス
  const response = await fetch(url);
  //返ってきたデータをJSONとして取り出す
  const data = await response.json();
　//気温を取得
  const temp = data.current_weather.temperature;
  //天気コードを取得
  const code = data.current_weather.weathercode;
  //風速を取得
  const wind = data.current_weather.windspeed;
  // 自作ライブラリで取得した値を日本語に変換
  const weather = codeToText(code);
  //DOMに表示する
  document.getElementById("temp").textContent =`${weather} / 気温${temp}℃ /   風速:${wind} km/h`;
  //デバッグ用：返ってきた全データをコンソールで確認
  console.log(data);
}
catch(error) {
    //都市を選ばずにボタンを押したら、エラーとして表示する
    document.getElementById("temp").textContent =
      "都市を選んでからボタンを押してね";
    console.error(error);
  }
}
