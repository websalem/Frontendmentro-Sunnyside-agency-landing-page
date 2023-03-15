import Card from './Card';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import emily from '../assets/images/image-emily.jpg';
import thomas from '../assets/images/image-thomas.jpg';
import jennie from '../assets/images/image-jennie.jpg';
import cone from '../assets/images/mobile/image-gallery-cone.jpg';
import milkB from '../assets/images/mobile/image-gallery-milkbottles.jpg';
import orange from '../assets/images/mobile/image-gallery-orange.jpg';
import sugar from '../assets/images/mobile/image-gallery-sugar-cubes.jpg';

function Main() {
    return (
        <main>

            <div className='cards'>
                <Card
                    heading="Transform your brand"
                    paragraph="We are a full-service creative agency specializing in helping brands grow fast.
            Engage your clients through compelling visuals that do most of the marketing for you."
                    button="Learn more"

                />
                <Card />
                <Card
                    heading="Stand out to the right audience"
                    paragraph="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build
                and extend your brand in digital places."
                    button="Learn more"
                />
                <Card />
                <Card
                    heading="Graphic design"
                    paragraph="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential
             clients' attention."
                />
                <Card
                    heading="Photography"
                    paragraph="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
                />
            </div>
            <div className="testimonials">
                <h1>Client testimonials</h1>
                <div className='testimonial-cards'>
                    <Testimonials
                        img={emily}
                        paragraph="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                        name="Emily R."
                        title="Marketing Director"
                    />
                    <Testimonials
                        img={thomas}
                        paragraph="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
                        name="Thomas S."
                        title="Chief Operating Officer"
                    />
                    <Testimonials
                        img={jennie}
                        paragraph="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                        name="Jennie F."
                        title="Business Owner"
                    />
                </div>
            </div>
            <div className='gallery'>
                <Gallery img={milkB} />
                <Gallery img={orange} />
                <Gallery img={cone} />
                <Gallery img={sugar} />
            </div>
        </main >
    )
}
export default Main;