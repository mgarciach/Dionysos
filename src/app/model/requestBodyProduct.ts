export class RequestBodyProduct {

    prodclass: number ;
    country: number ;
    prodType: number ;
    prodVariety: number ;
    producer: number ;
    prodBrand: number ;
    region: string ;

    constructor(prodclass: number =0 ,country: number =0,prodType: number =0,prodVariety: number =0,producer: number =0,prodBrand: number =0,region: string ='string') {
        this.prodclass = prodclass;
        this.country = country;
        this.prodType = prodType;
        this.prodVariety = prodVariety;
        this.producer = producer;
        this.prodBrand = prodBrand;
        this.region = region;
    }

}
