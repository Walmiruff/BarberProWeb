export interface IArray {
array: Array<IPrecos>;
}

export interface IPrecos {
    id: string | number;
    fk: string | number ;

    formArrayPrecos: Array<Precos>;

}

export interface Precos {
    itemPropertyServico: string;
    itemPropertyPreco: string;
}
