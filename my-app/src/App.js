import "./App.css";
import logo from "./assets/image/Logo.svg";
import restauranfood from "./assets/image/restauranfood.jpg";
import greekSalad from "./assets/image/greek salad.jpg";
import "@fontsource/markazi-text";
import "@fontsource/karla";

function App() {
  return (
    <>
      <header className="navigation-bar">
        <span>
          <img src={logo} alt="" />
        </span>
        <nav>
          <ul>
            <li>home</li>
            <li>about</li>
            <li>menu</li>
            <li>reservations</li>
            <li>order online</li>
            <li>login</li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <aside>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </aside>
        <div>
          <img src={restauranfood} alt="" />
        </div>
      </section>
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
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
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
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
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
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <button>
            order delivery <span>@</span>
          </button>
        </article>
      </section>
      <section className="testimonials">
        <header>
          <h1>Testimonials</h1>
        </header>
        <article></article>
        <article></article>
        <article></article>
        <article></article>
        <article></article>
      </section>
      <section className="about">
        <aside></aside>
        <div></div>
      </section>
      <footer></footer>
    </>
  );
}

export default App;
