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
      ((declarations['border-top'] == declarations['border-bottom']) == declarations['border-left']) ==
      declarations['border-right']
    ) {
      return declarations['border-top'].value;
    }
  }
  if (
    !declarations['border-width'] ||
    !declarations['border-style'] ||
    !declarations['border-color'] ||
    !declarations['border-top'] ||
    !declarations['border-bottom'] ||
    !declarations['border-left'] ||
    !declarations['border-right']
  ) {
    return '';
  }

  return shorthandValue.replace('  ', ' ').trim();
};
