var real = document.querySelector('.editor2').innerHTML
  .replace(/(\/\*.*\*\/)|(\/{2}.*)|(#.*)|(\(?[cC][oO]([mM]{2})[eE][nN][tT]\s*([:|-])\s*.*\)?)/g, '')
  .replace(/\bappend\s*.*\b/g, '<')
  .replace(/\belement(.*)\b$/g, '>')
  .split('\n')
  .map(i => `${i};`)
  .replace(/(;;)$/, ';'),
const anova01 = {
  errorforest: {
    editor2: {
      preprocessor: {
        add() {
          
        }
      }
    }
  },
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
const currentLine = real[anova01.loops.count]
var tasks = new Array();
var newLine = '';
anova01.loops.repeat(real.length, function(){
  for (const item of currentLine.split(' ') {
    if (/append .* element (to ((["'].*["'])|(#[0-9]+)?) (as [a-zA-Z0-9_]+)?)/g.test(item)) {
      if (/append .* element/g.test(item) && /(element)$/g.test(item)) {
      }
    }
  }
});
