

function NickNameResultItem({name, onDelete}) {

    const deleteItem = (e) => {
        e.preventDefault();
        onDelete();
    }

    return (
        <div className="result__item">
            <span className="intro">
                <span className="intro__left">{name}</span>
                <span className="intro__right">
                    <a href="#" onClick={deleteItem}>
                        <i className="fas fa-times" />
                    </a>
                </span>
            </span>
        </div>
    );
}

export default NickNameResultItem;