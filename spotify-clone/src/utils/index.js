function getParams() {
  const hash = window.location.hash.substr(1);
  const params = new URLSearchParams(hash);
  return params;
}

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export { getParams, isObjectEmpty };
