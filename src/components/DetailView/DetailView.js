import DetailItem from "./DetailItem/DetailItem";

export default function DetailView({ detailData }) {
  const categories = detailData.map((item) => {
    return (
      <DetailItem key={item.id} category={item.category} userScore={item.score} icon={item.icon} altText={item.alt} />
    );
  });

  return (
    <div className="detail">
      <h1 className="detail__title">Summary</h1>
      <ul className="detail__list">{categories}</ul>
      <button className="detail__btn">Continue</button>
    </div>
  );
}
