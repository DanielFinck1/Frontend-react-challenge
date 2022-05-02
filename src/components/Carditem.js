import Image from "./images/Saly-42.png"
import Image2 from "./images/Saly-31.png"

function Carditem() {
  return (
  <container>
    <div className="blur">
      <div className="card1">
        <img className="image" src={Image} alt="Saly-42"/>
        <p className="text">Fast and Easy</p>
        <p className="subtext">AVIEW guarantees a 24-hour turnaround on subtitle and 48 hours on dubbed content</p>
      </div>
    </div>

    <div className="card2">
      <img className="image2" src={Image2} alt="Saly-31"/>
      <p className="text2">Flexible</p>
      <p className="subtext2">We offer a personalized payment plan and tailor our process to your needs</p>
    </div>
  </container>
  );
}

export default Carditem 