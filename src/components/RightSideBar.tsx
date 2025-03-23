import SearchIcon from '@/assets/Search.png';
import Profile from '@/assets/ProfilePic.png';
import nidup from '@/assets/post1.jpg';

export default function RightSideBar() {
  const contacts = [
    { name: "Lhayoum NimZel", profilePic: Profile },
    { name: "Karma N Dorji", profilePic: nidup },
    { name: "Tshewang Dorji", profilePic: Profile },
    { name: "Phendhen Norbu", profilePic: nidup },
    { name: "Kencho Pelden", profilePic: Profile },
    { name: "Sonam Dorji", profilePic: nidup },
    { name: "Kieenzang Wangmo", profilePic: Profile },
    { name: "Jigme Eudon", profilePic: nidup },
    { name: "San Gay", profilePic: Profile },
  ];

  return (
    <div className="hidden lg:block w-full lg:w-1/4 bg-white p-6 rounded-lg shadow fixed right-0 h-[calc(100vh-2rem)] overflow-y-auto mt-12">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mb-6">
        <img
          src={SearchIcon}
          alt="Search"
          className="w-5 h-5"
        />
        <input
          type="text"
          placeholder="Search contacts..."
          className="w-full bg-transparent focus:outline-none ml-2 text-sm"
        />
      </div>

      {/* Contacts List */}
      <h3 className="text-xl font-bold mb-4">Contacts</h3>
      <ul className="space-y-2">
        {contacts.map((contact, index) => (
          <li key={index}>
            <button className="w-full text-left flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100">
              <img
                src={contact.profilePic}
                alt={contact.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-bold text-gray-700">{contact.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}