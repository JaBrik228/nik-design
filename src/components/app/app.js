import { Component } from "react";
import NickNameCreator from "../nickname-creator/nickname-creator";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nickname: '',
            originalNik: '',
            styledNum: [],
            data: []
        }
        this.nextId = 1;
        this.alphabet = {
            a: ['𝓪', '🅐', '₳'],
            b: ['𝓫', '🅑', '฿'],
            c: ['𝓬', '🅒', '₵'],
            d: ['𝓭', '🅓', 'Đ'],
            e: ['𝓮', '🅔', 'Ɇ'],
            f: ['𝓯', '🅕', '₣'],
            g: ['𝓰', '🅖', '₲'],
            h: ['𝓱', '🅗', 'Ⱨ'],
            i: ['𝓲', '🅘', 'ł'],
            j: ['𝓳', '🅙', 'J'],
            k: ['𝓴', '🅚', '₭'],
            l: ['𝓵', '🅛', 'Ⱡ'],
            m: ['𝓶', '🅜', '₥'],
            n: ['𝓷', '🅝', '₦'],
            o: ['𝓸', '🅞', 'Ø'],
            p: ['𝓹', '🅟', '₱'],
            q: ['𝓺', '🅠', 'Q'],
            r: ['𝓻', '🅡', 'Ɽ'],
            s: ['𝓼', '🅢', '₴'],
            t: ['𝓽', '🅣', '₮'],
            u: ['𝓾', '🅤', 'Ʉ'],
            v: ['𝓿', '🅥', 'V'],
            w: ['𝔀', '🅦', '₩'],
            x: ['𝔁', '🅧', 'Ӿ'],
            y: ['𝔂', '🅨', 'Ɏ'],
            z: ['𝔃', '🅩', 'Ⱬ'],
        };
    }

    onNickNameInput = (nickname) => {
        const {styledNum} = this.state;
            this.setState({nickname: [...nickname].map((item, i) => {
                if (!this.alphabet[item.toLowerCase()]) {
                    return item;
                }
    
                const availableLetters = this.alphabet[item.toLowerCase()];
                const randomPos = typeof styledNum[i] !== 'undefined' && availableLetters[styledNum[i]] ? styledNum[i] : this.getRandomIntInclusive(0, availableLetters.length - 1);
                styledNum[i] = randomPos;
                return availableLetters[randomPos];
            }).join(''), originalNik: nickname});
    }

    onNickNameSave = () => {
        this.setState(({data}) => {
            if (this.state.nickname.length <= 0) {
                return {data};
            }
            const newNick = {
                name: this.state.nickname,
                id: this.nextId++
            };
            return {data: [...data, newNick]};
        });
    }

    onDelete = (id) => {
        this.setState(({data}) => {
            return {data: data.filter(item => item.id !== id)};
        })
    }

    getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }

    dropDownLetters = (letter) => {
        return this.alphabet[letter.toLowerCase()] ?? [ letter ];
    }

    onClickDropDownItem = (id, letterIndex) => {
        this.setState(({styledNum}) => {
            const newArr = styledNum.map((item, i) => {
                if (i === letterIndex) {
                    return item = id;
                }
                return item;
            });

            return {styledNum: newArr};
        }, () => this.onNickNameInput(this.state.originalNik));
    };

    onFormat = () => {
        this.setState({styledNum: []}, () => this.onNickNameInput(this.state.originalNik));
    }


    render() {
        const {data, nickname, originalNik} = this.state;

        return (
            <section id="main" className="main">
                <div className="container">
                    <div className="row">
                        <NickNameCreator data={data} 
                                        onNickNameInput={this.onNickNameInput}
                                        onNickNameSave={this.onNickNameSave}
                                        nick={nickname} 
                                        originalNik={originalNik}
                                        onDelete={this.onDelete}
                                        dropDownLetters={this.dropDownLetters}
                                        onClickDropDownItem={this.onClickDropDownItem} 
                                        onFormat={this.onFormat} />
                    </div>
                </div>
            </section>
        );
    }
}

export default App;