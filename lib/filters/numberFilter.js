"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aadhaar = exports.mobile = void 0;

const mobile = value => {
  if (!(value = isString(value))) return '!!invalid';
  if (!numbersOnly(value)) return '!!invalid';

  if (value.length > 10) {
    value = value.substr(0, 10);
  }

  return formatMobile(value);
};

exports.mobile = mobile;

function isString(value) {
  if (!value) return false;else return value.toString().trim();
}

function numbersOnly(value) {
  const reg = /^\d+$/;
  return reg.test(value);
}

function formatMobile(value) {
  let digits = [...value];
  let formatedDigits = [];

  for (let i = 0; i < digits.length; i++) {
    if (i == 3 || i == 6) {
      formatedDigits.push(' ');
    }

    formatedDigits.push(digits[i]);
  }

  return formatedDigits.join('');
}

const aadhaar = value => {
  if (!(value = isString(value))) return '!!invalid';
  if (!numbersOnly(value)) return '!!invalid';

  if (value.length > 12) {
    value = value.substr(0, 12);
  }

  return formatAadhaar(value);
};

exports.aadhaar = aadhaar;

function formatAadhaar(value) {
  let values = [...value];
  let formattedValue = [];

  for (let i = 0; i < values.length; i++) {
    if (i == 4 || i == 8) {
      formattedValue.push(' ');
    }

    formattedValue.push(values[i]);
  }

  return formattedValue.join('');
}