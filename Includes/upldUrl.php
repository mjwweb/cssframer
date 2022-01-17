
<?php

require "dbh.inc.php";

  $searched = $_POST['upldUrl'];

  $sql = "INSERT INTO test (getSrch) VALUES (?);";
  $stmt = mysqli_stmt_init($conn);
  if (!mysqli_stmt_prepare($stmt, $sql)) {
    header("Location: ../index.php?error=sql_upldUrl");
  }
  else {
    mysqli_stmt_bind_param($stmt, "s", $searched);
    mysqli_stmt_execute($stmt);
    header("Location: ../index.php?upld=success");
  }
