import React, { FormEvent } from 'react'

export function App() {
  const [value, setValue] = React.useState('')

  function onChange(event: FormEvent) {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    const myValueInLocalStorage = String(data.myValueInLocalStorage)
    
    // A gente busca pelo valor atraves da chave.
    // 3 instancias que podem acontecer: 1° se a chave não existir ainda, ou seja se ela não for setada e tentar remover ela da como undefined em string 'undefined' 
    // 2° se a chave for criada mas sem nenhum valor passado a chave fica com valor null/em branco ou se ela foi criada e removida posteriormente quando tenta dar um getItem da um resultado de null/em branco
    // 3° se tudo der certo é possivel capturar e remover essa chave tranquilamente, com isso, é preciso ser feito uma validação, caso o setItem esteja recebendo um valor dinamicamente, que consiste ver se esta recebendo um valor nulo ou undefined para setar no setItem
    //                    Chave:                 Valor
    localStorage.setItem('myValueInLocalStorage', myValueInLocalStorage)

    setValue(myValueInLocalStorage)
  }

  function consult(chave: String) {
    alert(
      localStorage.getItem(chave as string)
    )
  }

  function deletee(chave: String) {
    alert(
      // A gente remove não so o valor, mas sim toda a chave
      localStorage.removeItem(chave as string)
    )
  }


  return (
    <form onSubmit={onChange}>
      <h1>Hello React with Local Storage!</h1>

      <input
        type="text"
        name="myValueInLocalStorage"
        id="myValueInLocalStorage"
      />
      <button type="submit">Logar</button>
      <button
        type="button"
        onClick={() => {
          deletee('myValueInLocalStorage')
        }}
      >
        Remover
      </button>
      <button
        type="button"
        onClick={() => {
          consult('myValueInLocalStorage')
        }}
      >
        Buscar
      </button>

      <p>{value}</p>
    </form>
  )
}
