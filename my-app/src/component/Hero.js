import "./Hero.css";
import restauranfood from "../assets/image/restauranfood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <aside>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes with a modern twist.
        </p>
        <Link to="booking">
          <button>Reserve a Table</button>
        </Link>
      </aside>
      <div>
        <img src={restauranfood} alt="" />
      </div>
    </section>
  );
};
export default Hero;
