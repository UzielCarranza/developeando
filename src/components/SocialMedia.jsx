import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import {ListGroup} from "react-bootstrap";

const socialMedias = [
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/uziel-carranza-charro/' },
    { icon: <FaGithub />, link: 'https://github.com/UzielCarranza' },
    { icon: <FaTwitter />, link: 'https://twitter.com/' }
];

const renderListGroupItem = (jsxElement, index) => (
    <ListGroup.Item
        key={index}
        style={{ paddingLeft: 0 }}
        className="border-0 bg-black text-white"
    >
        <a href={jsxElement.link} target="_blank" rel="noopener noreferrer" className="text-white">
            {jsxElement.icon}
        </a>
    </ListGroup.Item>
);

export const SocialMedia = () => {
    return (
        <ListGroup horizontal>
            {socialMedias.map((element, index) =>
                renderListGroupItem({ ...element}, index)
            )}
        </ListGroup>
    );
};