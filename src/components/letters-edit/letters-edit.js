import LettersItem from "../letters-item/letters-item";

function LettersEdit({nick, dropDownLetters, originalNik, onClickDropDownItem}) {
    const letters = [...nick].map((item, i) => <LettersItem 
                                                    letter={item} 
                                                    key={i} 
                                                    dropDownLetters={dropDownLetters} 
                                                    originalLetter={originalNik[i]} 
                                                    onClickDropDownItem={(id) => onClickDropDownItem(id, i)} />);

    return (
        <div className="letters">
            {letters}
        </div>
    );
}

export default LettersEdit;