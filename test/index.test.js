/* global describe, test, expect */
'use strict';

const isRTL = require('../' + 'index')

describe('index', function () {
    test('test check Text String', function () {
        expect(isRTL('Text String')).toBeFalsy();
    });
    test('test check number 4', function () {
        expect(isRTL(4)).toBeFalsy();
    });
    test('test Urduہیلو', function () {
        expect(isRTL('ہیلو')).toBe(true);
    });
    test('test Mixed #correct خوش آمدید', function () {
        expect(isRTL('#correct خوش آمدید')).toEqual(true);
    });
    test('test sure RTL اب تیار ہے', function () {
        expect(isRTL('اب تیار ہے')).toBeTruthy();
    });
    test('test sure not RTL Test', function () {
        expect(isRTL('Test')).toBe(false);
    });
});
