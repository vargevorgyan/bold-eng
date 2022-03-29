/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/",
				destination: "/scholarship",
				permanent: true
			}
		]
	}
}

module.exports = nextConfig
