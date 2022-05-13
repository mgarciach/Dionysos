export class RequestBodyProduct {
  constructor(
    public prodclass: number = 0,
    public country: number = 0,
    public prodType: number = 0,
    public prodVariety: number = 0,
    public producer: number = 0,
    public prodBrand: number = 0,
    public region: string = 'string'
  ) {}
}

export class RequestBodyProductDetail {
  constructor(
    public prodCode: string = ''
  ) {}
}

