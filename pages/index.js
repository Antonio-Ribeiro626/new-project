import { useState } from "react";

function Home() {
    return (
        <div>
            <div>Hello world...</div>
            <Contador />
        </div>
    )
  }

function Contador(){
  const [contador, setContador] = useState(1);
  function adicionarContador(){
        setContador(contador + 1)
  }
  function diminuirContador(){
      setContador(contador - 1)
  }
  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
      <button onClick={diminuirContador}>Diminuir</button>
    </div>
  )
}

export default Home
