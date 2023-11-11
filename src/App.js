import logo from './logo.svg';
import './App.css';
import calculate from './calculate';
function App() {
  const divStyle = {
    backgroundColor: '#E5E3D3',
    width:'400px', // Note the quotes around '100px'
    height:'400px', // Note the quotes around '200px'
    margin : '200px'
  };

  return (
    <div id="box" style={divStyle}>
    <center><h2>Responsive Paragraph Word Counter</h2>
    <br></br></center>
    <center>
      <textarea rows = "10" cols = "35" id = "i1" onKeyUp = {calculate}>

      </textarea>
    </center>
    <br></br><br></br>
    <span>&nbsp;Word Count:</span>
    <span id = "i2"></span>
    </div>
  );
}

export default App;