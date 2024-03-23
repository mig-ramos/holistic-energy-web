import React, { useEffect } from "react";
import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef,
  InfoWindow,
} from "@vis.gl/react-google-maps";

interface MapaProps {
  lat: number;
  lng: number;
  apiKey: string;
  info?: string;
}

export function Mapa({ apiKey, lat, lng, info }: MapaProps) {
  const [markerRef, marker] = useMarkerRef();

  useEffect(() => {
    if (!marker) {
      return;
    }
  }, [marker]);

  return (
    <APIProvider apiKey={apiKey}>
      <Map zoom={17} center={{ lat, lng }}>
        <Marker ref={markerRef} position={{ lat, lng }} />
        <InfoWindow position={{ lat, lng }}>{info}</InfoWindow>
      </Map>
    </APIProvider>
  );
}
