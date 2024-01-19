import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {ListGroup} from "react-bootstrap";

export const SocialMedia = () => {
    return (
            <ListGroup horizontal>
                <ListGroup.Item style={{paddingLeft: 0}} className="border-0"><FaLinkedin /></ListGroup.Item>
                <ListGroup.Item className="border-0 pl-0"><FaGithub /></ListGroup.Item>
                <ListGroup.Item className="border-0 pl-0"><FaInstagram /></ListGroup.Item>
                <ListGroup.Item className="border-0 pl-0"><FaXTwitter /></ListGroup.Item>
            </ListGroup>
    )
}