import { Result } from "./result.class";

export class Question extends Result {
    private _isActive: boolean;
    private _userAnswer: string;

    constructor(category: string, type: string, difficulty: string, question: string, correct_answer: string, incorrect_answer: string[], isActive: boolean, userAnswer: string) {
        super(category, type, difficulty, question, correct_answer, incorrect_answer);

        this._isActive = isActive;
        this._userAnswer = userAnswer;
    }

    toggleActive() {
        this._isActive = !this._isActive;
    }

    get isActive() {
        return this._isActive;
    }

    set isActive(isActive: boolean) {
        this._isActive = isActive;
    }

    get userAnswer() {
        return this._userAnswer;
    }

    set userAnswer(userAnswer: string) {
        this._userAnswer = userAnswer;
    }
}