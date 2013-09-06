
/*
 * GET home page.
 */

exports.index = function(req, res){
  var menu=new Array();
  var cat1=new Array();
  
  cat1.push({name:'Kappa Roll(Cucumber)',price:1.95});
  cat1.push({name:'Tekka Roll(Tuna)',price:1.95});
  cat1.push({name:'Salmon Roll',price:1.95});
  cat1.push({name:'Tamago Roll(egg)',price:1.95});
  menu.push({catName:'Maki Sushi',list:cat1});
  
  res.render('index', { title: 'Express', menu:menu});
   
};