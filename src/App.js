import "./styles.css";
import Card from "./Card";
import Header from "./Header";

export default function App() {
  const OSarr = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const manufArr = ["Samsanug", "HTC", "Micromax", "Apple"];
  return (
    <div>
      <Header title="Mobile Operating System" />
      <Card arr={OSarr} />

      <Header title="Mobile Manufacturers" />
      <Card arr={manufArr} />
    </div>
  );
}
