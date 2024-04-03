import "./Header.css";
import logoSquare from "../logoSquare.png";
import iconSquare from "../iconSquare.png";

export default function Header() {
  return (
    <header>
      <img src={iconSquare} alt="whisk & wander logo" className="imageSize" />
      <div className="centerhead">
        <div className="title">
          <h1 className="brand">whisk & wander</h1>
        </div>
      </div>
    </header>
  );
}
