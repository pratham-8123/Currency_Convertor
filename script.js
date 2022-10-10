const currentEl_One = document.getElementById("currency-one");
const amountEl_One = document.getElementById("amount-one");
const currentEl_Two = document.getElementById("currency-two");
const amountEl_Two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

//fetch exchange rate and calculate
function calculate() {
    const currency_one = currentEl_One.value;
    const currency_two = currentEl_Two.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            const rate = data.rates[currency_two];
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountEl_Two.value = (amountEl_One.value * rate).toFixed(2);
        });
}


currentEl_One.addEventListener("change", calculate);
amountEl_One.addEventListener("input", calculate);
currentEl_Two.addEventListener("change", calculate);
amountEl_Two.addEventListener("input", calculate);

swap.addEventListener("click", () => {
    const temp = currentEl_One.value;
    currentEl_One.value = currentEl_Two.value;
    currentEl_Two.value = temp;
    calculate();
});


calculate();
