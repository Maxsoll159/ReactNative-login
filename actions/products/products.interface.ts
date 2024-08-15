export interface ResponseGetProducts {
    id:          string;
    title:       string;
    price:       number;
    description: string;
    slug:        string;
    stock:       number;
    sizes:       Size[];
    gender:      string;
    tags:        Tag[];
    images:      string[];
    user:        User;
}

export enum Size {
    L = "L",
    M = "M",
    S = "S",
    Xl = "XL",
    Xs = "XS",
    Xxl = "XXL",
}

export enum Tag {
    Hats = "hats",
    Hoodie = "hoodie",
    Shirt = "shirt",
}

export interface User {
    id:       string;
    email:    Email;
    fullName: FullName;
    isActive: boolean;
    roles:    Role[];
}

export enum Email {
    Test1GoogleCOM = "test1@google.com",
}

export enum FullName {
    JuanCarlos = "Juan Carlos",
}

export enum Role {
    Admin = "admin",
}
