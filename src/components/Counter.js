'use client';
import { useState } from 'react';
import styles from './counter.module.css';

export default function Counter({ label }) {
    const [count, setCount] = useState(0);
    const increase = () => { setCount(prev => prev + 1) }
    const decrease = () => { setCount(prev => (prev > 0 ? prev - 1 : 0)) }
    const reset = () => { setCount(0) }

    return (
        <div className={styles.card}>
            <h2>{label}</h2>
            <p className={styles.count}>{count}</p>
            <div className={styles.buttons}>
                <button onClick={increase}>+</button>
                <button onClick={decrease} disabled={count === 0}>-</button>
                <button onClick={reset} disabled={count === 0}>RESET</button>
            </div>
        </div>
    );
}