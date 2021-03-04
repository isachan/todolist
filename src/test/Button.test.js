import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { render, screen, fireEvent } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button';

describe('Button Component', () => {
  const handleAddClick = jest.fn(() => {});

  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
  });

  it('renders correctly', () => {
    const component = shallow(<Button onClick={handleAddClick} text={'Add'} />);
    expect(component).toMatchSnapshot();
  });

  it('should click on Add Button', () => {
    const { getByTestId } = render(
      <Button onClick={handleAddClick} text={'Add'} />
    );
    // const addButton = getByTestId('add-button');

    fireEvent.click(screen.getByText('Add'));
    expect(handleAddClick).toHaveBeenCalledTimes(1);

    const startTodos = [
      { item: 'mop floor', checked: false, dateCreated: new Date() },
      { item: 'feed cat', checked: false, dateCreated: new Date() }
    ];
    const newTodo = {
      item: 'water plants',
      checked: false,
      dateCreated: new Date()
    };
    const expectedTodos = [
      { item: 'mop floor', checked: false, dateCreated: new Date() },
      { item: 'feed cat', checked: false, dateCreated: new Date() },
      { item: 'water plants', checked: false, dateCreated: new Date() }
    ];

    // need to check how to test for firebase online data
  });
});
