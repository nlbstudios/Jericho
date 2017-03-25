<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'jerichobDBcpnhb');

/** MySQL database username */
define('DB_USER', 'jerichobDBcpnhb');

/** MySQL database password */
define('DB_PASSWORD', 'cRO9rcZCzw');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'hDPq+xWxq+6+x;96H2;9aSehsk|1:s[|1RK[JVNoNJVsozZSd~]#w_~[K[_COKhGC');
define('SECURE_AUTH_KEY',  'nrj3v!80RJ>FBYRcNJgYk!@nzr},0<IAMjbPITqm.ib+u*6*+2E6XP{7MIfE7U');
define('LOGGED_IN_KEY',    'X.ifq{.*+2E6XP^73QIUEBYjb$uUqn,<$u^73QD5WPaxtepi_+#+t~51O:]HSKl');
define('NONCE_KEY',        'qxmxt]6;_;#H9L<.AMEfX6TPmyqeXi*+2xq{6;PI5SOlwpdWh~-1wp[_:OG|C8VhZ');
define('AUTH_SALT',        ']2y6I6mbma6;1[5SOlKGdph_-Zws[51!:|G8K#_9LHeD5SOlxtdph_-#-t~51OC4V');
define('SECURE_AUTH_SALT', '3Mmfq{DeDdh_-w:91SK+2;LWPD5HeaxWOpit]#x_~5H9C4RdVwoNkg@[|v!@4G8}|');
define('LOGGED_IN_SALT',   '}kc^Y^o}>}RRvcRo!z},^7{EbQATMjXubPm*y{.q.+LA$>F3Q7MBYrjQjbun^n');
define('NONCE_SALT',       '${E3QLDWPi*texp_+;~t]D5PH;L9WOiE2PibumTqe+;<tm*6]H;#A2LiXVph-s|wl');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);define('FS_METHOD', 'direct');

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
