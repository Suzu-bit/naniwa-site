const buttonElem = document.getElementById('button');
let isBack = true;

imagepath =  ['image/yellowColor.jpg','image/blueColor.jpg','image/redColor.jpg','image/greenColor.jpg','image/purpleColor.jpg','image/orangeColor.jpg','image/pinkColor.jpg']

if(buttonElem !== null){
    buttonElem.addEventListener('click', () => {
        const element = document.getElementById('img');
        if(element !== null){
            let imagePath = isBack ? imagepath[Math.floor(Math.random() * imagepath.length)] : 'image/randomcard.jpg';
            rotationAnimationLoop(element, imagePath, 0);
            isBack = !isBack;
        }
    });
}

/* カードを捲る処理を指定された角度になるまでループさせる関数
* @param  {Object} element   imgタグのElement Object
* @param  {String} imagePath 画像のパス
* @return {Number} deg       カードの回転角度
*/
const rotationAnimationLoop = (element, imagePath, deg) =>{
    if( deg <= 180 ){
        rotationAnimation(element, imagePath, deg);
        setTimeout( 
            () => {
                rotationAnimationLoop(element, imagePath, deg+= 5 ) 
            }, 
        1 );
    }
}

/* カードを捲る処理
* @param  {Object} element   imgタグのElement Object
* @param  {String} imagePath 画像のパス
* @return {Number} deg       カードの回転角度
*/
const rotationAnimation = (element, imagePath, deg) =>{
    if ( 90 === deg ){
        element.src =  imagePath;
    }else {
        element.style.webkitTransform = 'rotateY(' + deg + 'deg)';
    }
}
