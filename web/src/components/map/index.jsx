import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './styles.css';

function ChangeMapCenter({ selectedCoordinates }) {
  const map = useMap();

  useEffect(() => {
    if (selectedCoordinates) {
      map.setView(selectedCoordinates, 14, { animate: true, duration: 0.6 });
    }
  }, [selectedCoordinates, map]);

  return null;
}

export default function PetShopMap({ petshops, selectedPetshopId, onSelectMarker }) {
  const defaultCenter = [-23.5505, -46.6333];

  const markerRefs = useRef({});

  const currentSelectedPetshop = petshops.find(p => String(p._id) === String(selectedPetshopId));
  const selectedCoordinates = currentSelectedPetshop
    ? [currentSelectedPetshop.latitude, currentSelectedPetshop.longitude]
    : null;

  useEffect(() => {
    if (selectedPetshopId && markerRefs.current[selectedPetshopId]) {
      markerRefs.current[selectedPetshopId].openPopup();
    }
  }, [selectedPetshopId]);

  const createCustomIcon = isSelected => {
    return L.divIcon({
      className: 'custom-leaflet-icon',
      html: `
        <div class="marker-pin shadow ${isSelected ? 'bg-primary active-pin' : 'bg-secondary'}">
          <span class="mdi mdi-paw text-white"></span>
        </div>
      `,
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -32],
    });
  };

  return (
    <div className="w-100 h-100 position-relative">
      <MapContainer
        center={defaultCenter}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        <ChangeMapCenter selectedCoordinates={selectedCoordinates} />

        {petshops?.map(petshop => {
          const isSelected = String(petshop._id) === String(selectedPetshopId);

          return (
            <Marker
              key={petshop._id}
              position={[petshop.latitude, petshop.longitude]}
              icon={createCustomIcon(isSelected)}
              ref={el => {
                if (el) markerRefs.current[petshop._id] = el;
              }}
              eventHandlers={{
                click: () => {
                  onSelectMarker(petshop._id);
                },
              }}
            >
              <Popup>
                <div className="text-dark p-1">
                  <b className="d-block mb-1">{petshop.nome}</b>
                  <span className="badge bg-success">Aberto</span>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
