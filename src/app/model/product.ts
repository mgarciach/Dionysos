export interface Product {
    prodCode: number;
    prodName: string;
    brand: string;
    country: string;
    region: string;
    producer: string;
    size: string;
    prodType: string;
    variety: string;
    rating: string;
    imagen: string;
    filtro: string;
}

export interface Brand {
    prodBrand: number;
    brand: string;
}
export interface Country{
    codigoTabla: number;
    valor: string;
}

export interface Producer{
    prsupplier: number;
    producer: string;
}

export interface Region {
    country: number;
    region: string;
}