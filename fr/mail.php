<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $subject = trim($_POST['subject']);
    $message = trim($_POST['message']);

    if ($name == 'name' || $email == 'email' || $phone == 'phone' || $subject == 'subject' || $message == 'message') {
        http_response_code(400);
        echo 'Please fill out all the required fields.';
        exit;
    }

    $to = 'jfenelus@jfenelus.com'; 
    $subject = "$subject";
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Subject: $subject\n";
    $body .= "Message:\n$message";

    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo 'Your message has been sent successfully.';
    } else {
        http_response_code(500);
        echo 'An error occurred while sending your message. Please try again later.';
    }
      // Validate and sanitize the input data
    // ...

    // Send the email
    // ...

    // Redirect back to the contact page with a success message
    header('Location: contact.html?success=true');
    exit;

} else {
    // Redirect back to the contact page with an error message
    header('Location: contact.html?error=true');
    exit;
}
?>