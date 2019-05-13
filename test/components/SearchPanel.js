import React from "react";
import { shallow,configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import assert from "assert";
import SearchPanel from "../../src/components/common/SearchPanel";
import PropTypes from 'prop-types';
import { spy } from 'sinon';

configure({ adapter: new Adapter() })

describe('SearchPanel component', () => {
  describe('render()', () => {
    it('should render the SearchPanel component', () => {
      const props = {dispatch: ()=>{}};
      const wrapper = shallow(<SearchPanel {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
