import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';

function Contact(){
    return (
        <div className="contact-container">
            <h1 id="contact">Contact</h1>
            <div className="text-div">You can send me an email anytime, I check my mailbox frequently &nbsp; <SentimentSatisfiedSharpIcon fontSize="large"/></div>
            <p className="email-p">ines@gmail.com</p>
            <p className="job-p">3D Artist</p>
        </div>
    );
}

export default Contact;
