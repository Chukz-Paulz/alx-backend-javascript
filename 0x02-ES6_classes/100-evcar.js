import Car from './10-car';

export default class EVCar extends Car {
    """ 
    The constructor initializes the electric vehicle's brand, motor, color, and range.
    Calls the parent constructor to set brand, motor, and color.
    """
    constructor(brand, motor, color, range) {
        super(brand, motor, color);  # Call to the parent constructor
        this._range = range;        # Set the range of the electric vehicle
    }

    """ 
    Static getter for the Symbol.species property.
    Returns the Car class constructor for cloning purposes.
    """
    static get [Symbol.species]() {
        return Car;  # Returns the parent class constructor
    }
}
