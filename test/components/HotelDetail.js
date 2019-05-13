import React from "react";
import { shallow,configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import assert from "assert";
import HotelDetail from "../../src/components/common/HotelDetail";
import PropTypes from 'prop-types';
import { spy } from 'sinon';

configure({ adapter: new Adapter() })

describe('HotelDetail component', () => {
  describe('render()', () => {
    it('should render the HotelDetail component', () => {
      const props = {dispatch: ()=>{}, cardData: []};
      const wrapper = shallow(<HotelDetail {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
