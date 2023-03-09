import { FaTwitter,FaFacebook,FaLinkedinIn } from "react-icons/fa";
import React from 'react';
import './aboutus.css';

function AboutUs() {
    return (
        <main>
            <section class="page-section bg-light" id="team">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 class="section-subheading text-muted">Text</h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src="/image/profil.png" alt="..." />
                                <h4>Parveen Anand</h4>
                                <p class="text-muted">Lead Designer</p>
                                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><FaTwitter /></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><FaFacebook /></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><FaLinkedinIn /></a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src="/image/profil.png" alt="..." />
                                <h4>Diana Petersen</h4>
                                <p class="text-muted">Lead Marketer</p>
                                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><FaTwitter /></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><FaFacebook /></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><FaLinkedinIn /></a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src="/image/profil.png" alt="..." />
                                <h4>Larry Parker</h4>
                                <p class="text-muted">Lead Developer</p>
                                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><FaTwitter /></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><FaFacebook /></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><FaLinkedinIn /></a>
                            </div>
                        </div>
                    </div>  
                    
                </div>
            </section>
        </main>
    );
}

export default AboutUs;