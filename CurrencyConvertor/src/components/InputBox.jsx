import { useId } from "react";

function InputBox({
  label,
  amount,
  currencyDisable = false,
  amountDisable = false,
  selectCurrency,
  className = "",
  currencyOptions = [],
  onAmountChange,
  onCurrencyChange,
}) {

    const inputId = useId();
  return (
    <div className={`w-full rounded-lg bg-white flex px-3 py-4 my-3`}>
      <div className="w-1/2">
        <label htmlFor={inputId} className="text-left w-full inline-block mb-2">{label}</label>
        <input
        id={inputId}
          className="outline-none w-full bg-transparent"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisable}
        ></input>
      </div>

      <div className="w-1/2 flex flex-wrap justify-end">
        <p className="w-full text-right mb-2 ">Currency Type</p>

        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
