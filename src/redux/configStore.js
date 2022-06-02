import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import QuanLyNguoiDungReducer from './Reducers/QuanLyNguoiDungReducer'
import QuanLyLoaiNguoiDungReducer from './Reducers/QuanLyLoaiNguoiDungReducer'
import QuanLyPhimReducer from './Reducers/QuanLyPhimReducer';
import QuanLyCumRapReducer from './Reducers/QuanLyCumRapReducer';
import QuanLyLichChieuReducer from './Reducers/QuanLyLichChieuReducer';


const rootReducers = combineReducers({
    QuanLyNguoiDungReducer,
    QuanLyLoaiNguoiDungReducer,
    QuanLyCumRapReducer,
    QuanLyPhimReducer,
    QuanLyLichChieuReducer
});
export const store = createStore(rootReducers, applyMiddleware(thunk));
