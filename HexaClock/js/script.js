var clock = document.getElementById('clock');
var color = document.getElementById('color');

function HexaClock (){
    var time = new Date();
    var h = (time.getHours() % 12).toString();
    var m = time.getMinutes().toString();
    var s = time.getSeconds().toString();

    if(h.length < 2){
        h = '0' + h;
    }
    if(m.length < 2){
        m = '0' + m;
    }
    if(s.length < 2){
        s = '0' + s;
    }

    var clockstring = h + ':' + m + ':' + s;
    var colorstring = '#' + h + m + s;

    clock.textContent = clockstring;
    color.textContent = colorstring;

    document.body.style.background = colorstring;
}
HexaClock();
setInterval(HexaClock, 1000); 