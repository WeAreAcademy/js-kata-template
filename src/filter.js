function  filterFunction (inputArray, predicateFn) {
    const result = [];
    for (let v of inputArray) {
        if (predicateFn(v)) {
            result.push(v);
        }
    }
    return result;
}

export { filterFunction };


