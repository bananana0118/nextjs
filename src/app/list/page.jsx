import Image from "next/image";

export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((product, i) => {
        return (
          <div key={i} className="food">
            <Image src={`/food${i}.png`} alt="사진" width={100} height={100} />
            <h4>{product} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
