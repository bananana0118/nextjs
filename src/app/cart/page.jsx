import Hi from "./hi";

export default function Cart() {
  let cart = ["Tomatoes", "Pasta"];
  //deduplication 같은요청을 여러번 보내면 하나로 압축해줌
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem name={cart[0]}></CartItem>
      <CartItem name={cart[1]}></CartItem>
      <Banner content={"롯데카드"}></Banner>
      <Button color={"blue"}></Button>
      <Button color={"red"}></Button>
    </div>
  );
}

function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>;
}

function Button(props) {
  return <button style={{ backgroundColor: props.color }}>버튼</button>;
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.name}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
