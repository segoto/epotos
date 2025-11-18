import PhotoCarousel from "../../components/photo_carousel";
const imagesInThingsILoveAboutHer: { path: string; alt: string }[] = [
  {
    path: "/things_i_love_about_her/casa_cerca_frida.JPG",
    alt: "cerca_casa_frida",
  },
  {
    path: "/things_i_love_about_her/primer_trabajo_madrid.JPG",
    alt: "primer_trabajo_madrid",
  },
  {
    path: "/things_i_love_about_her/comiend_churros.JPG",
    alt: "comiend_churros",
  },
  {
    path: "/things_i_love_about_her/sonriendo_previo_salida.JPG",
    alt: "sonriendo_previo_salida",
  },
  {
    path: "/things_i_love_about_her/disney_anaheim.JPG",
    alt: "disney_anaheim",
  },
  {
    path: "/things_i_love_about_her/sonriendo_san_francisco.JPG",
    alt: "sonriendo_san_francisco",
  },
  { path: "/things_i_love_about_her/el_retiro.JPG", alt: "el_retiro" },
  { path: "/things_i_love_about_her/trajineras_mx.JPG", alt: "trajinera_mx" },
];
function ThingsILoveAboutHer() {
  return (
    <div className="min-h-screen grid grid-cols-1">
      <div className="grid-row place-content-center">
        <p className="text-3xl font-bold text-center">Lo que amo de ti 😍</p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="lg:grid flex justify-center lg:content-center">
          <PhotoCarousel images={imagesInThingsILoveAboutHer} />
        </div>
        <div className="lg:grid flex flex-col place-content-center px-10 lg:p-10">
          <ul className="list-disc space-y-4 text-lg lg:text-xl">
            <li>
              Nunca te rindes y siempre das lo mejor de ti para lograr cumplir
              todos tus sueños.
            </li>
            <li>
              Siempre me apoyas y me ayudas a ser cada día una mejor persona.
            </li>
            <li>
              Tu inteligencia, que siempre me asombra y me hace ver el mundo con
              otros ojos.
            </li>
            <li>
              La forma en la que siempre haces que cualquier momento juntos sea
              mágico
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ThingsILoveAboutHer;
