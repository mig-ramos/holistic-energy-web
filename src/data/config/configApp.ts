export const APP_SERV = {
    pathBaseImages: process.env.NEXT_PUBLIC_PATH_IMAGES_SERVER,
    apiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
    lat: Number(process.env.NEXT_PUBLIC_GOOGLE_MAPS_LAT),
    lng: Number(process.env.NEXT_PUBLIC_GOOGLE_MAPS_LNG),
    phone: String(process.env.NEXT_PUBLIC_PHONE),
}