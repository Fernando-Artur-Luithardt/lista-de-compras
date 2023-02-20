import { useState } from "react"

export default function Tarefas(props) {
  
  const [produtos, setProdutos] = useState(props.produtos || [])
  const [nome, setNome] = useState('')
  const [valor, setValor] = useState('')
  let [lastId, setLastId] = useState(0)
  let [valorTotal, setValorTotal] = useState(0)

  function addProduto() {
    setLastId(lastId + 1);
    produtos.push({
      nome: nome,
      valor: valor,
      id: lastId,
    })
    atualizaValorTotal()
  }

  //Tentar calcular pela change de produtos
  function atualizaValorTotal() {
    let sum = 0;
    produtos.map(item => {
      sum += parseFloat(item.valor);
    });
    setValorTotal(sum);
    return sum;
  }

  const renderTabel = () => {
    const content = [];
    produtos.map(item => {
      content.push(
        <tr key={item.id}>
          <td>{item.nome}</td>
          <td>{item.valor}</td>
          <td>Delete btn</td>
          <td>Edit btn</td>
        </tr>
      );
    });
    return content;
  };

  return <section>
    <h1>Lista de compras</h1>
    <input onChange={e => setNome(e.target.value)} type="nomeProduto"/>
    <input onChange={e => setValor(e.target.value)} type="number" id="valorProduto"/>
    <button onClick={addProduto}>add</button>
    <table className="containerCompras">
      <thead key="thead">
        <tr>
            <td>Nome</td>
            <td>Valor</td>
            <td></td>
            <td></td>
        </tr>
      </thead>
      <tbody key="tbody">
        {renderTabel()}
      </tbody>
    </table>
  </section>
}