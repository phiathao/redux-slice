
import uuid from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState, store } from '../../store';
import { counterSlice } from '../counter/counterSlice';


type listItemType = {
    id: string;
    desc: string;
    check: boolean
}
type listType = listItemType[]

const initialState: listType = [
    {
        id: uuid(),
        desc: 'Gloves',
        check: false
    },
    {
        id: uuid(),
        desc: 'Keys',
        check: true
    },
    {
        id: uuid(),
        desc: 'Phone',
        check: true
    },
    {
        id: uuid(),
        desc: 'Mask',
        check: true
    },
    {
        id: uuid(),
        desc: 'Backpack',
        check: true
    },
    {
        id: uuid(),
        desc: 'Coffee',
        check: false
    },
]
const actions = {
    update: (state, action: PayloadAction<string>) => {
        let item = state.find(item => item.id === action.payload);
        if (item) {
            item.check = !item.check
        }
    },
    add: (state, action: PayloadAction<Partial<listItemType>>) => {
        const { payload } = action
        state.push({
            id: payload.id,
            desc: payload.desc,
            check: false
        });
    },
    remove: (state, action: PayloadAction<string>) => {
        let index = state.findIndex(item => item.id === action.payload);
        if(index !== -1){
            state.splice(index, 1);
        }
    }
}

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: actions,
});


// USE FOR COMPONENT DEALING WITH PART OF THE REDUX STATE
export const { update, add, remove } = listSlice.actions;
export const selectList = (state: RootState) => state.list;

// COMPONENT USING REDUX AS STATE MANAGING
export const listReducer = {
    ...listSlice.actions,
    reducer: (state: RootState) => state.list
}

export default listSlice.reducer;
