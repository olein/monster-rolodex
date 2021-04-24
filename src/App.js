import React from 'react';
import './App.css';
import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            // eslint-disable-next-line react/no-unused-state
            searchField: '',
        };
    }

    componentDidMount() {
        fetch('https://dummyapi.io/data/api/user?limit=12', {
            headers: {
                'app-id': '6082c92d268349e4557468f1',
            },
        })
            .then((response) => response.json())
            .then((response) => this.setState({ monsters: response.data }));
    }

    handleSearch = (e) => {
        this.setState({
            searchField: e.target.value,
        });
    };

    render() {
        const { monsters, searchField } = this.state;

        const filteredMonsters = monsters.filter((monster) =>
            monster.firstName.toLowerCase().includes(searchField.toLocaleLowerCase())
        );

        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <SearchBox placeholder="Search monster" handleChange={this.handleSearch} />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
