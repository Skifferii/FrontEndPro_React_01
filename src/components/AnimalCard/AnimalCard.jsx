import "./styles.css";

function AnimalCard({ animalName, species, role, animalImg, children }) {
  return (
    <div className="animal-card-wrapper">
      <h2>{animalName}</h2>
      <p>{species}</p>
      <p>{role}</p>
      <img src={animalImg} />
      {children}
    </div>
  );
}

export default AnimalCard;

// const props = {
//   animalName:
//   species:
//   role:
//   animalImg:
// }
