import { Component, createRef} from "react";
import LetterDropDown from "../letter-drop-down/letter-drop-down";

class LettersItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }
        this.wrapperRef = createRef();
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.setState({clicked: false});
        }
    }

    onClickPlus = () => {
        this.setState(({ clicked }) => {
            return { clicked: !clicked };
        });
    }

    render() {
        const { letter, dropDownLetters, originalLetter, onClickDropDownItem } = this.props;
        const { clicked } = this.state;



        return (
            <div className="letters__item" ref={this.wrapperRef}>
                <div className="letters__block">{letter}</div>
                <button id="dropdownMenuButton"
                    className={dropDownLetters(originalLetter).length >= 2 ? "letters__wrap btn btn-secondary dropdown-toggle" : "d-none"}
                    type="button"
                    onClick={this.onClickPlus} >
                    <i className={"fas fa-plus"}></i>
                </button>
                {dropDownLetters(originalLetter).length >= 2 ? <LetterDropDown show={clicked}
                    letter={letter}
                    dropDownLetters={dropDownLetters}
                    originalLetter={originalLetter}
                    onClickDropDownItem={(id, letterIndex) => onClickDropDownItem(id, letterIndex)} /> : ''}
            </div>
        );
    }
}

export default LettersItem;