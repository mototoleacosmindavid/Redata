const path = require('path');

module.exports = {
  src: {
    index:  {
      jsEntry: path.resolve(__dirname, '../main/pages/index/index.js'),
      htmlEntry: path.resolve(__dirname, '../main/pages/index/index.html')
    },
    dashboard: {
      jsEntry: path.resolve(__dirname, '../main/pages/dashboard/dashboard.js'),
      htmlEntry: path.resolve(__dirname, '../main/pages/dashboard/dashboard.html')
    },
    reddit: {
      jsEntry: path.resolve(__dirname, '../main/pages/reddit/reddit.js'),
      htmlEntry: path.resolve(__dirname, '../main/pages/reddit/reddit.html')
    },
    trending: {
      jsEntry: path.resolve(__dirname, '../main/pages/trending/trending.js'),
      htmlEntry: path.resolve(__dirname, '../main/pages/trending/trending.html')
    },
    profile: {
      jsEntry: path.resolve(__dirname, '../main/pages/profile/profile.js'),
      htmlEntry: path.resolve(__dirname, '../main/pages/profile/profile.html')
    },
    graf: {
      jsEntry: path.resolve(__dirname, '../main/pages/graf/graph.js'),
      htmlEntry: path.resolve(__dirname, '../main/pages/graf/test.html')
    }
  },
  build: path.resolve(__dirname, '../build'),
  assets: path.resolve(__dirname, '../assets'),
};
