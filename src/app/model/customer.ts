export interface Customer { 
    idCustomer: number,
    custname: string,
    custaddr: string,
    city: string,
    custType: string,
    state: string,
    custphone: string,
}

export interface CustomerProfile { 
    idCustomer: number,
    custName: string,
    custAddr: string,
    city: string,
    county: string,
    state: string,
    custZip: string,
    custType: string,
    custLicense: string,
    contact: string,
    custPhone: string,
    custWebSite: string,
    custEmail: string,
}

export interface CustomerHistory { 
    invDate: string,
    invNum: string,
    brand: string,
    prodCode: string,
    prodName: string,
    invCsCst: number,
    invNumCs: number,
    invNumUn: number,
    paidyn: boolean,
    imagen: string
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
    codigoTabla: number;
    valor: string;
}

export interface City {
    codigoTabla: number;
    valor: string;
}

export interface CustType {
    codigoTabla: number;
    valor: string;
}