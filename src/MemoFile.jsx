import React , {useState , useMemo} from 'react'

const MemoFile = () => {

    const [count, setCount] = useState(0);


    const countIncre = () => {
        setCount((v) => v+1 )
    }

    const Calculation = () => {
        for (let i = 0; i < 1000; i++) {
            console.log(i);
        }
        // setCount(c + 1)
    }


    const data = useMemo(() => Calculation(), []);


    return (
        <>
            <div>MemoFile</div>
            <h1>{count}</h1>
        <button onClick={countIncre} >increment</button>
        </>
    )
}

export default MemoFile