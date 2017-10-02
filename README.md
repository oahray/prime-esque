# PRIME-NUMBERS

A simple Javascript ES6 class that returns prime numbers from a range or list of numbers.

# USAGE

### Using ES6 syntax

`import PrimeNumbers from './PrimeNumbers';`

### Using ES5 syntax

`const PrimeNumbers = require('./PrimeNumbers');`

### Basic Usage

```js
    // Instantiates the PrimeNumbers class
    const PrimeNumbersInstance = new PrimeNumbers();
    const getPrimeNumbers = PrimeNumbersInstance.range(10,90).getPrimeNumbers();
    console.log(getPrimeNumbers)
    // [ 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 ]
```

### Advanced Usage

```js
    // Instantiates the PrimeNumbers class
    const PrimeNumbersInstance = new PrimeNumbers(50);
    const getPrimeNumbers = PrimeNumbersInstance.numbers(5,10,15,19,25,29,35,40,47,50).getPrimeNumbers();
    console.log(getPrimeNumbers)
    // [ 5, 19, 29, 47 ]
```

# API REFERENCES

| Method | Parameters | Default | Description |
| ------ | ------ | --------- | ------- |
| `constructor` | limit | `100` | Limits the number of primes that can be checked
| `numbers` | integer [, array, String] | `none` | Get and set numbers and destructs them into array
| `range` | from, to | `None` | Sets a range of numbers
| `getPrimeNumbers` | None | `None` | Gets prime numbers.

> `numbers` and `range` methods are chainable.

# AUTHORS

- Temitayo Fadojutimi (Adesege) is a software developer at Andela and he dedicates his expertise to solving practical problems in the society. He tweets [@adesege_](http://twitter.com/adesege_)