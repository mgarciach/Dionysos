export class RequestBodyCustomer {
    state: number;
    city: number;
    country: number;

    constructor(state: number = 0, city: number = 0, country: number = 0) {
        this.state = state;
        this.city = city;
        this.country = country;
    }
}