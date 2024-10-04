export default class HolbertonCourse {
    /**
     * Creates an instance of HolbertonCourse.
     * @param {String} name - The name of the course.
     * @param {Number} length - The duration of the course in weeks.
     * @param {Array} students - An array of student names (strings).
     */
    constructor(name, length, students) {
        this._name = this.validateName(name);
        this._length = this.validateLength(length);
        this._students = this.validateStudents(students);
    }

    // Getters
    get name() {
        return this._name;
    }

    get length() {
        return this._length;
    }

    get students() {
        return this._students;
    }

    // Setters
    set name(newName) {
        this._name = this.validateName(newName);
    }
	set length(newLength) {
        this._length = this.validateLength(newLength);
    }

    set students(newStudents) {
        this._students = this.validateStudents(newStudents);
    }

    // Validation methods
    validateName(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Name must be a string');
        }
        return value;
    }

    validateLength(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Length must be a number');
        }
        return value;
    }

    validateStudents(value) {
        if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
            throw new TypeError('Students must be an array of strings');
        }
        return value;
    }
}
