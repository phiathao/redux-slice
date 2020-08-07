import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './MyList.module.css'
import uuid from 'uuid';


//Component is using this reducer for its state managing
import { listReducer } from '../../redux/reducer/list/listSlice';
// import { selectList, add, update, remove } from '../../redux/reducer/list/listSlice';


export const MyList = () => {
    const { reducer, add, remove, update } = listReducer
    const list = useSelector(reducer);
    const dispatch = useDispatch();

    const [itemName, setItemName] = useState('');
    const handleAdd = () => {
        dispatch(add({
            id: uuid(),
            desc: itemName,
            // check: false // default check to false when added
        }))
        // dispatch(add({
        //     id: uuid(),
        //     desc: 'New',
        // }))
    }
    const handleRemove = (id: string) => {
        dispatch(remove(id))
    }
    const handleCheck = (id: string) => {
        console.log('hit')
        dispatch(update(id))
    }

    return (
        <>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Item to add"
                    placeholder="Item Name"
                    value={itemName}
                    onChange={e => setItemName(e.target.value)}
                />
                <button
                    className={styles.button}
                    disabled={!itemName}
                    onClick={handleAdd}>Add Item</button>
            </div>
            {list.map(item =>
                <div className={styles.row} key={item.id}>
                    <input
                        className={styles.textbox}
                        disabled
                        value={item.desc}
                    />
                    <div className={styles.checkBoxContainer}>
                    <input
                        type="checkbox"
                        checked={item.check}
                        onChange={(e)=>(e)}
                        />
                        <span 
                            onClick={() => handleCheck(item.id)}
                            className={styles.checkmark}
                            />
                        </div>
                    <button
                        className={styles.button}
                        onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
            )}
        </>
    );
}
