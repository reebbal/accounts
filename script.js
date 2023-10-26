var OwnerId = " 946148998329278474"
$.ajax({
  url: "api.lanyard.rest/v1/users/946148998329278474,
  type: "GET",
  success: function(res) {
    var data = res.data;
    var user_data = data.discord_user;
    var avatar_img = "https://cdn.discordapp.com/attachments/983498280820432967/1165169494625353788/images_3.jpg?ex=6545dfa7&is=65336aa7&hm=ed579265393b117f2f08ba41c997cb775229b1d4e060ddc6a628ba9b43984ded& "/" + user_data.avatar + ".gif?size=2048"
    $(".avatar-img").attr("src", avatar_img)
    $(".discord-status").removeAttr("style")
    $(".discord-status").attr("class", $(".discord-status").attr("class") + " " + data.discord_status)
    $(".owner-name").text("(" + user_data.username + ")")
  }
});

function connectToLink(url) {
  location.href = url;
};

function copyText(txt) {
  navigator.clipboard.writeText(txt);
  showMessage("hello budd");
};

function showMessage(txt) {
  frame = $(".message-frame");
  old_class = "message-frame ui message-hide";
  frame.text(txt);
  frame.attr("class", "message-frame ui message-show");
  setTimeout(function() {
    frame.attr("class", old_class);
  }, 1000);
};

function sendDiscord(message) {
  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1020973331052232734/UxeMQc49FLsnwisIivLHZMkJkYYZu5wpyFIY4oFTvsHIWMnfWHes8FqP5-weuWI5NOoX");
};
