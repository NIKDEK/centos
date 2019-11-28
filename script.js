var val="Designed by John Perez ® 2019", vids = ["https://www.youtube-nocookie.com/embed/VCEnGhsEg08", "https://www.youtube-nocookie.com/embed/GzB5bYxp0Rk", "https://www.youtube-nocookie.com/embed/6_CnA65jwAM", "https://www.youtube-nocookie.com/embed/Gu6aDWCk_c4", "https://www.youtube-nocookie.com/embed/P4eO0jmkWOE", "https://www.youtube-nocookie.com/embed/eAHCPRv-CCc", "https://www.youtube-nocookie.com/embed/XMS_tRdoCwA", "https://www.youtube-nocookie.com/embed/DjfmPgqHlcc", "https://www.youtube-nocookie.com/embed/u9Zt-UVE-1s", "https://www.youtube-nocookie.com/embed/FAAjMb82b8k", "https://www.youtube-nocookie.com/embed/rXN9kVOQ5ks", "https://www.youtube-nocookie.com/embed/0FxSrrcntr0", "https://www.youtube-nocookie.com/embed/7Gf8KTfaEYM", "https://www.youtube-nocookie.com/embed/W-7XGJK0kFs", "https://www.youtube-nocookie.com/embed/t0Odw49udso", "https://www.youtube-nocookie.com/embed/YuZvTIXz2jU", "https://www.youtube-nocookie.com/embed/6FxhFYHigcI", "https://www.youtube-nocookie.com/embed/rDsvsde9kqw", "https://www.youtube-nocookie.com/embed/A5hTOs3X3zw", "https://www.youtube-nocookie.com/embed/7Z2wVEj2mH0", "https://www.youtube-nocookie.com/embed/ewbMQMQhsZY", "https://www.youtube-nocookie.com/embed/0CQjdtY6wsQ", "https://www.youtube-nocookie.com/embed/zPJIlk6ja8M", "https://www.youtube-nocookie.com/embed/ZjII2PJzpYM", "https://www.youtube-nocookie.com/embed/OyyguvrslC8", "https://www.youtube-nocookie.com/embed/050B1Xjs0sw", "https://www.youtube-nocookie.com/embed/QT7xR_dOZhc"],init = document.getElementById('init'), pdf = [],val = 'Designed by John Perez ® 2019', img = document.getElementsByClassName('vd'), obj = document.getElementById('obj'), frame = document.getElementById('frame'),vl = val;
const hide = document.getElementById('hide'), view = document.getElementById("vid"), down = document.getElementById('download'), option = document.getElementsByClassName('vd');
if(init.innerText == "" || init.innerText != vl ){
    alert("This web was designed by John and is protected under Copy Rigth Licences if you want to use it you must keep the proper rigths of the creator");
    init.innerText = "Designed by John Perez ® 2019";
    
}else{
    for (let i = 0; i < img.length; i++) {
        option[i].setAttribute('style', `background-image:url(img/${i}.jpg)`);
    img[i].addEventListener('click', () => {
        frame.setAttribute('src', vids[i]);
        obj.setAttribute('data', `pdf/${i + 1}.pdf`);
        down.setAttribute('href', `pdf/${i + 1}.pdf`);
        view.setAttribute('class', 'view');
    });
}

hide.addEventListener('click', () => {
    obj.setAttribute('data', '');
    view.setAttribute('class', 'hide');
    frame.setAttribute('src', '');
});
}
