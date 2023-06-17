import NickNameInput from "../nickname-input/nickname-input";
import SaveNickName from "../save-nickname/save-nickname";
import LettersEdit from "../letters-edit/letters-edit";
import NickNameResult from "../nickname-result/nickname-result";

function NickNameCreator({onNickNameInput, data, onNickNameSave, nick, onDelete, dropDownLetters, originalNik, onClickDropDownItem, onFormat}) {
    return (
        <div className="col-lg-8">
            <h1>Оформление ников</h1>
            <NickNameInput onNickNameInput={onNickNameInput} onNickNameSave={onNickNameSave} />
            <SaveNickName 
                onNickNameSave={onNickNameSave}
                onFormat={onFormat} />
            <LettersEdit nick={nick} dropDownLetters={dropDownLetters} originalNik={originalNik} onClickDropDownItem={(id, letterIndex) => onClickDropDownItem(id, letterIndex)} />
            <NickNameResult data={data} 
                           onDelete={onDelete} />
        </div>
    )
}

export default NickNameCreator;