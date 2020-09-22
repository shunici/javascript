var w = new Window ("dialog");

w.alignChildren = "left";

var radio1 = w.add ("radiobutton", undefined, "Option A");

radio1.value = true;

var radio2 = w.add ("radiobutton", undefined, "Option B");

radio2.onClick = function (){

    alert ("hello world!")

    }

w.show();


/// versi kedua

var w = new Window ("dialog");
w.alignChildren = "left";
var myButtonGroup = w.add ("group");
myButtonGroup.orientation = "column";
myButtonGroup.alignment = "left";
var radio1 = myButtonGroup.add ("radiobutton", undefined, "Radio Button 1");
var radio2 = myButtonGroup.add ("radiobutton", undefined, "Radio Button 2");
myButtonGroup.add ("button", undefined, "OK");
myButtonGroup.add ("button", undefined, "Cancel");
radio1.value = true;
w.center(); 
// w.show ();

if (w.show() == 1)
{
    alert("You picked " + youSelected(myButtonGroup))
}

function youSelected(rButtons)
{
    if (radio1.value == true)
    // radio1 selected
    return radio1.text
    else
    // radio2 selected
    return radio2.text
}
