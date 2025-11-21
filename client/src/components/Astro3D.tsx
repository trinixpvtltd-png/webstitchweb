import Spline from "@splinetool/react-spline";

export default function Astro3D() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      <Spline
        scene="https://prod.spline.design/eZn5uITXdyfkhQ12/scene.splinecode"
        style={{
          width: "100%",
          height: "100%",
          minHeight: "100vh",
        }}
      />
    </div>
  );
}
