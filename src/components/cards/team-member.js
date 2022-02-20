/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading, Link, Card, Grid} from 'theme-ui';
import { FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';


const TeamMember = ({ member }) => {
  return (
    
    <Box sx={styles.section}>
         <Card className= 'xyzz'>
                
                <Heading as="h3">{member?.name}</Heading>
               
        <Image className='imageclass' src={member?.avatar} alt={member?.name} />
      
              <Box sx={styles.about}/>
        <Text as="p">{member?.designation}</Text>
        <Box sx={styles.socialLinks}>
          {member?.socialLinks?.map((social, index) => (
            <Link href={social?.link} key={index}>
              {social?.name === 'twitter' && (
                <FaTwitter size="18px" color="#55ACEE" />
              )}
              {social?.name === 'github' && (
                <FaGithub size="18px" color="#161614" />
              )}
              {social?.name === 'dribbble' && (
                <FaDribbble
                  size="18px"
                  color="#B2215A"
                  style={{ backgroundColor: '#E74D89', borderRadius: 20 }}
                />
              )}
            </Link>
          ))}
        </Box>
        </Card>     
              
    </Box>
    
  );
};

export default TeamMember;

const styles = {
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  about: {
    mt: [4],
    textAlign: ['center', null, null, 'left'],
    h3: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: [20, null, 40, null, 32],
    },
    p: {
      color: '#7589A1',
      letterSpacing: '-0.2px',
      mt: [8],
    },
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['center', null, null, 'left'],
    mt: [3],
    a: {
      display: 'inline-flex',
      mr: [2], 
    },
  },
};
