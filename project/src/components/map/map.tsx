/* eslint-disable no-console */
import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/use-map';
import { Cities } from '../../mocks/city';
import { Offers } from '../../mocks/offers';
import { useAppSelector } from '../../types/state';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offers[],
  cities: Cities[],
  selectedPoint: Offers | undefined
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ offers, cities, selectedPoint }: MapProps): JSX.Element {
  const city = useAppSelector((state) => state.city);
  offers = useAppSelector((state) => state.offers);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markers = offers.map((point) => {
        const marker = new Marker({
          lat: point.location.lat,
          lng: point.location.lng
        });

        return marker
          .setIcon(
            selectedPoint !== undefined && point === selectedPoint
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
      return () => {
        markers.forEach((marker) => marker.removeFrom(map));
      };
    }
  }, [map, offers, selectedPoint]);

  return (
    <div
      style={{
        height: '100%'
      }}
      ref={mapRef}
    >
    </div >
  );
}


export default Map;
