
// Create an Object:

function Card(order, title, description, imgref) {
  this.order = order;
  this.title = title;
  this.description = description;
 this.imgref = imgref;
}

//const  cardName = new Card(3, "card title", "card interpretation", "cardimgref");
const Fool = new Card(0, "YE FOOL", "You never know unless you try.", "imgrefpending");
const Magician = new Card(1, "YE MAGEBRINGER", "You have all the tools you need to make it happen. Go forth and Make the Magic happen.", "imgrefpending");
const HighPriestess = new Card(2, "YE HIGH PRIESTESS", "Some things are beyond your capacity to understand at this time.", "imgrefpending");
const Empress = new Card(3, "YE EMPRESS", "All great things are for the worth of waiting, care, and nurturing.", "cardimgref");
const Emperor = new Card(4, "YE EMPEROR", "All things in your command require your lead.", "cardimgref");
const Hierophant = new Card(5, "YE HIEROPHANT", "Respect the Old School.", "cardimgref");
const Lovers = new Card(6, "YE LOVERS", "Love is the immaterial substance upon which the entire Universe exists, and through it there is no true separation between.", "cardimgref");
const Chariot = new Card(7, "YE CHARIOT", "Chariots require horses, a driver, and a direction.", "cardimgref");
const Strength = new Card(8, "STRENGTH", "Real Strength Comes from within. But, without strength, your will is useless. Stop reading tarot cards and go get some exercise.", "cardimgref");
const Hermit = new Card(9, "YE HERMIT", "Ye Fireplace and hot chocolate is needed at this  time of thine hour. The Party can wait.", "cardimgref");
const Wheel = new Card(10, "YE WHEEL OF FORTUNE", "The Wheel Rolls around; if beneath it there be ground, then to your destination it will take. Wary be the traveler, however, under  whose wheels be little more than air.", "cardimgref");
const Karma = new Card(11, "KARMA", "If you feel uneasy, consider  the source. If you feel at ease, consider the source. ", "cardimgref");
const HangedMan = new Card(12, "YE HANGED MAN", " Sometimes you need a new perspective. Try a cartwheel or headstand.", "cardimgref");
const Death = new Card(13, "DEATH", "We're all headed there. ", "cardimgref");
const Temperance = new Card(14, "TEMPERANCE", "Keep a cool head and a warm heart.", "cardimgref");
const Devil = new Card(15, "YE DEVIL", "Ye good news is that there aren't any rules and you can do whatever you want. Ye bad news is that there aren't any rules and you can do whatever  you want.", "cardimgref");
const Tower = new Card(16, "YE TOWER!", "Rapunzel let down her hair and hastly gtf out of there.", "cardimgref");
const Star = new Card(17, "YE STAR", "Hope is eternal and always smiling", "cardimgref");
const Moon = new Card(18, "YE MOON", "At night we're lost in the dark but we can still have a good time.", "cardimgref");
const Sun = new Card(19, "YE SUN", "Just the right amount of daylight makes for a good time. Ah yeah. ", "cardimgref");
const Resurrection = new Card(20,"RESURRECTION", "Out of the darkness, light. From chaos, structure. That which has fallen rises again through the force of love and life.", "cardimgref");
const Universe = new Card(21, "UNIVERSE", "Through all space and time, completion comes from understanding that we're all a part of everything. ", "cardimgref");


const oneEarth = new Card(22, "ONE OF EARTH", "A potentially solid foundation for material well being here is now.", "crdimgref");
const twoEarth = new Card(23, "TWO OF EARTH", "A union of Earth. Earthiness has been doubled. It's a bit precocious, but possible. ", "crdimgref");
const threeEarth = new Card(24, "THREE OF EARTH", "Hard earned Earthiness is begotten by hard earning people. ", "crdimgref");
const fourEarth = new Card(25, "FOUR OF EARTH", "With hard work comes hard Earth. With hard Earth comes a fear of the insubstantial. Save the Earth.", "crdimgref");
const fiveEarth = new Card(26, "FIVE OF EARTH", "Growing pains are yours for the making. ", "crdimgref");
const sixEarth = new Card(27, "SIX OF EARTH", "Earth is all around, like a good sized hill. ", "crdimgref");
const sevenEarth = new Card(28, "SEVEN OF EARTH", "Sometimes, the only thing you can do is wait. ", "crdimgref");
const eightEarth = new Card(29, "EIGHT OF EARTH", "If you build it, they will come ((come)) .... come ....", "crdimgref");
const nineEarth = new Card(30, "NINE OF EARTH", "You havea earned your independence. You deserve a treat. ", "crdimgref");
const tenEarth = new Card(31, "TEN OF EARTH", "So much you have created for yourself, do you want or need for anything, anymore", "crdimgref");
const SisterEarth = new Card(32, "SISTER OF EARTH", "A gentle Grounding Touch, thine calming presence.","crdimgref");
const BrotherEarth = new Card(33, "BROTHER OF EARTH", "Keep it slow, keep it steady, keep it real.", "crdimgref");
const MotherEarth = new Card(34, "MOTHER OF EARTH", "All the earth is a home for those who care for it.", "crdimgref");
const FatherEarth = new Card(35, "FATHER OF EARTH", "Thine funds and thine means sire, thine family thine companions to yon rule be graced.", "crdimgref");


