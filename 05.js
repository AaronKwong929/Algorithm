/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  var target = "";
  for (var i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      target += "%20";
    } else {
      target += s[i]
    }
  }
  return target;
};

console.log(replaceSpace("We are ff"));
