
let parent = document.querySelector(".parent");
let current = 'O';
const checkWinner = () => {
    let boxes = document.getElementsByClassName("box");
    
    for (let i = 0; i < boxes.length; i += 3) {
        if (boxes[i].textContent !== '' &&
            boxes[i].textContent === boxes[i + 1].textContent &&
            boxes[i].textContent === boxes[i + 2].textContent) {
            parent.innerHTML = `${boxes[i].textContent} is the WINNER!`;
            
            parent.style.color = 'white';
            parent.style.textAlign='center';
            parent.style.fontSize='24px';
            parent.style.fontWeight= 'bold';
            parent.style.marginRight = '20px';
            return;
        }
    }
    

    for (let i = 0; i < 3; i++) {
        if (boxes[i].textContent !== '' &&
            boxes[i].textContent === boxes[i + 3].textContent &&
            boxes[i].textContent === boxes[i + 6].textContent) {
            parent.innerHTML = `${boxes[i].textContent} is the WINNER!`;
          
            parent.style.color = 'white';
            parent.style.textAlign='center';
            parent.style.fontSize='24px';
            parent.style.fontWeight= 'bold';
            parent.style.marginRight = '20px';
            return;
        }
    }

    if (boxes[0].textContent !== '' &&
        boxes[0].textContent === boxes[4].textContent &&
        boxes[0].textContent === boxes[8].textContent) {
        parent.innerHTML = `${boxes[0].textContent} is the WINNER!`;
  
        parent.style.color = 'white';
        parent.style.textAlign='center';
        parent.style.fontSize='24px';
        parent.style.fontWeight= 'bold';
        parent.style.marginRight = '20px';
        return;
    }

    if (boxes[2].textContent !== '' &&
        boxes[2].textContent === boxes[4].textContent &&
        boxes[2].textContent === boxes[6].textContent) {
        parent.innerHTML = `${boxes[2].textContent} is the WINNER!`;
     
        parent.style.color = 'white';
        parent.style.textAlign='center';
        parent.style.fontSize='24px';
        parent.style.fontWeight= 'bold';
        parent.style.marginRight = '20px';
        return;
    }
    let isDraw = true;
    for (let box of boxes) {
        if (box.textContent === '') {
            isDraw = false;
            break;
        }
    }
    if (isDraw) {
        parent.innerHTML = "It's a DRAW!";
        parent.style.color = 'white';
        parent.style.textAlign='center';
        parent.style.fontSize='24px';
        parent.style.fontWeight= 'bold';
        parent.style.marginRight = '40px';
    }
}

parent.addEventListener('click', (e) => {
    if (e.target.className == 'box') {
        if (e.target.textContent == '') {
            e.target.textContent = current;
            checkWinner();
            current = (current == 'O') ? 'X' : 'O';
        }
    }
});

parent.addEventListener('click',(e)=>{
    if(e.target.className=='box'){
       if(e.target.textContent==''){
          e.target.textContent=current;
         checkWinner();
          if(current=='O'){
            current='X';
          }
          else{
            current='O';
          }
       }
    }
})