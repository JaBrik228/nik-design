import { Component } from "react";

class NickNameInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nickname: ''
        }
    }

    onInputChange = (e) => {
        this.setState({nickname: e.target.value});
        this.props.onNickNameInput(e.target.value);
    }

    onSaveBySpace = (e) => {
        if (e.code === 'Enter') {
            this.props.onNickNameSave();
        }
    }

    render() {
        const {nickname} = this.state

        return <input type="text" className="nick" value={nickname} onChange={this.onInputChange} onKeyDown={this.onSaveBySpace} placeholder="Введите ваш ник"/>;
    }
}

export default NickNameInput;