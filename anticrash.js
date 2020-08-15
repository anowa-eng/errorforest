var antiCrash = new Object();
antiCrash.while = (function(bool, toDo, delay = 40){
  toDo();
  if (bool) {
    setTimeout(function(){
      antiCrash.while(bool,(function(){toDo()}),delay);
    },
    isNaN(delay) ? 40 : delay
    );
  }
  try {
    if (isNaN(delay)) {
      throw `'${delay}' is not a number`
    }
  } catch (e) {
    console.error(e)
  }
});
antiCrash.until = (function(bool, toDo, delay = 40){
  toDo();
  if (!bool) {
    setTimeout(function(){
      antiCrash.while(bool,(function(){toDo()}),delay);
    },
    isNaN(delay) ? 40 : delay
    );
  }
  try {
    if (isNaN(delay)) {
      throw `'${delay}' is not a number`
    }
  } catch (e) {
    console.error(e)
  }
});
