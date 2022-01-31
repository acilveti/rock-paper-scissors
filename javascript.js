function computerPlay (){
    console.log("computerPlay")
    const computer_options = ["rock", "scissors", "paper"];
    const computer_selection = computer_options[Math.floor(Math.random() * computer_options.length)];
    console.log(computer_selection);
}