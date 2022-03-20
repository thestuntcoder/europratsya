import React from 'react';

function getRaw(obj, language = 'en') {
  if (object == null) return '';

  switch (language) {
    case 'en':
      return typeof obj._rawEn === 'undefined' ? obj._rawUk : obj._rawEn;
      break;

    case 'uk':
      return typeof obj._rawUk === 'undefined' ? obj._rawEn : obj._rawUk;
      break;

    case 'de':
      return typeof obj._rawDe === 'undefined' ? obj._rawEn : obj._rawDe;
      break;
  }
}
