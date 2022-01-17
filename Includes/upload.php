
<?php 
	
	$url = $_POST['source'];

	$mask = '<div class="sjx-wrapper">';
	$url = str_replace($mask,'',$url);
	$url = substr($url,0,strlen($url)-6);
	echo $url;

?>