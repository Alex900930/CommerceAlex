import NotFound from '../not_found';

export default function Cat({ params }) {
  const { id } = params;
  if (id === 'childrens') {
    return <NotFound />;
  }

  return (
    <div>Category Component {id}</div>
  );
}
