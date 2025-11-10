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


  //array degli articoli
  const initialTitles = [
    { id: 1, title: "Benvenuto" },
    { id: 2, title: "Novità Settimana" },
    { id: 3, title: "Guide React" },
    { id: 4, title: "Trucchi CSS" }
  ]

  //destrutturizzazione dell'array per interagire dinamicamente per creare la lista
  const [titles, setTitles] = useState(initialTitles)

  //array vuoto per immagazzinare il nuovo titolo che inserisce l'utente
  const [newTitle, setNewTitle] = useState('')

  //variabile per trasformare l'input in un oggetto
  let addTitle = {
    id: titles.length + 1,
    title: newTitle
  }

  //funzione per gestire il submite al form
  function handleSubmit(e) {
    e.preventDefault()

    //quando faccio submit e l'input è vuoto, faccio comparire un alert e resetto il campo
    if (newTitle.length === 0) {

      alert('Il campo è vuoto')
      setNewTitle('')

    } else {

      //altrimenti svolgo tutta la mia funzione

      //nuovo array dove riprendo l'array di partenza e ci aggiungo alla fine il mio nuovo oggetto
      const uploadTitles = [...titles, addTitle]
      setTitles(uploadTitles)

      //reset dell'input
      setNewTitle('')

    }

  }






  return (
    <>
      {/* creo un container per titolo e lista */}
      <div className="container">

        {/* Titolo della pagina */}
        <h1>Titoli degli articoli</h1>





        {/* campo Form per inserire un nuovo titolo */}
        <form onSubmit={handleSubmit}>

          <div className="mb-3 d-flex">
            <input type="text" className="form-control" name="new-title" id="new-title"
              aria-describedby="helpId" placeholder="Inserisci un nuovo titolo" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
            <button className="btn btn-success ms-3" type="submit">Aggiungi</button>
          </div>

        </form>















        {/* Card che uso come contenitore dei titoli */}
        <div className="card">

          {/* creo la lista */}
          <ul className="list-group">

            {/* mapping dell'array per creare dinamicamente la lista */}
            {
              titles.map(title => (
                <li key={title.id} className="list-group-item">{title.title}</li>
              ))
            }

          </ul>


        </div>


      </div>
    </>
  )
}

export default App
