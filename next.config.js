/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


module.exports = {
    experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] },
    webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true };
        return config;
    }
};