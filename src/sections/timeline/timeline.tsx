import events from "./events";
import TimelineEvent from "./timeline_event";

function Timeline() {
  return (
    <div className="bg-slate-50">
      <p className="text-3xl font-bold text-center pt-8">Nuestra historia 🥰</p>
      <div className="relative max-w-4xl mx-auto px-4 py-16">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-300" />
        {events.map((event) => (
          <TimelineEvent key={event.title} {...event} />
        ))}
      </div>
    </div>
  );
}
export default Timeline;
