import PhotoCarousel, {
  type PhotoCarouselProps,
} from "../../components/photo_carousel";

export type TimelineEventType = {
  date: string;
  title: string;
  description: string;
} & PhotoCarouselProps;
function TimelineEvent(props: TimelineEventType) {
  return (
    <div className="relative pl-10 md:pl-16 mb-10">
      {/* Dot on the line */}
      <span className="absolute left-4 top-3 -translate-x-1/2 h-3 w-3 rounded-full bg-rose-500 border-2 border-white shadow-sm" />

      {/* Card */}
      <div className="bg-white/90 rounded-2xl shadow-md border border-slate-200 p-5 md:p-6">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          {props.date}
        </p>
        <h3 className="mt-1 text-xl md:text-2xl font-bold">{props.title}</h3>
        <p className="mt-2 text-sm md:text-base text-slate-600">
          {props.description}
        </p>

        {/* 🔥 Here goes your PhotoCarousel */}
        <div className="mt-4 grid place-items-center">
          <PhotoCarousel images={props.images} />
        </div>
      </div>
    </div>
  );
}
export default TimelineEvent;
