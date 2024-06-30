import avatarImage from './images/avatar.png';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__container">
        <h4 className="profile__title account-title">Profile</h4>

        <div className="profile__content">
          <img
            src={avatarImage}
            alt="avatar"
            className="profile__avatar"
          />
          <form
            onSubmit={(e) => e.eventPreventDefault()}
            className="profile__form"
          >
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="profile__input"
            />
            <input
              type="text"
              id="last-name"
              placeholder="Last name"
              className="profile__input"
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="profile__input"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
