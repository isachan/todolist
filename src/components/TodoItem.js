import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
const TodoItem = ({ item, onCheck, onDelete }) => {
  return (
    <div className='todoItem' onClick={onCheck}>
      <div className='todoItem__item'>
        {item.checked ? (
          <p
            data-testid='item-content'
            style={{ textDecoration: 'line-through' }}
          >
            {item.item}
          </p>
        ) : (
          <p data-testid='item-content'>{item.item}</p>
        )}
        <button
          className='todoItem__delete-icon'
          data-testid='delete-button'
          onClick={onDelete}
        >
          X
        </button>
      </div>
      <div className='todoItem__date'>
        <p>{moment(item.dateCreated).format('ddd, MMM do, h:mmA')}</p>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TodoItem;
