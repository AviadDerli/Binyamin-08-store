// import Search from "./Search";

export default function Menu(props) {

    return (
        <div>
            <div id="buttons">
                <button onClick={() => props.hanleColor()}>All</button>
                {props.colors.map(c => <button onClick={() => props.hanleColor(c)}>{c}</button>)}
            </div>
            {/* <Search/> */}
        </div>
    )
}
