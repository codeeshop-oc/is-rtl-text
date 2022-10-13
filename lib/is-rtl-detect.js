'use strict';

const isRTL = function (s) {
    const rtlChars = '\u0591-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC';
    const rtlDirCheck = new RegExp('^[^' + rtlChars + ']*?[' + rtlChars + ']');

    return rtlDirCheck.test(s);
};

module.exports = isRTL;
