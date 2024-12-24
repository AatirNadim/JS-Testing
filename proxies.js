/**
 * reference --> {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy | MDN-Proxy}
 */

/**
 * The Proxy object enables you to create a proxy for another object, 
 * which can intercept and redefine fundamental operations for that object.
 */


class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    getBookDetails() {
        return `${this.title} by ${this.author}`;
    }

    calculatePrice(discount) {
        return this.price * (1 - discount / 100);
    }
}

const book = new Book('1984', 'George Orwell', 19.99);

/**
 * if for an object, for a price, value has been calculated, keep it in a cache for further access
 */

const proxiedBook = new Proxy(book, {
    get(target, property) {
        const val = target[property];
        console.log("accessing property: ", property);
        if(property === "calculatePrice") {
            const cache = new Map();
            return function(discount) {
                if(cache.has(discount)) {
                    return cache.get(discount);
                }
                result = val.call(target, discount);
                cache.set(discount, result);
                return result;
            }
        }
    },

    // better control over object manipulation
    set(target, property, value) {
        console.log(`setting ${property} to ${value}`);

        // validate price changes
        if (property === 'price') {
            if (typeof value !== 'number' || value <= 0) {
                throw new Error('Price must be a positive number');
            }
        }
        
        // some tidbits
        if (property === '_isbn') {
            throw new Error('Cannot modify ISBN');
        }
        
        target[property] = value;
        return true;
    }

})


// Usage examples
console.log(proxiedBook.title); // Logs access
console.log(proxiedBook.getBookDetails()); // Logs method access
proxiedBook.price = 29.99; // Logs and validates price change
console.log(proxiedBook.calculateDiscount(10)); // Caches result
console.log(proxiedBook.calculateDiscount(10)); // Uses cached result
try {
    proxiedBook.price = -10; // Throws validation error
} catch (error) {
    console.log('Error:', error.message);
}
try {
    proxiedBook._isbn = '123456'; // Throws protection error
} catch (error) {
    console.log('Error:', error.message);
}