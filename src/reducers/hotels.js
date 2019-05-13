export default function hotels(state = [], action) {
    switch (action.type) {
      case 'HOTEL_LIST':
        return action.result.hotels;
      // initial state
      default:
        return state;
    }
  }