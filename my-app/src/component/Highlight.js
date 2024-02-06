import "./Highlight.css";
import greekSalad from "../assets/image/greek salad.jpg";
import bruchetta from "../assets/image/bruchetta.svg";
import lemonDessert from "../assets/image/lemon dessert.jpg";
import { Link } from "react-router-dom";

const Highlight = () => {
  return (
    <section className="hightlight">
      <header>
        <h1>This Week Special</h1>
        <button>Online Menu</button>
      </header>
      <article>
        <img src={greekSalad} alt=""></img>
        <div>
          <h3>Greek Salad</h3>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <button>
            order delivery <span>@</span>
          </button>
        </div>
      </article>
      <article>
        <img src={bruchetta} alt=""></img>
        <div>
          <h3>Bruchetta</h3>
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <button>
            order delivery <span>@</span>
          </button>
        </div>
      </article>
      <article>
        <img src={lemonDessert} alt=""></img>
        <div>
          <h3>Lemon Dessert</h3>
          <p>
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <button>
            order delivery <span>@</span>
          </button>
        </div>
      </article>
    </section>
  );
};
export default Highlight;
