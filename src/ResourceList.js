import ResourceCard from './ResourceCard';

function ResourceList({ items }) {
  if (!items || items.length === 0) {
    return <p>No se encontraron resultados</p>;
  }

  return (
    <div className="resource-list">
      {items.map((item) => (
        <ResourceCard key={item.id} resource={item} />
      ))}
    </div>
  );
}

export default ResourceList;
