

function SaveNickName({onNickNameSave, onFormat}) {

    const onSave = (e) => {
        e.preventDefault();
        onNickNameSave();
    };

    const onSaveBySpace = (e) => {
        e.preventDefault();
        // if (e.target)
        console.dir(e.target)
    }

    const onNickNameFormat = (e) => {
        e.preventDefault();
        onFormat();
    }

    return (
        <div className="buttons">
            <a href="#" className="btn_dark" onClick={onNickNameFormat}>Оформить никнейм</a>
            <a href="#" onClick={onSave} className="btn_light">Отложить никнейм</a>
        </div>
    );
}

export default SaveNickName;