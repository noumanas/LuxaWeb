// next.config.js
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: {
    // Specify the directory where the static files will be exported
    // Change 'out' to the directory of your choice
    // For example, if you want to export to a 'public' directory:
    // directory: 'public'
    directory: 'public',
  },
  // Add this function to define custom routes
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/services': { page: '/services' },
      '/leef-certification-management-software':{
        page:'/leef-certification-management-software'
      },
      '/emission-management-and-reporting-software':{
        page:'/emission-management-and-reporting-software'
      },
      ' /data-analytics-insights':{
        page:' /data-analytics-insights'
      },
      '/resources': { page: '/resources' },
      '/architecture': { page: '/architecture' },

      '/construction': { page: '/construction' },

      '/engineering': { page: '/engineering' },
      '/retrofit-and-renovation': { page: '/retrofit-and-renovation' },
      '/company': { page: '/company' },


     

      // Add other routes here
    };
  },
};

module.exports = nextConfig;

  