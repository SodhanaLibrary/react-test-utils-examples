import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Root from '../root';
import SubRoot from '../sub-root'

describe('root', function () {
  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument(<Root/>);
    expect(root).toExist();
  });

  it('shallow render without problems', function () {
    var shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Root/>);
    expect(shallowRenderer.getRenderOutput()).toExist();
  });

  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument(<Root/>);
    expect(root).toExist();
  });

  it('find element with tag', function () {
    var root = TestUtils.renderIntoDocument(<Root/>);
    // scryRenderedDOMComponentsWithTag
    var spanElm = TestUtils.scryRenderedDOMComponentsWithTag(root, 'span');
    expect(spanElm.length).toEqual(0);
    var h1Elm = TestUtils.scryRenderedDOMComponentsWithTag(root, 'h1');
    expect(h1Elm.length).toEqual(1);
    // findRenderedDOMComponentWithTag
    var h1Elm = TestUtils.findRenderedDOMComponentWithTag(root, 'h1');
    expect(h1Elm).toExist();
  });

  it('find element with class', function () {
    var root = TestUtils.renderIntoDocument(<Root/>);
    // scryRenderedDOMComponentsWithClass
    var inputElmArr = TestUtils.scryRenderedDOMComponentsWithClass(root, 'myInput');
    expect(inputElmArr.length).toEqual(1);
    // findRenderedDOMComponentsWithClass
    var inputElm = TestUtils.findRenderedDOMComponentWithClass(root, 'myInput');
    expect(inputElm).toExist();
  });

  it('find element by Component', function () {
    var root = TestUtils.renderIntoDocument(<Root/>);
    // scryRenderedComponentsWithType
    var compArr = TestUtils.scryRenderedComponentsWithType(root, SubRoot);
    expect(compArr.length).toEqual(1);
    // findRenderedComponentsWithType
    var comp = TestUtils.findRenderedComponentWithType(root, SubRoot);
    expect(comp).toExist();
  });

  it('check className', function () {
    var root = TestUtils.renderIntoDocument(<Root/>);
    var inputElm = TestUtils.findRenderedDOMComponentWithClass(root, 'myInput');
    expect(inputElm.className.match(/\bmyInput\b/)).toExist();
  });

  it('check properties', function () {
    var root = TestUtils.renderIntoDocument(<Root/>);
    var subRoot = TestUtils.findRenderedComponentWithType(root, SubRoot);
    expect(subRoot.props.myProp).toEqual("my prop value");
  });

  it('check state', function () {
    var root = TestUtils.renderIntoDocument(<Root/>);
    var rootElm = TestUtils.findRenderedComponentWithType(root, Root);
    expect(rootElm.state.name).toEqual("sample name");
  });

  it('Verify Dom Component', function () {
    var root = TestUtils.renderIntoDocument(<Root/>);
    var rootElm = TestUtils.findRenderedDOMComponentWithTag(root, 'h1');
    expect(TestUtils.isElement(rootElm)).toEqual(false);
    expect(TestUtils.isDOMComponent(rootElm)).toEqual(true);
    expect(TestUtils.isCompositeComponent(rootElm)).toEqual(false);
  });

  it('Verify Composite Type', function () {
    var root = TestUtils.renderIntoDocument(<Root/>);
    var rootElm = TestUtils.findRenderedComponentWithType(root, SubRoot);

    expect(TestUtils.isElement(rootElm)).toEqual(false);
    expect(TestUtils.isDOMComponent(rootElm)).toEqual(false);

    expect(TestUtils.isCompositeComponent(rootElm)).toEqual(true);
    expect(TestUtils.isCompositeComponentWithType(rootElm, SubRoot)).toEqual(true);
  });

});
