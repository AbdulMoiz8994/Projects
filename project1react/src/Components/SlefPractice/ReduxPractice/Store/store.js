import {createStore} from 'redux';
import {reducer} from './reducer'

export const CreatStore=createStore(reducer);