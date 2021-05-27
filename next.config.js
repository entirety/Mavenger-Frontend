// Import dependencies
const withPlugin = require('next-compose-plugins');
const bundleAnalyzer = require('@next/bundle-analyzer');

// Create config
const config = {};

// Export next.js config
module.exports = withPlugin(([[bundleAnalyzer({ enabled : process.env.ANALYZE === 'true' })]]), config);
