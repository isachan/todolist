import React, { useState, useEffect } from 'react';
import db from '../firebase';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [listData, setListData] = useState([]);
  const [todo, setTodo] = useState('');
  // console.log('rendered!');

  const fetchData = () => {
    db.collection('list').onSnapshot(item =>
      setListData(
        item.docs.map(doc => ({
          id: doc.id, //to trace id
          item: doc.data().item,
          checked: doc.data().checked
        }))
      )
    );
  };

  const handleAdd = async () => {
    await db.collection('list').add({
      item: todo,
      checked: false,
      dateCreated: new Date()
    });
    setTodo('');
    // fetchData();
  };

  const handleCheck = async item => {
    // console.log('item', item);
    await db
      .collection('list')
      .doc(item.id)
      .update({ checked: !item.checked });
  };

  const handleDelete = item => {
    db.collection('list')
      .doc(item.id)
      .delete();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='todo'>
      {/* {console.log('listData', listData)} */}
      <h1 className='todo__title'> Todo list</h1>
      <ul className='todo__list'>
        {listData &&
          listData.map(item => (
            <li key={item.key}>
              <TodoItem
                item={item}
                onCheck={() => handleCheck(item)}
                onDelete={() => handleDelete(item)}
              />
            </li>
          ))}
      </ul>

      <div className='todo__addbar'>
        <input
          className='todo__addbar-input'
          type='text'
          value={todo}
          onChange={e => setTodo(e.target.value)}
        ></input>
        <button
          className='todo__addbar-button'
          id='add-button'
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoList;
