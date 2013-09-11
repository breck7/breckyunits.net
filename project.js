$(document).on('ready', function () {

  $('#howlongago').html(moment(parseFloat($('#howlongago').attr('value'))).fromNow())
})
