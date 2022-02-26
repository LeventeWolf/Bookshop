function log (s) {
    const date = new Date().toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, '') ;

    console.log(`${date} | ${s}`)
}

module.exports = {log}



