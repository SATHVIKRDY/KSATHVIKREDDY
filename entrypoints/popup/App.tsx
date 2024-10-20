import "./App.css";
import logo from "../../public/logo1.png";

function App() {
  return (
    <>
      <div className="flex flex-col items-center p-[30px] gap-3">
        {" "}
        <img src={logo} alt="" className="rounded-full" />
        <h1 className="text-lg font-bold">ChatGpt Writer</h1>
      </div>
      <div className="pl-[30px] pr-[30px] ">
        <p className="text-base font-semibold text-slate- mb-2 text-center">
          Welcome to ChatGPT Writer
        </p>
        <p className="text-sm text-center">
          ChatGPT Writer is a powerful Chrome extension designed to streamline
          your messaging by generating text suggestions in real-time. With its
          AI-driven capabilities, you can write faster and focus on what truly
          matters, leaving tedious typing behind.
        </p>
        <div className="mt-4 flex justify-center items-center">
          <button className="bg-black text-white pb-[6px] pt-[6px] w-52 rounded-md hover:bg-slate-950">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
