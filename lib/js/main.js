//Set database object
var database = firebase.database().ref();


//button executes this function
function updateDB(){
    var name = $("#name").val();
    var message = $("#message").val();
    console.log(name + " : " + message);

    //Update database here
    var value = {name: name, message: message}
    database.push(value);
}

database.on("child_added", function(rowData){
   console.log(rowData. val());
   var name = rowData.val().name;
   var message= rowData.val().message;

   var html = "<p>" + name + ":" + message + "</p>";
   $(".allMessages").append(html);
}) 
