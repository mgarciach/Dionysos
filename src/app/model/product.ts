export interface Product {
    prodCode: number,
    prodName: string,
    brand: string,
    country: string,
    region: string,
    producer: string,
    size: string,
    prodType: string,
    variety: string,
    rating: string,
    atributos: string,
    imagen: string,
    filtro: string,
    visibility: string,
    webProduct:string
}

export interface ProductDetails {
  prodMemo: string,
  memo:string,
  brandPic: string,
  webSite: string
}

export interface Brand {
    prodBrand: number,
    brand: string,
}
export interface Country{
    codigoTabla: number,
    valor: string,
}

export interface Producer{
    prsupplier: number,
    producer: string,
}

export interface pType{
  codigoTabla: number,
  valor: string,
}

export interface Variety{
  codigoTabla: number,
  valor: string,
}

export interface Region {
    idCountry: number,
    region: string,
}
