import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../components/TodoList';
import { render, screen, fireEvent } from '@testing-library/react';

describe('TodoList Component', () => {
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
  });

  it('renders correctly', () => {
    const component = shallow(<TodoList />);
    expect(component).toMatchSnapshot();
  });

  it('should be able to enter a value in input box', () => {
    const { getByTestId } = render(<TodoList />);

    const textInput = getByTestId('text-input');
    expect(textInput.value).toBe('');
    fireEvent.change(textInput, { target: { value: 'eat vit c' } });
    expect(textInput.value).toBe('eat vit c');
  });

  it('should add todo to the list', () => {
    const { getByTestId } = render(<TodoList />);
    const addButton = getByTestId('add-button');
    // const spy = jest.spyOn( , 'name');
    const handleClick = jest.fn(() => {});
    fireEvent.click(screen.getByText('Add'));

    // need to check how to test for firebase online data
  });
});
