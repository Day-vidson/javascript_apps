//For pink background and red text
console.error("Hello World");  

//For yellow background and brown text
console.warn("Hello World");  

//For just a INFO symbol at the beginning of the text
console.info("Hello World");  

//for custom colored text
console.log('%cHello World','color:blue');
//here blue could be replaced by any color code

//for custom colored text with custom background text
console.log('%cHello World','background:red;color:#fff')

//////////////////////////////////////////////////////////////////////

function colorLog(message, color) {

    color = color || "black";

    switch (color) {
        case "success":  
             color = "Green"; 
             break;
        case "info":     
                color = "DodgerBlue";  
             break;
        case "error":   
             color = "Red";     
             break;
        case "warning":  
             color = "Orange";   
             break;
        default: 
             color = color;
    }

    console.log("%c" + message, "color:" + color);
}