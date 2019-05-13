import React from "react";
import { shallow,configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import assert from "assert";
import Header from "../../src/components/common/Header";
import PropTypes from 'prop-types';
import { spy } from 'sinon';

configure({ adapter: new Adapter() })

describe('Header component', () => {
  describe('render()', () => {
    it('should render the Header component', () => {
      const props = {dispatch: ()=>{}, hotels: []};
      const wrapper = shallow(<Header {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
