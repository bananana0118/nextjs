"use client";
import Image from "next/image";
import React ,{ useState } from "react";
import ReactDOM from 'react-dom';
import dynamic from 'next/dynamic';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
const FroalaEditor = dynamic(
  async () => {
    const values = await Promise.all([
      import("react-froala-wysiwyg"), // must be first import since we are doing values[0] in return
      import("froala-editor/js/plugins.pkgd.min.js")
    ]);
    return values[0];
  },
  {
    loading: () => <p>LOADING!!!</p>,
    ssr: false
  })

export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];

  const config = {
    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat', 'align','markdown'],
      charCounterMax: 1000,
    }
  let [count, setCount] = useState([0, 0, 0]);

  return (
    <div>
      <FroalaEditor  config={config}/>
      <h4 className="title">상품목록!</h4>
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
