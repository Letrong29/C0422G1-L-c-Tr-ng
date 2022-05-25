class Hero {
    constructor(image, top, left, size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }
    getHeroElement(){
        return '<img width="'+ this.size + '"' +
           ' height="'+ this.size + '"' +
           ' src="' + this.image +'"' +
           ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
    moveRight(){
        this.left += 20;
        console.log('ok: ' + this.left);
    }
}
var hero = new Hero('https://sharingfunvn.com/wp-content/uploads/2022/01/photo-1-1643083057298916509265.jpg', 50, 30, 300);
var hero1 = new Hero('https://sharingfunvn.com/wp-content/uploads/2022/01/photo-1-1643083057298916509265.jpg', 50, 350, 300);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
        hero1.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
    document.getElementById('game1').innerHTML = hero1.getHeroElement();
    setTimeout(start, 500)
}

start();
// function Hero(image, top, left, size){
//     this.image = image;
//     this.top = top;
//     this.left = left;
//     this.size = size;
//
//     this.getHeroElement = function(){
//         return '<img width="'+ this.size + '"' +
//             ' height="'+ this.size + '"' +
//             ' src="' + this.image +'"' +
//             ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
//     }
//
//     this.moveRight = function(){
//         this.left += 20;
//         console.log('ok: ' + this.left);
//     }
//
// }
//
// var hero = new Hero('https://sharingfunvn.com/wp-content/uploads/2022/01/photo-1-1643083057298916509265.jpg', 20, 30, 300);
//
// function start(){
//     if(hero.left < window.innerWidth - hero.size){
//         hero.moveRight();
//     }
//     document.getElementById('game').innerHTML = hero.getHeroElement();
//     setTimeout(start, 500)
// }
//
// start();