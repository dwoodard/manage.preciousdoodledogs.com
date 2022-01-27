import moment from 'moment';

export const toTitleCase = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

export const toKebabCase = (str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();

export const score = function (a, b) { if (this === a) return 1; if (a === '') return 0; let c = 0; const d = a.length; let e = this; const f = e.length; let g; let h; let i = 1; let j; for (let k = 0, l, m, n, o, p, q; k < d; ++k) { n = a.charAt(k), o = e.indexOf(n.toLowerCase()), p = e.indexOf(n.toUpperCase()), q = Math.min(o, p), m = q > -1 ? q : Math.max(o, p); if (m === -1) { if (b) { i += 1 - b; continue; } return 0; }l = 0.1, e[m] === n && (l += 0.1), m === 0 ? (l += 0.6, k === 0 && (g = 1)) : e.charAt(m - 1) === ' ' && (l += 0.8), e = e.substring(m + 1, f), c += l; }h = c / d, j = (h * (d / f) + h) / 2, j /= i, g && j + 0.15 < 1 && (j += 0.15); return j; };

export const toPascalCase = (str) => {
  return str.replace(/[-_\s]+/g, ' ').split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join('');
};

export const pascalToTitleCase = (str) => {
  return str.replace(/([A-Z])/g, ' $1').replace(/^\s/, '');
};

// convert ounces to lbs
export const ouncesToLbs = (ounces) => {
  // if no ounces, return 0
  if (!ounces) {
    return null;
  }

  // remove any text 'ounces' or 'g' or 'oz' and whitespace
  let _ounces = ounces.replace(/[^0-9.]/g, '');

  // if ounces is null return null
  if (_ounces === '') {
    return null;
  }

  // force to 2 decimal places
  _ounces = Math.round(_ounces * 0.0625 * 100) / 100;
  return parseFloat(_ounces).toFixed(2);
};

export const inchesToFeet = (inches) => {
  // if no inches, return 0
  if (!inches) {
    return null;
  }

  // remove any text 'inches' or 'g' or 'in' and whitespace
  let _inches = inches.replace(/[^0-9.]/g, '');

  // if inches is null return null
  if (_inches === '') {
    return null;
  }

  // force to 2 decimal places
  _inches = Math.round(_inches * 0.0833 * 100) / 100;
  return parseFloat(_inches).toFixed(2);
};

// convert birthdate to age
export const age = (birthdate, onlyNumber = false) => {
  if (!birthdate || birthdate === '') {
    return null;
  }

  // given the date of birth, calculate the age
  const today = new Date();
  const birthDate = new Date(birthdate);

  // age is the number of full years
  const age = today.getFullYear() - birthDate.getFullYear();

  if (onlyNumber) {
    return age;
  }

  // age is in years, so if the current month is before the birth month, then we're not full years yet
  const years = today.getMonth() < birthDate.getMonth() ? age - 1 : age;

  // singular or plural year
  const year = years === 1 ? 'year' : 'years';

  return `${years} ${year}`;
};

export const formatDate = (date, formatPattern = 'short') => {
  if (!date) {
    return null;
  }

  const dateFormats = {
    long: 'MMMM Do, YYYY',
    short: 'MMM Do, YYYY',
    numeric: 'M/D/Y',
    time: 'h:mm a'
  };

  const pattern = formatPattern.split(' ');
  const dateFormat = pattern.map((part) => {
    // if part is time add a space to the beginning and it's the last part
    if (part === 'time' && pattern.indexOf(part) === pattern.length - 1) {
      return ` ${dateFormats[part]}`;
    }
    return dateFormats[part];
  }).join('');

  return moment(date).format(dateFormat);
};


export const latestDateFromArray = (dates) => {
  if (!dates || dates.length === 0) {
    return null;
  }

  const sortedDates = dates.sort((a, b) => {
    return new Date(a) - new Date(b);
  });

  return sortedDates[sortedDates.length - 1];
};
