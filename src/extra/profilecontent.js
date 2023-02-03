import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


export const profile=[
    {
        type:'My Profile',
        src:'/user',
        icon:<AccountCircleIcon color='blue'/>
    },
    {
        type:'Orders',
        src:'/user/orders',
        icon:<ListAltIcon/>
    },
    {
        type:'WishList',
        src:'/user/wishlist',
        icon:<FavoriteIcon/>
    },
    {
        type:'Log Out',
        src:'/login',
        icon:<ExitToAppIcon/>
    }
]