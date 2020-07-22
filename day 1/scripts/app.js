//set on click event function
function createTodo() {
    var txt = $("#txtTodo").val(); //get the text of the input field
    console.log(txt);

    //create li to display to do items
    var li = '<li>' + txt + '</li>';
    console.log("syntax", li);

    $("#list").append(li);
    $("#txtTodo").val(''); //clear the text field after clicking the add button
    $("#txtTodo").focus(); //sets focus back to text field after clicking the add button
}

function init() {
    console.log("Page is ready!");
    //try to manipulate DOM elements
    //window.onload will render all the HTML regardless of where the source is placed in the HTML file before javascript is applied to elements

    //init is used to set up events and fetch initial data

    //jquery
    $("#btnAdd").click(createTodo);

    $("#txtTodo").keypress(function(args){
        if(args.key == "Enter"){
            console.log("Enter button was pressed!");
            createTodo();
        }
    });

}






//onload gets called when the browser has finished rendering the HTML
//pass a function name to it
window.onload = init;