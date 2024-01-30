import "./Highlight.css";
import greekSalad from "../assets/image/greek salad.jpg";

const Highlight = () => {
  return (
    <section className="hightlight">
      <header>
        <h1>This Week Special</h1>
        <button>Online Menu</button>
      </header>
      <article>
        <img src={greekSalad} alt=""></img>
        <h3>Greek Salad</h3>
        <p>
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <button>
          order delivery <span>@</span>
        </button>
      </article>
      <article>
        <img src={greekSalad} alt=""></img>
        <h3>Greek Salad</h3>
        <p>
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <button>
          order delivery <span>@</span>
        </button>
      </article>
      <article>
        <img src={greekSalad} alt=""></img>
        <h3>Greek Salad</h3>
        <p>
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <button>
          order delivery <span>@</span>
        </button>
      </article>
    </section>
  );
};
export default Highlight;
