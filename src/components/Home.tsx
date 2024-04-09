import allison from "../img/IMG_5643.jpg";
import "./Home.css";

export default function Home() {
  return (
    <>
      <h1 className="brand pagetitle">Welcome to Whisk and Wander</h1>
      <div className="content">
        <img src={allison} alt="whisk & wander logo" className="allison" />
        <div className="thoughts">
          <p className="brand">
            My name is Allison Winder. I am a Seattle-grown girl who has had a
            passion for cooking and baking since I was a child. My mom would
            always invite me to help her in the kitchen and it gave me
            confidence to make food for myself at a young age.
          </p>
          <p className="brand">
            I would love for you to join me as we gain confidence in the kitchen
            together. My hope for this website is for it to be a place where we
            can collaborate by sharing different recipes together no matter
            where we are in terms of experience or location.
          </p>
          <p className="brand">
            Join me on our adventure together in the kitchen! See you all there!
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
}
