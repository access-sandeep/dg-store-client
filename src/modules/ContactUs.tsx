import { Link } from "react-router-dom";

export default function ContactUs() {
    return (
        <>
            <address>
                <strong>Twitter, Inc.</strong><br />
                1355 Market St, Suite 900<br />
                San Francisco, CA 94103<br />
                <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>

            <address>
                <strong>Mukherji, Sandeep</strong><br />
                <Link to={`mailto:sandeep.talk@gmail.com`}>sandeep.talk@gmail.com</Link>
            </address>
        </>
    )
}