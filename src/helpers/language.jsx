export function getRaw(obj, language = 'en') {
  if (obj == null) return '';
  let altLanguage = language === 'en' ? '_rawUk' : '_rawEn';

  language = '_raw' + language.charAt(0).toUpperCase() + language.slice(1);

  return typeof obj[language] === 'undefined'
    ? obj[altLanguage]
    : obj[language];
}

export function getTitle(obj, language = 'en') {
  if (obj == null) return '';

  let altLanguage = language === 'en' ? 'uk' : 'en';

  return typeof obj[language] === 'undefined'
    ? obj[altLanguage]
    : obj[language];
}

export function getSeo(obj, field, language, default_value = '') {
  const param = field + '_' + language;

  if (obj.seo != null && obj.seo[param] != null) {
    return obj.seo[param];
  }

  return default_value;
}
