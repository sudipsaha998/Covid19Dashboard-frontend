export interface Covid19Stat {
    count: number;
    date: Date;
    result: any;
}
/*
export interface countryMap {
    data: Map<string, Covid19Affected>;
}
*/
export interface Covid19Affected {
    confirmed: number;
    recovered: number;
    deaths: number;
}

export interface CountryStatus {
    country: string;
    status: Covid19Affected;
}