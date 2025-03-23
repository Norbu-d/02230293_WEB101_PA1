import friends from '@/assets/friends.png';
import memories from '@/assets/memories.png';
import groups from '@/assets/group1.png';
import marketplace from '@/assets/marketplace.jpg';
import videos from '@/assets/vedio1.png';
import fund from '@/assets/fund.png';
import Seemore from '@/assets/more.png';
import Events from '@/assets/event.png';
import ProfilePic from '@/assets/ProfilePic.png';
import saved from '@/assets/save.jpg';

export default function LeftSideBar() {
  return (
    <div className="hidden md:block w-full md:w-1/4 bg-white p-6 rounded-lg shadow fixed h-[calc(100vh-2rem)] overflow-y-auto mt-12">
      {/* BOB with Profile Picture */}
      <div className="flex items-center space-x-3 mb-6">
        <img
          src={ProfilePic}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <h2 className="text-xl font-semibold">BOB</h2>
      </div>

      {/* Navigation List */}
      <ul className="space-y-2">
        {[
          { icon: friends, text: "Friends" },
          { icon: memories, text: "Memories" },
          { icon: saved, text: "Saved" },
          { icon: groups, text: "Groups" },
          { icon: videos, text: "Videos" },
          { icon: marketplace, text: "Marketplace" },
          { icon: "https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/eECk3ceTaHJ.png", text: "Feeds" },
          { icon: Events, text: "Events" },
          { icon: fund, text: "Fundraisers" },
          { icon: Seemore, text: "See More" },
        ].map((item, index) => (
          <li key={index}>
            <button className="w-full text-left flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100">
              <img
                src={item.icon}
                alt={item.text}
                className="w-7 h-7"
              />
              <span className="text-base font-medium">{item.text}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}