import { Result } from "./result.class";

export class Response {
    private _response_code: number;
    private _results: Result[];

    constructor(response_code: number, results: Result[]) {
        this._response_code = response_code;
        this._results = results;
    }

    get response_code() {
        return this._response_code;
    }

    set response_code(response_code: number) {
        this._response_code = response_code;
    }
    get results() {
        return this._results;
    }

    set results(results: Result[]) {
        this._results = results;
    }
}