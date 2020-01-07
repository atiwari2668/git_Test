var a  = "true";
var b = "thirsty"
console.log(this is coflict Demo)
if (a) {
    console.log("Eat Samosa");
    console.log("Eat Pizza");
    console.log("Eat Burger")
    console.log("Eat fries")
} else {
    if (b == "thirsty"){
        console.log ("drink water");
        console.log ("drink soda");
    }
    console.log("do your homework");
}
