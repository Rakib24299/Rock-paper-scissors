let user=0;
let computer=0;



const choices=document.querySelectorAll(".choice");

const gencompchoise=()=>{
    let options=["rock","paper","scissors"];  
    const rndmindex=Math.floor(Math.random() * 3)    // for option index choise[0,1,2]
    return options[rndmindex ] ;        
}

const palygame=(userchoise)=>{
    console.log(" user choise is ", userchoise);

    // conputer choise
    const compchoise =gencompchoise()
    console.log("comp choise is ", compchoise)


    if(userchoise=== compchoise)  //draw
    {
        
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