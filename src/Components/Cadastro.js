import { useState,useEffect } from "react";

function Cadastro() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([
    "Pagar a conta de Luz",
    "Estudar Programação",
    "Enviar a Tarefa"
  ]);

  const tarefasStorage = localStorage.getItem('@tarefa');
  const [nome, setNome] = useState("");
  const [corFundo, setCorFundo] = useState("#fff");

  // Recupera nome do usuário
useEffect(() => {
    const nomeSalvo = localStorage.getItem("@nomeUsuario");
    if (nomeSalvo) {
      setNome(nomeSalvo);
    } else {
      const nomeUsuario = prompt("Qual seu nome?");
      if (nomeUsuario) {
        setNome(nomeUsuario);
        localStorage.setItem("@nomeUsuario", nomeUsuario);
      }
    }

    const tarefasStorage = localStorage.getItem("@tarefa");
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  // Salva tarefas no localStorage
  useEffect(()=>{
    if(tarefasStorage){
        setTarefas(JSON.parse(tarefasStorage));
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('@tarefa', JSON.stringify(tarefas));
  },[tarefas]);


  useEffect(() => {
    document.body.style.backgroundColor = corFundo;
  }, [corFundo]);
  

  function handleRegistro(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput("");
  }

  function handleCorFundo(cor) {
    setCorFundo(cor);
  }

  return (
    <div>
      <h1>{nome} sua Lista de Tarefas</h1>

      <form onSubmit={handleRegistro}>
        <label>Nome da tarefa: </label>
        <br />
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <br />

        <button type="submit">Registro</button>
      </form>
      <br />
      <br />

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

      <h2>Escolha uma cor de fundo:</h2>
      <label>
        <input
          type="radio"
          name="cor"
          value="#FFD700"
          onChange={() => handleCorFundo("#FFD700")}
        />
        Dourado
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="cor"
          value="#ADD8E6"
          onChange={() => handleCorFundo("#ADD8E6")}
        />
        Azul Claro
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="cor"
          value="#90EE90"
          onChange={() => handleCorFundo("#90EE90")}
        />
        Verde Claro
      </label>
    </div>
  );
}
export default Cadastro;
