const anova01 = {
  errorforest: {
    editor2: {
      preprocessor: {
        root(element) {
          if (element.hasAttribute('root')) return element.getAttribute('root');
          else return undefined;
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
};

var real;
const currentLine = real[anova01.loops.count];
document.querySelectorAll('errorforest-preprocessor').forEach(function(x){
  real = x.innerHTML
    .replace(/(\/\*.*\*\/)|(\/{2}.*)|(#.*)|(\(?[cC][oO]([mM]{2})[eE][nN][tT]\s*([:|-])\s*.*\)?)/g, '')
    .replace(/\bappend\s*.*\b/g, '<')
    .replace(/\belement(.*)\b$/g, '>')
    .split('\n')
    .map(i => `${i};`)
    .replace(/((;;)$)|(};(;?))/, ';')
  anova01.loops.repeat(real.length, function(){
    rt = anova01.errorforest.editor2.preprocessor.root(x) ? document.querySelector(x.getAttribute('root')) : document.body;
    // Execute lines one by one
      if (/append(\s*).*(\s*)element(\s*)(to(\s*)((["'].*["'])|(#[0-9]+)?)(\s*)(as(\s*)[a-zA-Z0-9_]+)?)/g.test(currentLine)) {
        if (!(currentLine.split(' ').filter(i => i != new String())[1])) throw new Error('Unexpected semicolon');
        else {
          window[`E${rt.children.length}`]  = document.createElement(
            currentLine.split(' ').filter(i => i != new String())[1]
          );
          window[`E${rt.children.length}`].setAttribute('errorforest-preprocessor-append-status', 'append');
	  if (!window['A']) const A = document.querySelector('[errorforest-preprocessor-append-status]');
	  if (/(to(\s*).*)$/.test(currentLine)) {
	    if (document.querySelectorAll(currentLine.slice('')).length > 1) {
	    }
	  }
        }
      }
	});
});
