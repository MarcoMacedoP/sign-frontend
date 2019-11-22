export const EMAIL_VALIDATION: RegExp = /^[\w]{3,}@[\w]{3,}\.[\w]{1,4}[\.[a-z]+]?$/;
export const TEXT_VALIDATION: RegExp = /^\w{3,60}/;
export const BIG_TEXT_VALIDATION: RegExp = / ^\w{3,}.{0,400}/;
export const ESPECIAL_CHARS_VALIDATION: RegExp = /[$&%?¿!¡]/;
export const MIN_8_CHARS_VALIDATION: RegExp = /.{8,}/;
export const DIGITS_VALIDATION: RegExp = /\d/;
export const CHARS_ALPHABET_VALIDATION: RegExp = /[a-zA-Z]/;
