class FollowBtnCtrl {
	constructor() {
		'ngInject';

	}
}

let FollowBtn= {
	bindings: {
		user: '='
	},
	controller: FollowBtnCtrl,
	templateUrl: 'components/buttons/follow-btn.html'
};

export default FollowBtn;