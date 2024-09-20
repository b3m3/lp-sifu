<?php
  header('Content-Type: application/json');

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'PHPMailer/src/Exception.php';
  require 'PHPMailer/src/PHPMailer.php';
  require 'PHPMailer/src/SMTP.php';

  $response = ['status' => 'error', 'message' => 'Something went wrong!'];

  try {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'your_email@gmail.com'; // EMAIL
    $mail->Password = 'your_password'; // PASSWORD
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'PHPMailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom($_POST['email'], $_POST['name']);
    $mail->addAddress('your_email@example.com'); // SEND >>>>> EMAIL
    $mail->Subject = $_POST['subject'];

    // BODY
    $body = '<h1>New message</h1>';
    $body .= '<p><strong>Name:</strong> ' . $_POST['name'] . '</p>';
    $body .= '<p><strong>Email:</strong> ' . $_POST['email'] . '</p>';
    $body .= '<p><strong>Phone:</strong> ' . $_POST['tel'] . '</p>';
    $body .= '<p><strong>Message:</strong> ' . $_POST['message'] . '</p>';

    if (!empty($_FILES['file']['tmp_name'])) {
      $filePath = $_FILES['file']['tmp_name'];
      $fileName = $_FILES['file']['name'];
      $mail->addAttachment($filePath, $fileName);
    }

    $mail->Body = $body;

    if ($mail->send()) {
      $response = ['status' => 'success', 'message' => 'Message sent successfully!'];
    } else {
      $response = ['status' => 'error', 'message' => 'Mailer Error: ' . $mail->ErrorInfo];
    }
  } catch (Exception $e) {
    $response = ['status' => 'error', 'message' => 'Error: ' . $mail->ErrorInfo];
  }

  echo json_encode($response);
?>
