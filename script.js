
function switchPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function addTodo() {
  const val = document.getElementById('todo-input').value;
  if (val) {
    const item = document.createElement('li');
    item.textContent = '⭐ ' + val;
    document.getElementById('todo-list').appendChild(item);
    document.getElementById('todo-input').value = '';
  }
}
function saveIdea() {
  const idea = document.getElementById('idea-input').value;
  if (idea) {
    const div = document.createElement('div');
    div.textContent = '🌟 ' + idea;
    document.getElementById('idea-list').appendChild(div);
    document.getElementById('idea-input').value = '';
  }
}
