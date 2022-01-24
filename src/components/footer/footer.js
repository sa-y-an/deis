/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import Logo from 'components/logo';
import { Link } from 'components/link';
import Widget from './widget';
import { menuItems } from './footer.data';
import { rgba } from 'polished';

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Box sx={styles.footerTopInner}>
          <Box sx={styles.about}>
            <Box sx={styles.logo}>
              <Logo />
            </Box>
            <Box sx={styles.terms}>
              <Link path="#!">Terms of use</Link>
              <Text as="span">|</Text>
              <Link path="#!">Privacy</Link>
            </Box>
            <Text as="p" sx={styles.copyright}>
              Build by &copy; 
              <Link path="https://www.ieeesbnitdgp.com" sx={{color:"primary",textDecoration:"none"}}> IEEE SB NITDgp </Link>
            </Text>
          </Box>
            <div className="container">
              <h3>
                Contact Info
              </h3>
              <ul>
                <li> Email <br/> 
                <Text sx={{color:"primary",}}> sivaji@ee.jdvu.ac.in 
                </Text>  
                </li>
                <li>
                  Phone <br/> 
                  <Text sx={{color:"primary",}}>  +91 33 2414 6948
                </Text>
                 
                </li>
              </ul>
            </div>

            <div className="container">
              <h3>
                Location 
              </h3>
              <p>
              Flat No. 1E, Swati Kunj,
              3/1A Paddapukur Road
              Kolkata 700 092, India	
              </p>
            </div>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    pt: [8],
    pb: [8],
  },
  footerTopInner: {
    gap: [30, null, 50, '20px 50px', 17, 50],
    display: ['grid'],
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(4, 1fr)',
      'repeat(5, 1fr)',
    ],
  },
  footerInner: {
    borderTop: `1px solid #D9E0E7`,
    display: ['block', null, 'flex'],
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '35px 0 40px',
  },
  about: {
    display: [null, null, null, 'grid', 'block'],
    gridTemplateColumns: '205px 1fr 1fr',
    alignItems: ['center'],
    gridRow: ['3/4', null, '1/1', '3/4', 'unset'],
    gridColumn: ['1/3', null, '1/2', '1/5', 'unset'],
  },
  logo: {
    display: ['flex'],
    justifyContent: ['center', null, null, 'unset'],
    gridColumn: '1/2',
  },
  terms: {
    display: ['flex'],
    gridColumn: '3/4',
    alignItems: ['center', null, null, null, 'flex-start', 'center'],
    flexDirection: ['row', null, null, null, 'column', 'row'],
    justifyContent: [
      'center',
      null,
      'flex-start',
      'center',
      null,
      'flex-start',
    ],
    mt: [4, null, null, 0, 4],
    a: {
      color: 'heading',
      textDecoration: 'none',
    },
    span: {
      display: ['inline-flex', null, null, null, 'none', 'inline-flex'],
      m: ['0 10px'],
    },
  },
  copyright: {
    color: rgba('#0F2137', 0.6),
    fontSize: ['14px'],
    mt: [3, null, null, -31, 3],
    mr: [null, null, null, 'auto', 'unset'],
    gridColumn: '2/3',
    textAlign: ['center', null, 'left', 'center', 'left'],
  },
};
