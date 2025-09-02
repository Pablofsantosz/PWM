import React from "react";
import Head from "@/components/Head";
import Exemplo from "@/components/Exemplo";
import MyButton from "@/components/MyButton";
import "./index.css";


export default function Home() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton/>
      <Head />
      <Exemplo />
      <p>This is a simple example of a Next.js application.</p>
      <p>Feel free to explore the code and modify it as you wish!</p>
    </div>
  );
}
