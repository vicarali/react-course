import "./App.css";
import MemoryGame from "./components/MemoryGame.jsx";

const images = [
  {
    url: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1546842931-886c185b4c8c",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1520763185298-1b434c919102",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1442458017215-285b83f65851",
    id: 4,
  },
  {
    url: "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
    id: 5,
  },
  {
    url: "https://images.unsplash.com/photo-1591181520189-abcb0735c65d",
    id: 6,
  },
];

function App() {
  return <MemoryGame images={images} />;
}

export default App;
