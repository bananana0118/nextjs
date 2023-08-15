export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((product) => {
        return (
          <div key={product} className="food">
            <h4>{product} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
