// __mocks__/react-redux.ts

import { Dispatch } from 'redux';

export const useDispatch = jest.fn<Dispatch<any>, []>();
export const useSelector = jest.fn();
