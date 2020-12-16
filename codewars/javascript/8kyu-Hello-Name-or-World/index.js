function hello(name) {
  var capitalLetter = "";
  var lowerLetter = "";

  if (typeof name != "string" || name == "") {
    return "Hello, World!";
  } else {
    for (i in name) {
      if (i == 0) {
        capitalLetter = name.charAt(i).toUpperCase();
      } else {
        lowerLetter = lowerLetter + name.charAt(i).toLowerCase();
      }
      i++;
    }
    name = capitalLetter + lowerLetter;
    return "Hello, " + name + "!";
  }
}