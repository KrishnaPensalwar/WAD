// $(document).ready(function () {
  // getData();

  document.getElementById("btnAddStudent").click(function () {
    //collect student data from student form
    function getStudentData() {
      
      let student = {
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        email: $("#email").val(),
        contactNo: $("#contactNo").val(),
        branch: $("#sub").find(":selected").text(),
        rollno: $("#rollno").val(),
        };
      $("#studentForm")[0].reset();
      return student;
    }

    //store student data to localStorage
    function storeDataToLocalStorage() {
      if (!localStorage.getItem("student")) {
        localStorage.setItem("student", JSON.stringify(getStudentData()));
      } else {
        localStorage.removeItem("student");
        localStorage.setItem("student", JSON.stringify(getStudentData()));
      }
    }

    //send data to server with AJAX request
    function sendData() {
      let xhr = new XMLHttpRequest();
      let data = JSON.stringify(getStudentData());
      xhr.open("POST", "http://localhost:4000/storedata",true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(data);
    }

    //call storeDataToLocalStorage and sendData functions
    storeDataToLocalStorage();
    // sendData();
      window.location.href="display-data.html"

      console.log("CLICKED")
  });
// });


$(document).ready(function () {
  getData();
});

function getData() {
  let localStorageData = localStorage.getItem("student");
  let studentObj = JSON.parse(localStorageData);
  console.log(studentObj);
  $("#rollno").text(studentObj.rollno);
  $("#firstName").text(studentObj.firstName);
  $("#lastName").text(studentObj.lastName);
  $("#email").text(studentObj.email);
  $("#contactNo").text(studentObj.contactNo);
  $("#branch").text(studentObj.branch);
  
}


function gotomainpage(){
  window.location.href="home.html"
}


