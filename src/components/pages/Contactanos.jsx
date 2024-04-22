import "bootstrap/dist/css/bootstrap.min.css";


const Contacto = () => {
  return (
    <div>
      <p>
        Contáctanos para pedidos o preguntas mediante:
        <br /> Whatsapp: +54 9 351-256 56 69
        <br /> Correo Electrónico: azaleacosmeticanatural@gmail.com
        <br /> O simplemente llena la forma inferior y nosotros nos pondremos en contacto contigo en la brevedad.
      </p>

      {/* Formulario de Bootstrap */}
      <div className="container">
        <h2>Dejanos tu consulta</h2>
        <form className="row g-3 mt-3">
          <div className="col-4">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" />
          </div>
          <div className="col-4">
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input type="text" className="form-control" id="apellido" placeholder="Ingresa tu apellido" />
          </div>
          <div className="col-4">
            <label htmlFor="teléfono" className="form-label">Teléfono</label>
            <input type="tel" className="form-control" id="teléfono" placeholder="Ingresa tu teléfono" />
          </div>
          <div className="col-12">
            <label htmlFor="mje" className="form-label">Mensaje</label>
            <textarea className="form-control" id="mje" placeholder="Dejanos tu mensaje" style={{ height: "100px" }}></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
      {/* Fin del formulario Bootstrap */}

      <div className="puntos-de-entrega">
        <h3>Punto de entrega</h3>
        <p>
          Ofrecemos opciones de entrega que se adaptan a tus necesidades.
          <br /> Hemos acordado puntos de entrega estratégicos para mayor conveniencia. Además, no te preocupes si prefieres recibir tus productos en casa, también ofrecemos envíos a domicilio.
          <br /> ¡Elige la opción que mejor te funcione y disfruta de nuestros servicios de manera cómoda y eficiente!
        </p>
      </div>

      <div className="mapa">
        <iframe
          title="Mapa de ubicación del punto de encuentro"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8399385146017!2d-64.19332045899961!3d-31.418535769700483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a32dcf5d747f%3A0x40373220b29140ac!2sPatio%20Olmos%20Shopping!5e0!3m2!1ses!2sar!4v1686513364066!5m2!1ses!2sar"
          width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contacto;
