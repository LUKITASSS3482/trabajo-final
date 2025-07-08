function ResourceCard({ resource }) {
  return (
    <div className="card">
      <h3>{resource.name}</h3>
      <p>Status: {resource.status}</p>
      <p>Especie: {resource.species}</p>
      <p>Género: {resource.gender}</p>
      <img src={resource.image} alt={resource.name} width="150" />
    </div>
  );
}

export default ResourceCard;
