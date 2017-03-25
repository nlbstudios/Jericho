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
define('DB_NAME', 'jhblogDBwqzqz');

/** MySQL database username */
define('DB_USER', 'jhblogDBwqzqz');

/** MySQL database password */
define('DB_PASSWORD', 'FkNQ0ILwzZ');

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
define('AUTH_KEY',         'R0cgn7BUv@0Y>}Fjn^BUc$7YruEIQ^,Ubf7Aqu$TX<{bfm6ATy+;Piq]EHx+.TX');
define('SECURE_AUTH_KEY',  'KW1hGZ8oO@dGKz!|Jdk|}Gko!FJR!>}ckovFNRv>}Rkr}4Nrv@NUYg07Bgz@BUc$,');
define('LOGGED_IN_KEY',    'AL#9*P;eDtSl9px-_Sad_5Ddl~DGO~#[1hps1KSs-:RVd:58Gk~|GOh|[1gos-KRV');
define('NONCE_KEY',        'ma6mH#W5P;eLlt#KOh#]1hptDKOW#:1Wpw19Sw-:SVd:58Gw~!RZd!4Cdk@CGN@![');
define('AUTH_SALT',        'WdC4N}cCsRVc}48cv@7FY@^>Yck3BFN@,>Mgn>JnrzIQUc{37bj$BEM$,>Unu7');
define('SECURE_AUTH_SALT', 'w~Z[oKhCwR!g8Rvz}RVc}48Fvz!RVc}48cv@7FYz^4Ycv37Fv@^QYcj3BFj$,FYf^');
define('LOGGED_IN_SALT',   'z,fBU3jIyX<nq,IMT.{7muy6PXy*3Tbu26Eu+*<Xei2AIi+.ELe.<;eiqAHLT.];');
define('NONCE_SALT',       'L{mL<X6mL+x]p]DKlt#KOW#:19pw-KSW-:5Vdw58Gw~![Zdl4CKk@|GNh|[CgksCJ');

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
