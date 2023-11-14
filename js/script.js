const pricePerKm = 0.1976;
const teenDiscount = 1.0 - 0.1765;
const elderDiscount = 1.0 - 0.5327;

const distanceInputEl = document.querySelector('input#input-distance');
const ageInputEl = document.querySelector('input#input-age');
const generatorButton = document.querySelector('button')

// console.log(distanceInputEl, ageInputEl, generatorButton);

//  ? ogni volta che clicco il bottone:
generatorButton.addEventListener( 'click', function(){
    // console.warn('click!');

    // # prendo il value di input-distance
    const distance = parseFloat(distanceInputEl.value);

    // # prendo il value di input-age
    const age = parseInt(ageInputEl.value);

    console.warn(distance, age);

    // # calcolo il prezzo del biglietto:
        let totalPrice = pricePerKm * distance;

        // # prezzoBiglietto * ( 1.0 - x) {in base all'eta'}
        if ( age < 18 ){
            // totalPrice *= teenDiscount;
            totalPrice = totalPrice * teenDiscount;
        } else if (age > 64 ){
            // totalPrice *= elderDiscount;
            totalPrice = totalPrice * elderDiscount;
        }
        // 17.65 minorenni, 53.27 anziani, costo base 0.1976 al km
    // # scrivo in console il risultato
    console.warn(totalPrice);
});


