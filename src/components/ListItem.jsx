export default function ListItem({ title, handle }) {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center">

                {title.title}

                <div className="icons">
                    {/* Bottone per eliminare la riga */}
                    <button className="btn btn-danger" onClick={handle}>
                        <i className="bi bi-trash3"></i>
                    </button>

                    {/* Bottone per cambiare il titolo */}
                    <button className="btn btn-warning ms-2">
                        <i className="bi bi-pencil"></i>
                    </button>
                </div>
            </li>
        </>
    )
}