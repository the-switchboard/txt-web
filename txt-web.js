//FUNCTIONS

var content = document.body.innerHTML;

function replace_link(link) {
  content = content.replace(new RegExp(link, 'g'), '<a href="' + link.replace("#", "") + '">' + link + '</a>');
}

function replace_image(image){
  image_tag='<img src="'+image.substring(1)+'">';
  image_link='<a href="'+image.substring(1)+'">'+image+'</a>'
  content = content.replace(new RegExp(image, 'g'), image_link+"\n"+image_tag);
}

//LINKS
var re_link = /#.*\.txt\b/g;

//IMAGES
var re_img = /#.*\.(?:jpg|jpeg|jfif|pjpeg|pjp|svg|gif|png|apng|bmp|ico|cur|tiff|tif|webp)/g;

//PROCESS ALL LINKS
var links = content.match(re_link);
console.log(links);
var i;
for (i = 0; i < links.length; i++) {
	var link = links[i];
  replace_link(link);
}

//PROCESS ALL IMAGES
var images = content.match(re_img);
var i;
for (i = 0; i < images.length; i++) {
	var image = images[i];
  replace_image(image);
}

document.body.innerHTML = content;
