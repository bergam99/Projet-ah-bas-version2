export interface Products {
    id: number;
    productName: string;
    image: string;
    description: string;
    price: number;
    isDispo: boolean;
}

export const PRODUCTS: Products[] = [
    {
        id: 1,
        productName: "Collants Colorés",
        image: "assets/img/imageProduit.png",
        description: "Assortiments de collants colorés unis et épais pour passer un hiver joyeux",
        price: 15,
        isDispo: true
    },
    {
        id: 2,
        productName: "opal",
        image: "assets/img/opal.png",
        description: "Collant gris a reflet opal. Montrez ainsi au monde que vous êtes une vraie pière précieuse",
        price: 20,
        isDispo: true
    },
    {
        id: 3,
        productName: "Roberta",
        image: "assets/img/roberta.png",
        description: "Cyclistes mi longs de couleurs chair, idéal sour les jupes ou les robre pour prévenir des brulures au niveau des cuisses",
        price: 10,
        isDispo: true
    },
        
]