$(function () {
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 150,
    itemMargin: 5,
    asNavFor: '#slider'
  });
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});
$(function () {
  $('#carousel2').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 150,
    itemMargin: 5,
    asNavFor: '#slider2'
  });
  $('#slider2').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel2"
  });
});

// modal
$('#exampleModal').on('show.bs.modal', function (event) {
  var target = $(event.relatedTarget) // Button that triggered the modal
  console.log(target.data)
  var location = target.data('location') // Extract info from data-* attributes
  var imageSource = target.data('image')
  var caption = target.data('caption')
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text(location)
  // modal.find('.modal-image').src(imageSource)
  document.getElementById("modal-image").src = imageSource;
  // modal.find('.modal-body input').val(recipient)
  modal.find('.modal-caption').text(caption)
})

// Enabling the "hover over pin to show image" feature was causing the modal code to not find the target pin and data correctly
// jQuery('.pin').hover(function () {
//   jQuery('#exampleModal').modal({
//       show: true
//   });
// });