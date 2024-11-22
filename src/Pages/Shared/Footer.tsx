import { FOOTER_BACKGROUND, BACKGROUND_COLOR } from '@/utils/constants.json';
import FooterContent from '@/pages/Shared/FooterContent';
const Footer = () => {
    return (
        <footer style={{backgroundColor: FOOTER_BACKGROUND, color: BACKGROUND_COLOR,
        width: '100%',
        padding: '1rem 0',
        height: '100%',
        marginTop: 40
            }}
            >

        <FooterContent />
        </footer>
    );
}

export default Footer;