/**
 * Health check and monitoring slugs
 *
 * Endpoints used by load balancers, uptime monitors, orchestrators,
 * and observability tools to check application health and metrics.
 */
export const healthMonitoringSlugs = [
	'health',
	'health-check',
	'healthcheck',
	'heartbeat',
	'liveness',
	'metrics',
	'ping',
	'readiness',
	'stat',
	'stats',
	'status',
	'uptime'
] as const
