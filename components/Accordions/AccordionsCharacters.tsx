import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

interface AccordionsCharactersProps {
  title: string;
  characters: any[] | null;
}

const AccordionsCharacters: React.FC<AccordionsCharactersProps> = ({ title, characters }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography fontWeight="600" color="#305f8f">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {Array.isArray(characters) &&
          characters.map((character: any) => (
            <Typography key={character.id}>
              <Link href={`/Personajes/${character.id}`}>{character.name}</Link>
            </Typography>
          ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionsCharacters;
