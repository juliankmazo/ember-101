import DS from 'ember-data';

export default DS.Model.extend({
	friend: DS.belongsTo('friend'),
  description: DS.attr('string'),
  createdAt: DS.attr('date'),
  state: DS.attr('string', {
  	defaultValue: 'borrowed'
  }),
  notes: DS.attr('string')
});
