
import uuid from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';
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
        let item = state.find(item => item.id === action.payload)
        if (item) {
            item.check = !item.check
        }
    },
    add: (state, action: PayloadAction<listItemType>) => {
        const { payload } = action
        state.push({
            id: payload.id,
            desc: payload.desc,
            check: false
        })
    },
    remove: (state, action: PayloadAction<string>) => {
        state = state.filter(item => item.id !== action.payload)
    }
}

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: actions,
});

// const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const listReducer = {
    actions: listSlice.actions,
    reducer: (state: RootState) => state.list
}

// export const { update, add, remove } = listSlice.actions;

export default listSlice.reducer;
