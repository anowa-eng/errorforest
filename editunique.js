var real = document.querySelector('.editor2').innerHTML.split('\n'),
real = real
  .replace(/(\/\*.*\*\/)|(\/{2}.*)|(#.*)|(\(?[cC][oO]([mM]{2})[eE][nN][tT]\s*([:|-])\s*.*\)?)/g, '')
  .replace(/\bappend\s*.*\b/g, '<')
  .replace(/\belement(.*)\b$/g, '>')
currentLine;
const anova01 = {
  loops: {
    count: null,
    repeat(times, f) {
      count = 1;
      for (var i; i < times; i++) {
        f();
        count++;
      }
      delete window.i;
      count = null;
    },
    skip() {
      count++;
    }
  }
}
for (var i; i < real.length; i++) {
  
}
