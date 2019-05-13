import React from "react";
import { shallow,configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import assert from "assert";
import App from "../../src/components/App";
import PropTypes from 'prop-types';
import { spy } from 'sinon';

configure({ adapter: new Adapter() })

describe('App component', () => {
  describe('render()', () => {
    it('should render the App component', () => {
      const props = {dispatch: ()=>{}, hotels: []};
      const wrapper = shallow(<App {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
