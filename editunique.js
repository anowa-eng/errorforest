var code = document.querySelector("e").innerHTML.split("\n"),
  real = code.replace(/(\/\*.*\*\/)|(\/{2}.*)|(#.*)|(\(?[cC][oO]([mM]{2})[eE][nN][tT]\s*([:|-])\s*.*\)?)/g, ""),
    currentLine;
for (var i = 0; i < real.length; i++) {
  currentLine = real[i];
  if (/\bappend\b\belement\b.*/i.test(currentLine)) {
    if (currentLine.includes) {
    }
  }
}
delete window.i;
