const pricePerKm = 0.1976;
const teenDiscount = 1.0 - 0.1765;
const elderDiscount = 1.0 - 0.5327;

const distanceInputEl = document.querySelector('input#input-distance');
const ageGroupSelectEl = document.querySelector('select#select-age');
const ticketGeneratorBtn = document.querySelector('button');
const outputElement = document.querySelector('#output');

ticketGeneratorBtn.addEventListener( 'click', function(){
    const distance = parseFloat(distanceInputEl.value);
    const ageGroup = parseInt(ageGroupSelectEl.value);

    let totalPrice = pricePerKm * distance;

    if ( ageGroup === 1 ){
        totalPrice = totalPrice * teenDiscount;
        outputElement.className = 'text-green';
    } else if ( ageGroup === 2 ){
        totalPrice = totalPrice * elderDiscount;
        outputElement.className = 'text-yellow';
    } else {
        outputElement.className = 'text-seagreen';
    }


    console.warn(distance, ageGroup, 'price: ',totalPrice);
    outputElement.innerHTML = totalPrice.toFixed(2) + '&euro;';
});