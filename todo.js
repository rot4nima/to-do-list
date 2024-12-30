const taskinput = document.getElementById("todo");
const tasklist = document.getElementById("ls");
function text(){
  const tasktext = taskinput.value.trim();
  const li = document.createElement("li");
  li.textContent = tasktext;
  tasklist .appendChild(li);
  taskinput.value ='';
}
