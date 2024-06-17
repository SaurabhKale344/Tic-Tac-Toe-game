let boxes = document.querySelectorAll(".box");

let resetbtn=document.querySelector(".reset-btn");

let turn = true;
let count=0;
let whosturn="X";

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [6,4,2],
    [1,4,7],
    [2,5,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        box.classList.add("btn-animation");
       
        setTimeout(function(){
            box.classList.remove("btn-animation");
        },100);

        if (turn ==true){
            box.innerHTML="X";
            turn =false;
            whosturn="O"
            document.querySelector(".turnwise").innerText=`${whosturn} Turn`;
        }else{
            box.innerHTML="O";
            turn=true;
            whosturn="X";
            document.querySelector(".turnwise").innerText=`${whosturn} Turn`;
        }
        box.disabled =true;
        count++;
        checkWinner();
    });
});

const checkWinner =()=>{
    let ifwon=false;
    for(let pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;

        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if (pos1val !="" && pos2val !="" && pos3val !=""){
            if (pos1val===pos2val && pos2val===pos3val){
                document.querySelector(".winnerannounce p").innerText=`Congratulations,Winner is ${pos1val}  🎉`;
                boxesDisabled();
                ifwon=true;
                document.querySelector(".turnwise").innerText="";
                break;
            }
        }
    } 
    if (count===9 && !ifwon){
        document.querySelector(".winnerannounce p").innerText="Game Draw 😬";
        document.querySelector(".turnwise").innerText=""
        boxesDisabled();
}};

const boxesDisabled=() =>{
    boxes.forEach((box) =>{
        box.disabled=true;
    })
};

const boxesEnabled=() =>{
    boxes.forEach((box) =>{
        box.disabled=false;
        box.innerText=""
        document.querySelector(".winnerannounce p").innerText="";
    })
};


let rst=document.querySelector(".reset-btn");

rst.addEventListener("click", ()=>{
        turn=true;
        count=0
        boxesEnabled();
        document.querySelector(".turnwise").innerText="X plays First";
    });
    
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (count===9 && !ifwon){
            document.querySelector(".winnerannounce p").innerText="Game Draw 😬";
            boxesDisabled();
        }
    })});