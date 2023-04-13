import "./index.css";
import troll from "./assets/troll.png";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={troll} id="troll"></img>
        <h1>Meme Generator</h1>
      </div>
      <p>React Project</p>
    </div>
  );
}
