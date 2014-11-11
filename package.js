Package.describe({
  name: 'andruschka:bootstrap-superhero',
  summary: 'Bootstrap with superhero theme.',
  version: '1.0.0',
  git: 'https://github.com/andruschka/meteor-bootstrap-superhero.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
	api.use('mizzao:bootstrap-3@3.3.0');
  api.addFiles('superhero.css', 'client');
});