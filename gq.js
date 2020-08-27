function GQ() {
  let thing = window.location.href;
  if (!(/\?/.test(thing))) throw new Error('There is no query string!')
  thing = thing.split('?');
  delete thing[0];
  thing = thing[1];
  thing = thing.split('&');
  thing = thing.slice(0, thing.length + 1);
  console.log(thing);
  var QueryObject = new Object();
  for (var i = 0; i < thing.length; i++) {
    QueryObject[thing[i].split('=')[0]] = thing[i].split('=')[1];
  }
  delete window.thing;
  return QueryObject;
}
console.log(GQ())
