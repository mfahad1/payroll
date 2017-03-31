export default function getQueryParams() {
  const qd = {};
  if (location.search) {
    location.search.substr(1).split('&').forEach(item => {
      let [k, v] = item.split('=');
      v = v && decodeURIComponent(v);
      qd[k] = v;
    });
  }
  return qd;
}
