export const EMAIL_VALIDATION: RegExp = /^[\w]{3,}@[\w]{3,}\.[\w]{1,4}[\.[a-z]+]?$/;
export const TEXT_VALIDATION: RegExp = /^\w{3,}.{0,60}/;
export const BIG_TEXT_VALIDATION: RegExp = / ^\w{3,}.{0,400}/;

/*
test@example.com
MARCO@gmail.com
test@example.com.mx
another@email.co
pedro_paramo@gmail.com
ab12345678
*/
