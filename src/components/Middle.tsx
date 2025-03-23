import CreatePost from '@/components/CreatePost';
import Stories from '@/components/Stories';
import Post from '@/components/Post';
import ProfilePic from '@/assets/ProfilePic.png';
import NidupProfile from '@/assets/images3.jpg';
import MyPostImage from '@/assets/images2.jpg';
import SungJin from '@/assets/post1.jpg';
import Anime from '@/assets/post2.jpg';
import Luffy from '@/assets/post3.jpg';
import Itachi from '@/assets/post4.jpg';
import video from '@/assets/WIN_20230810_15_25_56_Pro.mp4';
import video2 from '@/assets/HoneyPie Live Wallpaper.mov' 

export default function Middle() {
  return (
    <div className="w-full md:w-3/4 lg:w-2/5 mx-auto space-y-4 lg:ml-[31%] mt-12 px-4 lg:px-0">
      {/* Create Post Section */}
      <CreatePost profilePic={ProfilePic} />

      {/* Stories Section */}
      <Stories />

      {/* Posts Feed */}
      <Post
        username="Nidup Dorji"
        profilePic={NidupProfile}
        postText="Let’s study and fun 😊😊😊"
        postImage={MyPostImage}
      />
      <Post
        username="BOB"
        profilePic={ProfilePic}
        postText="I had a mustache long but now I don't have it. I miss it so much, now I don't get girls either."
        postImage={ProfilePic}
      />
      <Post
        username="TW Irving"
        profilePic={SungJin}
        postText="Only for basketball, nothing else."
        postImage={SungJin}
      />
      <Post
        username="Ngawang"
        profilePic={Anime}
        postText="I always love the sunshine."
        postImage={Anime}
      />
      <Post
        username="Sangay"
        profilePic={Luffy}
        postText="My head is so big, and hence my name is Megamind."
        postImage={Luffy}
      />
      <Post
        username="Sonam"
        profilePic={Itachi}
        postText="I had admired Itachi, and for him to save his village, he sacrificed his own people, leaving only his brother and protecting him."
        postImage={Itachi}
      />
      <Post
        username="Tandin Wangchuk"
        profilePic={ProfilePic}
        postText="Check out this cool video!"
        postVideo={video}
      />
      <Post
        username="Quenny"
        profilePic={ProfilePic}
        postText="Check out this cool video!"
        postVideo={video2}
      />
    </div>
  );
}