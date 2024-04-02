export default function Feedback({ count: { good, neutral, bad } }) { 
    return (
        <div>
            <p>Good: <span>{good}</span></p>
            <p>Neutral: <span>{neutral}</span></p>
            <p>Bad: <span>{bad}</span></p>
            {/* <p></p>
            <p></p> */}
        </div>
    )
}