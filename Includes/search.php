
<?php

  if (isset($_POST['searchBtn'])) {

    $searched = $_POST['searchInpt'];

    if (empty($searched)) {
      header("Location: ../index.php?empty=search");
    }
    else {
      header("Location: ../index.php?search=".$searched."");
    }
  }

?>
