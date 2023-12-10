let boxs= document.querySelectorAll(".tac");
// console.dir(boxs);

let turn0=true;

let arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxs.forEach((tac) => {
    tac.addEventListener("click",()=>{
        if (turn0) {
            tac.innerText="O";
            turn0=false;
        }
        else{
            tac.innerText="X";
            turn0=true;
        }
        tac.disabled=true;
        checkWinner();
    })

});

function checkWinner(){
   for (const pattern of arr) {
    let val1=boxs[pattern[0]].innerText;
    let val2=boxs[pattern[1]].innerText;
    let val3=boxs[pattern[2]].innerText;

    if (val1 !="" && val2 != "" && val3 !="") {
        if(val1==val2 && val2==val3){
            console.log("Winner!!",val1);
            
        }
    }
   }
}