import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promitions';

export const initialState ={
    dishes:DISHES,
    comments:COMMENTS,
    leader:LEADERS,
    promotion:PROMOTIONS
};

export const Reducer = (state =initialState,action) =>{

        return state;
};