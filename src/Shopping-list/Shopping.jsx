import React, { useState, useEffect } from 'react'
import './style.css'

const Shopping = () => {

    const [food, setFood] = useState('')
    const [shoppingList, setShopingList] = useState([])
    const [bucketList, setBucketList] = useState([])

    const fecthItems = async () => {
        const url = `https://api.frontendeval.com/fake/food/${food}`
        const result = await fetch(url);
        const data = await result.json();
        // console.log(data);
        setShopingList(data)

        // setFood(data)
    }
    // console.log(shoppingList);


    useEffect(() => {
        if (food.length >= 2) {
            fecthItems(food);
        }
    }, [food])

    const handleShoppingList = (e) => {
        const idx = (e.target.getAttribute('data-id'));
        if (idx !== null) {
            const obj = {
                id: Date.now(),
                data: shoppingList[idx],
                isDone: false
            }
            const copyBucketList = [...bucketList];
            copyBucketList.push(obj);
            setBucketList(copyBucketList)
        }
        setFood('')
    }
    console.log(bucketList);

    const handleRightClick = (id) => {
        const copyBucketList = [...bucketList];
        const newBucketList = copyBucketList.map((item) => {
            if (item.id == id) {
                item.isDone = !item.isDone;
            }
            return item;
        })
        setBucketList(newBucketList)
    }

    const handleDelete = (id) => {
        const copyBucketList = [...bucketList];
        const newList = copyBucketList.filter((item) => item.id != id)
        setBucketList(newList)
    }




    return (
        <div className='App'>
            <h1>My Shopping List</h1>
            <div>
                <input type='text'
                    value={food}
                    onChange={(e) =>
                        setFood(e.target.value)} />
            </div>
            {food.length >= 2 ?

                <div className='shopping-list'
                    onClick={handleShoppingList}>
                    {
                        shoppingList.map((item, index) => {
                            return <div data-id={index} className='product'>{item}</div>
                        })
                    }
                </div> : null
            }

            <div className='bucket'>
                {
                    bucketList.map((item) => {
                        return <div className='shopping-item'>

                            <button onClick={() => handleRightClick(item.id)}>✅</button>
                            <div className={item.isDone ? 'strik' : ''}>{item.data}</div>
                            <button onClick={() => handleDelete(item.id)} className='cross'>X</button>
                        </div>

                    })
                }

            </div>

        </div>
    )
}

export default Shopping
