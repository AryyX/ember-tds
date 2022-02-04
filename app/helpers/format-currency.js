import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(params) {
  let[amount, symbol]=params;
  
  return `${amount} ${symbol}`
  
});
