import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import reducer from '../reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from '../containers/App'
import TodoTextInput from '../components/TodoTextInput'
import TodoItem from '../components/TodoItem'

const store = createStore(reducer)

describe('root', function () {

  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument(<Provider store={store}>
      <App />
    </Provider>);
    expect(root).toExist();
  });

  it('Todo lifecycle test', function () {
    var root = TestUtils.renderIntoDocument(<Provider store={store}>
      <App/>
    </Provider>);
    var compArr = TestUtils.findRenderedComponentWithType(root, TodoTextInput);

    // change input text value
    var inputElm = TestUtils.findRenderedDOMComponentWithTag(compArr, 'input');
    inputElm.value = 'some task';
    TestUtils.Simulate.change(inputElm);

    // press enter
    TestUtils.Simulate.keyDown(inputElm, {which : 13});

    // find ToDo Items and verify the value
    var todoItems = TestUtils.scryRenderedComponentsWithType(root, TodoItem);
    expect(todoItems[0].props.todo.text).toEqual('some task');

    // check the todo item
    var checkbox = TestUtils.findRenderedDOMComponentWithTag(todoItems[0], 'input');
    checkbox.checked = true;
    TestUtils.Simulate.change(checkbox);

    // check todo completion
    expect(todoItems[0].props.todo.completed).toEqual(true);
  });

});
