import axios from "axios";
const App = () => {
  const getdata = async()=>
  {
    const {data}= await axios.get("https://picsum.photos/v2/list")
    console.log({data});
  }
  return (
    <div>
       <button onClick={getdata}> get data </button>
    </div>
  )
}

export default App
