// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

const internal = {
  color: "purple",
  // backgroundColor: "cyan",
  border: '3px solid red',
  borderRadius: '20px',
  padding: '10px',
  margin: '10px'
}

function App() {
  return (
    <div className="App">
      <h1 style={{color:'purple', fontSize:'34px'}}>Basic React</h1>
      <h1 style={{backgroundColor:'red'}}>-</h1>
      <ExternalCss></ExternalCss>
      <InternalCss></InternalCss>
      <InlineCss></InlineCss>
      <p style={{color:'red', fontSize:'26px'}}>-------------------------------------------------------------</p>
      <h1><span style={{color:'red'}}>=======</span>  Repeat component  <span style={{color:'red'}}>=======</span></h1>
      <p style={{color:'red', fontSize:'26px'}}>-------------------------------------------------------------</p>
      <ExternalCss></ExternalCss>
      <InternalCss></InternalCss>
      <InlineCss></InlineCss>

      <h1 style={{backgroundColor:'red'}}>-</h1>

      <h1 style={{color:'purple', fontSize:'34px'}}>Dynamic data to components</h1>

      <Person name="Amit Hasan" phone= "0177777"></Person>
      <Person name="Rajib Hasan" phone= "0188888"></Person>
      <Person name="Rabbil Hasan" phone= "0199999"></Person>
      <Person name="Sadik Hasan" phone= "0155555"></Person>
      <Person name="Sumit Hasan" phone= "0166666"></Person>

      <h1 style={{backgroundColor:'red'}}>-</h1>

      <h1 style={{color:'purple', fontSize:'34px'}}>Multiple components from an array of objects</h1>

      <Students></Students>

      <h1 style={{backgroundColor:'red'}}>-</h1>

      <h1 style={{color:'purple', fontSize:'34px'}}>Learning State</h1>

      <Counter></Counter>

      <h1 style={{backgroundColor:'red'}}>-</h1>

      <h1 style={{color:'purple', fontSize:'34px'}}>Learning State</h1>

      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalCss() {
  return (
    <div className='external'>
      <h3>External Css</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, ab debitis! Sequi alias, maxime dignissimos facilis tenetur dolore placeat ipsa aliquam neque fuga? Inventore, sunt error. Odio aliquid voluptate labore.</p>
    </div>
  )
}

function InternalCss(){
  return (
    <div style={internal}>
      <h3>Internal Css</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a voluptatum voluptates! Esse nihil optio provident consectetur, soluta eum repellat facere? Expedita suscipit autem sint nemo, eos deleniti numquam est!</p>
    </div>
  )
}

function InlineCss(){
  return (
    <div style={{border:'3px solid magenta'}}>
      <h3 style={{color:'red', padding:'5px'}}>Inline Css</h3>
      <p style={{color:'gray', padding:'5px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ut molestias. Magni illum assumenda fugiat ipsa dolor? Fuga iure, mollitia quidem animi reiciendis, blanditiis recusandae ratione repellat quam quaerat debitis?</p>
    </div>
  )
}

//-----------------------  dynamic data to component --------------------
function Person(props){
  return (
    <div className='person'>
      <h2>Name: {props.name}</h2>
      <h3>Phone: {props.phone}</h3>
    </div>
  )
}

//----------------------  multiple data from array of obj -------------------------
function Students(){
  const studentsID = [14, 51, 1, 3, 23, 47, 9, 65];
  const studentsInfo = [
    { name: 'Jamal', id: 45},
    { name: 'Sakib', id: 12},
    { name: 'Kamal', id: 16},
    { name: 'Josim', id: 32}
  ]
  return(
    <div className='person'>
      {
        studentsID.map(studentId =>  studentId)
      }
      {
        studentsInfo.map(studentInfo => <Person name={studentInfo.name} phone={studentInfo.id}></Person>)
      }
    </div>
  )
}

//------------------------------ State -------------------------------
function Counter(){
  const [count, setCount] = useState(0);
  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  const increaseCount = () =>setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

//--------------  Load dynamic data, API call useEffect integrate state  -------------
function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h2>External Users</h2>
      {
        users.map(user=> <User name={user.name} email= {user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div style={{color:'red', backgroundColor:'cyan', border:'2px solid purple', margin:'15px'}}>
      <h2>Name: {props.name}</h2>
      <h2>Email: {props.email}</h2>
    </div>
  )
}

export default App;
