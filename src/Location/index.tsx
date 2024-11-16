import clsx from "clsx";
import { TitleComponent } from "../common/components/TitleComponent";
import styles from "./style.module.scss";
import { useEffect, useRef } from "react";

export function Location() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadMap = () => {
      const latitude = 37.1272947; // 위도
      const longitude = 126.8040694; // 경도

      const mapOptions = {
        center: new naver.maps.LatLng(latitude, longitude),
        zoom: 15,
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT,
        },
      };

      const map = new naver.maps.Map(mapRef.current!, mapOptions);

      // 마커 추가
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(latitude, longitude),
        map: map,
      });

      // 마커 클릭 시 초기화
      naver.maps.Event.addListener(marker, "click", () => {
        map.setCenter(new naver.maps.LatLng(latitude, longitude));
        map.setZoom(15);
      });
    };

    if (typeof naver === "undefined") {
      const script = document.createElement("script");
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=p3pzo2u89l`;
      script.onload = loadMap;
      document.body.appendChild(script);
    } else {
      loadMap();
    }
  }, []);

  return (
    <div className={styles.component}>
      <TitleComponent label="오시는 길" />
      <div className={styles.contents}>
        <div className={styles.map} ref={mapRef} />
        <div className={styles.atom}>
          <h2>{`주소`}</h2>
          <p>{`(우) 18559, 경기도 화성시 우정읍 매바위로 165번길 70-47 (주곡리)`}</p>
        </div>
        <div className={clsx(styles.atom, styles.bottom)}>
          <h2>{`전화 · 팩스`}</h2>
          <p>{`TEL. 070-8671-4120  /  FAX. 070-7589-3010`}</p>
        </div>
      </div>
    </div>
  );
}