const oneAir = new Card(36, "ONE OF AIR", "A new idea  borne, a sharp wit hewned, a ghust of wynd.", "crdimgref");
const twoAir = new Card(37, "TWO OF AIR", "Sunday we will ride to meet the moon and  tide. Until such time rest, be well, abide.", "crdimgref");
const threeAir = new Card(38, "THREE OF AIR", "Pain and Sorrow. Grief. Mourning. Sometimes it be this, reality. Re-aligning with what is. ", "crdimgref");
const fourAir = new Card(39, "FOUR OF AIR", "Rest. Deep deep rest.", "crdimgref");
const fiveAir = new Card(40, "FIVE OF AIR", "A challenge lost. Fair or not or fault, when we're not the victors, we must accept the outcome so we can keep on. ", "crdimgref");
const sixAir = new Card(41, "SIX OF AIR", "Rising again after the mind clears, readying with refined purpose. ", "crdimgref");
const sevenAir = new Card(42, "SEVEN OF AIR", "Something is amiss, out of place. Investigation is necessary.", "crdimgref");
const eightAir = new Card(43, "EIGHT OF AIR", "Indecision stems sometimes from having to choose between a bad choice and a worse choice. Sometimes, the only way out of a situation is to go through it.", "crdimgref");
const nineAir = new Card(44, "NINE OF AIR", "Fear, the killer of minds, yes? Mostly, our fears are imagined. Knowing this can help.", "crdimgref");
const tenAir = new Card(45, "TEN OF AIR", "Total Dessimation, ye worst has happened. ", "crdimgref");
const SisterAir = new Card(46, "SISTER OF AIR", "A clear mind requires a curious one.","crdimgref");
const BrotherAir = new Card(47, "BROTHER OF AIR", "A hasty decision, quick and decisive. It can be the right thing but results can be unpredictable, as with all risk.", "crdimgref");
const MotherAir = new Card(48, "MOTHER OF AIR", "Words actually can hurt if they are commands. A cunning mind can be clever and get results, but not one must be careful, or consequences can be ill wrought.", "crdimgref");
const FatherAir = new Card(49, "FATHER OF AIR", "Rule by power. It's simple, effective, but often times cold and harsh.", "crdimgref");


const oneFire = new Card(50, "ONE OF FIRE", "Passion Bourne, A Great Idea, A Cause worth rising for. Initial Energy.", "crdimgref");
const twoFire = new Card(51, "TWO OF FIRE", "One cannot follow two Great causes. A Decision must be made. Follow the fire that burns brightest.", "crdimgref");
const threeFire = new Card(52, "THREE OF FIRE", "Three flames is ablaze. A playful competition among peers.", "crdimgref");
const fourFire = new Card(53, "FOUR OF FIRE", "A ceremony, a wedding, a gathering of kindred souls.", "crdimgref");
const fiveFire = new Card(54, "FIVE OF FIRE", "The Fire of Five the fire of Five! competitors abound, one shall win if one shall try if all one gives!", "crdimgref");
const sixFire = new Card(55, "SIX OF FIRE", "Glory for those who put their passion in and can be seen by others.", "crdimgref");
const sevenFire = new Card(56, "SEVEN OF FIRE", "They all agree not with ye, but still ye must support thine selfs position. Believe in yourself and others will as well.", "crdimgref");
const eightFire = new Card(57, "EIGHT OF FIRE", "Moving fast, travel travel, Take up the heat and move!", "crdimgref");
const nineFire = new Card(58, "NINE OF FIRE", "Don't give up!", "crdimgref");
const tenFire = new Card(59, "TEN OF FIRE", "The Burden of your cause is upon you. Don't give up now, but don't be afraid to ask for help, either.", "crdimgref");
const SisterFire = new Card(60, "SISTER OF FIRE", "A curiosity of sorts, playful, a bit of a feisty child.","crdimgref");
const BrotherFire = new Card(61, "BROTHER OF FIRE", "A hasty, passionate individual, one who is not keen on waiting for others, join or get the out the way.", "crdimgref");
const MotherFire = new Card(62, "MOTHER OF FIRE", "Warmth and Life, vengeful if tampered in the wrong way. ", "crdimgref");
const FatherFire = new Card(63, "FATHER OF FIRE", "Lead by passion, first to rise to the cause! Stay healthy, but don't overdo it!", "crdimgref");


