import { useParams } from 'react-router-dom';

const PetDetail = () => {
  const { id } = useParams();

  return <div>Pet id: {id}</div>;
};

export default PetDetail;
