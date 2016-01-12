$(document).ready(function() {

//document.getElementById("verification-btn").addEventListener("click", displayModal);
$("verification-btn").on("click", displayModal);
function displayModal() {
    //document.getElementById("#verification-btn").innerHTML = displayModal();
  $('#verification-btn').modal('show');
}
 
})

$(document).ready(function(){
  $('#verification-btn').on('click', function () {
      $('#verification-btn').modal('show');
  })



});