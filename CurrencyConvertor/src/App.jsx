import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [from, setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [amount,setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const swap = () => {
    let value = from;
    setFrom(to);
    setTo(value);
  }
  return (
    <div className='flex justify-center items-center w-full h-screen'>

    <div className=' w-1/2 backdrop-blur-sm mx-auto my-auto p-8 outline relative outline-white rounded-lg outline-1'>

    <h1 className='text-white font-mono font-bold text-3xl mb-4'>Currency Convertor</h1>
    <form onSubmit={(e) =>{
      e.preventDefault();
      convert();
    }}>
      <InputBox label="From" currencyOptions={options} amount={amount} selectCurrency={from} onAmountChange={(amount1) => setAmount(amount1)} onCurrencyChange={(currency) => setFrom(currency)}>

      </InputBox>

      <div className='w-full relative '>
        <button type='button' onClick={swap} className='bg-blue-700 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border border-2 border-white px-3 py-2 rounded-xl text-white text-md'>Swap</button>
      </div>
      
      <InputBox label="To" currencyOptions={options} amount={convertedAmount} selectCurrency={to}  onCurrencyChange={(currency) => setTo(currency)}>

      </InputBox>

    
      <button type='submit' className='bg-blue-700 px-3 py-2 rounded-xl text-white w-full my-2 text-md'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
     
      </form>
      </div>
      </div>
    
  )
}

export default App
