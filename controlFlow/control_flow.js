let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:",accessLevel);

//declaring variable names

let isLoggedIn = true;
let userMessage;

//nested if statement 
if(isLoggedIn){
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";

}
console.log("User Message:", userMessage);

//defining variables and switc satement 
let userType ="subscriber";
let userCategory;

switch (userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory ="Manager";
        break;
    case "subscriber":
            userCategory ="Subscriber";
            break;
    default:
        userCategory = "unknown";
    
}
