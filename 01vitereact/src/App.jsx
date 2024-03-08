import Chai from "./chai";

function App() {
  const username = "Chai aur react";
  return (
    <>
      <Chai />
      <h1>Chai aur {username}</h1>
      {/*username treat as variable. you can writer only evaluated expression*/}
      <p>test para</p>
    </>
  );
}

export default App;
