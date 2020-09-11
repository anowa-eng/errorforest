var code = document.querySelector('e').innerHTML.split('\n');
var real = code.replace(/(\/\*.*\*\/)|(\/{2}.*)|(#.*)|(\(?[cC][oO]([mM]{2})[eE][nN][tT]\s*([:|-])\s*.*\)?)/g, '');
for (var i = 0; i < real.length; i++) {
  currentLine = real[i];
  if (/^append(\s*)element(\s*).*/i.test(currentLine))
}
