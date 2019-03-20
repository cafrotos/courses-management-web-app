import numeral from 'numeral';
import config from '../config/config.json'

numeral.register('locale', 'vi', {
  delimiters: {
      thousands: '.',
      decimal: ','
  },
  abbreviations: {
      thousand: 'K',
      million: 'Tr',
      billion: 'Tỷ',
      trillion: 'T.Tỷ'
  },
  currency: {
      symbol: '₫'
  }
},
);

numeral.locale(config.locale);

export default numeral;