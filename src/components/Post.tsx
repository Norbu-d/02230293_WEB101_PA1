import { useState } from 'react';
import SendIcon from '@/assets/send.png';
import like from '@/assets/like.png';
import liked from '@/assets/liked.png';
import commentIcon from '@/assets/comment.png';
import shareIcon from '@/assets/share.png';

interface PostProps {
  username: string;
  profilePic: string;
  postText: string;
  postImage?: string;
  postVideo?: string; 
}

export default function Post({ username, profilePic, postText, postImage, postVideo }: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [shareCount, setShareCount] = useState(0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommentSubmit();
    }
  };

  const handleShare = () => {
    setShareCount(shareCount + 1);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      {/* Post Header */}
      <div className="flex items-center space-x-4">
        <img
          src={profilePic}
          alt={username}
          className="w-10 h-10 rounded-full"
        />
        <h3 className="font-bold">{username}</h3>
      </div>

      {/* Post Text */}
      <p className="mt-2">{postText}</p>

      {/* Post Media (Image or Video) */}
      {postImage && (
        <img
          src={postImage}
          alt="Post"
          className="mt-4 rounded-lg w-full"
        />
      )}
      {postVideo && (
        <div className="mt-4">
          <video controls className="w-full rounded-lg">
            <source src={postVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Like, Comment, and Share Counts */}
      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <span>{likeCount} Likes</span>
        <span>{comments.length} Comments</span>
        <span>{shareCount} Shares</span>
      </div>

      {/* Like, Comment, and Share Buttons */}
      <div className="mt-2 flex space-x-4 border-t pt-2">
        {/* Like Button */}
        <button
          onClick={handleLike}
          className="flex items-center space-x-2 flex-1 justify-center py-2 hover:bg-gray-100 rounded-lg"
        >
          <img
            src={isLiked ? liked : like}
            alt={isLiked ? 'Liked' : 'Like'}
            className="w-5 h-5"
          />
          <span className={isLiked ? 'text-blue-500' : 'text-gray-500'}>Like</span>
        </button>

        {/* Comment Button */}
        <button
          onClick={() => setShowCommentInput(!showCommentInput)}
          className="flex items-center space-x-2 flex-1 justify-center py-2 hover:bg-gray-100 rounded-lg"
        >
          <img
            src={commentIcon}
            alt="Comment"
            className="w-5 h-5"
          />
          <span className="text-gray-500">Comment</span>
        </button>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="flex items-center space-x-2 flex-1 justify-center py-2 hover:bg-gray-100 rounded-lg"
        >
          <img
            src={shareIcon}
            alt="Share"
            className="w-5 h-5"
          />
          <span className="text-gray-500">Share</span>
        </button>
      </div>

      {/* Comment Input Section */}
      {showCommentInput && (
        <div className="mt-4">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full bg-transparent focus:outline-none"
            />
            <button
              onClick={handleCommentSubmit}
              className="ml-2 flex items-center justify-center bg-blue-500 text-white rounded-full p-2"
            >
              <img
                src={SendIcon}
                alt="Send"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      )}

      {/* Display Comments */}
      <div className="mt-4 space-y-2">
        {comments.map((comment, index) => (
          <div key={index} className="text-sm text-gray-700">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
}