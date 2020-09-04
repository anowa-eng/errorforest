// Trying to recreate PHP $_POST using JS
var $_POST = () => {
  if (arguments.length == 0) return document.querySelectorAll('*[name]');
  else if (arguments.length > 1) throw new Error('$_POST() needs only one parameter')
  else return document.querySelectorAll(`*[name="${arguments[0]}"]`)
}
var $_FILES = $_POST('import_editor').files;
const formData = new FormData();
formData.append('upload', $_FILES[0]);

fetch('/saveImage', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  });
