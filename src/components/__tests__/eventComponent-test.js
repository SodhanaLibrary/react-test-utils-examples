import ReactTestUtils from 'react-addons-test-utils'
import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';

import EventComponent from '../eventComponent'

describe('event testing', () => {
  it('renders Component', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <EventComponent/>
    );
    console.log(ReactDOM.findDOMNode(instance));
    expect(instance).toExist();
  });
});
