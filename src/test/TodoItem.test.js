import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoItem from '../components/TodoItem';

import { render, screen, fireEvent } from '@testing-library/react';

const dummyItem = {
  item: 'wash dish',
  checked: false,
  dateCreated: new Date()
};

describe('TodoItem Component', () => {
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
  });

  it('renders correctly', () => {
    const component = shallow(
      <TodoItem item={dummyItem} onCheck={() => {}} onDelete={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });

  it('clicking on X delete button calls function', () => {
    const onCheck = jest.fn(() => {});
    const onDelete = jest.fn(() => {});
    const { getByTestId } = render(
      <TodoItem item={dummyItem} onCheck={onCheck} onDelete={onDelete} />
    );
    const deleteButton = getByTestId('delete-button');
    fireEvent.click(deleteButton);
    expect(onDelete).toHaveBeenCalledTimes(1);

    // need to write function to test data from firebase online
  });

  it('should be checked off when clicking on item', () => {});
});
