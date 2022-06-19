import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Web Development" img="card1.png" text= "Web development services help create all types of web-based software and ensure great experience for web users. At Appliconsultants, we professionally design, redesign and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates."/>
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="E-Commerce Services" img="card2.png" text="The evolution of E-commerce has facilitated several opportunities for retailers, brands and cataloguers across multitude of channels today. We are at a point of inflexion where consumer behavior and interaction points are changing the way business need to engage and conduct their operations. The disruption in existing industry value chains and economics is creating many opportunities and risks for stakeholders. It is imperative for businesses to understand their customer better and take advantage of the emerging technologies to provide seamless, personalized experiences." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Cyber Security" img="card3.png" text="In the current digital arena, where desired information is available at fingertips and accessible from anywhere at any time, data privacy and protection stand at great risk. Next-gen cybersecurity encompassing a holistic approach right from detection to protection, prevention and remediation is the need of the hour. We, at Appliconsultants, help our clients strengthen their Cybersecurity round the clock via our state-of-the-art Security Operations Center (SOC). We also enable enterprises to set up their own next-gen SOCs to effectively identify potential cybersecurity incidents, facilitating preventive action right in time." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
