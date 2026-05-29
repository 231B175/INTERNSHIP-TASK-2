// Form Validation

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    if(name === "" || email === "") {

        message.innerHTML = "Please fill all fields";
        message.style.color = "red";

    }
    else if(!email.includes("@")) {

        message.innerHTML = "Enter valid email";
        message.style.color = "red";

    }
    else {

        message.innerHTML = "Form Submitted Successfully";
        message.style.color = "green";
    }
});


// To-Do List

function addTask() {

    let taskInput = document.getElementById("taskInput");

    let taskText = taskInput.value;

    if(taskText === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = taskText;

    // Remove task on click
    li.onclick = function() {
        li.remove();
    };

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}