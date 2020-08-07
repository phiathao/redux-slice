import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listReducer } from '../../redux/reducer/list/listSlice';
import { RootState } from '../../redux/store';
import uuid from 'uuid';

export const MyList = () => {
    const { actions, reducer } = listReducer
    const list = useSelector(reducer);
    const dispatch = useDispatch();
    console.log(actions, list)
    const handleAdd = () => {
        dispatch(actions.add({
            id: uuid(),
            desc: 'New',
            check: false
        }))
    }
    return (
        <div>
            <div>
                <button onClick={handleAdd}>Test</button>
            </div>
        </div>
    );
}
