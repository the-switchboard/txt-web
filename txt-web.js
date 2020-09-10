//FUNCTIONS

function replace_link(link) {
  document.body.innerHTML = document.body.innerHTML.replace(link, '<a href="' + link.replace("#", "") + '">' + link + '</a>');
}

function replace_image(image){
  image_tag='<img src="'+image.substring(1)+'">';
  image_link='<a href="'+image.substring(1)+'">'+image+'</a>'
  document.body.innerHTML = document.body.innerHTML.replace(image, image_link+"\n"+image_tag);
}

var content = document.body.textContent;

//LINKS
var re_link = /#.*?\.txt/g;

//IMAGES
var re_img = /#.*?\.(?:jpg|jpeg|jfif|pjpeg|pjp|svg|gif|png|apng|bmp|ico|cur|tiff|tif|webp)/g;

//PROCESS ALL LINKS
var links = content.match(re_link);
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
