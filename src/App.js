import {useState} from 'react';
import Nome from './Components/Nome'

function App() {
  const [Aluno,setAluno]=useState('Aluno')

  function handleChangeName(){
    setAluno('Márcio')
  }

  return(
    <div>
      <h1>Minha Página Web!</h1>
      <h2>Olá {Aluno}</h2>
      <button onClick={()=>handleChangeName('Márcio Funes')}>Mudar Nome</button>
    </div>
  );
}

export default App;