Package.describe({
  name: 'comerc:watch',
  summary: 'A jQuery watch plugin',
  version: '1.21.0',
  git: 'https://github.com/comerc/meteor-watch.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use('jquery', 'client');
  api.addFiles([
    'watch.js',
  ], 'client');
});
