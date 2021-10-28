// Esta función solo guardará el cache dinamico.
function actualizarCacheDinamico(dynamicCache, request, response) {
  if (response.ok) {
    return caches.open(dynamicCache).then((cache) => {
      cache.put(request, response.clone());
      return response.clone();
    });
  } else {
    // aqui fallo el cache y la red
    return response;
  }
}
