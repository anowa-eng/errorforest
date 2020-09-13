var real = document.querySelector('.editor2').innerHTML
  .replace(/(\/\*.*\*\/)|(\/{2}.*)|(#.*)|(\(?[cC][oO]([mM]{2})[eE][nN][tT]\s*([:|-])\s*.*\)?)/g, '')
  .replace(/\bappend\s*.*\b/g, '<')
  .replace(/\belement(.*)\b$/g, '>')
  .split('\n')
  .map(i => `${i};`)
  .replace(/(;;)$/, ';'),
const anova01 = {
  errorforest: {
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
anova01.loops.repeat(real.length, function(){
  for (const item of currentLine.split(' ') {
    switch(item) {
      case 'append':
        tasks.push('Make an element');
        if (currentLine.slice('append'.length) === ';')) throw new Error(`Unexpected semicolon at line number ${anova01.loops.count}`);
        else {
          anova01.loops.skip();
          
        }
    }
  }
});
