export default function DetailItem({ category, icon, userScore }) {
  return (
    <li className="detail__item">
      <img src={icon} alt={`Icon for the ${category} category.`} />
      <span className="detail__category-title">{category}</span>
      <div className="detail__result-group">
        <span className="detail__result-user">{userScore}</span>
        <span className="detail__result-max"> / 100</span>
      </div>
    </li>
  );
}
