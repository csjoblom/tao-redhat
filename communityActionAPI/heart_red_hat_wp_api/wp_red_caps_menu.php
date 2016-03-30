<?php
	/**
	 * Register a custom menu page.
	 */
	function redcap_menu() {
		add_menu_page(
			__( 'Redcaps', 'textdomain' ),
			'Redcap Administration',
			'manage_options',
			'heart_red_hat_wp_api/wp_red_caps_admin.php',
			'',
			'',
			6
		);
	}
	add_action( 'admin_menu', 'redcap_menu' );
?>
