import Search from "./Search";

export default function Menu(props) {
    let { hanleColor, hanleSearch, colors } = props

    return (
        <div>
            <div id="buttons">
                <button onClick={() => hanleColor()}>All</button>
                {colors.map(c => <button onClick={() => hanleColor(c)}>{c}</button>)}
            </div>
            <Search hanleSearch={hanleSearch} />
        </div>
    )
}
