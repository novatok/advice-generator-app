const advice = document.querySelector('#advice');
const adviceID = document.querySelector('#adviceID');
const diceButton = document.querySelector('#dice');


diceButton.addEventListener('click', () => {
    getADvice();
});

window.onload = () => {
    getADvice();
}

function getADvice() {
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const adviceObj = adviceData.slip;
        advice.innerHTML = `<p>${adviceObj.advice}</P>`;
        adviceID.innerHTML = `<h1>${adviceObj.id}</h1>`;
    }).catch(error => {
        console.error();
    });
}

