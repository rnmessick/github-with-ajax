/*
##JavaScript Tasks
Listen for button click/form submit X
Capture username data X
Create URL X
Make an Ajax request
Give Ajax request a callback function

###Inside the callback function
Parsing the response from GitHub and creating some DOM elements (h2, ul, li) with the data.
Add created elements to repo-info
*/

$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();

    var username = $("#username").val()
    var url = `https://api.github.com/users/${username}/repos`
    console.log(url)



  })
})
