import React from 'react';
import { useState } from 'react';
import Layout from '../components/Layout2.js'
import { Card, Image, Text, Box, Button, Flex, Container, Grid, Link } from 'theme-ui'
import { FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';
import data from '../../data/members.js';

export default function Members() {

  const [activeData, setActiveData] = useState(data.Y2020);

  return (
    <Layout>
      <Container as="section" id="members" sx={styles.box}>
        <Flex sx={styles.btnbox}>
          <Button mr={8} onClick={()=>setActiveData(data.Y2020)}>2020</Button>
          <Button mr={8} onClick={()=>setActiveData(data.Y2021)}>2021</Button>
          <Button onClick={()=>setActiveData(data.Y2022)}>2022</Button>
        </Flex>

        <Grid gap={2} columns={[1, 2, 3]} sx={styles.grid}>
          {activeData.map((member) => (
            <Card sx={styles.card}>
              <Image src={member.image} />
              <Box sx={styles.textBox}>
                <Text as='h3'>{member.Name}</Text>
                <Text as='h6' pt={2} sx={{color: '#6c757d'}}>{member.Position}</Text>
                <Box sx={styles.socialLinks}>
                  <Link href="#">  
                    <FaTwitter size="18px" color="#55ACEE" />
                  </Link>
                  <Link href="#">
                    <FaGithub size="18px" color="#161614" />
                  </Link>
                  <Link href="#">
                    <FaDribbble
                      size="18px"
                      color="#B2215A"
                      style={{ backgroundColor: '#E74D89', borderRadius: 20 }}
                    />
                  </Link>
                </Box>
              </Box>
            </Card>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}

const styles = {
  box:{
    pt: [105, null, null, 140, 15, null, 170],
  },
  btnbox:{
    width: ['100%', null, '75%', '50%'],
    margin: 'auto',
    justifyContent: 'space-between', 
  },
  grid:{
    padding: '50px 0 25px 0',
  },
  card:{
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    textAlign: 'center',
  },
  textBox:{
    padding: '20px 0'
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mt: [3],
    a: {
      display: 'inline-flex',
      m: [1],
    },
  },
}
