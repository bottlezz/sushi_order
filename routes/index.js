
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
  cat1.push({name:'Vege. Roll(bell pepper,mango,lettus)',price:2.95});
  cat1.push({name:'California Roll',price:2.95});
  cat1.push({name:'California Roll w/Tobico',price:3.50});
  cat1.push({name:'California Roll w/real Crab meat',price:6.95});
  cat1.push({name:'Spciy Tuna Roll',price:2.95});
  cat1.push({name:'B.C. Roll',price:2.95});
  cat1.push({name:'Yam Tempura Roll(Tobico, swt. patato',price:3.75});
  cat1.push({name:'Unagi Roll(BBQ Eel',price:3.75});
  cat1.push({name:'Chopped Scallop Roll',price:3.75});
  cat1.push({name:'Spicy Chopped Scallop Roll',price:3.75});
  
  cat1.push({name:'Smoked Salmon roll(w/crab meat)',price:3.75});
  cat1.push({name:'BBQ Salmon Roll(Tobico)',price:3.95});
  cat1.push({name:'Asparagus Egg Roll(w/crab meat)',price:3.95});
  cat1.push({name:'Alaska Roll(Avocado, Tobiko Salmon)',price:3.95});
  cat1.push({name:'Smoed Salmon Cream Cheese Roll',price:3.95});
  cat1.push({name:'Ebi Roll(Cooked prawn,Tamago',price:3.95});
  cat1.push({name:'Dynamite Roll(2 prawn temp, Tobico',price:3.95});
  cat1.push({name:'Beef Teriyaki Roll',price:3.95});
  cat1.push({name:'Chicken Teriyaki Roll',price:3.95});
  cat1.push({name:'Chicken Katsu Roll(chicken cutlet)',price:3.95});
  
  cat1.push({name:'Hawaiian Beef Roll(beef,pineapple',price:3.95});
  cat1.push({name:'Bills Roll(Yam & Smoked Salmon)',price:3.95});
  cat1.push({name:'Crab Lovers Papaya(D.fried crab meat)',price:3.95});
  cat1.push({name:'Fillet-O-Fish Roll',price:3.95});
  cat1.push({name:'BLT Roll(Bacon,Lettuce,Tomato)',price:3.95});
  cat1.push({name:'Spicy Tuna Tempura Roll',price:3.95});
  cat1.push({name:'House Roll(lots stuff)',price:4.50});
  cat1.push({name:'Island Roll(tuna, fish flake,kiwi sauce)',price:4.95});
  cat1.push({name:'Ikamite Roll(cuttle fish tempura)',price:4.95});
  cat1.push({name:'Tropical Dynamite Roll',price:4.95});
  
  cat1.push({name:'Chi-Chee Roll(chicken & cheese)',price:5.95});
  cat1.push({name:'Rainbow Roll',price:5.95});
  cat1.push({name:'Spider Roll(soft shell crab)',price:6.50});
  cat1.push({name:'Futomaki',price:7.95});
  
  
  
  
  
  
  var cat2=new Array();
  cat2.push({name:'Tamago(Egg)',price:1.00});
  cat2.push({name:'Inari(Bean Curd)',price:1.00});
  cat2.push({name:'Hokigai(Surf Clam)',price:1.00});
  cat2.push({name:'Tai(Snapper)',price:1.00});
  cat2.push({name:'Saba(Mackerel)',price:1.00});
  
  cat2.push({name:'maguro(Tunna)',price:1.20});
  cat2.push({name:'Sake(Salmon)',price:1.20});
  cat2.push({name:'Ebi(cooked Prawn)',price:1.20});
  
  cat2.push({name:'Chopped Scallop',price:1.30});
  cat2.push({name:'Troro(Tuna Belly)',price:1.30});
  cat2.push({name:'Tobiko(Flying Fish Roe)',price:1.30});
  cat2.push({name:'Masago(Smelt Roe)',price:1.30});
  cat2.push({name:'Ika(Squid)',price:1.30});
  
  cat2.push({name:'Tobiko w/Quail Egg',price:1.50});
  cat2.push({name:'Hotategai(Whole Scallop)',price:1.50});
  
  cat2.push({name:'Smoked Salmon',price:1.60});
  cat2.push({name:'Wild Salmon',price:1.60});
  
  cat2.push({name:'Unagi(BBQ Eel)',price:1.80});
  cat2.push({name:'Ikura(Salmon Roe)',price:1.80});
  cat2.push({name:'Tako(Octopus)',price:1.80});
  cat2.push({name:'AmaEbi(Swt shrimp)',price:1.80});
  cat2.push({name:'Kani(Real Crab Meat)',price:1.80});
  
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