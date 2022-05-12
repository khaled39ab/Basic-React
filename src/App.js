// import logo from './logo.svg';
import './App.css';

const internal = {
  color: "purple",
  backgroundColor: "cyan",
  border: '3px solid red',
  borderRadius: '20px',
  padding: '10px',
  margin: '10px'
}

function App() {
  return (
    <div className="App">
      <h1>Basic React</h1>
      <ExternalCss></ExternalCss>
      <InternalCss></InternalCss>
      <InlineCss></InlineCss>
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
    <div>
      <h3 style={{color:'red', backgroundColor:'gray', padding:'5px'}}>Inline Css</h3>
      <p style={{color:'white', backgroundColor:'gray', padding:'5px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ut molestias. Magni illum assumenda fugiat ipsa dolor? Fuga iure, mollitia quidem animi reiciendis, blanditiis recusandae ratione repellat quam quaerat debitis?</p>
    </div>
  )
}

export default App;
