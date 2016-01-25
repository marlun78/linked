export function map(array, fn) {
    var list = [];
    for (var i = 0, l = array.length; i < l; i++) {
        list[i] = fn(array[i]);
    }
    return list;
};