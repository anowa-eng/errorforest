var real = document.querySelector('.editor2').innerHTML.split('\n'),
real = real
  .replace(/(\/\*.*\*\/)|(\/{2}.*)|(#.*)|(\(?[cC][oO]([mM]{2})[eE][nN][tT]\s*([:|-])\s*.*\)?)/g, '')
  .replace(/\bappend\s*.*\b/g, '<')
  .replace(/\belement(.*)\b$/g, '>')
currentLine;
for (var i; i < real.length; i++) {
  
}
