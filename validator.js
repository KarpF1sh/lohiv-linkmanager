// Test if url contains only valid characters
function validateUrl(url){
    // Maybe improve this in the future?

    // 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-
    return /^[0-9A-Za-z_-]+$/.test(url) && url.length == 6;
}

// Exports
module.exports = {
    validateUrl
}