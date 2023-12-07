const convertButton = document.querySelector(".convert-button")
const currencySelect1 = document.querySelector(".currency-select1")
const currencySelect2 = document.querySelector(".currency-select2")
const currencyName1 = document.querySelector(".currency-real")
const currencyName2 = document.querySelector(".currency-dolar")
const currencyImg1 = document.querySelector(".real")
const currencyImg2 = document.querySelector(".dolar")



async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueConverted = document.querySelector(".currency-value")
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    //async await - ATUALIZAÇÃO/ALTERNATIVA DO PROMISE
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,BRL-USD,BRL-EUR,BRL-GBP,EUR-USD,GBP-USD,BTC-USD,USD-EUR,GBP-EUR,BTC-EUR,USD-GBP,EUR-GBP").then(response => response.json())
    //await (ONDE TEM QUE PARAR E ESPERAR OS DADOS SEREM RETORNADOS)

    // COTAÇÕES EM TEMPO REAL

    const realToDolar = data.USDBRL.high
    const realToEuro = data.EURBRL.high
    const realToLibra = data.GBPBRL.high
    const realToBitcoin = data.BTCBRL.high

    const dolarToReal = data.BRLUSD.high
    const dolarToEuro = data.EURUSD.high
    const dolarToLibra = data.GBPUSD.high
    const dolarToBitcoin = data.BTCUSD.high

    const euroToReal = data.BRLEUR.high
    const euroToDolar = data.USDEUR.high
    const euroToLibra = data.GBPEUR.high
    const euroToBitcoin = data.BTCEUR.high

    const libraToReal = data.BRLGBP.high
    const libraToDolar = data.USDGBP.high
    const libraToEuro = data.EURGBP.high
    const libraToBitcoin = 29789.09

    const bitcoinToReal = 0.0000054
    const bitcoinToDolar = 0.000027
    const bitcoinToEuro = 0.000029
    const bitcoinToLibra = 0.000034

    ///////////////////////////////////                     CONVERSÕES DO DÓLAR                     ///////////////////////////////////
    if (currencySelect1.value == "dolar" && currencySelect2.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    } else if (currencySelect1.value == "dolar" && currencySelect2.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToDolar)

    } else if (currencySelect1.value == "dolar" && currencySelect2.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * euroToDolar)

    } else if (currencySelect1.value == "dolar" && currencySelect2.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * libraToDolar)

    } else if (currencySelect1.value == "dolar" && currencySelect2.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * bitcoinToDolar)

    }

    ///////////////////////////////////                     CONVERSÕES DO REAL                     ///////////////////////////////////
    if (currencySelect1.value == "real" && currencySelect2.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    } else if (currencySelect1.value == "real" && currencySelect2.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * dolarToReal)

    } else if (currencySelect1.value == "real" && currencySelect2.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * euroToReal)

    } else if (currencySelect1.value == "real" && currencySelect2.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * libraToReal)

    } else if (currencySelect1.value == "real" && currencySelect2.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * bitcoinToReal)

    }

    ///////////////////////////////////                     CONVERSÕES DO EURO                     ///////////////////////////////////
    if (currencySelect1.value == "euro" && currencySelect2.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

    } else if (currencySelect1.value == "euro" && currencySelect2.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToEuro)

    } else if (currencySelect1.value == "euro" && currencySelect2.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * dolarToEuro)

    } else if (currencySelect1.value == "euro" && currencySelect2.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * libraToEuro)

    } else if (currencySelect1.value == "euro" && currencySelect2.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * bitcoinToEuro)

    }

    ///////////////////////////////////                     CONVERSÕES DA LIBRA                     ///////////////////////////////////
    if (currencySelect1.value == "libra" && currencySelect2.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

    } else if (currencySelect1.value == "libra" && currencySelect2.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToLibra)

    } else if (currencySelect1.value == "libra" && currencySelect2.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * dolarToLibra)

    } else if (currencySelect1.value == "libra" && currencySelect2.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * euroToLibra)

    } else if (currencySelect1.value == "libra" && currencySelect2.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * bitcoinToLibra)

    }

    ///////////////////////////////////                     CONVERSÕES DO BITCOIN                     ///////////////////////////////////
    if (currencySelect1.value == "bitcoin" && currencySelect2.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

    } else if (currencySelect1.value == "bitcoin" && currencySelect2.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToBitcoin)

    } else if (currencySelect1.value == "bitcoin" && currencySelect2.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * dolarToBitcoin)

    } else if (currencySelect1.value == "bitcoin" && currencySelect2.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * euroToBitcoin)

    } else if (currencySelect1.value == "bitcoin" && currencySelect2.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * libraToBitcoin)

    }


}

function changeCurrency2() {
    if (currencySelect2.value == "euro") {
        currencyName2.innerHTML = "EUR"
        currencyImg2.src = "./assets/euro.png"
    } if (currencySelect2.value == "dolar") {
        currencyName2.innerHTML = "USD"
        currencyImg2.src = "./assets/dolar.png"
    } if (currencySelect2.value == "libra") {
        currencyName2.innerHTML = "GBP"
        currencyImg2.src = "./assets/libra.png"
    } if (currencySelect2.value == "bitcoin") {
        currencyName2.innerHTML = "BTC"
        currencyImg2.src = "./assets/bitcoin.png"
    } if (currencySelect2.value == "real") {
        currencyName2.innerHTML = "BRL"
        currencyImg2.src = "./assets/real.png"
    }


    convertValues()

}

function changeCurrency1() {
    if (currencySelect1.value == "euro") {
        currencyName1.innerHTML = "EUR"
        currencyImg1.src = "./assets/euro.png"
    } if (currencySelect1.value == "dolar") {
        currencyName1.innerHTML = "USD"
        currencyImg1.src = "./assets/dolar.png"
    } if (currencySelect1.value == "libra") {
        currencyName1.innerHTML = "GBP"
        currencyImg1.src = "./assets/libra.png"
    } if (currencySelect1.value == "bitcoin") {
        currencyName1.innerHTML = "BTC"
        currencyImg1.src = "./assets/bitcoin.png"
    } if (currencySelect1.value == "real") {
        currencyName1.innerHTML = "BRL"
        currencyImg1.src = "./assets/real.png"
    }
    convertValues()
}
currencySelect1.addEventListener("change", changeCurrency1)
currencySelect2.addEventListener("change", changeCurrency2)
convertButton.addEventListener("click", convertValues)