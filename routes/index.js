
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
  
  cat2.push({name:'Hamachi(Yellow Tail)',price:2.00});
  
  cat2.push({name:'Uni(Sea Urchin)',price:2.50});
  cat2.push({name:'Red Tnuna(Ahi)',price:2.50});
  
  var cat3=new Array();
  cat3.push({name:"Assorted Tempura",price:7.50});
  cat3.push({name:"Prawn Tempura",price:7.50});
  cat3.push({name:"Prawn and Swt. Potato Temp.",price:7.50});
  cat3.push({name:"Ika Tempura",price:7.50});
  cat3.push({name:"Vegetable Tempura",price:6.50});
  cat3.push({name:"Swt. Potato Tempura",price:6.50});

  
  var cat4=new Array();
  cat4.push({name:"Miso Soup",price:1.25});
  cat4.push({name:"Vege Sunomono",price:2.75});
  cat4.push({name:"Ebi Sunomono",price:3.25});
  cat4.push({name:"Tako Sunomono",price:3.25});
  cat4.push({name:"Seafood Sunomono",price:3.50});
  cat4.push({name:"Gyoza(6pcs)",price:3.75});
  cat4.push({name:"Ebi Gyoza(prawn)",price:5.50});
  cat4.push({name:"Chicken Karage(wing,6pcs)",price:3.95});
  cat4.push({name:"Tako Yaki(octopus ball,6pcs)",price:3.75});
  cat4.push({name:"Potato Croquette(2 pcs)",price:3.75});
  cat4.push({name:"Edamame(green Bean)",price:3.50});
  cat4.push({name:"Wakame(seaweed salad)",price:3.50});
  cat4.push({name:"House Green Salad",price:3.95});
  cat4.push({name:"Seafood Salad(prawn,smkd Sal,tobico..)",price:5.95});
  cat4.push({name:"Ohitash(Spinach w/Soy Sauce",price:3.50});
  cat4.push({name:"Gomae(Spinach Salad)",price:3.50});
  cat4.push({name:"Tuna Gemae",price:4.95});
  cat4.push({name:"Chicken Katsu(Chicken Cutlet,Salad)",price:6.95});
  cat4.push({name:"Ton Katsu(prok Cutlet,Salad)",price:6.95});
  cat4.push({name:"Haru Maki(vege,tobico,crab meat)",price:4.50});
  cat4.push({name:"Agedashi Tofu(fried tofu,fish flake)",price:3.95});
  cat4.push({name:"Spicy Agedashi Tofu",price:3.95});
  cat4.push({name:"BBQ hamachi Gama",price:6.95});
  cat4.push({name:"Soft Shell Crab",price:7.95});
  
  
  var cat5=new Array();
  cat5.push({name:"Tuna and Salmon Sashimi(9pc)",price:14.95});
  cat5.push({name:"Tuna and Salmon Sashimi(half)",price:7.45});
  cat5.push({name:"Menu In Construction..",price:0});
  
  
  var cat6=new Array();
  cat6.push({name:"Spicy tuna Cone",price:2.95});
  cat6.push({name:"Negi Toro Cone",price:2.95});
  cat6.push({name:"California Cone",price:2.95});
  cat6.push({name:"Unagi Cone",price:3.95});
  cat6.push({name:"Dynamite Cone",price:3.75});
  cat6.push({name:"Uni Cone",price:4.95});
  cat6.push({name:"Chopped Scallop Cone",price:3.50});
  cat6.push({name:"Spicy Chop Scallop Cone",price:3.50});
  cat6.push({name:"B.C Cone",price:2.95});
  cat6.push({name:"Ebi Cone",price:3.75});
  cat6.push({name:"Tuna Cone",price:2.95});
  cat6.push({name:"Salmon Cone",price:2.95});
  cat6.push({name:"Tobiko Cone",price:3.75});
  
  var cat7=new Array();
  cat7.push({name:"Kitsune Udon(plain)",price:4.95});
  cat7.push({name:"Tuna Don(Uncooked)",price:9.50});
  cat7.push({name:"Salmon Don(Uncooked)",price:9.50});
  cat7.push({name:"Vege Udon(plain)",price:5.95});
  cat7.push({name:"Tuna and Salmon Don",price:9.50});
  cat7.push({name:"Tempura Udon",price:5.95});
  cat7.push({name:"Spicy Tuna Sashimi Don",price:9.50});
  cat7.push({name:"Seafood Udon",price:7.95});
  cat7.push({name:"Unagi Don(BBQ Eel)",price:10.50});
  cat7.push({name:"Ten Don(Tempura on Rice)",price:6.95});
  cat7.push({name:"Chirashi Don(14pcs)",price:10.95});
  cat7.push({name:"DX Chirashi Don(19pcs)",price:14.95});
  cat7.push({name:"Mentaiko Udon",price:6.95});
  cat7.push({name:"Yaki Udon",price:6.95});
  

  
  var cat8=new Array();
  cat8.push({name:"Kids Combo",price:4.95});
  cat8.push({name:"Roll Combo",price:5.50});
  cat8.push({name:"California Combo",price:7.30});
  cat8.push({name:"Dynamite Combo",price:8.30});
  cat8.push({name:"Tuna and Salmon Combo",price:8.25});
  cat8.push({name:"Spicy Tuna Combo",price:8.95});
  cat8.push({name:"Spicy Salmon Combo",price:8.95});
  cat8.push({name:"Sashimi and Sushi Combo",price:9.30});
  cat8.push({name:"B.C Combo",price:8.75});
  cat8.push({name:"Assorted Sushi",price:11.95});
  cat8.push({name:"DX Assorted Sushi",price:16.95});
  cat8.push({name:"Love Boat",price:25.95});
  cat8.push({name:"Dinner For two",price:23.95});
  
  var cat9=new Array();
  cat9.push({name:"Small For 2",price:19.95});
  cat9.push({name:"Medium For 2/3",price:26.40});
  cat9.push({name:"Large for 3",price:40.75});
  
  menu.push({catName:'Maki_Sushi',list:cat1});
  menu.push({catName:'Nigiri_Sushi',list:cat2});
  menu.push({catName:'Tempura',list:cat3});
  menu.push({catName:'Starters',list:cat4});
  menu.push({catName:'Sashimi',list:cat5});
  menu.push({catName:'Temaki',list:cat6});
  menu.push({catName:'UDon_Noodle_Rice_Bowl',list:cat7});
  menu.push({catName:'Combo',list:cat8});
  menu.push({catName:'Party_tray',list:cat9});
  
  res.render('index', { title: 'Express', menu:menu});
  
  
   
};