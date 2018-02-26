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
        return <div className="column character" >
            <div id = "character">
                <img src={require("../../images/"+(this.state.character.name || "logo").replace(/ /g, '') +".jpg")}/>
                <div id="personal-information" style={(!this.state.character.name) ? {display: 'none'}: {}}>
                    <table>
                        <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{this.state.character.name}</td>
                        </tr>
                        <tr>
                            <th>Height</th>
                            <td>{this.state.character.height || 'not known'}</td>
                        </tr>
                        <tr>
                            <th>Mass</th>
                            <td>{this.state.character.weight || 'not known'}</td>
                        </tr>
                        <tr>
                            <th>Hair Color</th>
                            <td>{this.state.character.hair_color || 'not known'}</td>
                        </tr>
                        <tr>
                            <th>Skin Color</th>
                            <td>{this.state.character.skin_color || 'not known'}</td>
                        </tr>
                        <tr>
                            <th>Eye Color</th>
                            <td>{this.state.character.eye_color || 'not known'}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>;
    }
}

export default CharacterView;