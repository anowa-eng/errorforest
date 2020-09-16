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

document.querySelectorAll('errorforest-preprocessor').forEach(function(x){
  var real = x.innerHTML
    .replace(/(\/\*.*\*\/)|(\/{2}.*)|(#.*)|(\(?[cC][oO]([mM]{2})[eE][nN][tT]\s*([:|-])\s*.*\)?)/g, '')
    .replace(/\bappend\s*.*\b/g, '<')
    .replace(/\belement(.*)\b$/g, '>')
    .split('\n')
    .map(i => `${i};`)
    .replace(/(;;)$/, ';'),
  const currentLine = real[anova01.loops.count]
  var tasks = new Array();
  var newLine = '';
  anova01.loops.repeat(real.length, function(){
    for (const item of real) {
      if (/append .* element (to ((["'].*["'])|(#[0-9]+)?) (as [a-zA-Z0-9_]+)?)/g.test(item)) {
        if (item.slice('append'.length) == ';') throw new Error('Unexpected semicolon')
        else {
          if (/to/)
        }
      }
    }
  });
};
