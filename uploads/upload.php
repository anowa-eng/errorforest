if (isset($_POST["import_editor"])) {
  echo file_get_contents($_GET["import_editor"])
}
