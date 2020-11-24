import './card.styles.css'

export const Card = ({ monster }) => {
    return (
        <div className='card-container'>
            <img alt='Monster' src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
            <h3>{monster.name}</h3>
            <p>{monster.email}</p>
        </div>
    )
}