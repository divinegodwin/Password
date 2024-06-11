import { useState } from "react";
function App() {
  const values = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const [password, setPassword] = useState([]);
  const [isfetched, setIsFetched] = useState(false);

  const GenerateFirst = () => {
    const newRandomValues = Array.from(
      { length: 8 },
      () => values[Math.floor(Math.random() * values.length)]
    );
    setPassword(newRandomValues);
    setIsFetched(true);
  };

  const CopyPasswordToClipboard = () => {
    if (password) {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          alert("password copied to clipboard");
        })
        .catch((error) => console.error("failed to copy password", error));
    }
  };

  return (
    <>
      <nav className="w-full h-[80px] bg-[#2d2d2d]">
        <h1 className="pl-4 text-lg text-[#ffff] pt-6 font-bold">
          Password Generator
        </h1>
      </nav>

      <div className=" mt-20 flex flex-row gap-10 flex-wrap justify-center  font-bold">
        <div
          className={
            isfetched
              ? " w-[50px] h-[50px] border-4  text-center p-2 font-boldborder-1 border-blue-200"
              : "w-[50px] h-[50px] border-4  text-center p-2 font-bold"
          }
        >
          {password[0]}
        </div>
        <div
          className={
            isfetched
              ? " w-[50px] h-[50px] border-4  text-center p-2 font-boldborder-1 border-blue-200"
              : "w-[50px] h-[50px] border-4  text-center p-2 font-bold"
          }
        >
          {password[1]}
        </div>
        <div
          className={
            isfetched
              ? " w-[50px] h-[50px] border-4  text-center p-2 font-boldborder-1 border-blue-200"
              : "w-[50px] h-[50px] border-4  text-center p-2 font-bold"
          }
        >
          {password[2]}
        </div>
        <div
          className={
            isfetched
              ? " w-[50px] h-[50px] border-4  text-center p-2 font-boldborder-1 border-blue-200"
              : "w-[50px] h-[50px] border-4  text-center p-2 font-bold"
          }
        >
          {password[3]}
        </div>
        <div
          className={
            isfetched
              ? " w-[50px] h-[50px] border-4  text-center p-2 font-boldborder-1 border-blue-200"
              : "w-[50px] h-[50px] border-4  text-center p-2 font-bold"
          }
        >
          {password[4]}
        </div>
        <div
          className={
            isfetched
              ? " w-[50px] h-[50px] border-4  text-center p-2 font-boldborder-1 border-blue-200"
              : "w-[50px] h-[50px] border-4  text-center p-2 font-bold"
          }
        >
          {password[5]}
        </div>
        <div
          className={
            isfetched
              ? " w-[50px] h-[50px] border-4  text-center p-2 font-boldborder-1 border-blue-200"
              : "w-[50px] h-[50px] border-4  text-center p-2 font-bold"
          }
        >
          {password[6]}
        </div>
        <div
          className={
            isfetched
              ? " w-[50px] h-[50px] border-4  text-center p-2 font-boldborder-1 border-blue-200"
              : "w-[50px] h-[50px] border-4  text-center p-2 font-bold"
          }
        >
          {password[7]}
        </div>
      </div>

      <div className="mt-[7rem] flex flex-row justify-center gap-3 ">
        <button
          className="w-[200px] h-[50px] text-white bg-[#2d2d2d] rounded-lg"
          onClick={GenerateFirst}
        >
          Generate
        </button>

        <button
          className="w-[100px] h-[50px] text-white bg-[#2d2d2d] rounded-lg"
          onClick={CopyPasswordToClipboard}
        >
          Copy
        </button>
      </div>
    </>
  );
}

export default App;
