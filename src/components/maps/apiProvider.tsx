import React, { useEffect } from "react";
import {
  APIProvider,
  Map,
  Marker,
  useAdvancedMarkerRef,
  InfoWindow,
} from "@vis.gl/react-google-maps";

interface MapaProps {
  lat: number;
  lng: number;
  apiKey: string;
  info?: string;
  mapId: string;
}

export function Mapa({ apiKey, lat, lng, info, mapId }: MapaProps) {
  const [marker] = useAdvancedMarkerRef();

  useEffect(() => {
    if (!marker) {
      return;
    }
  }, [marker]);

  return (
    <APIProvider apiKey={apiKey}>
        <Map zoom={17} center={{ lat, lng }} mapId={mapId}>
          <Marker position={{ lat, lng }} title={info} />
          <InfoWindow position={{ lat, lng }}>{info}</InfoWindow>
        </Map>
    </APIProvider>
  );
}
