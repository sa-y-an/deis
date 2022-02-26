import React from 'react'
import { Component, Container } from 'theme-ui'

export default function reports() {
  return (
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
  )
}
