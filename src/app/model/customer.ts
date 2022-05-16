export interface Customer {
    idCustomer: number,
    custname: string,
    custaddr: string,
    city: string,
    custType: string,
    state: string,
    custphone: string,
    visibility: string
}

export interface CustomerProfile {
    idCustomer: number,
    custName: string,
    custAddr: string,
    county: string,
    custZip: string,
    custLicense: string,
    contact: string,
    custPhone: string,
    custWebSite: string,
    custEmail: string,
    idCity: number,
    idType: number,
    idState: number
}
export interface CustomerHistory {
    idCustomer: number,
    custname: string,
    brand: string,
    prodType: string,
    year: number,
    month: number,
    cases: number,
    units: number,
    prodCode: number,
    prodname: string,
    invdate: string,
    invcscst: number
}

export interface AccountHistory {
    invNum: string,
    paidYn: boolean,
    invDate: string,
    brand: string,
    prodCode: string,
    prodName: string,
    invCsCst: number,
    invNumCs: number,
    invNumUn: number,
    invTotal: number
}
export interface State {
    codigoTabla: number,
    valor: string,
}

export interface City {
    codigoTabla: number,
    valor: string,
}

export interface CustType {
    codigoTabla: number,
    valor: string,
}
