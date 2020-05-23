// Solution 1 (O n)

// Check not a string

// iterate over array
//   check if it is a space
//     if there are no letter dont do anything
//     if there are letter copy space to alternative array
//   if there is a char
//     copy alternative array
//     copy char
//     clear alternative array
//   return new string

// Alternative Solution - using language features / less performance

// Check not a string
// Trim string
// Use regular expression to replace string

const urlFy = (string) => {
  if (typeof string != "string") {
    return;
  }

  let urlFyString = "";
  let spacesToAdd = "";

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char.match(/\s/)) {
      if (urlFyString.length === 0) {
        continue;
      }

      spacesToAdd += "%20";
    } else {
      urlFyString += spacesToAdd;
      urlFyString += char;
      spacesToAdd = "";
    }
  }

  return urlFyString;
};

const urlFyAlternative = (string) => {
  if (typeof string != "string") {
    return;
  }

  return string.trim().replace(/\s/g, "%20");
};

const { assert } = require("chai");

describe("urlFy", () => {
  it.only("Should implement urlFy", () => {
    assert.equal(
      urlFy("    lala test url   cake  "),
      "lala%20test%20url%20%20%20cake"
    );
    assert.equal(urlFy(12), undefined);
    assert.equal(urlFy(), undefined);

    assert.equal(
      urlFyAlternative("    lala test url   cake  "),
      "lala%20test%20url%20%20%20cake"
    );
    assert.equal(urlFyAlternative(12), undefined);
    assert.equal(urlFyAlternative(), undefined);
  });
});
