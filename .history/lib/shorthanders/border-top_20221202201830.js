module.exports = function (shorthand, declarations) {
  var propertyName = shorthand.shorthandProperty;
  if (declarations[propertyName + '-width']) {
    if (
      declarations[propertyName + '-width'] &&
      declarations[propertyName + '-style'] &&
      declarations[propertyName + '-color']
    ) {
      // If all 3 border-`direction` present
      return (
        declarations[propertyName + '-width'].value +
        ' ' +
        declarations[propertyName + '-style'].value +
        ' ' +
        declarations[propertyName + '-color'].value
      );
    }
  } else {
    // Not all margin sides are defined
    return '';
  }
};
