import { useState } from "react"

function App() {

  /*
  Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo (per la lista usate un array di oggetti).

  Milestone 2
  Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog.
  Al submit del form, mostrare la lista degli articoli aggiornati.

  BONUS

  Aggiungere la possibilità di cancellare ciascun articolo utilizzando un'icona.
  Implementare la funzionalità di modifica del titolo di un post.
  Impostare il lavoro su più componenti.
  */

  const titleArticles = [
    { "id": 1, title: "Benvenuto" },
    { "id": 2, title: "Novità Settimana" },
    { "id": 3, title: "Guide React" },
    { "id": 4, title: "Trucchi CSS" },
    { "id": 5, title: "JS per Iniziare" },
    { "id": 6, title: "Debug Comune" },
    { "id": 7, title: "Errori da Evitare" },
    { "id": 8, title: "Consigli UI/UX" },
    { "id": 9, title: "Setup Progetto" },
    { "id": 10, title: "Note di Changelog" }
  ]


  const [titles, setTitles] = useState(titleArticles)

  return (
    <>
      <div className="container">
        <h1>Worka</h1>

        <div className="card">

          <ul class="list-group">
            {
              titles.map(title => (
                <li class="list-group-item">{title.title}</li>
              ))
            }
          </ul>


        </div>


      </div>
    </>
  )
}

export default App
