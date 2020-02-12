var song
var artist
var length
var image
var link
var add
let playlist = [song, artist,length,image,link,add]
let song = ['swept up','kings bread','sunflower','Over now','last suprise'];
song.forEach(function(data) {
    $(#songs).append("<li>"+data+"</li>")
let artist = ['young cash resgister aka lilbroomstick','young cash register aka lil broomstick baku bank bill','Post malone Swae Lee ','Post malone','Lyn Inaizumi'];
artist.forEach(function(data) {
    $(#artist).append("<li>"+data+"</li>")
let length = ['2:05','2:00','4:02','4:36','3:36'];
length.forEach(function(data) {
    $(#length).append("<li>"+data+"</li>")
let image  = [];
image.forEach(function(data) {
    $(#image).append("<li>"+data+"</li>")
let link = [];
link.forEach(function(data) {
    $(#link).append("<li>"+data+"</li>")
let add = [];
add.forEach(function(data) {
    $(#add).append("<li>"+data+"</li>")                 
});
