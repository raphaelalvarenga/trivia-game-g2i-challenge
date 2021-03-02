export class Result {
    private _category: string;
    private _type: string;
    private _difficulty: string;
    private _question: string;
    private _correct_answer: string;
    private _incorrect_answers: string[];

    constructor(category: string, type: string, difficulty: string, question: string, correct_answer: string, incorrect_answer: string[]) {
        this._category = category;
        this._type = type;
        this._difficulty = difficulty;
        this._question = question;
        this._correct_answer = correct_answer;
        this._incorrect_answers = incorrect_answer;
    }

    get category() {
        return this._category;
    }

    set category(category: string) {
        this._category = category;
    }

    get type() {
        return this._type;
    }

    set type(type: string) {
        this._type = type
    }

    get difficulty() {
        return this._difficulty;
    }

    set difficulty(difficulty: string) {
        this._difficulty = difficulty;
    }

    get question() {
        return this._question;
    }

    set question(question: string) {
        this._question = question;
    }

    get correct_answer() {
        return this._correct_answer;
    }

    set correct_answer(correct_answer: string) {
        this.correct_answer = correct_answer;
    }

    get incorrect_answers() {
        return this._incorrect_answers;
    }

    set incorrect_answers(incorrect_answer: string[]) {
        this._incorrect_answers = incorrect_answer;
    }
}