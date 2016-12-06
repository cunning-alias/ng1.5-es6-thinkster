export default class Profile {
	constructor(AppConstants, $http) {
		'ngInject';

		this._AppConstants = AppConstants;
		this._$http = $http;
	}

	// retrieve a users profile
	get(username) {
		return this._$http({
			url: this._AppConstants.api + '/profiles/' + username,
			metgod: 'GET'
		}).then((res) => res.data.profile);
	}

	// follow a user
	follow(username) {
		return this._$http({
			url: this._AppConstants.api + '/profiles/' + username + '/follow',
			method: 'POST'
		}).then((res) => res.data);
	}

	// unfollow a user
	unfollow(username) {
		return this._$http({
			url: this._AppConstants.api + '/profiles/' + username + '/follow',
			method: 'DELETE'
		}).then((res) => res.data);
	}
}