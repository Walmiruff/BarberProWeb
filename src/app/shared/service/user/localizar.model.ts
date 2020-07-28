export interface ILocalizar {
    resourceSets: Array<Resources>;
}


export interface Resources {
    resources: Array<GeocodePoints>;
}


export interface GeocodePoints {
    geocodePoints: Array<Coordinates>;
}


export interface Coordinates {

    coordinates: Array<number>;

}



