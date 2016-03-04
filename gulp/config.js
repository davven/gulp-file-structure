var dist = "./public";
var tmp = "./.tmp";
var src = './src';


var bower = {
    src: './bower_components',
    dest: dist + '/bower_components/',
    js: dist + '/js/bower_components/',
    css: dist + '/css/bower_components/',
    bowerrc: './.bowerrc',
    bowerJson: './bower.json'
}

module.exports = {

    app: {
        src: src,
        tmp: tmp,
        dest: dist,
        bower: bower,
        uglify: {
            mangle: false,
            compress: true
        }
    },
    
    sass: {
        src: [src + "/scss/**/*.{sass,scss}", bower.src + '/font-awesome/scss/*.{sass,scss}' ],
        dest: dist + '/css/',
        settings: {
            outputStyle: 'nested', // 'compressed'
            sourceComments : false, //'map',
            imagePath: 'images' // Used by the image-url helper
        }
    },
    scripts: {
        src: [src + "/js/**/*.js", '!' + src + "/js/vendor/**/*.js"],
        dest: dist + '/js/',
        uglify: {
            mangle: false,
            compress: true
        }
    }
};
