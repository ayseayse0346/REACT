import displayCoinCard from "./displayCoins";


// ?named export
 export const getCoins =async (keyword) => {
    const API_KEY = "coinrankingd3f7cfe1685f6c65a427f956670de2e135194d74952d5ad7"
    //  const URL = 'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd' //bu veri bütün  coinleri getiriyor.
    const URL = 'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd?search=${keyword}'
    const options = {
        headers: {
          'Content-Type': API_KEY,
          // 'x-access-token': 'your-access-token-here',
        },
      };
     try {
const res = await fetch(URL, options)
//    console.log(res);ham veriye burdan ulaşırız.o yüzden jasonlaştırırız.
const json = await res.json()
console.log(json.data.coins[0]);
if(!json.data.coins[0]){
    alert("coin can not be found")
}else{
    displayCoinCard()  //bu fonksiyonu displaycoins kalsöründe oluştu. yukarda importladık.
}
     } catch (error) {
        console.log(error);
     }

     


}
