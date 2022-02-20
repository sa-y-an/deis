/** @jsx jsx */
import { useRef, useState, useEffect } from 'react';
import { jsx, Box, Container, Image , Button,Grid } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import TeamMember from 'components/cards/team-member';
import data from '../../data/team';
import { Card, images, Text } from 'theme-ui';
import './teams.css';
const OurTeam = () => {

  return (
    <Box as="section" id="team">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Container>
        <SectionHeading
          
          title="Meet our superheros"
          description="Ones who work day in and out to maintain the society !"
        />
      </Container>
      

      <Grid className='xyz' columns={[1,null,3]}>
          {data?.map((item) => (
           
              <TeamMember member={item}/>
              
          ))}
        
        </Grid>
    </Box>
    
  );
};

export default OurTeam;


