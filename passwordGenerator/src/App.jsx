
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
    const [length, setLength] = useState(8);
    const [characterallowed, setCharacterAllowed] = useState(false);
    const [numberallowed, setNumberAllowed] = useState(false);
    const [password, setPassword] = useState("");
    const ref = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numberallowed) str +="12345678";
        if(characterallowed) str += "!@#$%^&*()_+";

        for (let index = 1; index < length; index++) {
          let char = Math.floor(Math.random() * str.length + 1);

          pass += str.charAt(char);
          
        }

        setPassword(pass);
    }, [length,characterallowed,numberallowed,setPassword]);

    useEffect(() => {
          passwordGenerator();
    },[length,numberallowed,characterallowed,passwordGenerator]);


    const copyPasswordToClipboard = useCallback(() => {
      ref.current?.select();
    ref.current?.setSelectionRange(0, 999);
        window.navigator.clipboard.writeText(password);
    },[password])


 
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
          <h1 className='text-white text-xl text-center my-3'> Password Geneartor</h1>
          <div className='flex overflow-hidden rounded-lg mb-5'>
              <input type='text' className='w-full px-3 py-3 font-bold' placeholder='Password*' ref={ref} readOnly value={password}>
              </input>
              <button className=' bg-blue-600 px-3 text-white' onClick={copyPasswordToClipboard}>
                Copy
              </button>
              
          </div>
          <div className='flex flex-wrap gap-2 py-3'>
              <input type='range' min={8} max={50} onChange={(e) => {
                setLength(e.target.value)
              }}>
              </input>
              <label>
                Length : {length}
              </label>
              <input type='checkbox' defaultChecked={numberallowed} onChange={() =>{setNumberAllowed((prev) => !prev)}} >
              </input>
              <label>
                Numbers 
              </label>

              <input type='checkbox' defaultChecked={characterallowed} onChange={() =>{setCharacterAllowed((prev) => !prev)}}>
              </input>
              <label>
                Characters
              </label>
          </div>

      </div>
    </>
  )
}

export default App
