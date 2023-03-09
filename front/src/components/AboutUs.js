import { FaTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import React from 'react';
import './aboutus.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

function AboutUs() {
    return (
        <>
            <Header />
            <main>
                <section class="page-section " id="team">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="team-member">
                                    <img class="mx-auto rounded-circle" src="/image/profil.png" alt="..." />
                                    <h4>Courmont Luka</h4>
                                    <p class="text-muted">Team Leader / Back-end Developer</p>
                                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><FaTwitter /></a>
                                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><FaFacebook /></a>
                                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><FaLinkedinIn /></a>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="team-member">
                                    <img class="mx-auto rounded-circle" src="/image/profil.png" alt="..." />
                                    <h4>Lhermitte Kilian</h4>
                                    <p class="text-muted">Back-end developer</p>
                                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><FaTwitter /></a>
                                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><FaFacebook /></a>
                                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><FaLinkedinIn /></a>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="team-member">
                                    <img class="mx-auto rounded-circle" src="/image/profil.png" alt="..." />
                                    <h4>Hans Kevas</h4>
                                    <p class="text-muted">Front-end Developer</p>
                                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><FaTwitter /></a>
                                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><FaFacebook /></a>
                                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><FaLinkedinIn /></a>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="team-member">
                                    <img class="mx-auto rounded-circle" src="/image/profil.png" alt="..." />
                                    <h4>Monteiro Hugo</h4>
                                    <p class="text-muted">Graphic Designer</p>
                                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><FaTwitter /></a>
                                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><FaFacebook /></a>
                                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><FaLinkedinIn /></a>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="team-member">
                                    <img class="mx-auto rounded-circle" src="/image/profil.png" alt="..." />
                                    <h4>Zee Je Lee</h4>
                                    <p class="text-muted">Front-end Developer</p>
                                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><FaTwitter /></a>
                                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><FaFacebook /></a>
                                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default AboutUs;