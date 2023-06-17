

function LetterDropDownItem({letter, onClickDropDownItem}) {
    const onClickItem = (e) => {
        e.preventDefault();
        onClickDropDownItem();
    }

    return (
        <a href="#" className="dropdown-item" onClick={(e) => onClickItem(e)}>{letter}</a>
    );
}

export default LetterDropDownItem;