"use client"
import { ChangeEvent } from "react"

export default function Home() {
  const readFile = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files)
    if(!event.target.files) {
      throw new Error();
    }
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.readAsBinaryString(file)

    reader.onload = function() {
      console.log(reader.result);
    }
  }

  return (<div className="w-screen h-screen flex justify-center items-center">
    <input type="file" onChange={readFile}></input>
  </div>)
}
