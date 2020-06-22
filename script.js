$(document).ready(function(){

      var day = Math.ceil(Math.random()*29);
      var month = Math.ceil(Math.random()*11);
      var yearNumber = Math.ceil(Math.random()*9);
      var year = "201"+yearNumber;
      var kanye = true;
      $.ajax({
      url: "https://api.nasa.gov/planetary/apod?api_key=ibf0gWXnCFVXHCKvc6tQ5Bl73ShTQZQFcj62Evrc&date="+year+"-"+month+"-"+day,
      method: "GET",
    }).then(function(response){
      $("body").css("background-size","cover");
      $("body").css("background-image","url("+response.hdurl+")");
    })

    $.ajax({
      url: "https://api.kanye.rest",
      method: "GET",
    }).then(function(response){
      var responseText = response.quote;
      var lastChar = responseText[responseText.length-1];
      if(lastChar!=="."){
        responseText += ".";
      }
      $(".quoteText").html("<q>"+responseText+"</q>"+"<br>"+"- Kanye West");
    })

    /*
    $(document).on("dblclick",function(){
      var newButton = document.createElement("button");
      documentArray = [".secretButton1",".secretButton2",".secretButton3"];
      var randomNumber = Math.floor(Math.random()*documentArray.length);
      $(newButton).addClass("btn btn-dark hiddenButton");
      $(newButton).text("Secret Button");
      $(documentArray[randomNumber]).append(newButton);
      setTimeout(hideText,1200);
    })

    function hideText(){
      $(".hiddenButton").css("display","none");
    }
    */
});