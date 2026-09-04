import Rightcard from './rightcard'

const Rightcontent = (props) => {
  return (
    <div id= 'right'className=' py-8 overflow-x-auto px-8 flex flex-nowrap gap-10 h-full w-2/3'>
      {props.users.map(function(elems,idx)
      {
        return <Rightcard key={idx} id={idx} img={elems.img} tag={elems.tag}/>
      })}
    </div>
  )
}

export default Rightcontent
