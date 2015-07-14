/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  findById: function (req, res) {
    var id = req.param('id');
    User.findById(id, function (err, user) {
    	if(err)
            res.json({error:err});
        if(user == '')
            res.notFound();
        else
            res.json({userData:user});
    });
  }

};

