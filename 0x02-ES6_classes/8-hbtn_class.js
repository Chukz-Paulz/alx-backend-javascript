export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._size = size;         // Private attribute for size
    this._location = location; // Private attribute for location
  }

  toString() {
    return this._location; // Returns the location as a string
  }

  valueOf() {
    return this._size; // Returns the size value
  }
}
