src = function(name, target) {
  if (!(name || target)) throw new Error('Parameter(s) are undefined');
  window[`image_${name}`] = new Image(100,100);
  window[`image_${name}`].src = target;
}
