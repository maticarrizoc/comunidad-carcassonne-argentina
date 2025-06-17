import { Link } from 'react-router-dom';

import './NewCard.css'

export const NewCard = ({ id, title, parragraphs, image, link }) => {

    const previewText = Array.isArray(parragraphs)
        ? parragraphs.find(p => typeof p === 'string')
        : '';

    return (
        <article className='new-card'>
            <img className='new-card-img' src={image[0]} alt="" />
            <div className='new-card-text'>
                <h2>{title}</h2>
                <p>{previewText}</p>
                <Link to={`/noticias/${id}`} className='new-card-link'>Leer más</Link>
            </div>
        </article>
    )
}
