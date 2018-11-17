//this will start animation on visiblity of three subsection
$(document).ready(
     ()=>{

let user_see_the_section_first_time=false;
let $animation_elements = $('.pbcontainer');
let $window = $(window);
//console.log($animation_elements.length+"debubgging")
function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
    let count=0;
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
           console.log("user have seen the sectin for first time")
           $element.addClass('in-view');
           user_see_the_section_first_time=true;

    }
    if(user_see_the_section_first_time==true)
    {$window.off('scroll',check_if_in_view)}


  });

  console.log(user_see_the_section_first_time)

}

console.log(user_see_the_section_first_time)
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
console.log('done the job')
     })
