const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value

    const dolarToday = 5.64     //área da multiplicação
    const euroToday = 6.24


    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",       // como não deixar o numero quebrado e com qual moeda ela pertence 
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",       // como não deixar o numero quebrado e com qual moeda ela pertence 
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",     // como não deixar o numero quebrado e com qual moeda ela pertence
        currency: "BRL"
    }).format(inputCurrencyValue)

}

convertButton.addEventListener("click", convertValues)

