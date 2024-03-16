
import "./scss/style.scss"
import { getCoins } from "./src/getCoins" 
// ?selectors
const form = document.querySelector("header form")
// console.log(form);

// ? form için submit event'nin tanımlanması
form.addEventListener("submit",(e)=>{
// console.log(e);
e.preventDefault()//!form eventinin tüm doğal davranışını disable eder.
getCoinData()
e.target.reset() //?formu silme davranışını geri getirir.
})

 const getCoinData = ()=>{
  const input = document.querySelector("header form input").value
  // console.log(input.value);
  if (!input.trim()) {
    alert("ınput must be entered")
  }else{
    //?GET COIN
    getCoins(input)
  }

 }
