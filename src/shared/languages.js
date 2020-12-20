import React from 'react';
import Image from '../components/Image';

import uk from '../assets/images/flags/uk.svg';
import es from '../assets/images/flags/es.svg';
import fr from '../assets/images/flags/fr.svg';
import ru from '../assets/images/flags/ru.svg';

export default [
  { id: 'en', content: 'English', icon: <Image src={uk} alt="English" /> },
  { id: 'es', content: 'Español', icon: <Image src={es} alt="Español" /> },
  { id: 'fr', content: 'Francais', icon: <Image src={fr} alt="Francais" /> },
  { id: 'ru', content: 'русский', icon: <Image src={ru} alt="русский" /> },
];
