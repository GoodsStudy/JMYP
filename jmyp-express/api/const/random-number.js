const Hashes = require('jshashes')
const randomNumber = () => {
    var code = "";
    for (var i = 1; i <= 6; i++) {
        const num = Math.floor(Math.random() * 10);
        code += num;
    }
    return code
}

const generateSHA1SignatureByHex = (appSecret, nonce, timestamp) => {
    const sha1Str = appSecret + nonce + timestamp;
    const SHA1 = new Hashes.SHA1().hex(sha1Str)
    return SHA1;
}

module.exports = { randomNumber, generateSHA1SignatureByHex }