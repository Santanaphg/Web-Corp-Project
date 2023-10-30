const appbtn = document.getElementById("api__btn");




const dhlTracking = () => {
   const respuesta = fetch('https://api-eu.dhl.com/track/shipments?trackingNumber=7777777770&service=express&originCountryCode=NZ&requesterCountryCode=GB' - H 'DHL-API-Key:DvHEXYCePpTiX6kgenTpQuCtGkOJRDqe');

   console.log(respuesta);
}


document.addEventListener("click", (e) => {
    if (e.target === appbtn) {
     
        console.log(dhlTracking());
    }
  
  });