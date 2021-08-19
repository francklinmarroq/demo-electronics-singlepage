let movers = document.getElementsByClassName('mover')
let phoneCards = document.getElementsByClassName('phone')
let computerCards = document.getElementsByClassName('computer')
let cardPage = Math.ceil(phoneCards.length/5)
let l = 0;
let movePer = 25.34;
let maxMove = 203;

let phonesRightMover = ()=>{
    l= l+movePer;
    if (phoneCards == 1){
        l=0
    }
    for( const i of phoneCards){
        if(l > maxMove){
            l = l - movePer;
        }
        i.style.left = '-' + l + '%'
    }
}
let phonesLeftMover = ()=>{
    l= l-movePer;
    if (l <= 0){
        l=0
    }
    for( const i of phoneCards){
        if(cardPage > 1)
        i.style.left = '-' + l + '%'
    }
}
let computersRightMover = ()=>{
    l= l+movePer;
    if (computerCards == 1){
        l=0
    }
    for( const i of computerCards){
        if(l > maxMove){
            l = l - movePer;
        }
        i.style.left = '-' + l + '%'
    }
}
let computersLeftMover = ()=>{
    l= l-movePer;
    if (l <= 0){
        l=0
    }
    for( const i of computerCards){
        if(cardPage > 1)
        i.style.left = '-' + l + '%'
    }
}


movers[1].onclick = () => {
    phonesRightMover();
}
movers[0].onclick = () => {
    phonesLeftMover();
}
movers[2].onclick = () => {
    computersLeftMover();
}
movers[3].onclick = () => {
    computersRightMover();
}