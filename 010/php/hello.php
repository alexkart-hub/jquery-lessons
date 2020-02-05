<?php
if(!empty($_POST['mail'])){
echo 'Hello! Your email: '. $_POST['mail'] .' !'; 
} else {
    echo 'You mast send your email!!!';
}