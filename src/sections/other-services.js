/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon4 from 'assets/images/icons/service4.png';
import icon5 from 'assets/images/icons/service5.png';
import icon6 from 'assets/images/icons/service6.png';
import icon7 from 'assets/images/icons/service7.png';
import icon8 from 'assets/images/icons/service8.png';
import icon9 from 'assets/images/icons/service9.png';

const data = [
  {
    id: 1,
    icon: icon4,
    moreLink: 'notices/agm',
    title: 'AGM',
    description: `The First Annual General Meeting of the Dielectrics & Electrical Insulation Chapter of IEEE Kolkata Section will be held on Thursday, January 17, 2013 at 6-15 PM.`,
  },
  {
    id: 2,
    icon: icon5,
    moreLink: 'notices/conferences',
    title: 'Conferences',
    description: `This is the flagship event of the chapter, which is in line with the present day requirements in the global scenario of various condition assessment techniques for a variety of electrical systems.`
  },
  {
    id: 3,
    icon: icon6,
    moreLink: 'notices/technical-meeting',
    title: 'Technical Meeting',
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 4,
    icon: icon7,
    moreLink: 'notices/past-program',
    title: 'Past Program',
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 5,
    icon: icon8,
    moreLink: 'notices/miscellaneous',
    title: 'Miscellaneous',
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 6,
    icon: icon9,
    moreLink: 'notices/online-support',
    title: 'Online support',
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section}>
      <br />
      <br />
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Notices"
          description="Find notice you are looking for from the following categories"
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default OtherServices;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: '10px auto 0',
    },
  },
  contentWrapper: {
    gap: ['30px 30px', '30px 30px', '30px 30px', '80px 30px'],
    display: 'grid',
    justifyContent: ['center', 'center', 'center', 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
