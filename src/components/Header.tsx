import facebook from '@/assets/logo.jpg';
import home from '@/assets/home.png';
import video from '@/assets/vedio.webp';
import group from '@/assets/groups.png';
import market from '@/assets/market.png';
import game from '@/assets/game.jpg';
import messnger from '@/assets/messenger.jpg';
import notification from '@/assets/notification.png';
import account from '@/assets/account.jpg';

export default function Header() {
  return (
    <div className="bg-white p-4 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side: Facebook Logo and Search Bar */}
        <div className="flex items-center">
          {/* Facebook Logo */}
          <img
            src={facebook}
            alt="Facebook Logo"
            className="h-8 mr-4"
          />
          
          {/* Search Bar */}
          <div className="max-w-md">
            <input
              type="text"
              placeholder="Search Facebook"
              className="w-full bg-gray-100 rounded-full px-4 py-2 focus:outline-none text-sm"
            />
          </div>
        </div>

        {/* Middle: Icons */}
        <div className="flex items-center space-x-25 -ml-23">
          {/* Home Icon */}
          <div className="relative group">
            <img src={home} alt="Home" className="w-8 h-8 hover:opacity-80 transition-opacity" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Home
            </span>
          </div>
          {/* Video Icon */}
          <div className="relative group">
            <img src={video} alt="Video" className="w-8 h-8 hover:opacity-80 transition-opacity" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Video
            </span>
          </div>
          {/* Group Icon */}
          <div className="relative group">
            <img src={group} alt="Groups" className="w-8 h-8 hover:opacity-80 transition-opacity" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Groups
            </span>
          </div>
          {/* Market Icon */}
          <div className="relative group">
            <img src={market} alt="Market" className="w-8 h-8 hover:opacity-80 transition-opacity" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Market
            </span>
          </div>
          {/* Game Icon */}
          <div className="relative group">
            <img src={game} alt="Games" className="w-8 h-8 hover:opacity-80 transition-opacity" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Games
            </span>
          </div>
        </div>

        {/* Right Side: Icons */}
        <div className="flex items-center space-x-6">
          {/* Messenger Icon */}
          <div className="relative group">
            <img src={messnger} alt="Messenger" className="w-8 h-8 hover:opacity-80 transition-opacity" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Messenger
            </span>
          </div>
          {/* Notification Icon */}
          <div className="relative group">
            <img src={notification} alt="Notifications" className="w-8 h-8 hover:opacity-80 transition-opacity" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Notifications
            </span>
          </div>
          {/* Account Icon */}
          <div className="relative group">
            <img src={account} alt="Account" className="w-8 h-8 hover:opacity-80 transition-opacity" />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}