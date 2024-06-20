export type params = {
    access_key:string;
    flight_status: string;
    limit:number;
    offset:number;
    flight_date: Date;
    dep_iata:string;
    arr_iata:string;
    dep_icao:string;
    arr_icao:string;
    airline_name:string;
    airline_iata:string;
    airline_icao:string;
    flight_number:number;
    flight_iata:string;
    flight_icao:string;
    min_delay_dep:number;
    min_delay_arr:number;
    max_delay_dep:number;
    max_delay_arr:number;
    arr_scheduled_time_arr:string;
    arr_scheduled_time_dep:string;
}
export interface Iparams {
    access_key?: string;
    limit?: string;
    offset?: string;
    flight_status?: string;
    flight_date?: string;
    dep_iata?: string;
    arr_iata?: string;
    dep_icao?: string;
    arr_icao?: string;
    airline_name?: string;
    airline_iata?: string;
    airline_icao?: string;
    flight_number?: string;
    flight_iata?: string;
    flight_icao?: string;
    min_delay_dep?: string;
    min_delay_arr?: string;
    max_delay_dep?: string;
    max_delay_arr?: string;
    arr_scheduled_time_arr?: string;
    arr_scheduled_time_dep?: string;
  }