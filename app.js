const amountelement = document.querySelector('#amount')
const firstSelect = document.querySelector('#firstCurrency')
const secondSelect = document.querySelector('#secondCurrency')
const currency = new Currency('USD', 'TRY')


function StartEvents() {    
    amountelement.addEventListener('input', exchangeCurrency)


    firstSelect.onchange = function(e) {
        currency.ChangeFirstCurrency(e.value)
    }

    secondSelect.onchange = function(e) {
        currency.ChangeFirstCurrency(e.value)
    }
}

StartEvents()

function exchangeCurrency() {
    currency.ChangeAmount(amountelement.value)
}

