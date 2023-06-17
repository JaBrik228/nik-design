import NickNameResultItem from "../nickname-result-item/nickname-result-item";

function NickNameResult({data, onDelete}) {
    const results = data.map(item => <NickNameResultItem onDelete={() => onDelete(item.id)} name={item.name} key={item.id}/>)

    return (
        <div className="result">
            {results}
        </div>
    );
}

export default NickNameResult;