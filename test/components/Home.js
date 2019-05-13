import React from "react";
import { shallow,configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import assert from "assert";
import Home from "../../src/components/Home";
import PropTypes from 'prop-types';
import { spy } from 'sinon';

configure({ adapter: new Adapter() })

describe('Home component', () => {
  describe('render()', () => {
    it('should render the home component', () => {
      const props = {dispatch: ()=>{}, hotels: []};
      const wrapper = shallow(<Home {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
