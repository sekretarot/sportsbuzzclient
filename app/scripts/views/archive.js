/*global SportsBuzzClient, Backbone, JST*/

SportsBuzzClient.Views = SportsBuzzClient.Views || {};

(function () {
  'use strict';

  SportsBuzzClient.Views.Archive = Backbone.View.extend({

    template: JST['app/scripts/templates/archive.ejs'],

    tagName: 'div',

    id: 'archive',

    className: '',

    el: '#tweets-container',

    archiveData: {
      category: '',
      type: '',
      timestamp: ''
    },

    events: {
      'dp.change #archive-datetimepicker' : 'dateChanged',      
      'change .category-radio' : 'categoryChanged',
      'change .digest-radio' : 'digestTypeChanged'
    },

    initialize: function () {
      this.render();      
      this.setArchiveDataDefaults();
      this.setSubmitLink();

    },

    remove: function(){
      this.$el.empty();
      return this;
    },

    render: function () {
      // this.$('#feed').html(this.template());
      this.$('#feed').html(this.template({headerText: 'Get some stories from our archive'}));
      this.$('#archive-datetimepicker').datetimepicker({
                inline: true,
                format: 'MM/dd/YYYY'
            });
      // this.$('#header-text').html('Get some stories from our archive');
    },

    setArchiveDataDefaults: function(){
      this.archiveData.category = 'NBA';
      this.archiveData.type = 'Daily';
      this.dateChanged();
    },

    dateChanged: function() {
      if(this.$('#archive-datetimepicker').data('DateTimePicker')){
        var date = this.$('#archive-datetimepicker').data('DateTimePicker').date();
        this.archiveData.timestamp = date.unix() * 1000;
        this.setSubmitLink();
      }
    },

    categoryChanged: function(event) {      
      this.archiveData.category = event.currentTarget.parentElement.textContent;
      this.setSubmitLink();
    },

    digestTypeChanged: function(event) {
      this.archiveData.type = event.currentTarget.parentElement.textContent;
      this.setSubmitLink();
    },

    setSubmitLink: function() {
      var archiveUrl = '#archivedStories/' + this.archiveData.category + '/' + this.archiveData.type + '/' + this.archiveData.timestamp;
      this.$('#archive-submit').attr('href', archiveUrl);
    }

  });

})();
