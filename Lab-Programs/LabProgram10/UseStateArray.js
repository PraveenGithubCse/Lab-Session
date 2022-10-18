import React, {useState} from 'react'
function UseStateArray() {
  const [arr,setArr] = useState([]);
  const [user,setUser] = useState('');
  const onClick = () => {
      setArr( arr => [...arr, user]);
  };
return (
  <div align="center">
    <input type="text" value={user} onChange={(e)=> setUser(e.target.value)}/><br/><br/>
    <button style={{textAlign: 'center'}}  onClick={onClick}>Add User</button><br/><br/>
    <table border="1">
      <tr><th>UserName</th></tr>
      {arr.map(ele => {
        return <tr><td>{ele}</td></tr>
      })}
    </table>
  </div>
  )
}
export default UseStateArray;