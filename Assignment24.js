let colors = ['red','blue','green','orange','purple']

let i=0
setInterval(
    function () {
      var randomColor = colors[i++]
      document.body.style.backgroundColor = randomColor;
    },5000);

