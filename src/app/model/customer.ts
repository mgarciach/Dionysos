export interface Customer { 
    idCustomer: number,
    custname: string,
    custaddr: string,
    city: string,
    custType: string,
    state: string,
    custphone: string,
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