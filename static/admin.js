function displayInfo(firstname, lastname, phone, email, event_name, date_of, start_time, end_time, room, comments) {
  $('#infoFirst').html(firstname)
  $('#infoLast').html(lastname)
  $('#infoPhone').html(phone)
  $('#infoEmail').html(email)
  $('#infoEventName').html(event_name)
  $('#infoDateOf').html(date_of)
  $('#infoStartTime').html(start_time)
  $('#infoEndTime').html(end_time)
  $('#infoRoom').html(room)
  $('#infoComments').html(comments)
  $('#info').show()
}
