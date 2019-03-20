import i18next from 'i18next';
import config from '../config/config.json';
import moment from 'moment';
import numeral from './numeral';
import enJSON from '../assets/locales/en';
import viJSON from '../assets/locales/vi';

i18next.init({
    lng: config.locale,
    interpolation: {
        format: function (value, format, lng) {
            if (format === 'currency') {
                numeral.locale(lng);
                if (lng === "vi") {
                    return numeral(value).format('0,0 $');
                } else {
                    return numeral(value).format('$ 0,0.00');
                }
            };
            if (format === 'uppercase') return value.toUpperCase();
            if (value instanceof Date) return moment(value).format(format);
            if (new Date(value) instanceof Date) return moment(value).format(format);
            return value;
        }
    },
    debug: false,
    resources: {
        en: {
            translation: enJSON
        },
        vi: {
            translation: viJSON
        }
    }
}, function (err, t) {

});

export default i18next;