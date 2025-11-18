function Introduction() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className=" h-screen relative bg-[url(/introduction/caminando_playa.JPG)] bg-cover bg-center" />
      <div className="absolute inset-x-0 bottom-10 text-white lg:relative lg:grid lg:place-content-center lg:text-black">
        <div className="grid-row">
          <p className="text-3xl font-bold text-center">
            Feliz cumpleaños amor de mi vida ❤️
          </p>
        </div>
        <div className="grid-row">
          <p className="text-base text-justify px-8 lg:px-12">
            Esta es una pequeña página que te contará nuestra linda historia de
            amor, es el segundo regalo que tengo para que podamos celebrar tu
            vida y nuestro amor. Espero que te guste mucho y que podamos seguir
            construyendo recuerdos hermosos juntos. Te amo con todo mi corazón.
          </p>
        </div>
        <div className="grid-row"></div>
      </div>
    </section>
  );
}
export default Introduction;
