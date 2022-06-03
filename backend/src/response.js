
export default function response(res) {
  function end(content) {  
    res.setHeader("Content-Length", content.length);
    res.status();
    res.end(content);
    return res;

  }
  res.status = (code) => {
    res.statusCode = code || res.statusCode;

  };
  res.send = (content) => {
    res.setHeader("Content-Type", "text/html");
    return end(content);
  };
  res.json = (content) => {
    try {
      content = JSON.stringify(content);
    } catch (err) {
      console.log(err);
      throw err;
    }
    res.setHeader("Content-Type", "application/json");
    return end(content);
  };
  res.redirect = (url) => {
    res.setHeader("Location", url);
    res.status(302);
    res.end();
    return res;
  };
}