import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook: when you want to take reference of anything then useRef is used.
  const passwordRef = useRef(null);

  // password generator method
  // we used useCallback hook which stored fucntion as much as possible in cache or memory and when we again run fuction used the previous part as much as possible.
  // in useCallback basically we are focusing on optimization(goal is to optimized)
  // syntax: const cachedFn = useCallback(fn, dependencies)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // if checkBox allowed  then it will add number and char
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    // here we create the password as per length
    for (let i = 1; i <= length; i++) {
      // it will give index of str
      let char = Math.floor(Math.random() * str.length + 1);
      // here we set one char at time in pass variable
      pass += str.charAt(char);
    }

    setPassword(pass); //updating the state basically putting password in state
  }, [length, numberAllowed, charAllowed, setPassword]);

  // here we also optimized with useCallback hook
  const copyPasswordToClipboard = useCallback(() => {
    // copy to clipboard
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    // copy to clipboard
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //used useEffect hook
  // when our page load useEffect hook call aur agar dependancies array me se kisike sath agar ched chad hogi toh yeh run hoga
  // no need to stored in variable
  // useEffect(fn, dependencies)
  // in useEffect we are focus on agar ham us dependencies ko chedenge toh passwordGenerator ko dubara run karo(goal is to run)
  // dependencies mean if you click on that field then it will run
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard} // copyPasswordToClipboard is method
            className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex  items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex  items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex  items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
