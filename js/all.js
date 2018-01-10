window.onload = function () {
    var dottedArray = [
        {
            p: [{x: 0, y: 0}, {x: 400,  y: 0}, {x: 200, y: 200}], color:"#caff67"
        },
        {
            p: [{x: 0, y: 0}, {x: 200,  y: 200}, {x: 0, y: 400}], color:"#67becf"
        },
        {
            p: [{x: 400, y: 0}, {x:400,  y: 200}, {x: 300, y: 300}, {x: 300, y: 100}], color:"#ef3d61"
        },
        {
            p: [{x: 300, y: 100}, {x: 300,  y: 300}, {x: 200, y: 200}], color:"#f9f51a"
        },
        {
            p: [{x: 200, y: 200}, {x: 300,  y: 300}, {x: 200, y: 400}, {x: 100, y: 300}], color:"#a594c0"
        },
        {
            p: [{x: 100, y: 300}, {x: 200,  y: 400}, {x: 0, y: 400}], color:"#fa8ecc"
        },
        {
            p: [{x: 400, y: 200}, {x: 400,  y: 400}, {x: 200, y: 400}], color:"#f6ca29"
        }
    ];
    var canvas = document.getElementById("canvas");
    canvas.width = 400;
    canvas.height = 400;
    var cxt = canvas.getContext("2d");
    for (var i = 0, len = dottedArray.length; i < len; i++) {
        draw(dottedArray[i], cxt);
    }
    function draw (piece, cxt) {
        cxt.beginPath();
        cxt.moveTo(piece.p[0].x, piece.p[0].y);
        for (var i =0, len = piece.p.length; i < len; i++) {
            cxt.lineTo(piece.p[i].x, piece.p[i].y);
        }
        cxt.closePath();
        cxt.fillStyle = piece.color;
        cxt.fill()
    }
};