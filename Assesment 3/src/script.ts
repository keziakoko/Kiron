fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
        response.json().then(json => {
            renderResult(json);
        });
    })
    .catch(err => {
        document.getElementById("mainContainer").innerHTML += `<h1 class="heading">There was problem. Please try again later</h1>`
    })

/**
 * renderResult function which outputs data received from api
 * params {obj} the object that was returned from the api
 * @returns void
 */
let renderResult = (data:Object): void => {
    const mainContainer = document.getElementById("mainContainer");
    const date = new Date(data["time"].updatedISO);
    mainContainer.innerHTML += `<div class="updated">Last Updated ${date.getDate()} ${getCalendarMonth(date.getMonth())} ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}</div><br>`

    for (let index in data["bpi"]) {
        let item = data["bpi"][index];
        mainContainer.innerHTML += `
            <div class="exchangeRate">
                <div class="symbol">${getIcon(item.code.toUpperCase())}</div>
                <div class="rateContainer">
                    <h2 class="description">${item.description}</h2>
                    <h2 class="value">${item.symbol}${item.rate_float.toFixed(2)}</h2>
                </div>
            </div>`;
    }
}

/**
 * getIcon function which returns the icon for a symbol provided
 * params {string} the string of the symbol
 * @returns string
 */
let getIcon = (symbol: string): string => {
    switch (symbol) {
        case "USD":
            return `<i class="fa-solid fa-dollar-sign"></i>`;
        case "EUR":
            return `<i class="fa-solid fa-euro-sign"></i>`;
        case "GBP":
            return `<i class="fa-solid fa-sterling-sign"></i>`;
        default:
            return `<i class="fa-solid fa-coins"></i>`;
    }
}

/**
 * getCalendarMonth function which returns a string month
 * params {number} the number of the corresponding month
 * @returns string
 */
let getCalendarMonth = (month:number): string => {
    switch (month) {
        case 1:
            return "January"
        case 2:
            return "February"
        case 3:
            return "March"
        case 4:
            return "April"
        case 5:
            return "May"
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
            break;
        case 10:
            return "October";
            break;
        case 11:
            return "November";
        case 12:
            return "December";
    }
}



