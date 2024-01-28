let todo = [];

let req = prompt("please enter your request");

while(true) {
    
    switch(req) {
        
        case "quite":
            console.log("Quitting app");
            exit();
            break;

        case "list":
            console.log("----------------");
            for(tast of todo) {
                console.log(task);
            }
            console.log("----------------");
            req = prompt("please enter your request");
            break;
            
        case "add":
            let task = prompt("Enter task do you want to add")
            todo.push(task);
            console.log("Task add");
            req = prompt("please enter your request");
            break;
            
        // case "delete":
        //     console.log("Quitting app");
        //     break;

        
    }
}