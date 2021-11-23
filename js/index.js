    var zs = document.getElementsByClassName('zs')[0],
    fs = document.getElementsByClassName('fs')[0],
    ss = document.getElementsByClassName('ss')[0],
    ll = document.getElementsByClassName('ll')[0],
    zl = document.getElementsByClassName('zl')[0],
    mj = document.getElementsByClassName('mj')[0],
    nl = document.getElementsByClassName('nl')[0],
    gjl = document.getElementsByClassName('gjl')[0],
    sm = document.getElementsByClassName('sm')[0],
    bj = document.getElementsByClassName('bj')[0],
    lq = document.getElementsByClassName('lq')[0],
    cj = document.getElementsByClassName('cj')[0],
    hp = document.getElementsByClassName('hp')[0],
    hjz = document.getElementsByClassName('hjz')[0],
    nengl = document.getElementsByClassName('nengl')[0],
    bs = document.getElementsByClassName('bs')[0],
    jn = document.getElementsByClassName('jn')[0],
    sb = document.getElementsByClassName('sb')[0],
    mp = document.getElementsByClassName('mp')[0],
    llz,zlz,mjz,nlz,
    num = 1000;

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
    zs.onclick = function(){
        zs.classList.add('bk');
        fs.classList.remove('bk');
        ss.classList.remove('bk');
        clear();
    }
    fs.onclick = function(){
        fs.classList.add('bk');
        ss.classList.remove('bk');
        zs.classList.remove('bk');
        clear();
    }
    ss.onclick = function(){
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
            gjl.textContent = (llz*(1.7*num)+nlz*(0.5*num)+mjz*(0.3*num))/num;
            hp.textContent = (llz*(0.2*num)+nlz*(0.1*num))/num;
            lq.textContent = (zlz*(0.03*num))/num+'%';
            nengl.textContent = (zlz*(0.2*num))/num;
            sm.textContent = llz*9+zlz*5+nlz*16;
            sb.textContent = (mjz*(0.04*num))/num+'%';
            cj.textContent = (mjz*(0.04*num))/num+'%';
            bj.textContent = (mjz*(0.02*num)+llz*(0.04*num))/num+'%';
            hjz.textContent = (nlz*(0.5*num)+llz*(0.2*num))/num;
        }if(fs.classList.contains('bk')){        
            sm.textContent = llz*4+zlz*4+nlz*10;
            hp.textContent = (llz*(0.05*num)+nlz*(0.1*num))/num;
            jn.textContent = (zlz*(0.06*num))/num;
            gjl.textContent = (zlz*(1.7*num)+llz*(0.4*num)+nlz*(0.3*num))/num;
            nengl.textContent = zlz*2;
            lq.textContent = (zlz*(0.06*num))/num+'%';
            sb.textContent =( mjz*(0.04*num))/num+'%';
            bj.textContent = (mjz*(0.01*num)+zlz*(0.02*num))/num+'%';
            cj.textContent = (mjz*(0.03*num))/num+'%';
            hjz.textContent = (nlz*(0.4*num))/num;
        }if(ss.classList.contains('bk')){
            sm.textContent = llz*5+mjz*7+nlz*12;
            gjl.textContent = (llz*(0.5*num)+mjz*(1.7*num)+nlz*(0.4*num))/num;
            hp.textContent =( llz*(0.05*num)+nlz*(0.1*num))/num;
            bs.textContent = (llz*(0.06*num)+mjz*(0.07*num))/num+'%';
            nengl.textContent =( zlz*(0.4*num))/num;
            sb.textContent = (zlz*(0.02*num)+mjz*(0.03*num))/num+'%';
            lq.textContent =( zlz*(0.04*num))/num+'%';
            cj.textContent =( mjz*(0.02*num))/num+'%';
            bj.textContent = (mjz*(0.06*num))/num+'%';
            hjz.textContent = (nlz*(0.4*num))/num;   
        }
    },500)