/* global kakao */
import { useEffect } from 'react';
import { Row, Card } from 'react-bootstrap';

export default function DetailMap({ props }) {
  /* 지도 */
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(props.mapy, props.mapx),
      level: 7,
    };

    const map = new kakao.maps.Map(container, options);
    map.setDraggable(false);
    map.setZoomable(false);

    new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(props.mapy, props.mapx),
    });
  }, [props.mapy]);

  return (
    <>
      <Row className="mb-3 mt-lg-5 mt-md-5 mt-sm-3 mt-4">
        <h5 className="fw-bold">위치 보기</h5>
        <Card
          id="map"
          style={{ width: '67vw', height: '35vh' }}
          className="mt-2 mb-3 m-auto ps-5"
        ></Card>
      </Row>
    </>
  );
}
