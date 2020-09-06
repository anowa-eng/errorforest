// Trying to recreate PHP $_POST using JS
function $_POST() {
  if (arguments.length == 0) return document.querySelectorAll('*[name]');
  else if (arguments.length > 1) throw new Error('$_POST() needs only one parameter')
  else return document.querySelectorAll(`*[name="${arguments[0]}"]`)
}
// Anonymous
const formData = new FormData();
formData.append('upload', $_POST('import_editor').files[0]);
console.log(formData);
