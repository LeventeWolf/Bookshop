export function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


export function numberOfProducts(basket) {
    let result = 0;

    basket.forEach(product => result += product.quantity);

    return result;
}

export function sumOfProducts(basket, isMember) {
    let sum = 0;

    basket.forEach(product => {
        if (isMember) {
            sum += product.quantity * Math.round(product.price * 0.9);
        } else {
            sum += product.quantity * product.price;
        }
    })

    return sum;
}