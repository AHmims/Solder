// This file's meant to store various constants like colors n error messages etc..

export const Colors: Record<string, number> = {
  DEFAULT: 0x000000,
  WHITE: 0xffffff,
  GREEN: 0x8fd6a5,
  BLUE: 0x8fd2ff,
  ORANGE: 0xf8a444,
  RED: 0xe46653,
  QUASI_BLACK: 0x141414,
  PURPLE: 0xcb83fb,
};

export const LogsColors: Record<string, number> = {
  INFO: Colors['WHITE'],
  ERROR: Colors['RED'],
  WARNING: Colors['ORANGE'],
  FATAL: Colors['QUASI_BLACK'],
  DEBUG: Colors['PURPLE'],
};
