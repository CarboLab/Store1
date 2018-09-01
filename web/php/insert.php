<?php
$connection = mysqli_connect('localhost', 'millbelu_store1', 'admin', 'millbelu_subscribe');
if ($_POST['email']) {
    $email = $_POST['email'];

    $q = "INSERT INTO subscribe (email) VALUES ('$email')";

    $query = mysqli_query($connection, $q);

    if ($query) {
        echo json_encode("Data Inserted Successfully");
    } else {
        echo json_encode('problem');
    }
}
?>