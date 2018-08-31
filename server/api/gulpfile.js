var gulp = require('gulp');
var yaml = require('js-yaml');
var fs   = require('fs');
 
gulp.task("swagger", function(){
    try {
        var doc = yaml.safeLoad(fs.readFileSync('./api/swagger/swagger.yaml'));
        fs.writeFileSync(
            './public/doc/swagger.json',
            JSON.stringify(doc, null, '')
        )
      } catch (e) {
        console.log(e);
      } 
});
