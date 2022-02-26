/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Image } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { rgba } from 'polished';
import { LearnMore } from 'components/link';
import tabImage1 from 'assets/images/tab-illustration-1.png';
import eduList from '../../data/edu';
import memList from '../../data/mem';
import publicList from '../../data/public';
import profList from '../../data/prof';


const data = [
  {
    id: 1,
    tabTitle: 'Educational & Students',
    list: eduList
  },
  {
    id: 2,
    tabTitle: 'Membership & Seminar',
    list: memList
  },
  {
    id: 3,
    tabTitle: 'Public Affairs',
    list: publicList
  },
  {
    id: 4,
    tabTitle: 'Professional',
    list: profList
  }
];


export default function AnnouncementCard(props) {
  return(
    <Box as="section" id="why-us" sx={styles.section}>
    <Container>
      <Tabs sx={styles.tabs} animated={{ tabPane: true }}>
        {data?.map((item) => (
          <TabPane
            key={item.id}
            tab={<Heading as="h4">{item.tabTitle}</Heading>}
          >
            {item.list.map((activity) => (
              <div className="card" sx={styles.card}>
                <Image src={activity.image} alt="project" className="img" sx={styles.img}/>
                <div className="details" sx={styles.details}>
                  <Text as="h2">{activity.title}</Text>
                  <Text as="p">{activity.description}</Text>
                  <div className="txt" sx={styles.txt}>
                    <Text as="p">{activity.date}</Text>
                  </div>
                </div>
              </div>
            ))}
          </TabPane>
        ))}
      </Tabs>
    </Container>
  </Box>
  );
} 


const styles = {
  section: {
    pt: [11, null, null, 12],
    pb: [8, null, null, 9, null, 11],
  },
  tabs: {
    border: 0,
    '.rc-tabs-nav': {
      mb: [8, null, null, 9, 10, 9, 12],
    },
    '.rc-tabs-nav-wrap': {
      borderBottom: `1px solid ${rgba('#01070D', 0.1)}`,
      justifyContent: 'center',
    },
    '.rc-tabs-nav-list': {
      flexGrow: 1,
      justifyContent: 'space-evenly',
      pb: [3, null, null, 5, null, 6],
    },
    '.rc-tabs-tab-btn': {
      outline: 0,
      alignItems: 'center',
      img: {
        outline: 0,
      },
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      // m: ['0 45px'],
      h4: {
        fontFamily: 'body',
        fontSize: [0, null, null, 17, null, null, 4],
        fontWeight: 700,
        lineHeight: 1.5,
        textAlign: ['center', null, null, null, 'left'],
        whiteSpace: ['break-spaces', null, null, null, 'unset'],
      },
    },
    '.rc-tabs-tabpane': {
      // display: ['flex', null, null, 'grid'],
      flexDirection: ['column-reverse', null, null, 'unset'],
      alignItems: 'center',
      justifyContent: 'center',
      // gridTemplateColumns: [null, null, null, '0.9fr 1.1fr'],
      outline: 0,
      gap: [5, null, null, 11],
      h2: {
        color: 'heading',
        fontSize: [24, null, null, 6, 26, 8, 40],
        fontWeight: 700,
        lineHeight: [1.45, null, null, 1.5],
        letterSpacing: [null, null, null, '0.5px', null, '-1px'],
        textAlign: ['center', null, null, 'left'],
      },
      p: {
        color: 'textSecondary',
        fontSize: [1, null, null, 2, 17],
        lineHeight: [1.87, null, null, 2, 2.48],
        textAlign: ['center', null, null, 'left'],
        mt: [4],
      },
      '.list-item': {
        fontSize: [0, null, null, 1, 2],
        fontWeight: 500,
        lineHeight: [2.8],
        display: 'flex',
        alignItems: 'center',
      },
    },
  },
  list: {
    mt: [5],
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: ['repeat(2, 164px)', null, null, 'repeat(2, 180px)'],
  },
  learnMore: {
    mt: [4],
    textAlign: ['center', null, null, 'left'],
    a: {
      fontSize: [null, null, null, 1, 2],
    },
  },
  illustration: {
    display: ['flex'],
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: [null, null, null, null, null, 'center'],
    img: {
      maxWidth: ['65%', null, null, '100%', null, '90%', '100%'],
    },
  },
  title: {
    marginTop: ['50px'],
    textAlign: 'center',
    padding: '10px',
  },
  card: {
    padding: '20px',
    display: 'flex',
    backgroundColor: 'white',
    width: '95%',
    margin: '20px auto',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    '@media screen and (max-width: 769px)': {
      flexDirection: 'column',
      width: '90%'
    }
  },
  img: {
    maxHeight: '200px',
    maxWidth: 'min(250px, 100%)',
    borderRadius: '10px',
    '@media screen and (max-width: 769px)': {
      margin: 'auto',
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0 0 0 25px',
    width: '100%',

    '& h6': {
      color: '#482ff7',
      padding: '5px 0'
    },

    '@media screen and (max-width: 768px)': {
      padding: '20px 0 0 0',

      '& h4': {
        fontSize: '1.25rem'
      }
    }
  },
  txt: {
    display: 'flex',
    justifyContent: 'end',

    '& > p': {
      alignSelf: 'flex-end',
      margin: '0',
      color: '#101010'
    },

    '& > div > p': {
      margin: '0',
      color: '#606060'
    }
  },
};