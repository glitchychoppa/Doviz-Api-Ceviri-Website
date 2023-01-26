class Currency {
    constructor(first, second) {
        this.amount = null
        this.firstSelector = first
        this.secondSelector = second
        this.api = `https://api.exchangerate.host/latest?base=`
    }

    ChangeFirstCurrency(value) {
        this.firstSelector = value
    }

    ChangeSecondCurrency(value) {
        this.secondSelector = value
    }

    ChangeAmount(amount) {
        fetch(this.api + this.firstSelector)
        .then(result => result.json())
        .then(data => {
            const request = data.rates[this.secondSelector]
            const result = amount * request
            ui.AmountChange(result)
        })
    }
}

const ui = new UI()
