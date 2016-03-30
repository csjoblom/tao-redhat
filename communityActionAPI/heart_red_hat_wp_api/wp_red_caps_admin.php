<?php
	if(!empty($_POST)) {
		$url = $_SERVER["REQUEST_URI"];
		global $wpdb;
		$id = $_POST['id'];
		$issue_id = $_POST['issue_id'];
		$reporter_id = $_POST['reporter_id'];
		$date = $_POST['date'];
		$report_time = $_POST['report_time'];
		$lat = $_POST['lat'];
		$lng = $_POST['lng'];
		$type = $_POST['type'];
		$impact = $_POST['impace'];
		$business_name = $_POST['business_name'];
		$notes = $_POST['notes'];
		$images = $_POST['images'];
		$police_contacted = $_POST['police_contacted'];
		$sql = "UPDATE `wp`.`wp_red_caps_data` SET `issue_id` = '$issue_id', `reporter_id` = '$reporter_id', `date` = '$date', `report_time` = '$report_time', `lat` = '$lat', `lng` = '$lng', `type` = '$type', `impact` = '$impact', `business_name` = '$business_name', `notes` = '$notes', `images` = '$images', `police_contacted` = '$police_contacted' WHERE `wp_red_caps_data`.`id` = $id;";
		$results = $wpdb->get_results($sql);
		?>
		<script>
			window.location = "<?php echo $url; ?>";
		</script>
		<?php
	} elseif(isset($_GET['edit'])) {
		$edit = $_GET['edit'];
		if($edit = "true") {
			$id = $_GET['id'];
			global $wpdb;
			$post = bloginfo('url');
			$post .= "/wp-content/plugins/heart_red_hat_wp_api/wp_red_caps_admin.php";
			$sql = "SELECT * FROM `wp_red_caps_data` WHERE id = $id";
			$results = $wpdb->get_results($sql);
			?>
			<form method="post" action="admin.php?page=heart_red_hat_wp_api%2Fwp_red_caps_admin.php">
				<table>
					<?php
					foreach($results as $result) {
						$id = $result->id;
						$issue_id = $result->issue_id;
						$reporter_id = $result->reporter_id;
						$date = $result->date;
						$report_time = $result->report_time;
						$lat = $result->lat;
						$lng = $result->lng;
						$type = $result->type;
						$impact = $result->impact;
						$business_name = $result->business_name;
						$notes = $result->notes;
						$images = $result->images;
						$police_contacted = $result->police_contacted;
						echo "<tr><td>ID: <input type='text' name='id' value='$id'/></td></tr>";
						echo "<tr><td>Issue ID: <input type='text' name='issue_id' value='$issue_id'/></td></tr>";
						echo "<tr><td>Reporter ID: <input type='text' name='reporter_id' value='$reporter_id'/></td></tr>";
						echo "<tr><td>Date: <input type='text' name='date' value='$date'/></td></tr>";
						echo "<tr><td>Report Time: <input type='text' name='report_time' value='$report_time'/></td></tr>";
						echo "<tr><td>Lat: <input type='text' name='lat' value='$lat'/></td></tr>";
						echo "<tr><td>Long: <input type='text' name='lng' value='$lng'/></td></tr>";
						echo "<tr><td>Type: <input type='text' name='type' value='$type'/></td></tr>";
						echo "<tr><td>Impact: <input type='text' name='impact' value='$impact'/></td></tr>";
						echo "<tr><td>Business Name: <input type='text' name='business_name' value='$business_name'/></td></tr>";
						echo "<tr><td>Notes: <input type='text' name='notes' value='$notes'/></td></tr>";
						echo "<tr><td>Images: <input type='text' name='images' value='$images'/></td></tr>";
						echo "<tr><td>Police Contacted: <input type='text' name='police_contacted' value='$police_contacted'/></td></tr>";
						echo "<tr><td><input type='submit' value='Submit'/></td></tr>";
					}
					?>
				</table>
			</form>
			<?php
		}
	} else {
?>
<?php
	$sql = "SELECT * FROM `wp_red_caps_data` ORDER BY id DESC LIMIT 25;";
	global $wpdb;
	$results = $wpdb->get_results($sql);	
?>
	<table>
		<tr class="header">
			<td>ID</td>
			<td>Issue ID</td>
			<td>Reporter ID</td>
			<td>Date</td>
			<td>Report Time</td>
			<td>Lat</td>
			<td>Long</td>
			<td>Type</td>
			<td>Impact</td>
			<td>Business Name</td>
			<td>Notes</td>
			<td>Images</td>
			<td>Police Contacted</td>
			<td>Edit</td>
		</tr>
		<?php
			$pageURL = $_SERVER["REQUEST_URI"];
			foreach($results as $result) {
				$id = $result->id;
				$issue_id = $result->issue_id;
				$reporter_id = $result->reporter_id;
				$date = $result->date;
				$report_time = $result->report_time;
				$lat = $result->lat;
				$lng = $result->lng;
				$type = $result->type;
				$impact = $result->impact;
				$business_name = $result->business_name;
				$notes = $result->notes;
				$images = $result->images;
				$police_contacted = $result->police_contacted;
				echo "<tr class='$type'>";
				echo "<td>$id</td>";
				echo "<td>$issue_id</td>";
				echo "<td>$reporter_id</td>";
				echo "<td>$date</td>";
				echo "<td>$report_time</td>";
				echo "<td>$lat</td>";
				echo "<td>$lng</td>";
				echo "<td>$type</td>";
				echo "<td>$impact</td>";
				echo "<td>$business_name</td>";
				echo "<td>$notes</td>";
				echo "<td>$images</td>";
				echo "<td>$police_contacted</td>";
				echo "<td><a href='$pageURL&edit=true&id=$id'>Edit</a></td>";
				echo "</tr>";
			}
		?>
	</table>
<?php
	}
?>
