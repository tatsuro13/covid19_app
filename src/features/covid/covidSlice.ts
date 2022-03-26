import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import axios from 'axios';
import dataJson from './data.json'
import dataJsonDaily from './dataDaily.json'

const apiUrl = 'https://covid19.mathdro.id/api'

type APIDATAType = typeof dataJson;
type APIDATADAILYType = typeof dataJsonDaily;

type covidStateType = {
    data: APIDATAType;
    country: string;
    dailyData: APIDATADAILYType;
}

const initialState: covidStateType = {
    data: {
        "confirmed": {
        "value": 479038300,
        "detail": "https://covid19.mathdro.id/api/confirmed"
        },
        "recovered": {
        "value": 0,
        "detail": "https://covid19.mathdro.id/api/recovered"
        },
        "deaths": {
        "value": 6118916,
        "detail": "https://covid19.mathdro.id/api/deaths"
        },
        "dailySummary": "https://covid19.mathdro.id/api/daily",
        "dailyTimeSeries": {
        "pattern": "https://covid19.mathdro.id/api/daily/[dateString]",
        "example": "https://covid19.mathdro.id/api/daily/2-14-2020"
        },
        "image": "https://covid19.mathdro.id/api/og",
        "source": "https://github.com/mathdroid/covid19",
        "countries": "https://covid19.mathdro.id/api/countries",
        "countryDetail": {
        "pattern": "https://covid19.mathdro.id/api/countries/[country]",
        "example": "https://covid19.mathdro.id/api/countries/USA"
        },
        "lastUpdate": "2022-03-26T09:20:30.000Z"
        },
    country: '', 
    dailyData: [
        {
        "totalConfirmed": 557,
        "mainlandChina": 548,
        "otherLocations": 9,
        "deltaConfirmed": 0,
        "totalRecovered": 0,
        "confirmed": {
        "total": 557,
        "china": 548,
        "outsideChina": 9
        },
        "deltaConfirmedDetail": {
        "total": 0,
        "china": 0,
        "outsideChina": 0
        },
        "deaths": {
        "total": 17,
        "china": 17,
        "outsideChina": 0
        },
        "recovered": {
        "total": 0,
        "china": 0,
        "outsideChina": 0
        },
        "active": 0,
        "deltaRecovered": 0,
        "incidentRate": 0.4510818002025252,
        "peopleTested": 0,
        "reportDate": "2020-01-22"
        },
    ],
};