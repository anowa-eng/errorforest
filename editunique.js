var code = document.querySelector("e").innerHTML.split("\n"),
currentLine;
document.querySelector('.editor2').innerHTML = document
  .querySelector('.editor2')
  .innerHTML
  .replace('(', '<')
  .replace(')', '>')
  .replace(/(\/\*.*\*\/)|(\/{2}.*)|(#.*)|(\(?[cC][oO]([mM]{2})[eE][nN][tT]\s*([:|-])\s*.*\)?)/g, "");
