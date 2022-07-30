const quotes = document.querySelector('.main-card_paragraph')
const btn = document.querySelector('.button')
adviceNum = document.querySelector('.main-card_advice')

btn.addEventListener('click', getQuote)
URL = "https://api.adviceslip.com/advice"
function getQuote(){

fetch(URL)
  .then((response) => 
    response.json())
  .then((data) => {
    adviceNum.textContent = `Advice # ${data.slip.id}`
    console.log(data);
    let randomQuote = Math.floor(Math.random()*data.length);
  quotes.textContent = `" ${data.slip.advice} "`
    
});
}