import Ember from 'ember';

const NUM_COLUMNS = 3;

export default Ember.Component.extend({
  groupedProducts: Ember.computed('products.[]', function() {
    const grouped = [];

    this.get('products').forEach((item, index) => {
      if (index % NUM_COLUMNS === 0) {
        grouped.pushObject([]);
      }

      grouped.get('lastObject').pushObject(item);
    });

    return grouped;
  })
});
