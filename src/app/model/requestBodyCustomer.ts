export class RequestBodyCustomer {
  constructor(
    public state: number = 0,
    public city: number = 0,
    public type: number = 0
  ) {}
}

export class RequestBodyIdCustomer {
  constructor(public idCustomer: number = 0) {}
}

export class RequestBodyGetHistoryByDates {
  constructor(
    public custId: string = '',
    public dateI: string = '',
    public dateF: string = '',
    public order: number = 2
  ) {}
}

export class RequestBodyAccountHistoryByDates {
  constructor(
    public idLocal: number = 1,
    public fechaFrom: string = '',
    public fechaTo: string = '',
    public idCustomer: string = '',
    public idProp: number = 1
  ) {}
}
