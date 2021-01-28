const route = {};

route.defineProperty('if', function (string) {
  let _string = string;
  return {
    then: (url) => {
      if (window.location.href === _string) {
        if (!fetch) {
          var _fetch = function(url) {
            var xhr = new window['XMLHttpRequest']() || window.ActiveXObject('Microsoft.XMLHTTP');
            xhr.open('GET', url);
            xhr.send();
            xhr.onload = () => resolve(xhr.responseText)
          }
        }
      }
    }
  }
});
