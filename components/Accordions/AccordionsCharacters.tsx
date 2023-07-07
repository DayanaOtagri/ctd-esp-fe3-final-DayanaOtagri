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
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            margin: '5px'
          }}
        >
          <Typography
            sx={{
              fontWeight: '600',
              color: "#305f8f"
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {Array.isArray(characters) && characters.map((character: any, index: number) => (
            <Typography key={index}>
              <Link href={`/personajes/${character.id}`}>
                {character.name}
              </Link>
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionsCharacters;
