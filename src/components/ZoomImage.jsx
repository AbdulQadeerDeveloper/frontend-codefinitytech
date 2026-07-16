import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function ZoomImage({ src }) {
  return (
    <div className="w-full h-[500px] bg-[#0D0A14] rounded-xl overflow-hidden relative">
      {/* Left fade overlay */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#0D0A14] to-transparent pointer-events-none"></div>

      {/* Right fade overlay */}
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#0D0A14] to-transparent pointer-events-none"></div>

      <TransformWrapper
        minScale={0.01}
        maxScale={8}
        wheel={{ step: 0.1 }}
        pinch={{ disabled: false }}
        doubleClick={{ disabled: true }}
        limitToWrapper={false}
      >
        <TransformComponent>
          <img
            src={src}
            alt="Screenshot"
            className="select-none"
            style={{
              width: "1300px", // Extra width for smooth side-scroll
              maxWidth: "unset",
              height: "100%",
              objectFit: "contain",
            }}
            draggable="false"
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
