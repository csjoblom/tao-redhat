<?php
add_action( 'admin_menu', 'wsp_add_admin_menu' );
add_action( 'admin_init', 'wsp_settings_init' );
add_option( 'wp_red_caps_key', '');
add_action( 'wp_dashboard_setup', 'register_my_dashboard_widget' );
include('wp_red_caps_menu.php');
function register_my_dashboard_widget() {
	wp_add_dashboard_widget(
		'redcap_dashboard_widget',
		'Redcap Analytics',
		'redcap_dashboard_widget_display'
	);

}
function makeData($sql) {
		global $wpdb;
		$types = $wpdb->get_results($sql);
		$numrows = $wpdb->num_rows;
		$i <= 0;
		echo "[['Total','Type'],";
		foreach ($types as $type) {
		if ($i <= $numrows) {
				echo "['".$type->type."',".$type->num."],";
		} else {
				echo "['".$type->type."',".$type->num."]";
			}
			$i++;
		}
		echo "]";
	}
function reporters($sql) {
		global $wpdb;
		$types = $wpdb->get_results($sql);
		$numrows = $wpdb->num_rows;
		$i <= 0;
		echo "[['Reporter','Total'],";
		foreach ($types as $type) {
		if ($i <= $numrows) {
				echo "['".$type->type."',".$type->num."],";
		} else {
				echo "['".$type->type."',".$type->num."]";
			}
			$i++;
		}
		echo "]";
}
function wsp_add_admin_menu(  ) {

	add_options_page( 'wp_red_caps', 'wp_red_caps', 'manage_options', 'wp_red_caps', 'wp_red_caps_options_page' );

}


function wsp_settings_init(  ) {

	register_setting( 'pluginPage', 'wsp_settings' );

	add_settings_section(
		'wsp_pluginPage_section',
		__( 'Your section description', 'wordpress' ),
		'wsp_settings_section_callback',
		'pluginPage'
	);

}
function redcap_dashboard_widget_display() {
	echo '<style>html {background-color: #fff !important;} #dashboard-widgets .postbox-container, #wpbody-content #dashboard-widgets.columns-4 .postbox-container {width: 100% !important;margin-top: 50px; border: none !important;} #redcap_dashboard_widget {border: none !important;} #redcap_dashboard_widget > h2 {border: none !important;} .metabox-holder .postbox>h3, .metabox-holder .stuffbox>h3, .metabox-holder h2.hndle, .metabox-holder h3.hndle {font-size: 34px !important;}</style>';
	global $wpdb;
	$results = $wpdb->get_var( 'SELECT COUNT(id) AS NUM FROM wp_red_caps_data');
	$totalIssues = $results;
	echo '<h3>Total Incidents: '. $results .'</h3>';
	echo '<hr>';
	$sql = "SELECT COUNT(id) as num, type FROM wp_red_caps_data GROUP BY type;";
	?>
	<div id="piechart" style="width: 790px; height: 500px;float:left;"></div>
	<div id="columnchart_plain" style="width: 790px; height: 500px;float:left;"></div>
	<br style="clear:left;"/>
	<div id="piechart1" style="width: 790px; height: 500px;float:left;"></div>
	<div id="columnchart_plain1" style="width: 790px; height: 500px;float:left;"></div>
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	<script type="text/javascript">
	  google.charts.load('current', {'packages':['corechart']});
	  google.charts.setOnLoadCallback(drawChart);
	  function drawChart() {

		var data = google.visualization.arrayToDataTable(<?php makeData($sql); ?>);

		var options = {
		  title: 'Total Issues',
		  colors: ['#dd1d34','#e03348','#e34a5c','#e76070','#ee8e99','#f1a4ad','#f8d1d6']
		};

		var chart = new google.visualization.PieChart(document.getElementById('piechart'));

		chart.draw(data, options);
	  }
	</script>
	<script type="text/javascript">
		google.charts.setOnLoadCallback(drawChart);
		function drawChart() {
		  var data = google.visualization.arrayToDataTable(<?php makeData($sql); ?>);
		  var options = {
			title: "Total Issues Per Type",
			width: 790,
			height: 500,
			bar: {groupWidth: '95%'},
			legend: { position: 'none' },
		colors: ['#395d76','#ffc03a','#ff533f','#00bdd4','#dd1d34','#74b2a1','#662441','#000080','#039f8f']
		  };
		  var chart = new google.visualization.ColumnChart(document.getElementById('columnchart_plain'));
		  chart.draw(data, options);
	  }
	  </script>
	<?php
	 $sql = "SELECT COUNT(id) as num FROM wp_red_caps_data WHERE police_contacted = 1;";
	 $calls = $wpdb->get_results($sql);
	 $calls = $calls[0];
	 $called = $calls->num;
	 $totalIssues = $totalIssues - $called;
	?>
	<script type="text/javascript">
	  google.charts.setOnLoadCallback(drawChart);
	  function drawChart() {

		var data = google.visualization.arrayToDataTable([['Called','Num'],['No',<?php echo $totalIssues; ?>],['Yes',<?php echo $called; ?>]]);

		var options = {
		  title: 'Police Involvement',
		  colors: ['#3366CC','#dd1d34']
		};

		var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

		chart.draw(data, options);
	  }
	</script>
	<?php
	$sql = "SELECT COUNT(id) as num, reporter_id FROM wp_red_caps_data GROUP BY reporter_id;"
	?>
	<script type="text/javascript">
		google.charts.setOnLoadCallback(drawChart);
		function drawChart() {
		  var data = google.visualization.arrayToDataTable(<?php reporters($sql); ?>);
		  var options = {
			title: "Total Issues Per Reporter",
			width: 790,
			height: 500,
			bar: {groupWidth: '95%'},
			legend: { position: 'none' },
		  };
		  var chart = new google.visualization.ColumnChart(document.getElementById('columnchart_plain1'));
		  chart.draw(data, options);
	  }
	  </script>
	<?php
}
function wp_red_caps_options_page(){

$new_key = $_GET["key_gen"];

	if($new_key == 'y'){
            $length = 5;

//should probably make this a function
            $randystring_one =  substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+!"), 0, $length);
						$randystring_two =  substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+!"), 0, $length);
						$randystring_three =  substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+!"), 0, $length);
						$randystring_four =  substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+!"), 0, $length);
						$randy_api_key = $randystring_one.$randystring_two.$randystring_three.$randystring_four;


update_option( 'wp_red_caps_key', $randy_api_key);

	}
$sql = "SELECT COUNT(id) as num, type FROM wp_red_caps_data GROUP BY type;";
?>
<style>
a.button {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;

    text-decoration: none;
    color: initial;
}
</style>
<?php
echo '<h1>Heart Red Caps</h1>';
$stored_api_key = get_option('wp_red_caps_key');
echo 'Below is the API KEY that allows the mobile application to connect to this WordPress API. Should you need to generate a new key, all mobile applications currently in use would need to be udated.<br><br>
API KEY: '.$stored_api_key.'<br><br><a href="/wp-admin/options-general.php?page=wp_red_caps&key_gen=y" class="button">Create a new API key</a>';
}
?>
