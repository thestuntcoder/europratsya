export function getRaw(obj, language = 'en') {
  if (obj == null) return '';

  switch (language) {
    case 'en':
      return typeof obj['_rawEn'] === 'undefined'
        ? obj['_rawUk']
        : obj['_rawEn'];
      break;

    case 'uk':
      return typeof obj._rawUk === 'undefined' ? obj._rawEn : obj._rawUk;
      break;

    case 'de':
      return typeof obj._rawDe === 'undefined' ? obj._rawEn : obj._rawDe;
      break;
  }
}

export function getTitle(obj, language = 'en') {
  if (obj == null) return '';

  switch (language) {
    case 'en':
      return typeof obj.en === 'undefined' ? obj.uk : obj.en;
      break;

    case 'uk':
      return typeof obj.uk === 'undefined' ? obj.en : obj.uk;
      break;

    case 'de':
      return typeof obj.de === 'undefined' ? obj.en : obj.de;
      break;
  }
}

export function getSeo(obj, field, language, default_value = '') {
  const param = field + '_' + language;

  if (obj.seo != null && obj.seo[param] != null) {
    return obj.seo[param];
  }

  return default_value;
}
