function setup() {
    let canvas = document.getElementById('tegning');
    let ctx = canvas.getContext('2d');
    let xpos = 100;
    let vx = 2;
    
    function figur(ctx, dx) {
    ctx.beginPath();
    ctx.moveTo(dx,200);
    ctx.lineTo(dx,300);
    //venstre fot
    ctx.lineTo((dx-50),400);
    //høyre fot
    ctx.moveTo(dx,300);
    ctx.lineTo((dx+50),400);
    //venstre arm
    ctx.moveTo(dx,220);
    ctx.lineTo((dx-50),240);
    //høyre arm
    ctx.moveTo(dx,220);
    ctx.lineTo((dx+50),240);
    //hode
    ctx.moveTo((dx+20),180);
    ctx.arc(dx,180,20,0,2*Math.PI);
    ctx.stroke();
    }
    

    function tegn() {
        ctx.clearRect(0,0,500,500)
        figur (ctx, xpos)
        xpos += vx;
        if(xpos > 500){ 
            vx = -2;
        }
        if(xpos < 100){
            vx = 2;
        }
    
    }

     setInterval(tegn,40);
    

    /**
     * Tegner en figur
     * {conetxt} ctx - tegneområdet
     * {number} dx - avstand fra v.kant
     */
   

   

    
}