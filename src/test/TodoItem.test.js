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

  it('clicking on X delete button removes record', () => {
    const { getByTestId } = render(
      <TodoItem item={dummyItem} onCheck={() => {}} onDelete={() => {}} />
    );
    const deleteButton = getByTestId('delete-button');
    // console.log('FIRST!!!', deleteButton);
    fireEvent.click(deleteButton);
    // need to write function to test data from firebase online
    screen.getByText('X');

    expect(screen.findByText('X').toBeVisible);
    // console.log('SECONDDD!!!', deleteButton);
  });
});
