// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Basic React</h1>
      <ExternalCss></ExternalCss>
    </div>
  );
}

function ExternalCss() {
  return (
    <div className='greeting'>
      <h3>External Css</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, ab debitis! Sequi alias, maxime dignissimos facilis tenetur dolore placeat ipsa aliquam neque fuga? Inventore, sunt error. Odio aliquid voluptate labore.</p>
    </div>
  )
}

export default App;
