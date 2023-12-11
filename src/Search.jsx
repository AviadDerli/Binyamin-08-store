
export default function Search(props) {
  return (
    <div>
        <input type='text' 
        onInput={(e)=>{props.hanleSearch(e.target.value)}}/>
    </div>
  )
}
