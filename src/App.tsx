// PascalCase
// App
// HeaderHeading
// Todas as primeiras letras em maiúsculas
import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('Olá');
  return (
    <>
      <Heading />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </>
  );
}
