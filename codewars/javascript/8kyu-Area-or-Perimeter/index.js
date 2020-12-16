const areaOrPerimeter = function (l, w) {
  var squareArea;
  var rectanglePerimeter;
  if (l == w) {
    squareArea = l * w;
    return squareArea;
  } else {
    rectanglePerimeter = l * 2 + w * 2;
    return rectanglePerimeter;
  }
};
