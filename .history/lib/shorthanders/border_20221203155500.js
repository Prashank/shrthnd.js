module.exports = function (shorthand, declarations) {
  var shorthandValue = require('./generic')(shorthand, declarations);
  // If we declare bg size but not position, we can't shorthand
  if (
    declarations['border-top'] &&
    declarations['border-bottom'] &&
    declarations['border-left'] &&
    declarations['border-right']
  ) {
    if (
      declarations['border-top'].value === declarations['border-bottom'].value &&
      declarations['border-left'].value === declarations['border-right'].value &&
      declarations['border-left'].value === declarations['border-top'].value
    ) {
      shorthand.properties.push('border-top');
      shorthand.properties.push('border-bottom');
      shorthand.properties.push('border-right');
      shorthand.properties.push('border-left');
      return declarations['border-top'].value;
    }
  }
  if (
    declarations['border-top'] ||
    declarations['border-bottom'] ||
    declarations['border-left'] ||
    declarations['border-right']
  ) {
    
      return declarations['border-top'].value;
    }
  }
  if (!declarations['border-width'] || !declarations['border-style'] || !declarations['border-color']) {
    return '';
  }

  return shorthandValue.replace('  ', ' ').trim();
};
