let listCart = [];

function validateForm() {
    let isValid = true;
    
    
    let fullName = document.getElementById('card_number').value.trim();
    if (fullName === '') {
        isValid = false;
        document.getElementById('card_number').classList.add('error');
    } else {
        document.getElementById('card_number').classList.remove('error');
    }

    
    let phoneNumber = document.getElementById('phone').value.trim();
    if (phoneNumber === '') {
        isValid = false;
        document.getElementById('phone').classList.add('error');
    } else {
        document.getElementById('phone').classList.remove('error');
    }

    
    let address = document.getElementById('address').value.trim();
    if (address === '') {
        isValid = false;
        document.getElementById('address').classList.add('error');
    } else {
        document.getElementById('address').classList.remove('error');
    }

    
    let emailAddress = document.getElementById('contact_number').value.trim();
    if (emailAddress === '') {
        isValid = false;
        document.getElementById('contact_number').classList.add('error');
    } else {
        document.getElementById('contact_number').classList.remove('error');
    }

   
    return isValid;
}


document.getElementById('card_number').addEventListener('input', validateForm);
document.getElementById('phone').addEventListener('input', validateForm);
document.getElementById('address').addEventListener('input', validateForm);
document.getElementById('contact_number').addEventListener('input', validateForm);


document.querySelector('.buttonCheckout').addEventListener('click', function() {
    
    if (validateForm()) {
        
        displayPaymentSuccessMessage();
    } else {
        
        let validationMessage = document.querySelector('.validation-message');
        validationMessage.textContent = 'Please fill all required data';
        validationMessage.style.display = 'block';
    }
});


function displayPaymentSuccessMessage() {
    
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    
    const message = document.createElement('div');
    message.classList.add('payment-message');
    message.innerText = 'Payment successful';

    
    overlay.appendChild(message);

    
    document.body.appendChild(overlay);

    
    setTimeout(function() {
        document.body.removeChild(overlay);
    }, 3000);
}

function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}


function addCartToHTML() {
    
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;

    
    if (listCart) {
        listCart.forEach(product => {
            if (product) {
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML =
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price}/1 product</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">$${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity += product.quantity;
                totalPrice += product.price * product.quantity;
            }
        });
    }

    
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '$' + totalPrice;
}


checkCart();


addCartToHTML();


document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('.validation-message').textContent = 'Please fill this';
});


document.querySelector('.buttonCheckout').addEventListener('click', function() {
    
    if (validateForm()) {
        
        displayPaymentSuccessMessage();
    } else {
        
        let validationMessage = document.querySelector('.validation-message');
        validationMessage.textContent = 'Please fill all required data';
        validationMessage.style.display = 'block';
    }
});