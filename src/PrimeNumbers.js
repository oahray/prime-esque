import { Exception } from './utils/index';

/**
 * @class PrimeNumbers
 */
export default class PrimeNumbers {
  /**
   * Creates an instance of PrimeNumbers.
   * @param {string} [limit='']
   * @memberof PrimeNumbers
   */
  constructor(limit = '') {
    this.limit = limit || 100;
  }
  /**
   * @returns {array} toNumber
   * @memberof PrimeNumbers
   */
  get toNumbers() {
    const castNumbers = this
      .numbers
      .map(number => parseInt(number, 10));
    return castNumbers;
  }

  /**
   * @returns {void}
   * @param {any} number
   * @memberof PrimeNumbers
   */
  numbers(...number) {
    this.numbers = number;
    return this;
  }

  /**
   * Set a range of numbers
   * @param {integer} from
   * @param {integer} to
   * @memberof PrimeNumbers
   * @returns {void}
   */
  range(from, to) {
    if (!to) {
      throw new Exception('You must explicitly specify the to range value');
    }

    if (!from) {
      throw new Exception('You must explicitly specify the from range value');
    }

    if (from > to) {
      throw new Exception('The from range value must be less than the to range value');
    }

    if (to < from) {
      throw new Exception('The to range value must be greater than the from range value');
    }

    this.from = parseInt(from, 10);
    this.to = parseInt(to, 10);
    const numbers = [];
    for (let index = this.from; index <= this.to; index += 1) {
      numbers.push(index);
    }
    this.numbers = numbers;
    return this;
  }

  /**
   * Checks if number is above limit
   * @param {any} number
   * @returns {boolean} isAboveLimit
   * @memberof PrimeNumbers
   */
  isAboveLimit(number) {
    if (number > this.limit) {
      return false;
    }
    return true;
  }

  /**
   * @param {any} arrayA
   * @param {any} arrayB
   * @returns  {array} unique array
   * @memberof PrimeNumbers
   */
  intersect(arrayA, arrayB) {
    this.arrayA = arrayA;
    this.arrayB = arrayB;
    return [...new Set(this.arrayA)]
      .filter(number => new Set(this.arrayB).has(number));
  }


  /**
   * Get prime number
   * @param {any} limit
   * @memberof PrimeNumbers
   * @returns {exception} Exception
   * @returns {array} Prime numbers
   */
  getPrimeNumbers() {
    const numbers = this.toNumbers.sort();
    const maxNumber = Math.max(...numbers);
    if (!this.isAboveLimit(maxNumber)) {
      throw new Exception(`You have exceeded the ${this.limit} numbers limit`);
    }
    const arrayPlaceholder = [];
    const output = [0];


    // Set placeholder for holding true|false values
    for (let index = 0; index <= maxNumber; index += 1) {
      arrayPlaceholder.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (let index = 3; index <= maxNumber; index += 2) {
      if (arrayPlaceholder[index]) {
        for (let index2 = index * index;
          index2 < maxNumber;
          index2 += index * 2) {
          arrayPlaceholder[index2] = false;
        }
        output.push(index);
      }
    }

    return this.intersect(output, numbers);
  }
}
