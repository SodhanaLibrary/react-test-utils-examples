import ReactTestUtils from 'react-addons-test-utils'
import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';

import EventComponent from '../eventComponent'

function scryRenderedDOMComponentsWithId(tree, id) {
  return ReactTestUtils.findAllInRenderedTree(tree, function(inst) {
    return ReactTestUtils.isDOMComponent(inst) && inst.id === id;
  });
}

describe('event testing ::', () => {
  it('renders Component', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <EventComponent/>
    );
    expect(instance).toExist();
  });

  it('click event test', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <EventComponent/>
    );
    let clickDiv = scryRenderedDOMComponentsWithId(instance, "clickEventDiv");
    ReactTestUtils.Simulate.click(clickDiv[0]);
    expect(clickDiv[0].className.match(/\bclick-class\b/)).toExist();
  });

  it('double click event test', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <EventComponent/>
    );
    let dbClickDiv = scryRenderedDOMComponentsWithId(instance, "dblClickEventDiv");
    ReactTestUtils.Simulate.doubleClick(dbClickDiv[0]);
    expect(dbClickDiv[0].className.match(/\bdblclick-class\b/)).toExist();
  });

  it('mouser over event test', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <EventComponent/>
    );
    let mOverDiv = scryRenderedDOMComponentsWithId(instance, "mouseOverEventDiv");
    ReactTestUtils.Simulate.mouseOver(mOverDiv[0]);
    expect(mOverDiv[0].className.match(/\bmouseover-class\b/)).toExist();
  });

  it('change event test', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <EventComponent/>
    );
    let inputElm = scryRenderedDOMComponentsWithId(instance, "inputElm");
    inputElm[0].value = 'some value';
    ReactTestUtils.Simulate.change(inputElm[0]);
    expect(instance.state.inputVal).toEqual("some value");
  });

  it('keyDown event test', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <EventComponent/>
    );
    //enter key
    let inputElm = scryRenderedDOMComponentsWithId(instance, "inputElm");
    ReactTestUtils.Simulate.keyDown(inputElm[0], {keyCode : 13});
  });

});
