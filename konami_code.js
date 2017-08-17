const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


var index = 0;

function init() {
  document.onkeydown = function(e) {
    let key = parseInt(e.which || e.detail);
    if (key === code[index]) {
      index ++;
    }
    else {
      index = 0;
    }
    if (index === code.length) {
      alert('Hurray');
      index = 0;
    }
  }
}
