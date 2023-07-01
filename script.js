document.getElementById("cv-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var summary = document.getElementById("summary").value;
  
    // Generate CV content
    var cvContent = "<h2>My CV: </h2>" +
                    "<h3>Name:</h3>" + "<p>" + name + "</p>" +
                    "<h3>Email:</h3>" + "<p>" + email + "</p>" +
                    "<h3>Phone:</h3>" + "<p>" + phone + "</p>" +
                    "<h3>Address:</h3>" + "<p>" + address + "</p>" +
                    "<h3>Summary:</h3>" + "<p>" + summary + "</p>";
  
    // Display generated CV
    document.getElementById("cv-container").innerHTML = cvContent;
  });
  