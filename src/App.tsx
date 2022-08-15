import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <section
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <section>
        <h1>iPhone 13 Pro Max 256GB</h1>
        <h2>2599 AED</h2>
      </section>
      <section>
        <Spline scene="https://prod.spline.design/jx-FkcOIT3d0JgB6/scene.splinecode" />
      </section>
    </section>
  );
}
