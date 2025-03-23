import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface CreatePostProps {
  profilePic: string; // 
}

export default function CreatePost({ profilePic }: CreatePostProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      {/* Post Input Area */}
      <div className="flex items-center space-x-4">
        <img
          src={profilePic}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <Input type="text" placeholder="What’s on your mind, Norbu?" className="flex-1" />
      </div>

      {/* Live Video, Photo/Video, Feeling/Activity Buttons */}
      <div className="mt-4 flex justify-between">
        {/* Live Video Button */}
        <Button variant="ghost" className="flex items-center space-x-2">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png" 
            alt="Live Video"
            className="w-5 h-5"
          />
          <span>Live video</span>
        </Button>

        {/* Photo/Video Button */}
        <Button variant="ghost" className="flex items-center space-x-2">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png" 
            alt="Photo/Video"
            className="w-5 h-5"
          />
          <span>Photo/video</span>
        </Button>

        {/* Feeling/Activity Button */}
        <Button variant="ghost" className="flex items-center space-x-2">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png" 
            alt="Feeling/Activity"
            className="w-5 h-5"
          />
          <span>Feeling/activity</span>
        </Button>
      </div>
    </div>
  );
}