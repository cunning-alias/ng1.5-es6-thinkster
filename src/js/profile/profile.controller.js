class ProfileCtrl {
  constructor(profile, User) {
    'ngInject';

    // The profile for this page, resolved by UR router
    this.profile = profile;

    // Show edit profile. Is this profile the current users
    if (User.current) {
    	this.isUser = (User.current.username === this.profile.username);
    } else {
    	this.isUser = false;
    }
  }
}


export default ProfileCtrl;
