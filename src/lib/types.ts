export interface Data {
    id: string;
    heavy: number;
    car: number;
    v85: number;
    latitude: number;
    longitude: number;
    timestamp: string;
    altitude: number;
    sensor_type: {
        sensor_id: number;
        name: string;
        manufacturer: string;
    };
    segment_id: string;
    distanceKm: number;
    currentLastUpdated: string;
    currentTemperature: number;
    currentUv: number;
    currentGustKph: number;
    currentCo: number;
    currentNo2: number;
    currentO3: number;
    currentSo2: number;
    currentPm2_5: number;
    currentPm10: number;
    currentUsEpaIndex: number;
    currentGbDefraIndex: number;
    p1: number;
    p2: number;
    airQuality: number;
    co_aqi: number;
    no2_aqi: number;
    o3_aqi: number;
    so2_aqi: number;
    pm25_aqi: number;
    pm10_aqi: number;
    aqi: number;
}
