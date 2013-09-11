$(document).on('ready', function () {
   
  $('.timestamp').each(function () {
    $(this).text(moment(parseInt($(this).text())).fromNow())
  })

})