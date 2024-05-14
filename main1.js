var quotes = [
  {
    quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    writer: `― Marilyn Monroe`,
  },
  {
    quote: `“So many books, so little time.”`,
    writer: `― Frank Zappa`,
  },
  {
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    writer: `― Albert Einstein`,
  },
  {
    quote: `“A room without books is like a body without a soul.”`,
    writer: `― Marcus Tullius Cicero`,
  },
  {
    quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    writer: `― Bernard M. Baruch`,
  },
  {
    quote: `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”`,
    writer: `― William W. Purkey`,
  },
];
// let quote=document.getElementById("quote");
// let author=document.getElementById("author");
// let btn =document.getElementById("btn")

let btn = document.querySelector('#Qbtn');
let quote = document.querySelector('.quote');

let writer = document.querySelector('.writer');

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  writer.innerHTML = quotes[random].writer;
});
