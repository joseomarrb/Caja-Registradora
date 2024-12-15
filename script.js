//Variables
const cash = document.querySelector('#cash');
const changeDue = document.querySelector('#change-due');
const btnPurchase = document.querySelector('#purchase-btn');
const elementsDiv = document.querySelector('#container');
let price = 1.87;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];


//Eventos
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < cid.length; i++) {
        const paragraph = document.createElement('P');
        for (let j = 0; j < cid[i].length; j++) {
            paragraph.textContent = `${cid[i][j - 1]} : $${cid[i][j]}`;
            elementsDiv.appendChild(paragraph);
        }
    }
});

btnPurchase.addEventListener('click', () => {
    const CASHPARSE = parseInt(cash.value);
    if (CASHPARSE < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }

    if (CASHPARSE === price) {
        alert("No change due - customer paid with exact cash");
        return;
    }

});

//Funciones
