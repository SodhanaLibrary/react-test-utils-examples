import ReactTestUtils from 'react-addons-test-utils'
import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';

import FuncComponent from '../funcComponent'

function scryRenderedDOMComponentsWithId(tree, id) {
  return ReactTestUtils.findAllInRenderedTree(tree, function(inst) {
    return ReactTestUtils.isDOMComponent(inst) && inst.id === id;
  });
}

describe('func call testing ::', () => {
  it('renders Component', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <FuncComponent/>
    );
    expect(instance).toExist();
  });

  it('function call on click test', (done) => {
    let clickFunction = () => {
      done();
    };
    let instance = ReactTestUtils.renderIntoDocument(
      <FuncComponent clickFunc={clickFunction}/>
    );
    let clickDiv = scryRenderedDOMComponentsWithId(instance, "clickEventDiv");
    ReactTestUtils.Simulate.click(clickDiv[0]);
  });

  it('function argument verification on double click test', (done) => {
    let dblClickFunction = (arg) => {
      expect(arg).toEqual('this is some sample arg value');
      done();
    };
    let instance = ReactTestUtils.renderIntoDocument(
      <FuncComponent dblClickFunc={dblClickFunction}/>
    );
    let clickDiv = scryRenderedDOMComponentsWithId(instance, "dblClickEventDiv");
    ReactTestUtils.Simulate.doubleClick(clickDiv[0]);
  });

});
