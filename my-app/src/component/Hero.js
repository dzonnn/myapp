import "./Hero.css";
import restauranfood from "../assets/image/restauranfood.jpg";

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
        <button>Reserve a Table</button>
      </aside>
      <div>
        <img src={restauranfood} alt="" />
      </div>
    </section>
  );
};
export default Hero;
