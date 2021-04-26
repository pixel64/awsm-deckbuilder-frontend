export class User {
    private readonly _name: string;
    private readonly _token: string;
    private readonly _loggedIn: boolean;

    constructor(name: string, token: string, loggedIn: boolean) {
        this._name = name;
        this._token = token;
        this._loggedIn = loggedIn;
    }


    get name(): string {
        return this._name;
    }

    get token(): string {
        return this._token;
    }

    get loggedIn(): boolean {
        return this._loggedIn;
    }
}
