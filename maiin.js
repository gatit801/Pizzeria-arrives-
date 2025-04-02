menu_arrive = ["pizza de peperoni",
                    "pizza de queso",
                    "pizza de champiñon",
                    "pizza de aceitunas",
                    "pizza de alcachofa",]


function getmenu(){
    var html= ""
    
    menu_arrive.sort()                    
    console.log(menu_arrive);       
    for (i = 0; i < menu_arrive.length; i++) {
        console.log(menu_arrive[i]);
        html = html + menu_arrive[i].toLowerCase() + "<br>";  
    }
    document.getElementById("display_menu").innerHTML = html;

}



function add_item(){
    var html;
    var item=document.getElementById("add_item").value;
    
    menu_arrive.sort(); 
    html=""
    for (i = 0; i < menu_arrive.length; i++) {
        console.log(menu_arrive[i]);
        html = html + menu_arrive[i].toUpperCase() + "<br>";  
    }
    document.getElementById("display_addedmenu").innerHTML = html;
    document.getElementById("add_item").value ="";
}

function add_top(){
    var item=document.getElementById("add_item").value;
    
    menu_arrive.push(item); 
    //document.getElementById("display_menu").innerHTML = menu_arrive;
    document.getElementById("add_item").value ="";
    add_item();
}
