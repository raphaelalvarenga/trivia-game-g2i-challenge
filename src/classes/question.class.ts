import { Result } from "./result.class";

export class Question extends Result {
    private _isActive: boolean;

    constructor(category: string, type: string, difficulty: string, question: string, correct_answer: string, incorrect_answer: string[], isActive: boolean) {
        super(category, type, difficulty, question, correct_answer, incorrect_answer);

        this._isActive = isActive;
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
}