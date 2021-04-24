import './card.styles.css';

// eslint-disable-next-line no-undef
const Card = (props) => {
    const { monster } = props;
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="monster" />
            {/* <img src={monster.picture} alt="" /> */}
            <h2> {monster.firstName}</h2>
            <p>{monster.email}</p>
        </div>
    );
};

export default Card;
