<?php
    if (isset($_POST['product_id']) && isset($_POST['username'])
        && isset($_POST['rating']) && isset($_POST['comment']))
    {
        $product_id = $_POST['product_id'];
        $username = $_POST['username'];
        $rating = $_POST['rating'];
        $comment = $_POST['comment'];

        include 'config.php';
        $conn_string = getStringConn();

        $conn = pg_connect($conn_string);


        $query = "INSERT INTO comments (product_id, username, rating, comment) VALUES ($product_id, '$username', $rating, '$comment')";

        $result = pg_query($conn, $query);
        pg_close($conn);
        if ($result)
            header("Location: product.php?id=$product_id");
    }
?>