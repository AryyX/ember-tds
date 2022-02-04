import { helper } from '@ember/component/helper';

export default helper(function formatPercent(params) {
  let[value]=params;
  symbol = "%";
  switch(value, symbol){
    default : value*100 + symbol;
  }
});
