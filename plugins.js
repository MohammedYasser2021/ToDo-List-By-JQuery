// to do list
let newTask = $('.task-input')
$('.todo-add-task').on('submit', function (e) {
  e.preventDefault()

  if (newTask.val() !== '') {
    $(
      `<li>
      ${newTask.val()}
      <span class="task-delete">delete</span>
      <span class="task-load">loading</span>
      <span class="task-comp">Complete</span>
      </li>`,
    ).prependTo('.todo-tasks')
  }
  newTask.val('')
})

$('.todo-tasks').on('click', '.task-delete', function () {
  $(this).parent().removeClass('complete')
  $(this).parent().removeClass('load')
  $(this).parent().addClass('del')
  $(this).parent().fadeOut(500)
  statsDelete()
  statsComplete()
  statsLoading()
})
$('.todo-tasks').on('click', '.task-comp', function () {
  $(this).parent().removeClass('del load')
  $(this).parent().addClass('complete')
  $(this).parent().find('.loading').fadeOut()
  $(`<span class="done"><i class="fa fa-check-square"></i></span>`).prependTo(
    $(this).parent(),
  )
  statsComplete()
  statsLoading()
})
$('.todo-tasks').on('click', '.task-load', function () {
  $(this).parent().removeClass('complete del')
  $(this).parent().addClass('load')
  $(this).parent().find('.done').fadeOut()
  $(`<span class="loading"><i class="fa fa-spinner"></i></span>`).prependTo(
    $(this).parent(),
  )

  statsComplete()
  statsLoading()
})

function statsDelete() {
  $('.tasks-num span').text($('.del').length)
}
function statsComplete() {
  $('.tasks-completed span').text($('.complete').length)
}
function statsLoading() {
  $('.tasks-loading span').text($('.load').length)
}
