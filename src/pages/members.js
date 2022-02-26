import React from 'react';
import { useState } from 'react';
import Layout from '../components/Layout2.js'
import { Card, Image, Text, Box, Button, Flex, Container, Grid, Link } from 'theme-ui'
import { FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';
import data from '../../data/members.js';
// import Team from '../sections/our-team'

export default function Members() {

  const [activeData, setActiveData] = useState(data.Y2020);

  return (
    <Layout>
      {/* <Team/>*/}
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

// import React, { Component } from "react";
// import { Link, Redirect, Switch, Route } from "react-router-dom";
// import "../common.css";
// import "./members.css";
// import Batch2022 from "../../data/batch2022";
// import Batch2023 from "../../data/batch2023";
// import Batch2024 from "../../data/batch2024";

// import nkr from "../../media/faculty/NKRsir.jpg";
// import ac from "../../media/faculty/ACsir.jpg";
// import ck from "../../media/faculty/CKsir.jpg";

// export default class Memebrs extends Component {
//    constructor(props) {
//       super(props);
//       this.activate = this.activate.bind(this);
//       this.toggleDockClass = this.toggleDockClass.bind(this);
//       this.state = {
//          activedata: Batch2022,
//          isactive2022: true,
//          isactive2023: false,
//          isactive2024: false,
//          imageHash: Date.now(),
//          dockstatus: false,
//          togglestring: ">",
//       };
//    }

//    componentDidMount() {}
//    activate(year) {
//       this.setState({
//          isactive2022: false,
//          isactive2023: false,
//          isactive2024: false,
//       });
//       if (year == 2023) {
//          this.setState({
//             activedata: Batch2023,
//             isactive2023: true,
//          });
//       } else if (year == 2024) {
//          this.setState({
//             activedata: Batch2024,
//             isactive2024: true,
//          });
//       } else {
//          this.setState({
//             activedata: Batch2022,
//             isactive2022: true,
//          });
//       }
//    }

//    toggleDockClass() {
//       this.setState((state) => ({
//          dockstatus: !state.dockstatus,
//       }));
//       if (this.state.dockstatus) {
//          this.setState({
//             togglestring: ">",
//          });
//       } else {
//          this.setState({
//             togglestring: "<",
//          });
//       }
//    }

//    render() {
//       return (
//          <div className="text-center main-container">
//             <div className="jumbotron banner border-0 rounded-0">
//                <h1 className="display-3 text-light"> Members </h1>
//             </div>
//             <div className="container mt-4">
//                <div className="facad">
//                   <div className="facad-card-group">
//                      <div className="card facad-card">
//                         <div className="image-wrapper">
//                            <img
//                               className="card-img-top"
//                               key={Date.now()}
//                               src={nkr}
//                               alt="Profile_pic"
//                            />
//                         </div>

//                         <div className="card-body text-center">
//                            <h4 className="card-title title heading2">
//                               {" "}
//                               Nirmal Kumar Roy{" "}
//                            </h4>
//                            <p className="lead text-muted"> Branch Counselor</p>
//                            <p className="lead text-muted small">
//                               Professor,Department of Electrical Engineering
//                               <p>NIT Durgapur,West Bengal,India</p>
//                            </p>
//                         </div>
//                      </div>
//                   </div>
//                   <div className="facad-card-group row ml-0 mr-0">
//                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
//                         <div className="card facad-card">
//                            <div className="image-wrapper">
//                               <img
//                                  className="card-img-top"
//                                  key={Date.now()}
//                                  src={ac}
//                                  alt="Profile_pic"
//                               />
//                            </div>

//                            <div className="card-body text-center">
//                               <h4 className="card-title title heading2">
//                                  {" "}
//                                  Aniruddha Chandra{" "}
//                               </h4>
//                               <p className="lead text-muted">
//                                  Faculty Advisor{" "}
//                               </p>
//                               <p className="lead text-muted small">
//                                  Professor ,Department of Electronics and
//                                  Communication Engineering
//                                  <p>NIT Durgapur,West Bengal,India</p>
//                               </p>
//                            </div>
//                         </div>
//                      </div>
//                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
//                         <div className="card facad-card">
//                            <div className="image-wrapper">
//                               <img
//                                  className="card-img-top"
//                                  key={Date.now()}
//                                  src={ck}
//                                  alt="Profile_pic"
//                               />
//                            </div>

//                            <div className="card-body text-center">
//                               <h4 className="card-title title heading2">
//                                  {" "}
//                                  Chiranjib Koley{" "}
//                               </h4>
//                               <p className="lead text-muted">Faculty Advisor</p>
//                               <p className="lead text-muted small">
//                                  Professor,Department of Electrical Engineering
//                                  <p>NIT Durgapur,West Bengal,India</p>
//                               </p>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//             </div>
//             <div className="container mt-4">
//                <div className="button-wrapper d-flex justify-content-around">
//                   <button
//                      className={`btn pl-3 pr-3 btn-primary ${
//                         this.state.isactive2022 ? "active btn-secondary" : ""
//                      }`}
//                      onClick={() => this.activate(2022)}
//                   >
//                      {" "}
//                      Final Year{" "}
//                   </button>
//                   <button
//                      className={`btn pl-3 pr-3 btn-primary ${
//                         this.state.isactive2023 ? "active btn-secondary" : ""
//                      }`}
//                      onClick={() => this.activate(2023)}
//                   >
//                      {" "}
//                      Third Year{" "}
//                   </button>
//                   <button
//                      className={`btn pl-3 pr-3 btn-primary ${
//                         this.state.isactive2024 ? "active btn-secondary" : ""
//                      }`}
//                      onClick={() => this.activate(2024)}
//                   >
//                      {" "}
//                      Second Year{" "}
//                   </button>
//                   {/* <button
//                      className={`btn pl-3 pr-3 btn-primary ${
//                         this.state.isactive2024 ? "active btn-secondary" : ""
//                      }`}
//                      onClick={() => this.activate(2024)}
//                   >
//                      {" "}
//                      First Year{" "}
//                   </button> */}
//                </div>
//                <nav className="side-dock">
//                   <div
//                      className={`side-dock-options ${
//                         this.state.dockstatus ? "active-dock" : ""
//                      }`}
//                   >
//                      <button
//                         className={`pl-3 pr-3 ${
//                            this.state.isactive2022 ? "active-nav-link" : ""
//                         }`}
//                         onClick={() => this.activate(2022)}
//                      >
//                         {" "}
//                         Final Year{" "}
//                      </button>
//                      <button
//                         className={`pl-3 pr-3 ${
//                            this.state.isactive2023 ? "active-nav-link" : ""
//                         }`}
//                         onClick={() => this.activate(2023)}
//                      >
//                         {" "}
//                         Third Year{" "}
//                      </button>
//                      <button
//                         className={`pl-3 pr-3 ${
//                            this.state.isactive2024 ? "active-nav-link" : ""
//                         }`}
//                         onClick={() => this.activate(2024)}
//                      >
//                         {" "}
//                         Second Year{" "}
//                      </button>
//                      {/* <button
//                         className={`pl-3 pr-3 ${
//                            this.state.isactive2024 ? "active-nav-link" : ""
//                         }`}
//                         onClick={() => this.activate(2024)}
//                      >
//                         {" "}
//                         First Year{" "}
//                      </button> */}
//                   </div>
//                   <button
//                      className="dock-opener"
//                      onClick={this.toggleDockClass}
//                   >
//                      {" "}
//                      {this.state.togglestring}{" "}
//                   </button>
//                </nav>
//                <div className="row m-1 ">
//                   {this.state.activedata &&
//                      this.state.activedata.map((member, index) => (
//                         <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
//                            <div className="card">
//                               <div className="image-wrapper-team">
//                                  <img
//                                     className="card-img-top"
//                                     key={Date.now()}
//                                     src={`${member.img.default}`}
//                                     alt="Profile_pic"
//                                  />
//                               </div>

//                               <div className="card-body text-center">
//                                  <h4 className="card-title title heading2">
//                                     {" "}
//                                     {member.name}{" "}
//                                  </h4>
//                                  <p className="lead text-muted small">
//                                     {" "}
//                                     {member.post}
//                                  </p>
//                               </div>
//                            </div>
//                         </div>
//                      ))}
//                </div>
//             </div>
//          </div>
//       );
//    }
// }
