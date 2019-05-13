import assert from "assert";
import hotels from "../../src/reducers/hotels";

describe('hotels reducer', () => {
  describe('HOTEL_LIST', () => {
    it('should return a list of hotels', () => {
      assert.deepEqual(
        hotels({}, {
          type: 'HOTEL_LIST',
          result: {
            hotels:[{
              id: 1,
              name: 'test hotel',
              price: 10,
            }]
          }
        }), [{
          id: 1,
          name: 'test hotel',
          price: 10,
        }]
      );
    });
  });
});
