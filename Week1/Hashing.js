let crypto = require("crypto");

function Hash(input) {
  let output = "";
  let i = 0;
  while (!output.startsWith("0000")) {
    let going = input + i;
    output = crypto.createHash("sha256").update(going).digest("hex");
    i++;
  }
  console.log(output);
}

Hash("100xdev");
