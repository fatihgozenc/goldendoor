import ReactMapGL, {Marker}  from 'react-map-gl';
import Icon from './Icon';

const MapContainer = ({data}) => {

  const [viewport, setViewport] = React.useState({
      width: '100%',
      height: '100%',
      latitude: parseFloat(data.breitengrad),
      longitude: parseFloat(data.langengrad),
      zoom: parseFloat(data.zoomwert)
  });

  return (
    <>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZmdvemVuYyIsImEiOiJjazVoMG9tMjUwY2p1M2xueHUzaXdyY2MzIn0.i6wqAEOUFdUyKEMcrUE__Q"
        onViewportChange={(viewport) => setViewport({...viewport})}
      >
        <Marker latitude={parseFloat(data.breitengrad)} 
        longitude={parseFloat(data.langengrad)} 
        offsetLeft={0} offsetTop={0}>
          <Icon type="mapMarker"/>
        </Marker>
      </ReactMapGL>
    </>
  )
}

export default MapContainer;
