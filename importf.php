$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
if(isset($_POST['import'])) {
  if($imageFileType == 'png') {
    $uploadOk = 1;
  } else {
    $uploadOk = 0;
    echo 'no';
  }
}
