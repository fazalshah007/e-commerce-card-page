import React from 'react'
import styles from "./Card.module.css"
import {data} from "../../data"
const Card = () => {
    console.log(data);
    
    return (
        <>

            <h1 id='heading'>Product Cards</h1>
            <div className={styles.container}>


                {data.map((e, i) => {
                    return (<div key={i} className={styles.cardWrapper}>
                        <div className={styles.left}>
                            <img src={e.image} alt="" />
                        </div>
                        <div className={styles.right}>
                            <h1>{e.title.slice(0,10)}</h1>
                            <p>{e.description.slice(0,50)}</p>
                            <h3>Rs: {e.price}</h3>
                            <button>Add Cart</button>
                        </div>
                    </div>)
                })
                }
            </div>

        </>
    )
}

export default Card