export const useSetMarker = (
  map: any,
  { latitude, longitude }: { latitude: number; longitude: number }
) => {
  if (!map) return;

  // const icon = {
  //   url: "./free-icon-record-9261360.png",
  //   size: new naver.maps.Size(512, 512),
  //   anchor: new naver.maps.Point(256, 256),
  // };
  // new naver.maps.Marker({
  //   position: new naver.maps.LatLng(latitude, longitude),
  //   map,
  //   icon,
  // });

  new naver.maps.Marker({
    position: new naver.maps.LatLng(latitude, longitude),
    map: map,
  });
};
