<?php 
	
	$filename = $_GET["file"];

	$json = file_get_contents($filename.".json");

	echo $json;

?>