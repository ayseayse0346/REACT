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
     
      const res = await    fetch(URL, options)
   console.log(res);
     


}
