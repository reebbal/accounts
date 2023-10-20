window.onload = displayImage;
var imagesArray = ["skull-skull-emoji.gif", "gon.gif", "skull.gif", "skull-berserk-ova.gif", "skull-meme.gif", "skeleton-corpse.gif", "Skeleton Tiktok profile.jpeg", "skoul.jpeg", "Cool Facts About History.jpeg", "FLOW WITH THE VAMP.jpeg", "Dark skeleton aesthetic.jpeg", "2abeef99-e41e-4966-9581-cc53f027d613.jpeg", "dead inside icons.jpeg", "54cab21f-3746-4f0d-aaa3-9579dc41c0f7.jpeg", "e64639e7-2a93-4b34-957d-259fd2f6530d.jpeg", "❏┊ᴀᴇsᴛʜᴇᴛɪᴄ ɪᴄᴏɴs┊´˗.jpeg", "Edit↝.gif"];

function displayImage() {
    var num = Math.floor(Math.random() * (imagesArray.length));
    document.getElementById("main_image1").src = "assets/img/animes/" + imagesArray[num];
}