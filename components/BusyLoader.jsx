function BusyLoader({ title }) {
  return (
    <div className="flex h-screen">
      <div className="m-auto flex flex-col items-center gap-y-10 py-10">
        <span>
          <i className="fa-duotone fa-spinner-third animate-spin text-5xl"></i>
        </span>
        <span> {title} ...</span>
      </div>
    </div>
  );
}

export default BusyLoader;
