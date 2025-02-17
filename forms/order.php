<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/*if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form values
    $service = htmlspecialchars($_POST['services']);
    $package = htmlspecialchars($_POST['packages']);
    $name = htmlspecialchars($_POST['name']);
    $surname = htmlspecialchars($_POST['surname']);
    $email = htmlspecialchars($_POST['email']);
    $company = htmlspecialchars($_POST['company']);
    $contact = htmlspecialchars($_POST['contact']);
    
    // Additional Services (checked or not)
    $add_blogs1 = isset($_POST['add_blogs1']) ? 'Yes' : 'No';
    $add_blogs2 = isset($_POST['add_blogs2']) ? 'Yes' : 'No';
    $add_blogs3 = isset($_POST['add_blogs3']) ? 'Yes' : 'No';
    $appoint = isset($_POST['appoint']) ? 'Yes' : 'No';
    $add_books1 = isset($_POST['add_books1']) ? 'Yes' : 'No';
    $add_books2 = isset($_POST['add_books2']) ? 'Yes' : 'No';
    $add_books3 = isset($_POST['add_books3']) ? 'Yes' : 'No';
    $virtual = isset($_POST['virtual']) ? 'Yes' : 'No';

    // Email content
    $to = "premierjessie99@gmail.com";
    $subject = "New Order Submission";
    $message = "
    <html>
    <head>
      <title>New Order Submission</title>
    </head>
    <body>
      <h2>Order Details:</h2>
      <p><strong>Service:</strong> $service</p>
      <p><strong>Package:</strong> $package</p>
      <p><strong>Name:</strong> $name</p>
      <p><strong>Surname:</strong> $surname</p>
      <p><strong>Email:</strong> $email</p>
      <p><strong>Company:</strong> $company</p>
      <p><strong>Contact:</strong> $contact</p>
      
      <h3>Additional Services:</h3>
      <p><strong>Additional Blogposts:</strong> 1 - $add_blogs1, 2 - $add_blogs2, 3 - $add_blogs3</p>
      <p><strong>Appointment Scheduling System:</strong> $appoint</p>
      <p><strong>E-Books:</strong> 1 - $add_books1, 2 - $add_books2, 3 - $add_books3</p>
      <p><strong>Virtual Consultation System:</strong> $virtual</p>
    </body>
    </html>";

    // Headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$email>" . "\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your order. We will contact you soon.";
    } else {
        echo "There was an error submitting your order. Please try again.";
    }
} else {
    echo 'The if operator is not working at all!';
}*/

if(mail("premierjessie99@gmail.com", "Testing", "One 2 test broe")) {
    echo "Message sent to premier";
}else {
    echo "Error sending the message";
};
echo 'hi!';
?>
