// Calculate Total Price
const bestPrice = document.getElementById('best-price');
const extraMemoryCost = document.getElementById('extra-memory-cost');
const extraStorageCost = document.getElementById('extra-storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalPrice = document.getElementById('total-price');
const footerTotalPrice = document.getElementById('footer-total-price');
function calculateTotalPrice() {
    totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(extraMemoryCost.innerText) + parseFloat(extraStorageCost.innerText) + parseFloat(deliveryCost.innerText);
    footerTotalPrice.innerText = totalPrice.innerText;
}

// Function For Extra Cost & Update Total Price
function extraCost(costId, cost) {
    costId.innerText = cost;
    calculateTotalPrice();
}

// Extra Memory Cost
document.getElementById('8gb-memory').addEventListener('click', function () {
    extraCost(extraMemoryCost, 0);
});
document.getElementById('16gb-memory').addEventListener('click', function () {
    extraCost(extraMemoryCost, 180);
});

// Extra Storage Cost
document.getElementById('256gb-ssd').addEventListener('click', function () {
    extraCost(extraStorageCost, 0);
});
document.getElementById('512gb-ssd').addEventListener('click', function () {
    extraCost(extraStorageCost, 100);
});
document.getElementById('1tb-ssd').addEventListener('click', function () {
    extraCost(extraStorageCost, 180);
});

// Delivery Cost
document.getElementById('free-delivery').addEventListener('click', function () {
    extraCost(deliveryCost, 0);
});
document.getElementById('delivery-charge').addEventListener('click', function () {
    extraCost(deliveryCost, 20);
});

// Calculate Final Amount After Apply Promo Code
const promoCode = document.getElementById('promo-code');
document.getElementById('promo-apply-button').addEventListener('click', function () {
    const priceBeforeDiscount = parseFloat(totalPrice.innerText);
    const finalPrice = priceBeforeDiscount - (priceBeforeDiscount * 0.20);
    if (promoCode.value == 'stevekaku') {
        footerTotalPrice.innerText = finalPrice;
        promoCode.value = '';
    }
});