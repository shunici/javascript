var w = new Window ("dialog");

w.alignChildren = "left";

var radio1 = w.add ("radiobutton", undefined, "Option A");

radio1.value = true;

var radio2 = w.add ("radiobutton", undefined, "Option B");

radio2.onClick = function (){

    alert ("hello world!")

    }

w.show();
