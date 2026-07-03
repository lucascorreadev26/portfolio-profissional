const Background = () => {
  return (
    <div className="absolute inset-0 bg-grid pointer-events-none">

      {/* Grid */}
      <div
        className="
            absolute inset-0
            bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)]
            bg-size-[60px_60px]
          "
      />

    </div>
  );
};

export default Background;