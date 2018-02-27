export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            weight: 0,
            sex: '',
            eye_color: '',
        };
        this.handleQueryChange = this.handleQueryChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick() {
        this.props.onSearch(this.state);
    }

    handleQueryChange(event) {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        return (
            <div className="column menu">
                <div id="search-form" >
                    <div className="form-group input-group-sm">
                        <label htmlFor="height">Height:</label>
                        <input id="height" className="form-control" type="number" name="height" value={this.state.height} onChange={this.handleQueryChange} />
                    </div>
                    <div className="form-group input-group-sm">
                        <label htmlFor="weight">Weight:</label>
                        <input id="weight" className="form-control" type="number" name="weight" value={this.state.weight} onChange={this.handleQueryChange} />
                    </div>
                    <div className="form-group input-group-sm">
                        <label htmlFor="sex"> Sex:</label>
                        <select id="sex" className="form-control" name="sex" value={this.state.sex} onChange={this.handleQueryChange}>
                            <option disabled hidden value=''></option>
                            <option defaultValue value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="form-group input-group-sm">
                        <label htmlFor="eye_color">Eye color:</label>
                        <select id="eye-color"  className="form-control" name="eye_color" value={this.state.eye_color} onChange={this.handleQueryChange}>
                            <option disabled hidden value=''></option>
                            <option value="blue">Blue</option>
                            <option value="yellow">Yellow</option>
                            <option value="red">Red</option>
                            <option value="brown">Brown</option>
                            <option value="gray">Gray</option>
                            <option value="green">Green</option>
                        </select>
                    </div>
                    <input type="submit" value="Submit" onClick={this.handleBtnClick} className="btn btn-default btn-sm"/>
                </div>
            </div>);
    }
}
