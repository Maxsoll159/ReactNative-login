export interface ResponseAuth {
    id:       string;
    email:    string;
    fullName: string;
    isActive: boolean;
    roles:    string[];
    token:    string;
}
