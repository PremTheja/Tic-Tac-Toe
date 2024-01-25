let boxs=document.querySelectorAll(".box")
let reset=document.querySelector("#reset")
let newbutton=document.querySelector("#newgame")
let newmsg=document.querySelector(".new-msg")
let msg=document.querySelector("#msg")
let turn0=true;//playerX,player0
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetgame=()=>{
    turn0=true;
    enableboxs();
    newmsg.classList.add("hide")

}

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turn0){//player0
            box.innerText="O"
            turn0=false
        }else{//playerX
            box.innerText="X"
            turn0=true
        }
        box.disabled=true
        checkwinner();
    })
})
const disableboxs=()=>{
    for(box of boxs){
        box.disabled=true;
    }
}
const enableboxs=()=>{
    for(box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText=(`congratulation winner is: ${winner}`)
    newmsg.classList.remove("hide")
    disableboxs()
}
const checkwinner=()=>{
    for( let pattern of winPatterns){
        //console.log(pattern)
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxs[pattern[0]].innerText,boxs[pattern[1]].innerText,boxs[pattern[2]].innerText)
        let post1val=boxs[pattern[0]].innerText
        let post2val=boxs[pattern[1]].innerText
        let post3val=boxs[pattern[2]].innerText
        if(post1val!=""&& post2val!="" && post3val!=""){//checking empty boxs
            if(post1val==post2val && post2val==post3val){
                console.log("WINNER",post1val)
                showwinner(post1val)
            }
        }

    }
}
newbutton.addEventListener("click",resetgame)
reset.addEventListener("click",resetgame)