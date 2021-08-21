// extra item cost update here
function updateItemCost(getId, price){
    // set the item price here
    const itemsPrice = document.getElementById(getId);
    itemsPrice.innerText = price;

    // update total price function called here
    updateTotalAmount();
}

// update total price here
function updateTotalAmount(){
    const memoryPrice = document.getElementById('memory-price').innerText;
    const memoryPriceNumber = parseFloat(memoryPrice);
    const storagePrice = document.getElementById('storage-price').innerText;
    const storagePriceNumber = parseFloat(storagePrice);
    const deliveryPrice = document.getElementById('delivery-price').innerText;
    const deliveryPriceNumber = parseFloat(deliveryPrice);
    
    // the total addition of amount
    const totalPrice = document.getElementById('total-price');
    const totalPriceIncludingitems = totalPrice.innerText = 1299 + memoryPriceNumber + storagePriceNumber + deliveryPriceNumber;

    // footer update part here
    const footerTotalAmount = document.getElementById('footer-total-amount');
    footerTotalAmount.innerText = totalPriceIncludingitems;

}

// memory button One
document.getElementById('memory-btn-one').addEventListener('click', function(){
    updateItemCost('memory-price', 0);
});
// memory button Two
document.getElementById('memory-btn-two').addEventListener('click', function(){
    updateItemCost('memory-price', 180);
});

// storage button one
document.getElementById('storage-btn-one').addEventListener('click', function(){
    updateItemCost('storage-price', 0);
});
// storage button two
document.getElementById('storage-btn-two').addEventListener('click', function(){
    updateItemCost('storage-price', 100);
});
// storage button three
document.getElementById('storage-btn-three').addEventListener('click', function(){
    updateItemCost('storage-price', 180);
});

// delivery button one
document.getElementById('delivery-btn-one').addEventListener('click', function(){
    updateItemCost('delivery-price', 0);
});
// delivery button two
document.getElementById('delivery-btn-two').addEventListener('click', function(){
    updateItemCost('delivery-price', 20);
});

// promo button here
document.getElementById('promo-btn').addEventListener('click', function(){
    const totalPrice = document.getElementById('total-price');
    const totalPriceInNumber = parseFloat(totalPrice.innerText);
    const footerTotalAmount = document.getElementById('footer-total-amount');

    const promoInput = document.getElementById('promo-input');
    if(promoInput.value == 'stevekaku'){
        const discountPrice = totalPriceInNumber - (totalPriceInNumber*20/100) ;
        footerTotalAmount.innerText = discountPrice;
    }
    promoInput.value = '';
});