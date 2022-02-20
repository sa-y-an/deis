import React from 'react';
import Layout from '../components/Layout2.js';
import { Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { rgba } from 'polished';


export default function activities() {
  return (
        <Layout>
          <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <SectionHeading
            sx={styles.heading}
            title="Miscellaneous"
            description="Get your info tests delivered at home collect a sample from the your progress tests."
          />    
          <table class="container">
					<thead>
						<tr>
							<th>
								<h1>Year</h1>
							</th>
							<th>
								<h1>Link</h1>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>2022</td>
							<td>
								<a href="#">
									Dummy Link 
								</a>
							</td>
						</tr>
						<tr>
							<td>2021</td>
							<td>
								<a href="#">
									Dummy Link 
								</a>
							</td>
						</tr>
						<tr>
							<td>2020</td>
							<td>
								<a href="#">
                Dummy Link 
								</a>
							</td>
						</tr>
						<tr>
							<td>2019</td>
							<td>
								<a href="#">
                Dummy Link 
								</a>
							</td>
						</tr>
						<tr>
							<td>2018</td>
							<td>
								<a href="#">
                Dummy Link 
								</a>
							</td>
						</tr>
					</tbody>
				</table>      
        </Box>
      </Container>
    </Box>
        </Layout>      
      
  );
}

const styles = {
  section: {
    position: 'relative',
    pt: [105, null, null, 140, 15, null, 170],
    pb: [8, null, null, 0],
    zIndex: 0,
    ':before': {
      backgroundColor: rgba('#FFF5ED', 0.5),
      content: ['none', null, null, `''`],
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 72,
      zIndex: -1,
    },
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  heading: {
    mb: [30],
    maxWidth: [null, null, null, 500, 560, 730],
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57],
    },
    p: {
      fontSize: [1, null, null, 3],
      lineHeight: [1.87, null, null, 2.33],
    },
  },
  illustration: {
    display: ['block', null, null, 'flex'],
    position: 'relative',
    img: {
      display: ['none', null, null, 'block'],
      maxWidth: ['90%'],
      m: ['0 auto'],
    },
  },
  buttonWrapper: {
    textAlign: ['center'],
    position: ['static', null, null, 'absolute'],
    left: '50%',
    top: 0,
    transform: ['unset', null, null, 'translateX(-50%)'],
  },
};

