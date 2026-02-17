/**
 * Well-known paths and security scanning target slugs
 *
 * Paths constantly probed by bots and vulnerability scanners,
 * including CMS admin panels, well-known URIs, and common
 * attack surfaces. Reserving these reduces noise and risk.
 */
export const wellKnownPathsSlugs = [
	'admin-ajax',
	'adminer',
	'apple-app-site-association',
	'assetlinks',
	'cpanel',
	'crossdomain',
	'drupal',
	'elmah',
	'env',
	'filemanager',
	'installer',
	'joomla',
	'magento',
	'manager',
	'myadmin',
	'phpinfo',
	'plesk',
	'setup-config',
	'sql',
	'webmin',
	'well-known',
	'wordpress',
	'wp',
	'wp-admin',
	'wp-content',
	'wp-includes',
	'wp-json',
	'wp-login',
	'xmlrpc'
] as const
