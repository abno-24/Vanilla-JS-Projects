const quotes = [
    {
        quote: `I'm not a great programmer; I'm just a good programmer with great habits`,
        author: `- Kent Beck`
    },
    {
        quote: `The most important property of a program is whether it accomplishes the intention of its user.`,
        author: `- C.A.R. Hore`
    },
    {
        quote: `I'm committed to push my branch to the master.`,
        author: `- Halgurd Hussein`
    },
    {
        quote: `Coding is not just a code, that is a live thing to serve everyone.`,
        author: `- Ming Song`
    }
]

const quoteBtn = document.getElementById("quote-btn");
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})