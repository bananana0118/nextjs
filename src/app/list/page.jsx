"use client";
import Image from "next/image";
import { useState } from "react";

export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];

  let [count, setCount] = useState([0, 0, 0]);

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((product, i) => {
        return (
          <div key={i} className="food">
            <Image src={`/food${i}.png`} alt="사진" width={100} height={100} />
            <h4>{product} $40</h4>
            <span>{count[i]}</span>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i]++;
                setCount(copy);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i]--;
                setCount(copy);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
