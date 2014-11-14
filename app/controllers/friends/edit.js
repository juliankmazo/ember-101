import FriensdBaseController from './base';

export default FriensdBaseController.extend({
	actions: {
		cancel: function() {
			this.transitionToRoute('friends.show', this);
			return false;
		}
	}
});
