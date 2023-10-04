import { calculateAge } from '../utils/age';
import ModuleDetails from './ModuleDetails';
import Title from './Title';

function HelloWorld() {
  const name = 'Fábio Lessa';
  const birth = '15/05/1996';
  const age = calculateAge(birth);

  return (
    <>
      <h1 style={ { color: 'red', textAlign: 'center' } }>{name}</h1>
      <p>{`Idade: ${age}`}</p>
      <Title />
      <ModuleDetails />
    </>
  );
}

export default HelloWorld;
