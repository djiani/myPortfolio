function animate_header(){
  let list =["Creative and simple solutions", "Interatives web applications", "Intuitive and response UX/UI"];
  let i = 0;
  timer = setInterval(function(){
    i++;
    $('.animated_text').html(list[i% list.length]);
    }, 2000);
}

$(function(){
 // $(".navbar").affix({offset: {top:$("header").outerHeight(true)}});
  animate_header();
  $('.viewpdf').click(function(event){
    displaypdf('https://s3.us-east-2.amazonaws.com/awsunivprof/Samuel+Raoul+Djiani+Resume+4.pdf');
  })

})


