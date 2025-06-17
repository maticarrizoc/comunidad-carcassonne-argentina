import './CommunityCard.css'

export const CommunityCard = ( {name, image, url }) => {
    return (
        <div className='community-card'>
            <a href={ url } target="_blank">
                <img className='community-card-img' src={image} alt={name} />
                <h3>{name}</h3>
            </a>
        </div>
    )
}
