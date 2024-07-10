import "./App.css";
import Card from "./components/card";

function App() {


  return (
    <>
      <h1 className="bg-green-500 p-5 mb-3 text-black rounded-xl">Content</h1>
    <div className="flex gap-3">
    <Card username='Suraj Vadnere' btntext="Visit Me "/>
    <Card/>
    </div>
    
      
    </>
  );
}

export default App;
