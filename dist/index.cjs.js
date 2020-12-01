'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// eslint-disable-next-line
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var email = (value) => emailRegex.test(String(value));

var required = (value) => {
  if (value === undefined || value === null) {
    return false;
  }

  if (Array.isArray(value)) {
    return !!value.length;
  }

  return !!String(value).trim().length;
};

var minLength = (value, length) => {
  if (value === undefined || value === null) {
    return false;
  }

  return String(value).length >= length;
};

var maxLength = (value, length) => {
  if (value === undefined || value === null) {
    return length >= 0;
  }

  return String(value).length <= length;
};

var min = (value, min) => {
  if (value === undefined || value === null || value === '') {
    return false;
  }

  return Number(value) >= min;
};

var max = (value, max) => {
  if (value === undefined || value === null || value === '') {
    return false;
  }

  return Number(value) <= max;
};

var pattern = (value, pattern) => pattern.test(String(value));

exports.email = email;
exports.max = max;
exports.maxLength = maxLength;
exports.min = min;
exports.minLength = minLength;
exports.pattern = pattern;
exports.required = required;
