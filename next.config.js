/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	eslint: {
		dirs: ['components', 'pages', 'types'],
	},
};

module.exports = nextConfig;
