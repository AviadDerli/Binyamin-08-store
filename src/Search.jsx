
export default function Search(props) {

  return (
    <div>
        <input type='text' 
        onInput={(e)=>{props.setInp(e.target.value)}}/>
    </div>
  )
}
