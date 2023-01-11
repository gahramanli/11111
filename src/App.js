import './App.css';


export const App=()=> {
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("button submitted");
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <label>To Do</label>
      <input placeholder='create to do text' />
      <input type="submit" value="Add"/>
      </form>
    </div>
  );
}

export default App;
