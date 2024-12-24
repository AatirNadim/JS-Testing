/**
 * reference --> {@link https://www.sitepoint.com/javascript-decorators-what-they-are/ | Decorators - Sitepoint}
 */

// Logging decorator
function logging(target, key, descriptor) {
    const originalFunction = descriptor.value;
    descriptor.value = function(...args) {
        console.log(`Calling ${propertyKey} with args: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`Method ${propertyKey} returned: ${JSON.stringify(result)}`);
        return result;
    }
    return descriptor;
}

// Performance measurement decorator
function measure(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args) {
        const start = performance.now;
        const result = originalMethod.apply(this, args);
        const end = performance.now;
        console.log(`${propertyKey} execution time: ${end - start}ms`);
        return result;
    };
    return descriptor;
}

// Validation decorator
function validate(schema) {
    return function(target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function(...args) {
            if (!schema(args)) {
                throw new Error('Invalid arguments');
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}

// Retry decorator
function retry(attempts = 3, delay = 1000) {
    return function(target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function(...args) {
            for (let i = 0; i < attempts; i++) {
                try {
                    return await originalMethod.apply(this, args);
                } catch (error) {
                    if (i === attempts - 1) throw error;
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
            }
        };
        return descriptor;
    };
}

// Readonly property decorator
function readonly(target, propertyKey) {
    Object.defineProperty(target, propertyKey, {
        writable: false,
        configurable: false
    });
}


// usage
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    @readonly
    id;

    @log
    @measure
    getUserInfo() {
        return {
            id: this.id,
            name: this.name
        };
    }

    @validate(args => args[0] > 0)
    setAge(age) {
        this.age = age;
    }

    @retry(3, 1000)
    async fetchUserData() {
        const response = await fetch('https://api.example.com/users');
        return response.json();
    }
}
