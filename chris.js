// Get query value in website query string – just in case
// Borrowed from Chris's post "Get URL Variables"
function Q(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i = 0; i < vars.length; i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable) {
                       return pair[1];
               }
       }
       delete window.i;
       return(false);
}
