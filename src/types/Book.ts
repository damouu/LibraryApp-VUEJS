export class Book {
    private _uuid: string;
    private _totalPages: Number;
    private _title: string;
    private _publisher: string;
    private _genre: String;
    private _created_at: String;
    private _author: String;
    constructor(uuid: string, totalPages: Number, title: string, publisher: string, genre: String, created_at: String, author: String, studentIdCard: String) {
        this._uuid = uuid;
        this._totalPages = totalPages;
        this._title = title;
        this._publisher = publisher;
        this._genre = genre;
        this._created_at = created_at;
        this._author = author;
        this._studentIdCard = studentIdCard;
    }

    private _studentIdCard: String;

    get uuid(): string {
        return this._uuid;
    }

    set uuid(value: string) {
        this._uuid = value;
    }

    get studentIdCard(): String {
        return this._studentIdCard;
    }

    set studentIdCard(value: String) {
        this._studentIdCard = value;
    }

    get totalPages(): Number {
        return this._totalPages;
    }

    set totalPages(value: Number) {
        this._totalPages = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get publisher(): string {
        return this._publisher;
    }

    set publisher(value: string) {
        this._publisher = value;
    }

    get genre(): String {
        return this._genre;
    }

    set genre(value: String) {
        this._genre = value;
    }

    get created_at(): String {
        return this._created_at;
    }

    set created_at(value: String) {
        this._created_at = value;
    }

    get author(): String {
        return this._author;
    }

    set author(value: String) {
        this._author = value;
    }
}
