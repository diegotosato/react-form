import { useState } from "react"

export default function ListItem({ title, handle }) {

    const [classToggle, setClassToggle] = useState(false)

    const [ediTitle, setEditTitle] = useState(title.title)


    function handleEdit() {
        setEditTitle('')

        setClassToggle(true)

        const inputField = document.getElementById(`${title.id}`)
        inputField.focus()


    }

    function handleConfirm() {
        if (ediTitle.length === 0) {
            setEditTitle(title.title)
        }
        setClassToggle(false)



    }



    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <input type="text" className="form-control border-0 w-50" name="edit-title" id={title.id}
                    aria-describedby="helpId" value={ediTitle} onChange={(e) => setEditTitle(e.target.value)} />
                {/* {title.title} */}

                <div className="icons d-flex">
                    {/* Bottone per eliminare la riga */}
                    <button className="btn btn-danger" onClick={handle}>
                        <i className="bi bi-trash3"></i>
                    </button>

                    <div className="edit-buttons">
                        {/* Bottone per cambiare il titolo */}
                        <button className={`btn btn-warning ms-2 ${!classToggle ? '' : 'd-none'}`} id={title.id} onClick={handleEdit}>
                            <i className="bi bi-pencil"></i>
                        </button>

                        {/* Bottone per confermare il cambiamento */}
                        <button className={`btn btn-success ms-2 ${!classToggle ? 'd-none' : ''}`} onClick={handleConfirm}>
                            <i className="bi bi-check2-circle"></i>
                        </button>
                    </div>
                </div>
            </li>
        </>
    )
}