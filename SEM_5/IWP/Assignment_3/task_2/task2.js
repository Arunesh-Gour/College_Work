function validateForm() {
   let form = document.forms["form_1"];
   if (form["name"].value.length < 4) {
      alert("Name must be at least 4 characters long.");
      return false;
   }
   if (!form["email"].value.includes("@") || !form["email"].value.includes("."))
   {
      alert("Invalid email entered.");
      return false;
   }
   if (isNaN(form["number"].value) == true || form["number"].value.length < 1) {
      alert("Required number greater than 1.");
      return false;
   }
   alert("Form validation success!");
}
