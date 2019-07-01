module.exports = function karmaConfig(config) {
  config.set({
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
    browsers: ['Chrome'],
    coverageReporter: {
      reporters: [
        {
          type: 'html',
          subdir: 'html',
        },
        {
          type: 'text',
        },
        {
          type: 'lcovonly',
          subdir: '.',
        },
      ],
    },
    files: [
      'tests/**/*.spec.js',
    ],
    frameworks: [
      'jasmine',
      'browserify',
    ],
    preprocessors: {
      'tests/**/*.spec.js': ['browserify']
    },
    reporters: ['progress'],
    browserify: {
      debug: true,
      transform: []
    },
  });
};
