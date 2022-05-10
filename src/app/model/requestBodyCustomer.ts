export class RequestBodyCustomer {
  constructor(
    public state: number = 0,
    public city: number = 0,
    public country: number = 0
  ) {}
}

export class RequestBodyIdCustomer {
  constructor(public idCustomer: number = 0) {}
}