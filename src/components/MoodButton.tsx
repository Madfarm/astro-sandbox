import { useState } from "react"

export default function MoodButton(){
    const [happy, setHappy] = useState(true);

    function toggleMood(){
        setHappy(!happy);
    }

    return (
        <>
        {happy ? <p>I feel good!</p> : <p>I am sads</p>}
        <button onClick={toggleMood}>
            {happy ? "make sad" : "make happy"}
        </button>
        </>
    )
}