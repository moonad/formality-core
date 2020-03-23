var fmc = require("./formality_core.js");

var code = `
  Bool : Type
    (A : Type;) -> (t : A) -> (f : A) -> A

  true : Bool
    (A;) => (t) => (f) => t

  false : Bool
    (A;) => (t) => (f) => f
`;

console.log(fmc.stringify_mod(fmc.parse_mod(code, 0)));
