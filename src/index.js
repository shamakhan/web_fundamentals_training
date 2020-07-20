const testTodo = {
  userId: 123,
  id: 98765,
  title: "My todo item"
}

function getFromSameOrigin() {
  fetchFromOrigin('/api');
}

function postToSameOrigin() {
  postToOrigin('/api', testTodo);
}

function getFromDifferentOrigin() {
  fetchFromOrigin('https://jsonplaceholder.typicode.com/todos');
}

function postToDifferentOrigin() {
  postToOrigin('https://jsonplaceholder.typicode.com/todos', testTodo);
}

async function fetchFromOrigin(origin) {
  const response = await fetch(origin);
  const data = await response.json();
  console.log(data);
  
  const parentUl = document.getElementById('api-response')
  parentUl.innerHTML = '';
  const todos = data.slice(0, 10);
  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.innerText = todo.title;
    if (todo.completed) {
      li.style.textDecoration = 'line-through';
    }
    parentUl.appendChild(li);
  });
  // .innerText = JSON.stringify(data);
}

async function postToOrigin(origin, todo) {
  const response = await fetch(origin, {
     method: 'POST',
     body: JSON.stringify(todo),
     headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  const data = await response.json();
  console.log(data);
}

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))