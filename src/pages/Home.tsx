import Header from '@/components/Header';
import LeftSideBar from '@/components/LeftSideBar';
import Middle from '@/components/Middle';
import RightSideBar from '@/components/RightSideBar';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen pt-12">
      <Header />

      <div className="container mx-auto p-4 flex gap-4">
        {/* Left Navigation Bar */}
        <LeftSideBar />

        {/* Middle Content */}
        <Middle />

        {/* Right Contacts Section */}
        <RightSideBar />
      </div>
    </div>
  );
}