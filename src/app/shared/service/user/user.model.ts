export interface User {
    id: number | string;
    fk: number | string;
    txt_NomeSalao: string;
    txt_NomeResp: string;

    txt_pais: string;
    txt_End: string;
    txt_CEP: string;
    txt_Cidade: string;
    txt_UF: string;
    txt_Numero: string;

    txt_Cel: string;
    txt_Tel: string;
    txt_email: string;

    lat: number;
    long: number;

    url: string;
    urlLogo: string;
}

