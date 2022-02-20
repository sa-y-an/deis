import React from "react";
import Layout from "../components/Layout2.js";
import { Container, Box } from "theme-ui";
import "./report.css";

export default function reports() {
	return (
		<Layout>
			<br />
			<br />
			<br />
			<br />
			{/*<Container>
            <div className="container" style={{minHeight : "60vh",width : "100vw"}}>
              <h2>
                Year Wise Annual Reports
              </h2>
              <Box p={2}>

                <table style={{  border: "1px solid black", padding:"2px"}}>
                  <tbody style={{padding:"5px"}} >
                    <tr style={{padding:"5px"}}>
                      <th style={{  border: "1px solid black",}}>
                        Year
                      </th>
                      <th style={{  border: "1px solid black",}}>
                        Link
                      </th>
                    </tr>
                    <tr style={{padding:"5px"}}>
                      <td style={{  border: "1px solid black",padding:"10px"}}>
                        2019
                      </td>
                      <td style={{  border: "1px solid black", padding:"10px"}}>
                        <a href="https://ewh.ieee.org/r10/calcutta/deis/doc/Annual_Report_DEIS_2018.pdf">Annual Report 2018</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </Box>
            </div>
          </Container>
  <hr /> */}
			<Container>
				<div id="report">
					<h1>Year Wise Annual Reports</h1>
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
									<a href="https://ewh.ieee.org/r10/calcutta/deis/doc/Annual_Report_DEIS_2018.pdf">
										Annual Report 2018
									</a>
								</td>
							</tr>
							<tr>
								<td>2021</td>
								<td>
									<a href="https://ewh.ieee.org/r10/calcutta/deis/doc/Annual_Report_DEIS_2018.pdf">
										Annual Report 2018
									</a>
								</td>
							</tr>
							<tr>
								<td>2020</td>
								<td>
									<a href="https://ewh.ieee.org/r10/calcutta/deis/doc/Annual_Report_DEIS_2018.pdf">
										Annual Report 2018
									</a>
								</td>
							</tr>
							<tr>
								<td>2019</td>
								<td>
									<a href="https://ewh.ieee.org/r10/calcutta/deis/doc/Annual_Report_DEIS_2018.pdf">
										Annual Report 2018
									</a>
								</td>
							</tr>
							<tr>
								<td>2018</td>
								<td>
									<a href="https://ewh.ieee.org/r10/calcutta/deis/doc/Annual_Report_DEIS_2018.pdf">
										Annual Report 2018
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Container>
		</Layout>
	);
}
