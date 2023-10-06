// important imports:
import * as turf from "@turf/turf";
import React, { useState, useRef, useCallback } from "react";

// Files:
import { getNames } from "../../utils/getNames.js";

// json:
import geojson from "../../json/geojson.json";
import state from "../../json/state.json";

// Components:
import Map, { Source, Layer } from "react-map-gl";
import Modal from "../../Components/Modal/Modal.jsx";
import Drawerbar from "../../Components/Drawerbar/Drawerbar.jsx";

// Icons:
import FilterAltIcon from "@mui/icons-material/FilterAlt";

function MapScreen() {
  // Estado de componentes e dados:
  const [hoverInfo, setHoverInfo] = useState(null);
  const [viewState, setViewState] = useState({ longitude: -53.2, latitude: -10.9 });
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedCounty, setClickedCounty] = useState(false);
  const [clickedCodeArea, setClickedCodeArea] = useState(false);
  const [ranking, setRanking] = useState(null);

  const selectedCounty = (hoverInfo && hoverInfo.county) || "";
  const GEOFENCE = turf.circle([-52.4, -16.3], 3000, { units: "kilometers" });

  // funções:
  // Atualizar quando mexer:
  const onHover = useCallback((event) => {
    // tentando coletar dados em malhas:
    const county = event.features[0] ? event.features[0].properties.estado : "";
    const codeArea = event.feature[0]
      ? event.features[0].properties.codearea
      : "";
    const acronym = event.feature[0] ? event.feature.properties.sigla : "";

    // definindo informações de hover:
    setHoverInfo({
      county: county,
      codearea: codeArea,
      acronym: acronym,
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
  }, []);

  // pegar dados ao clicar:
  const flyToPlace = useCallback(({ longitude, latitude }, duration) => {
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      duration: duration,
    });
  }, []);

  // Definindo estilos de camada:
  const layerStyle = {
    id: "data",
    type: "fill",
    paint: {
      "fill-outline-color": [
        "case",
        ["==", ["get", "estado"], selectedCounty],
        "#0f172a",
        "#2F3F58",
      ],
      "fill-color": [
        "case",
        ["==", ["get", "estado"], selectedCounty ? selectedCounty : null],
        "#0f172a",
        "#1E293B",
      ],
      "fill-opacity": [
        "case",
        ["==", ["get", "estado"], selectedCounty ? selectedCounty : null],
        0.8,
        0.7,
      ],
    },
  };

  const mapRef = useRef();

  return (
    <>
      <Drawerbar />
    </>
  );
}

export default MapScreen;
