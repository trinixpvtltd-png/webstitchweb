import Spline from "@splinetool/react-spline";

export default function Universe3D() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <Spline scene="https://prod.spline.design/HXhNa1rgPt9uqdV2/scene.splinecode" />
      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          width: "200px",
          height: "60px",
          backgroundColor: "#000000",
          zIndex: 999999,
        }}
      />
    </div>
  );
}
