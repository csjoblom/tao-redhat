<?php
function getTypes() {
	global $wpdb;
	$sql = "SELECT COUNT(id) as num, type FROM wp_red_caps_data GROUP BY id;";
	$results = $wpdb->get_results($sql);
	RETURN $results;
}
function getPolice() {
	global $wpdb;
	$sql = "SELECT COUNT(id) as num, type FROM wp_red_caps_data GROUP BY police_contacted;";
	$results = $wpdb->get_results($sql);
	RETURN $results;
}
function getBusiness() {
	global $wpdb;
	$sql = "SELECT COUNT(id) as num, type FROM wp_red_caps_data GROUP BY business_name;";
	$results = $wpdb->get_results($sql);
	RETURN $results;
}
function getReporter() {
	global $wpdb;
	$sql = "SELECT COUNT(id) as num, type FROM wp_red_caps_data GROUP BY reporter_id;";
	$results = $wpdb->get_results($sql);
	RETURN $results;
}
add_shortcode('types','getTypes');
add_shortcode('police','getPolice');
add_shortcode('business','getBusiness');
add_shortcode('reporter','getReporter');
?>
