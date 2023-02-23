import Card from "./Card";
import { dataSource } from "../data";
function CardViewer() {
  const cards = dataSource.map((item) => {
    return <Card key={item.title} item={item} />;
  });
  return <div className="CardViewer--component">{cards}</div>;
}
export default CardViewer;
