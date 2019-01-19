if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(callback,error);
  }
  else {
    alert('Tu navegador no soporta Geolocalización');
  }
  
  // Callback on get location error
  function error() {
    alert("WTF!!! ¿Estas escondido?, no puedo encontrate");
  }
  
  // Callback on get location success
  function callback(position) {
    const geo = {};
  
    geo.lat = position.coords.latitude
    geo.lng = position.coords.longitude
    console.log(`the full position object ${position}`)

  }