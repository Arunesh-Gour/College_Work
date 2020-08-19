window.onload = function() {
   let strobj = "This is a string object";
   let arrobj = ["This", "is", "an", "array", "object"];
   let boolobj = true;
   let dateobj = new Date();
   let mathobj = Math.PI;
   
   document.getElementById("string_obj").innerHTML = strobj;
   document.getElementById("array_obj").innerHTML = arrobj;
   document.getElementById("bool_obj").innerHTML = "Boolean value: " + boolobj;
   document.getElementById("date_obj").innerHTML = "Date: " + dateobj;
   document.getElementById("math_obj").innerHTML = "Math value: " + mathobj;
};
