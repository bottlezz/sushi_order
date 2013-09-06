
/*
 * GET home page.
 */

exports.index = function(req, res){
  var menu=new Array();
  var cat1=new Array();
  
  cat1.push({name:'asdf',price:10.00});
  cat1.push({name:'asdf',price:10.00});
  cat1.push({name:'asdf',price:10.00});
  cat1.push({name:'asdf',price:10.00});
  menu.push({catName:'A',list:cat1});
  
  res.render('index', { title: 'Express', menu:menu});
   
};