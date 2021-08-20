function updatePrice(getId, price){
    const currentPrice = document.getElementById(getId);
    currentPrice.innerText = price;

    // total price update here
    const totalPrice = document.getElementById('total-price');
    const totalPriceInNumber = parseFloat(totalPrice.innerText);
    totalPrice.innerText = totalPriceInNumber + price;

}

// memory button One
document.getElementById('memory-btn-one').addEventListener('click', function(){
    updatePrice('memory-price', 0);
});
// memory button Two
document.getElementById('memory-btn-two').addEventListener('click', function(){
    updatePrice('memory-price', 180);
});

// storage button one
document.getElementById('storage-btn-one').addEventListener('click', function(){
    updatePrice('storage-price', 0);
});
// storage button two
document.getElementById('storage-btn-two').addEventListener('click', function(){
    updatePrice('storage-price', 100);
});
// storage button three
document.getElementById('storage-btn-three').addEventListener('click', function(){
    updatePrice('storage-price', 180);
});

// delivery button one
document.getElementById('delivery-btn-one').addEventListener('click', function(){
    updatePrice('delivery-price', 0);
});
// delivery button two
document.getElementById('delivery-btn-two').addEventListener('click', function(){
    updatePrice('delivery-price', 20);
});

// promo button here
document.getElementById('promo-btn').addEventListener('click', function(){
    const totalPrice = document.getElementById('total-price');
    const promoInput = document.getElementById('promo-input');
    if(promoInput.value == 'stevekaku'){
        totalPriceInNumber = parseFloat(totalPrice.innerText);
        discountPrice = totalPriceInNumber - (totalPriceInNumber*20/100) ;
        totalPrice.innerText = discountPrice;
    }
});