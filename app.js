$('#colorize').click(function(){

var sourceImage = $('#my-awesome-dropzone').val();

var colorThief = new ColorThief();
colorThief.getPalette(sourceImage, 9);

});


