import React from "react";
import Layout from "../components/Layout2.js";
import { Container, Box } from "theme-ui";
import "./report.css";
import Report from "../components/reports.js";

export default function reports() {
	return (
		<Layout>
			<Box as="section" sx={styles.section}>
				<Report/>
			</Box>
		</Layout>
	);
}

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
  