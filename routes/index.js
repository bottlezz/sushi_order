
/*
 * GET home page.
 */

exports.index = function(req, res){
  var menu=new Array();
  var cat1=new Array();
  cat1.push({name:'Kappa Roll(Cucumber)',price:1.95});
  cat1.push({name:'Tekka Roll(Tuna)',price:1.95});
  cat1.push({name:'Salmon Roll',price:1.95});
  cat1.push({name:'Kanpyo Roll(Cooked Dried Squash)',price:1.95});
  cat1.push({name:'Oshinko Roll(Japanese Pickle)',price:1.95});
  cat1.push({name:'Avocado Roll(Avo, Cucumber)',price:2.50});
  cat1.push({name:'Negitoro Roll(Tuna & Green Onion)',price:2.75});
  cat1.push({name:'Negihama Roll(Hamachi & Green Onion)',price:2.75});
  cat1.push({name:'Wild Salmon Roll',price:2.75});
  cat1.push({name:'Tobico Roll(Flying fish roe)',price:2.75});
  //cat1.push({name:'',price:});
  
  
  
  
  var cat2=new Array();
  cat2.push({name:'Tamago(Egg)',price:1.00});
  cat2.push({name:'Inari(Bean Curd)',price:1.00});
  cat2.push({name:'Hokigai(Surf Clam)',price:1.00});
  cat2.push({name:'Tai(Snapper)',price:1.00});
  
  var cat3=new Array();
  var cat4=new Array();
  var cat5=new Array();
  var cat6=new Array();
  var cat7=new Array();
  
  menu.push({catName:'Maki_Sushi',list:cat1});
  menu.push({catName:'Nigiri_Sushi',list:cat2});
  menu.push({catName:'Tempura',list:cat3});
  menu.push({catName:'Starters',list:cat4});
  menu.push({catName:'Sashimi',list:cat5});
  menu.push({catName:'Temaki',list:cat6});
  menu.push({catName:'UDon_Noodle_Rice_Bowl',list:cat7});
  
  res.render('index', { title: 'Express', menu:menu});
  
  
   
};