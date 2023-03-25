<?php
require_once '../../vendor/autoload.php';

use PHPMailer\PHPMailer\SMTP;
use Tiago\Portfolio\php\Message;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

$message = new Message();

$message->__set('name', $_POST['name']);
$message->__set('phone', $_POST['phone']);
$message->__set('email', $_POST['email']);
$message->__set('prefer_contact', $_POST['prefer_contact']);
$message->__set('message', $_POST['message']);


if (!$message->validMessage()) {
    echo 'Mensagem inválida.';

    header('Location: index.php');
}

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 2;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'tiagoeinez@gmail.com';                     //SMTP username
    $mail->Password   = 'kssxgbodcskektfp';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('tl.neitzke@hotmail.com', 'Email from Portfolio.');
    $mail->addAddress($message->__get('email'));     //Add a recipient
    $mail->addAddress($message->__get('email'));               //Name is optional
    $mail->addReplyTo($message->__get('email'), $message->__get('name')); //contato padrão caso o destinatário deseje responder o remetente
    //$mail->addCC('cc@example.com'); //adiciona destinatário de copia
    //$mail->addBCC('bcc@example.com'); //adiciona copia oculta

    //Attachments / anexos
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Email enviado do site Portifólio.';
    $mail->Body    = 'Você recebeu um novo contato no seu site de portifólio <br><br>'.
                        '<strong>Nome: </strong>'. $message->__get('name') . '<br>'.
                        '<strong>E-mail: </strong>'. $message->__get('email') . '<br>'.
                        '<strong>Telefone: </strong>'. $message->__get('phone') . '<br>'.
                        '<strong>Mensagem: </strong>'. $message->__get('message'). '<br>' .
                        '<strong>Prefere contato via: </strong>'. $message->__get('prefer_contact');
    $mail->AltBody = 'É necessário utilizar um client de e-mail que suporte HTML para ter acesso total ao conteúdo deste e-mail';
    
    header('Location: http://localhost:8000/src/php/feedBackMessage.php');

    $mail->send();

} catch (Exception $e) {
    header('Location: http://localhost:8000/src/php/errorSendingMessage.php');
    $mail->ErrorInfo;
}
