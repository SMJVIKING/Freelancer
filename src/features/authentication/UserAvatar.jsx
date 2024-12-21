import useUser from "./useUser";

function UserAvatar() {
const {user}=useUser();
    
  return (
    <div className="/*dark:bg-purple-600*/ flex items-center gap-x-2 text-secondary-600">
      <img
        className="w-7 h-7 rounded-full object-cover object-center"
        src="/public/images/3d-simple-user-icon-png.webp"
        alt="user-account"
      />
      <span>{user?.name}</span>
    </div>
  );
}

export default UserAvatar;
