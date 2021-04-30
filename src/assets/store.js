import { createStore } from 'redux';
import reducer from './reducer.js';

/**
 * @description "Main store for state management"
 */
export default createStore(reducer);
