import Card from '../card/card.component';
import './card-list.styles.css';

// eslint-disable-next-line no-undef
const CardList = (props) => {
    const { monsters } = props;
    return (
        <div className="card-list">
            {monsters.map((monster) => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    );
};

export default CardList;
