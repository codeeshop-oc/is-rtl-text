/* global describe, test, expect */
'use strict';

const isRTL = require('../' + 'index');

describe('index', function () {
    test('test check Text String', function () {
        expect(isRTL('Text String')).toBeFalsy();
    });
    test('test check number 4', function () {
        expect(isRTL(4)).toBeFalsy();
    });
    test('test Urdu کھ', function () {
        expect(isRTL('کھ')).toBe(true);
    });
    test('test Mixed #correct w مهسا_امینی', function () {
        expect(isRTL('#correct w مهسا_امینی')).toEqual(true);
    });
    test('test sure RTL العربية', function () {
        expect(isRTL('العربية')).toBeTruthy();
    });
    test('test sure not RTL Test', function () {
        expect(isRTL('Test')).toBe(false);
    });
});
