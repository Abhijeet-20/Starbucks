function ImgChange(x){
    document.querySelector('.Starbucks').src = x;
}

function ChanegColor(color){
    const circle = document.querySelector('.circle');
    const btn = document.querySelector('.btn');
    const stb = document.querySelector('.stb');
    circle.style.backgroundColor =color;
    btn.style.backgroundColor = color;
    stb.style.color = color;
}


