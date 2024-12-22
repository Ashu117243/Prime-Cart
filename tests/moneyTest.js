import { formatCurrenccy } from "../scripts/utils/money.js";


console.log('test suite: formatCurrency');

console.log('converts cents into dollar');

if(formatCurrenccy(2095) ==='20.95'){
  console.log('passed');
}
else{
  console.log('Failed');
}

console.log('works with 0');

if(formatCurrenccy(0) ==='0.00'){
  console.log('Passed');
}
else{
  console.log('Failed');
}

console.log('rounds upto nearest cents');

if(formatCurrenccy(2000.5) ==='20.01'){
  console.log('passed');
}
else{
  console.log('failed');
}

if(formatCurrenccy(2000.4) === '20.00')
{ console.log('passed');}
else {
  console.log('failed');
}