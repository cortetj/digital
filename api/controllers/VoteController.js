/**
 * VoteController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

    list: function (req, res) {
        question.find().limit(10)
        .exec(function(err, quests) {
            res.json({ success: true, questions: quests });  
        });
    },

    show: function (req, res) {
        question.findOne({id: req.id}, function(err, quest) {
            res.json({ success: true, question: quest });
        });
    },

    create: function (req, res) {
        question.create({
            title: 'Is it working?'
        }).done(function(err, quest){
            res.view();
        });
    },

    _config: {}  
};
