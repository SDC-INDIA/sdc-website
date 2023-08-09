// icons
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import HandshakeIcon from '@mui/icons-material/Handshake';


const heroData = [
    {
        href: "/chapters",
        Icon: CardMembershipIcon,
        color: "orange",
        text: "Our chapters"
    },
    {
        href: "/blog",
        Icon: AutoStoriesIcon,
        color: "indigo",
        text: "Blog",
    },
    {
        href: "/events",
        Icon: CalendarMonthIcon,
        color: "cyan",
        text: "Events"
    },
    {
        href: "#about",
        Icon: LocalGroceryStoreIcon,
        color: "pink",
        text: "Store"
    },
    {
        href: "/login",
        Icon: HandshakeIcon,
        color: "red",
        text: "Log In"
    },
    {
        href: "#about",
        Icon: ArrowDownwardIcon,
        color: "purple",
        text: "Get Started"
    },
];

export default heroData;