const oneWater = new Card(64, "ONE OF WATER", "Divine inspiration, opening of mind and spirit to the cosmos, one becomes centered in the calm.", "crdimgref");
const twoWater = new Card(65, "TWO OF WATER", "A blending of kindred spirits. One almost could not tell the other apart.", "crdimgref");
const threeWater = new Card(66, "THREE OF WATER", "Friendship and Light hearted fun, nigh a party.", "crdimgref");
const fourWater = new Card(67, "FOUR OF WATER", "Water water rising, a reservoir of calm. A somewhat stifling situation. ", "crdimgref");
const fiveWater = new Card(68, "FIVE OF WATER", "Sometimes, Looking to the good times of the past in the present, we lose ourselves in sadness. Ritual can cleanse the mind and bring peace.", "crdimgref");
const sixWater = new Card(69, "SIX OF WATER", "A returning of old friends to a once cherished moment. Looking through the picture album. Revisiting MySpace even though we all know it's time has come and gone.", "crdimgref");
const sevenWater = new Card(70, "SEVEN OF WATER", "The decision of the heart sometimes must require discretion. Be kind, but know your own feelings.", "crdimgref");
const eightWater = new Card(71, "EIGHT OF WATER", "A very, very deep well of calm is available to you.", "crdimgref");
const nineWater = new Card(72, "NINE OF WATER", "You got what you wanted, feel the effect.", "crdimgref");
const tenWater = new Card(73, "TEN OF WATER", "Perfect happiness. A life well lived.", "crdimgref");
const SisterWater = new Card(74, "SISTER OF WATER", "Fresh feelings, an immature heartfeels","crdimgref");
const BrotherWater = new Card(75, "BROTHER OF WATER", "Romantic yet the Real of it yet to be so sure.", "crdimgref");
const MotherWater = new Card(76, "MOTHER OF WATER", "The healer comes before you, a soothing hand. Best to accept the help.", "crdimgref");
const FatherWater = new Card(77, "FATHER OF WATER", "Wise, calm understanding, considerate of other's feelings.", "crdimgref");





const cards = [Fool, Magician, HighPriestess, Empress, 
		Emperor, Hierophant, Lovers,Chariot, Strength, Hermit, Wheel, Karma,
		HangedMan, Death, Temperance, Devil, Tower, 
		Star, Moon, Sun, 
		Resurrection, Universe, 
		oneEarth, twoEarth, threeEarth, fourEarth, fiveEarth, sixEarth, sevenEarth, eightEarth, nineEarth, tenEarth, SisterEarth, BrotherEarth, MotherEarth, FatherEarth,
		oneAir, twoAir, threeAir, fourAir, fiveAir, sixAir, sevenAir, eightAir, nineAir, tenAir, SisterAir, BrotherAir, MotherAir, FatherAir,
		oneFire, twoFire, threeFire, fourFire, fiveFire, sixFire, sevenFire, eightFire, nineFire, tenFire, SisterFire, BrotherFire, MotherFire, FatherFire,
		oneWater, twoWater, threeWater, fourWater, fiveWater, sixWater, sevenWater, eightWater, nineWater, tenWater, SisterWater, BrotherWater, MotherWater, FatherWater];



function GetaCard(){

	//alert('title');
	// Returns a random integer from 1 to 10:
	//Math.floor(Math.random() * 77);
	
	//alert(Math.floor(Math.random() * 1));
	let cardNum = null;
	cardNum = (Math.floor(Math.random() * 77));
	
	let text = 'cardNum:' + cardNum;
	//alert(text);

	//let cardTitle = cards[cardNum[1]];
	//alert(fool.title);
	document.getElementById("CardDraw").innerHTML = cards[cardNum].title + '<br>' + cards[cardNum].description;

}


