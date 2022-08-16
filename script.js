const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100;

// function to add and control shadows on text
function shadow(e) {
//    variable to store the width and height as the event target
    const {offsetWidth: width, offsetHeight: height} = hero
    let {offsetX: x, offsetY: y} = e;

    
    if( this!== e.target){
        x = x + x + e.target.offsetLeft;
        y = y + y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));


    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 red,
      ${xWalk * -1}px ${yWalk}px 0 blue,
      ${yWalk}px ${xWalk * -1}px 0 pink,
      ${yWalk * -1}px ${xWalk}px 0 orange
    `;

    console.log(xWalk, yWalk);
}

hero.addEventListener('mousemove', shadow);