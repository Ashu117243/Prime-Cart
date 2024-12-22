import { formatCurrenccy } from "../scripts/utils/money.js";

describe('test suite: formatCurrency' , ()=>{
  it('Converts cents into dollars' , ()=> {
 expect(formatCurrenccy(2095)).toEqual('20.95');
  });

  it('works with 0' , ()=>{
    expect(formatCurrenccy(0)).toEqual('0.00');
  });

  it('rounds upto nearest integer', ()=>
  {
    expect(formatCurrenccy(2000.5)).toEqual('20.01');

  });

});