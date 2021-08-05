    var zs = document.getElementsByClassName('zs')[0];
    var fs = document.getElementsByClassName('fs')[0];
    var ss = document.getElementsByClassName('ss')[0];

    var ll = document.getElementsByClassName('ll')[0];
    var zl = document.getElementsByClassName('zl')[0];
    var mj = document.getElementsByClassName('mj')[0];
    var nl = document.getElementsByClassName('nl')[0];

    var gjl = document.getElementsByClassName('gjl')[0];
    var sm = document.getElementsByClassName('sm')[0];
    var bj = document.getElementsByClassName('bj')[0];
    var lq = document.getElementsByClassName('lq')[0];
    var cj = document.getElementsByClassName('cj')[0];
    var hp = document.getElementsByClassName('hp')[0];

    var hjz = document.getElementsByClassName('hjz')[0];
    var nengl = document.getElementsByClassName('nengl')[0];
    var bs = document.getElementsByClassName('bs')[0];
    var jn = document.getElementsByClassName('jn')[0];
    var sb = document.getElementsByClassName('sb')[0];
    var mp = document.getElementsByClassName('mp')[0];

    function clear(){
        gjl.textContent = '';
        sm.textContent = '';
        bj.textContent = '';
        lq.textContent = '';
        cj.textContent = '';
        hp.textContent = '';
        hjz.textContent = '';
        nengl.textContent = '';
        bs.textContent = '';
        jn.textContent = '';
        sb.textContent = '';
        mp.textContent = '';
    }



    var llz,zlz,mjz,nlz;
  
    zs.onclick = function(){
        console.log('战士')
        zs.classList.add('bk');
        fs.classList.remove('bk');
        ss.classList.remove('bk');
        clear();
    }
    fs.onclick = function(){
        console.log('法师');
        fs.classList.add('bk');
        ss.classList.remove('bk');
        zs.classList.remove('bk');
        clear();
    }
    ss.onclick = function(){
        console.log('射手');
        ss.classList.add('bk');
        zs.classList.remove('bk');
        fs.classList.remove('bk');
        clear();
    }
    
    setInterval(function(){
        llz = ll.value;
        zlz = zl.value;
        mjz = mj.value;
        nlz = nl.value;
        if(zs.classList.contains('bk')){
           

            gjl.textContent = llz*1.7+nlz*0.3;
            hp.textContent = llz*0.2+nlz*0.2;

            lq.textContent = zlz*(0.03)+'%';
            nengl.textContent = zlz*0.2;
            sm.textContent = zlz*5+llz*10+nlz*13;

            sb.textContent = mjz*(0.04)+'%';
            cj.textContent = mjz*(0.04)+'%';
            bj.textContent = mjz*(0.02)+llz*(0.04)+'%';
            
            hjz.textContent = nlz*0.5+llz*0.2;
            console.log('战士');
        }if(fs.classList.contains('bk')){
            
            sm.textContent = llz*4+zlz*4+nlz*8;
            hp.textContent = llz*0.05+nlz*0.1;

            jn.textContent = zlz*0.06;
            gjl.textContent = zlz*1.7+llz*0.4;
            nengl.textContent = zlz*2;
            lq.textContent = zlz*0.06+'%';

            sb.textContent = mjz*0.04+'%';
            bj.textContent = mjz*0.03+zlz*0.03+'%';
            cj.textContent = mjz*0.02+'%';

            hjz.textContent = nlz*0.4;

            console.log('法师');
        }if(ss.classList.contains('bk')){

            sm.textContent = llz*4+mjz*5+nlz*8;
            gjl.textContent = llz*0.5+ mjz*1.7;
            hp.textContent = llz*0.05+nlz*0.1;
            bs.textContent = llz*0.05+'%';

            nengl.textContent = zlz*0.4;
            sb.textContent = zlz*0.02+mjz*0.03+'%';
            lq.textContent = zlz*0.04+'%';

            cj.textContent = mjz*0.03+'%';
            bj.textContent = mjz*0.06+'%';

            hjz.textContent = nlz*0.4;
           
            console.log('射手');
        }

        



    },500)