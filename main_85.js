menu_list_array = [ "Veg Margherita Pizza", "Cheese Pizza", "BBQ Chicken Pizza", "Pepperoni Pizza", "Farm House", "Peppy Paneer", "Jerked Chicken Pizza]
 
function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }

    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion(){
	var item = document.getElementById("pizza_name").value;
    menu_list_array.push()(item);
}

