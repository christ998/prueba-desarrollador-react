export function findValueByKey(obj, key) {
    if (obj.hasOwnProperty(key)) {
        return obj[key];
    }

    for (let prop in obj) {
        if (typeof obj[prop] === "object" && obj[prop] !== null) {
            const foundValue = findValueByKey(obj[prop], key);
            if (foundValue !== undefined) {
                return foundValue;
            }
        }
    }

    return undefined;
}
export function hasSubIndices(obj, number) {
    const keys = Object.keys(obj);
    for (let key of keys) {
        if (key.startsWith(number + ".")) {
            return true;
        }
        if (typeof obj[key] === "object" && hasSubIndices(obj[key], number)) {
            return true;
        }
    }
    return false;
}