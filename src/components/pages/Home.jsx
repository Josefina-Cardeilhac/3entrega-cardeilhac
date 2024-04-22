import "bootstrap/dist/css/bootstrap.min.css" 
import "./Home.css"
const Home = () => {
  return (
    <div>
       <h1>¿Quienes somos?</h1>
        <div className="quienes-somos">
            
            <p>Somos un emprendimiento familiar que busca mejorar la calidad de vida de las personas en armonía con la naturaleza.
            En Azalea nos apasiona combinar el cuidado de la piel con la protección del medio ambiente.</p> 
            <p> Creamos productos de cosmética natural y vegana que nutren tu piel y minimizan el impacto en el planeta. </p>
               <p> Utilizamos ingredientes naturales de calidad y envases reciclables para ofrecerte una experiencia de belleza consciente.
                 Todos nuestros productos están etiquetados con claridad, brindándote información
                detallada sobre los ingredientes utilizados. </p>
                 <p>Además, estamos comprometidas con la investigación y el desarrollo continuos para garantizar que nuestras fórmulas estén a la vanguardia de la innovación en cosmética natural. </p>
             </div>    
      <h1>¿Qué contienen nuestros productos?</h1>

      <div className="container-text-center">
        <div className="row">
          <div className="col align-self-start">
            <div className="parrafo">
              <p>Nuestros Shampoos son realizados con un tensioactivo natural derivado del coco, aceites y tinturas
                naturales 100% de manera artesanal.
                Libres de parabenos, sulfatos y veganos.</p>
            </div>
            <div>
            <img className="hierbas" src="https://raw.githubusercontent.com/Josefina-Cardeilhac/tercera-preentrega/master/img/HOME1%20.JPG" alt="imágen de diferente tipos de hierbas naturales"/>
            </div>
          </div>
          <div className="col align-self-center">
            <div className="parrafo">
              <p className="aceite-de-oliva">
                El aceite de oliva, a partir del cuál elaboramos nuestro jabón de castilla, es una fuente rica de ácidos
                grasos monoinsaturados. Estos promueven la producción de prostaglandinas en el cuerpo, que desempeñan un
                papel importante en la mejora de la textura de la piel. Es adecuado para personas que tienen sensibilidad
                de la piel, como eczemas, rosácea y psoriasis.
                Es biodegradable 100%. Además, este producto está indicado con seguridad para bebés y niños pequeños, porque
                al no contener ningún derivado químico, tampoco afectará la protección natural que llevan después del
                nacimiento.</p>
            </div>
          </div>
          <div className="col align-self-end">
            <div>
            <img className="hierbas" src="https://raw.githubusercontent.com/Josefina-Cardeilhac/tercera-preentrega/master/img/HOME2.JPG" alt="imágen de frutos de rosamosqueta naturales"/>

            </div>
            <div className="parrafo">
              <p>
                La formulación de nuestros acondicionadores se basa principalmente en el propio principio activo. Los
                aceites y mantecas que contiene no están diluidos y mantienen todas sus propiedades regeneradoras e
                hidratantes.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="texto-nosotras">
        <p> El uso de productos naturales libres de sulfatos y parabenos en el cuidado de la piel ha ganado popularidad debido a sus múltiples beneficios y su impacto positivo en nuestra salud. <br /> Los sulfatos y parabenos son ingredientes químicos comunes que se encuentran en muchos productos de cuidado personal, pero su uso puede tener efectos adversos en nuestra piel y bienestar general.

          <br />Por otro lado, los parabenos son conservantes que se utilizan para prolongar la vida útil de los productos cosméticos. Aunque son efectivos para prevenir el crecimiento bacteriano, se ha sugerido que pueden interferir con el sistema hormonal y estar relacionados con problemas de salud a largo plazo. Al elegir productos naturales libres de parabenos, evitamos exponer nuestra piel a estos posibles efectos nocivos y promovemos un cuidado más saludable y seguro.

          <br />Los productos naturales, como los elaborados con ingredientes orgánicos y botánicos, ofrecen numerosos beneficios para la piel. Estos ingredientes contienen vitaminas, antioxidantes y nutrientes que ayudan a nutrir y revitalizar la piel, promoviendo su hidratación, elasticidad y luminosidad natural. <br /> Además, al no contener sustancias químicas agresivas, son menos propensos a causar reacciones alérgicas y suaves para todo tipo de piel, incluyendo la piel sensible.

          <br /> Al utilizar productos naturales libres de sulfatos y parabenos, estamos tomando decisiones conscientes y saludables para el cuidado de nuestra piel. <br /> Estos productos ofrecen una alternativa más segura y amigable con el medio ambiente, al mismo tiempo que nos brindan beneficios visibles y duraderos. Siempre es importante
        </p>
      </div>
    </div>
  );
}

export default Home;
