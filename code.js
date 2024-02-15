
function fun1(a){
    var el0=document.getElementById('se0');
    var el1=document.getElementById('se1');
    var el2=document.getElementById('se2');
    var el3=document.getElementById('se3');

    el0.style.opacity='0';
    el0.style.display='none';
    el1.style.opacity='0';
    el1.style.display='none';
    el2.style.opacity='0';
    el2.style.display='none';
    el3.style.opacity='0';
    el3.style.display='none';

    var el=document.getElementById('se'+a);
    el.style.display='flex'; 
    setTimeout(function(){el.style.opacity='1';},100)
    

    var b0=document.getElementById('b0');
    var b1=document.getElementById('b1');
    var b2=document.getElementById('b2');
    var b3=document.getElementById('b3');

    b0.style.backgroundColor='#d4d3d3';
    b1.style.backgroundColor='#d4d3d3';
    b2.style.backgroundColor='#d4d3d3';
    b3.style.backgroundColor='#d4d3d3';

    var b=document.getElementById('b'+a);
    b.style.backgroundColor='#666';
}

let index=1;

function scrol(direction){
    var slide1=document.getElementById("sl1");
    var slide2=document.getElementById("sl2");
    var slide3=document.getElementById("sl3");

    if(direction==='right'&&index==1){
        slide1.style.transform='translateX(-100%)';
        slide2.style.transform='translateX(-100%)';
        slide3.style.transform='translateX(-100%)';

        slide1.style.opacity=0;
        slide2.style.opacity=1;
        slide3.style.opacity=0;

        var bs1=document.getElementById('bs1');
        bs1.style.display='inline-block';
    

        index=2;
    }else if(direction==='right'&&index==2){
        slide1.style.transform='translateX(-200%)';
        slide2.style.transform='translateX(-200%)';
        slide3.style.transform='translateX(-200%)';

        slide1.style.opacity=0;
        slide2.style.opacity=0;
        slide3.style.opacity=1;

        var bs2=document.getElementById('bs2');
        bs2.style.display='none';

        index=3;
    }else if(direction==='left'&&index==3){
        slide1.style.transform='translateX(-100%)';
        slide2.style.transform='translateX(-100%)';
        slide3.style.transform='translateX(-100%)';

        slide1.style.opacity=0;
        slide2.style.opacity=1;
        slide3.style.opacity=0;

        var bs2=document.getElementById('bs2');
        bs2.style.display='inline-block';

        index=2;
    }else if(direction==='left'&&index==2){
        slide1.style.transform='translateX(0)';
        slide2.style.transform='translateX(0)';
        slide3.style.transform='translateX(0)';

        slide1.style.opacity=1;
        slide2.style.opacity=0;
        slide3.style.opacity=0;

        var bs1=document.getElementById('bs1');
        bs1.style.display='none';

        index=1;
    }
}

function fun2(){
    var nameIiput=document.getElementById("nameInput");
    var mailInput=document.getElementById("mailInput");
    var msgInput=document.getElementById("msgInput");

    naMe=nameIiput.value;
    mail=mailInput.value;
    msg=msgInput.value;

    console.log(naMe +" "+mail+" "+msg);
}