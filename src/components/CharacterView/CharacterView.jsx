class CharacterView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            character : {}
        }
    }
    componentDidMount() {
        // this.list = $(this.refs.list);
    }
    componentWillReceiveProps(newProps) {
        this.setState({character: newProps.character});
    }
    render() {
        return <div className="column character">
            <img id="toppanel" src={require("../../images/toppanel.jpg")} alt="some text"/>
            <img id="character-logo" style={!(this.state.character.name) ? {display: 'none'} : {}}
                 src={(this.state.character.name ? require("../../images/" +this.state.character.name.replace(/ /g, '')+ ".jpg"):"...")}/>
            <div className="information-block">
                <div id="information-text" >
                    <div className="main-question" style={(this.state.character.name) ? {display: 'none'}: {}}>Looove Star Wars?</div>
                    <div className="main-question" style={!(this.state.character.name) ? {display: 'none'}: {}}>{this.state.character.name}</div>
                    <div className="main-proposal" style={(this.state.character.name) ? {display: 'none'}: {}}>You absolutely need to know who you are from star wars!
                        <br/>We just need few information about you.
                        <br/> Please fill the form
                    </div>
                    <div id="main-proposal" style={(!this.state.character.name) ? {display: 'none'}: {}}>
                        <table>
                            <tbody>
                            <tr>
                                <th title="height"><i className="fas fa-arrows-alt-v" /></th>
                                <td>{this.state.character.height || 'not known'}</td>
                            </tr>
                            <tr>
                                <th title="weight"><i className="fas fa-weight"/></th>
                                <td>{this.state.character.weight || 'not known'}</td>
                            </tr>
                            <tr>
                                <th title="hair color"><img id="hair-style" src={require("../../images/hair-style.png")} /></th>
                                <td>{this.state.character.hair_color || 'not known'}</td>
                            </tr>
                            <tr>
                                <th title="skin color"><i className="fas fa-user" /></th>
                                <td>{this.state.character.skin_color || 'not known'}</td>
                            </tr>
                            <tr>
                                <th title="Eye color"><i className="fas fa-eye" /></th>
                                <td>{this.state.character.eye_color || 'not known'}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    }
}

export default CharacterView;