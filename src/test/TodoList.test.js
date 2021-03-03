import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
  });

  it('renders correctly', () => {
    const component = shallow(<TodoList />);
    expect(component).toMatchSnapshot();
  });

  it('should add todo to the list', () => {
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
