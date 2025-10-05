const nextConfig = {
  // Solo usar export cuando se especifique BUILD_STATIC=true
  ...(process.env.BUILD_STATIC === 'true' && { output: 'export' }),
  images: { 
    unoptimized: true 
  },
  trailingSlash: true
};

module.exports = nextConfig;
