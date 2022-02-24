function getDate() {
    function pad2(n) {
        return (n < 10 ? '0' : '') + n;
    }

    const date = new Date();
    const month = pad2(date.getMonth() + 1);//months (0-11)
    const day = pad2(date.getDate());//day (1-31)
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const sec = date.getSeconds();

    return year + "/" + month + "/" + day + "T" + hour + ':' + minute + ':' + sec;
}

function convertKeysLowercase(obj) {
    let key, keys = Object.keys(obj);
    let n = keys.length;
    let result = {};
    while (n--) {
        key = keys[n];
        result[key.toLowerCase()] = obj[key];
    }

    return result;
}

function formatRows(rows) {
    const result = [];

    rows.forEach(row => result.push(convertKeysLowercase(row)))

    return result;
}


module.exports = {getDate, formatRow: formatRows}