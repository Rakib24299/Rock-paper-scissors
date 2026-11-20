
const choices=document.querySelectorAll(".choice");
const userscore= document.querySelector("#user-score");
const computerscore= document.querySelector("#computer-score");



const gencompchoise=()=>{
    let options=["rock","paper","scissors"];  
    const rndmindex=Math.floor(Math.random() * 3)    // for option index choise[0,1,2]
    return options[rndmindex ] ;        
}


const drawgame=()=>{
    // console.log("game is draw")
     msg.innerText= "Game is Draw !"
     msg.style.backgroundColor="#e99b00"
}

let user=0;
let computer=0;

let showwinner= (userwin)=>{
        if (userwin){
            // comsole.log("you win !") ;
            user++
            userscore.innerText = user
            msg.innerText="You Win !"
            msg.style.backgroundColor="#38b000"
        }
        else{
            // console.log("You lose !")
            computer++;
            computerscore.innerText= computer;
             msg.innerText="You lose !"
             msg.style.backgroundColor="#c9184a"
            
        }
}

const palygame=(userchoise)=>{
    console.log(" user choise is ", userchoise);

    // computer choise
    const compchoise =gencompchoise()
    // console.log("comp choise is ", compchoise)


    if(userchoise=== compchoise)  //draw
    {
        drawgame()
        
    }
    else
        {
        let userwin= true;
        if(userchoise=== "rock")        //copm will choise "rock or scossors"
        {
            userwin =compchoise==="paper" ? false : true;

        }
        else if(userchoise=== "paper")
        {
           userwin= compchoise==="scissors" ? false : true;
        }
        else{
             userwin= compchoise==="rock" ? false : true ;
        }
        
        showwinner(userwin);
    }

}
// user choise
choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        let userchoise= choice.getAttribute("id");
    //    console.log("clicked") 
       palygame(userchoise)
    })
})