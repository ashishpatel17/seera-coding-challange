import React from "react";
import { shallow,configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import assert from "assert";
import HotelListing from "../../src/components/HotelListing";
import PropTypes from 'prop-types';
import { spy } from 'sinon';

configure({ adapter: new Adapter() })

describe('HotelListing component', () => {
  describe('render()', () => {
    it('should render the HotelListing component', () => {
      const props = {dispatch: ()=>{}, hotels: []};
      const wrapper = shallow(<HotelListing {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
