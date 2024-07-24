import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);
  const [password, setPassword] = useState('');

  // Testing what's the output when no default value is set, just for fun, not part of project

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (hasNumbers) str += "0123456789";
    if (hasSymbols) str += "!@#$%^&*()_+";
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(() => pass);
  }, [length, hasNumbers, hasSymbols, setPassword]);

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)

  },[password]);

  useEffect(() => { passwordGenerator() }, [length, hasNumbers, hasSymbols, passwordGenerator]);
  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg my-8 text-orange-500 bg-gray-700 text-center'> <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="range" value={length} min={6} max={50} onChange={(e) => setLength(() => e.target.value)} />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" checked={hasNumbers} onChange={(e) => setHasNumbers(() => e.target.checked)} />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" checked={hasSymbols} onChange={(e) => setHasSymbols((prev) => { console.log("previous Value", prev, "current Value", e.target.checked); return e.target.checked })} />
            <label htmlFor="symbols">Symbols</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
