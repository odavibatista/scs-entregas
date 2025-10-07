import { genSaltSync, hashSync, compareSync } from 'bcryptjs';

const salt = genSaltSync(10);
const password = 'mySecurePassword123!';
const hashedPassword = hashSync(password, salt);

console.log('Original Password:', password);
console.log('Hashed Password:', hashedPassword);

const isMatch = compareSync(password, hashedPassword);
console.log('Do they match?', isMatch);

const wrongPassword = 'wrongPassword!';
const isMatchWrong = compareSync(wrongPassword, hashedPassword);
console.log('Do they match with wrong password?', isMatchWrong ? 'Yes' : 'No');