import { Component } from "react";
import LetterDropDownItem from "../letter-drop-down-item/letter-drop-down-item";

class LetterDropDown extends Component {
    

    render() {
        const {dropDownLetters, show, originalLetter, onClickDropDownItem} = this.props;
        const styles = dropDownLetters(originalLetter).map((item, i) => <LetterDropDownItem letter={item} key={i} onClickDropDownItem={() => onClickDropDownItem(i)} />);

        return (
            <div className={show ? 'dropdown-menu show' : 'dropdown-menu'} style={{position: 'absolute', transform: 'translate3d(20px, -118px, 0px)', top: '0px', left: '0px', 'willChange': 'transform'}}>
                {styles}
            </div>
        );
    };
}

export default LetterDropDown;