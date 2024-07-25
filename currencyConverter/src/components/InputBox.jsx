
import PropTypes from 'prop-types';
import { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [1,2,3,4,5,6],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();
    const currencySelectId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <label htmlFor={currencySelectId} className="text-black/40 mb-2 w-full">Currency Type</label>
                <select
                    id={currencySelectId}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none focus:ring-1 focus:ring-blue-500 focus-outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >

                    {currencyOptions.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                    ))}

                </select>
            </div>
        </div>
    );

    
}

InputBox.propTypes = {
    label: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    onAmountChange: PropTypes.func.isRequired,
    onCurrencyChange: PropTypes.func.isRequired,
    currencyOptions: PropTypes.array.isRequired,
    selectCurrency: PropTypes.string.isRequired,
    amountDisable: PropTypes.bool.isRequired,
    currencyDisable: PropTypes.bool.isRequired,
    className: PropTypes.string,
};

export default InputBox;
