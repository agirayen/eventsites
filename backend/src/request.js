import url from "url";

export default function request(req) {
//req =http.request
  const parsedUrl = url.parse(`${req.headers.host}${req.url}`, true);
  const keys = Object.keys(parsedUrl);
  keys.forEach((key) => (req[key] = parsedUrl[key]));
  // not req = http.request
}

