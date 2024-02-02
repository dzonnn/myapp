const HighlightCard = (image, description) => {
  return (
    <article>
      <img src={image} alt=""></img>
      <div>
        <h3>Greek Salad</h3>
        <p>{description}.</p>
        <button>
          order delivery <span>@</span>
        </button>
      </div>
    </article>
  );
};
export default HighlightCard;
