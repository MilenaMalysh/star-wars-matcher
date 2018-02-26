import CharacterView from 'CharacterView/CharacterView';
import SearchBar from 'SearchBar/SearchBar';
import SocialNetworkBtns from "./components/SocialNetworkBtns/SocialNetworkBtns";
import { withAlert } from 'react-alert'

class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.state = { tags: ['JavaScript', 'CSS' ] };
    // }
    constructor(){
        super();
        this.state = {
            characters: [],
            yourCharacter: {
                name: "",
                height: 0,
                mass: 0,
                hair_color: "",
                skin_color: "",
                eye_color: "",
            }
        };
        this.handleSearch = this.handleSearch.bind(this);
    }
    findCharacter(searchQuery){
        const charactersByHeightDiff = _.sortBy(this.state.characters, function(character){
            return Math.abs(character.height-searchQuery.height) });
        const charactersByWeightDiff = _.sortBy(this.state.characters, function(character){
            return Math.abs(character.weight-searchQuery.weight) });
        const delta = 1/(this.state.characters.length * 4);
        const scoredCharacters = _.sortBy(this.state.characters, function(character){
            let score = 0;
            if (character.gender == searchQuery.sex){score+=0.3;}
            if (character.eye_color.includes(searchQuery.eye_color)){score+=0.5;}
            score -= delta *_.findIndex(charactersByHeightDiff, function(characterByHeight) {
                return characterByHeight.name == character.name;
            });
            score -= delta *_.findIndex(charactersByWeightDiff, function(characterByWeight) {
                return characterByWeight.name == character.name;
            });
            return score;
        });
        this.setState({yourCharacter: scoredCharacters[scoredCharacters.length - 1]});
    }
    handleSearch(searchQuery){
        console.log(searchQuery);
        if (_.some(_.values(searchQuery), function(v) {return !v;})){
            this.props.alert.show('Please fill all the fields')
        }else {
            $.getJSON('https://swapi.co/api/people/')
                .then(({results}) => this.setState({characters: results}, function () {
                    this.findCharacter(searchQuery);
                }.bind(this)));
        }
    }
    render() {
        return (
            <div className="row">
                {/*<button*/}
                    {/*onClick={() => {*/}
                        {/*this.props.alert.show('Oh look, an alert!')*/}
                    {/*}}*/}
                {/*>*/}
                    {/*Show Alert*/}
                {/*</button>*/}
                <SearchBar onSearch={this.handleSearch}/>
                <CharacterView character={this.state.yourCharacter}/>
                <SocialNetworkBtns/>
            </div>
        );
    }
}
export default withAlert(App);