import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {HomeIcon, CollectionIcon, BadgeCheckIcon, SearchIcon, LightningBoltIcon, UserIcon} from "@heroicons/react/outline";

const Header = () => {
    const icons = [
        {
            id: 1,
            title: 'HOME',
            icon: HomeIcon
        },
        {
            id: 2,
            title: 'TRENDING',
            icon: LightningBoltIcon
        },
        {
            id: 3,
            title: 'VERIFIED',
            icon: BadgeCheckIcon
        },
        {
            id: 4,
            title: 'COLLECTIONS',
            icon: CollectionIcon
        },
        {
            id: 5,
            title: 'SEARCH',
            icon: SearchIcon
        },
        {
            id: 6,
            title: 'ACCOUNT',
            icon: UserIcon
        },




    ]
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                {icons.map(icon => (
                    <HeaderItem key={icon.id} title={icon.title} Icon={icon.icon}/>
                ))}
            </div>
            <Image
                src='https://links.papareact.com/ua6'
                width={200}
                height={100}
                className='object-contain'
                alt={}
            />
        </header>
    );
};

export default Header;
