var timeout = false;

function timer() {
  setTimeout(function() {
    timeout = true;
    console.log('timer');
  }, 100);
  wait();
  console.log('done');
}

function wait() {
  if (!timeout) {
    console.log("working ... waiting");
    setTimeout(wait, 0);
  } else {
    console.log('done');
  }
};

timer();
