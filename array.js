exports.FixedArray = class FixedArray {
    constructor(len) {
        this.len = len;
        this.arr = new Array(len).fill(null);
    }

    get(index) {
        return this.arr[index];
    }

    set(index, value) {
        this.arr[index] = value;
    }

    length() {
        return this.len;
    }
}
