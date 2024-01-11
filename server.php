<?php

$database = file_get_contents(__DIR__ . '/dischi.json');


$discs = json_decode($database);

header('Content-Type: application/json');
echo json_encode($discs);
