import React, { useState } from 'react'

export const TodoList = () => {
  const [todo, setTodo] = useState("");
  // useState([])로 배열을 넣어주면 never[] 속성이 되기 때문에 컴파일러에서
  // 에러를 발생하게 된다. 때문에 명시적으로 type을 저정해줘야 한다.
  // typesctipt이기 때문..
  const [todoarray, setTodoArray] = useState<string[]>([]);
  //const onAddTodo = () => setTodoArray();
  const changeTodo = (event: any) => setTodo(event.target.value);
  // form전송을 하기 전에 입력된 데이의 유효성을 체크하기 위해 사용되는 이벤트
  const onSubmit = (event: any) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    // ...은 기존에 배열에 있는 index에 현재 입력한 index를 추가하는 jsx구문.
    // string[] is not assignable to type never[] disappear the error message.
    setTodoArray(currentArray => [todo, ...currentArray]);
    setTodo('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>My ToDo List({todoarray.length})</h1>
        <input
          onChange={changeTodo}
          value={todo}
          type='text'
          placeholder='Write yout to do' />
        <button>Add Todo</button>
      </form>
      <hr />
      <ul>
        {todoarray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
