module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'riot'],
    files: [
      'src/tags/*.tag',
      'tests/*spec.js',
    ],
    exclude: [
    ],
    preprocessors: {
    	'src/tags/*.tag': ['riot']
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
