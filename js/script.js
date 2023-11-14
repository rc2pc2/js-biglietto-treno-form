const pricePerKm = 0.1976;
const teenDiscount = 1.0 - 0.1765;
const elderDiscount = 1.0 - 0.5327;

const distanceInputEl = document.querySelector('input#input-distance');
const ageGroupSelectEl = document.querySelector('select#select-age');
const ticketGeneratorBtn = document.querySelector('button')

ticketGeneratorBtn.addEventListener( 'click', function(){
    const distance = parseFloat(distanceInputEl.value);
    const ageGroup = parseInt(ageGroupSelectEl.value);

    let totalPrice = pricePerKm * distance;

    if ( ageGroup === 1 ){
        totalPrice = totalPrice * teenDiscount;
    } else if ( ageGroup === 2 ){
        totalPrice = totalPrice * elderDiscount;
    }

    console.warn(distance, ageGroup, 'price: ',totalPrice);
});


