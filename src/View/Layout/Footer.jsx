import React from 'react'
import email from '../../assets/email 1.png';
import phone from '../../assets/phone-call 1.png'
const Footer = () => {
    return (
        <>
            <div className='footer_wrapper'>
                <div className='universal_container'>
                    <div className='footer_content_Wrapper'>
                        <div className='footer_div1'>
                            <h1>Marriot</h1>
                            <p>Collections</p>

                            <h5>Your Trusted Property<br />
                                & Building Management Team.<br />
                                Feel free to follow us on:
                            </h5>
                        </div>
                        <div className='footer_div2'>
                            <h6>Our Services</h6>
                            <div className='footer_links_list'>
                                <p>Residental</p>
                                <p>Industrial</p>
                                <p>CityBuild</p>
                                <p>Management</p>
                                <p>Tailored Solution</p>
                                <p>No hidden fees</p>
                            </div>
                        </div>
                        <div className='footer_div2'>
                            <h6>Navigation</h6>
                            <div className='footer_links_list'>
                                <p>Home</p>
                                <p>About Us</p>
                                <p>Management</p>
                                <p>Contact Us</p>
                                <p>Property Management</p>
                                <p>Building Management</p>
                            </div>
                        </div>
                        <div className='footer_div2'>
                            <h6>Company Address</h6>
                            <div className='footer_address_div'>
                                <p>Burwood <br />
                                    Suit 707/11-15 Deane Street ,<br />
                                    Burwood NWS 2134
                                </p>
                                <p>Perith</p>
                                <p>C02/2 Lord Sheffield Circuit,<br/>Penrith NWS 2750</p>

                                <div className='mail_address'>
                                    <img src={email}/>
                                    <p>info@citibuild.ca</p>
                                </div>

                                <div className='mail_address'>
                                    <img src={phone}/>
                                    <p>+1 8946378900</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer_copyright_div' style={{
                padding:'15px 0px'
            }}>
                <div className='universal_container d-flex justify-content-between align-items-center'>
                    <p>Copyright@2024 CityBuild. All Right Reserved.</p>
                    <p>Designed and Developed by Powermove Digital</p>
                </div>
            </div>
        </>
    )
}

export default Footer
