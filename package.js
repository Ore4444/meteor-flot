Package.describe({
    summary: "flot is a library for jQuery, with a focus on simple usage, attractive looks and interactive features"
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files(['lib/jquery.colorhelpers.js', 'lib/jquery.flot.js', 'lib/jquery.flot.image.js', 'lib/jquery.flot.stack.js', 'lib/jquery.flot.canvas.js', 'lib/jquery.flot.symbol.js', 'lib/jquery.flot.categories.js', 'lib/jquery.flot.navigate.js', 'lib/jquery.flot.threshold.js', 'lib/jquery.flot.crosshair.js', 'lib/jquery.flot.pie.js', 'lib/jquery.flot.time.js', 'lib/jquery.flot.errorbars.js', 'lib/jquery.flot.resize.js', 'lib/jquery.flot.fillbetween.js', 'lib/jquery.flot.selection.js'], 'client');
});

Package.on_test(function (api) {
    api.use(['flot', 'tinytest', 'test-helpers'], ['client', 'server']);
    api.add_files('/tests/_tests.js', ['client', 'server']);
});