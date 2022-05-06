// import React from 'react'
// import '../asserts/Content.css'
// import '../asserts/Layout.css'
// export const Content = () => {
//   return (
//       <div class='content'>
//             <form>
//               <div>
//                     <label>
//                         USER NAME
//                         <input type="text" name="username" placeholder='Enter Username'/>
//                     </label>
//               </div>
//                     <button className='submit'>SUBMIT</button>
//             </form>
//     </div>
//   )
// }
import React,{useState}  from 'react'
import '../asserts/Content.css'
import '../asserts/Layout.css'
import { useDispatch } from 'react-redux'
import { updateName } from '../store/Counterslice'

export default function Content() {
  const dispatch = useDispatch()
  const[sendData,setSendData] = useState('');

  function handleSubmit(){
    if(sendData!==''){
      dispatch(updateName(sendData))
    setSendData('');
    }
    
  }
  function onChangetext(event){
    setSendData(event.target.value);
  }
  return (
    <div className='content'>
      <div>
        <label>UserName</label><input placeholder='Enter your name' value={sendData} onChange={onChangetext} type="text" /></div>
        <button  onClick={handleSubmit} className='submit' >submit</button>
    </div>
  )
}
