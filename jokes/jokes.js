var json = `
{
    "1": "Dad, did you get a haircut? No, I got them all cut",
    "2": "What do you call a Mexican who has lost his car? Carlos.",
    "3": "Dad, can you put my shoes on? No, I don't think they'll fit me.",
    "4": "Can I watch the TV? Dad: Yes, but don't turn it on.",
    "5": "I would avoid the sushi if I was you. It's a little fishy.",
    "6": "What do you call a fake noodle? An Impasta.",
    "7": "You know, people say they pick their nose, but I feel like I was just born with mine.",
    "8": "Every time I hurt myself, even to this day, my dad says, 'The good news is..it'll feel better when it quits hurting.'",
    "9": "What's brown and sticky? A stick.",
    "10": "My brother asked me to take out the trash. He left through the garbage truck the other day.",
    "11": "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
    "12": "'I'll call you later!'- 'Please don't do that. I've always asked you to call me Dad!'",
    "13": "Why did the cookie cry? Because his father was a wafer so long!",
    "14": "Why did the cookie cry? Because he felt crummy.",
    "15": "What did the mountain climber name his son? Cliff.",
    "16": "This graveyard looks overcrowded. People must be dying to get in there.",
    "17": "Did you hear about the guy who invented Lifesavers? They say he made a mint.",
    "18": "Whenever the cashier at the grocery store asks my dad if he would like the milk in a bag he replies, 'No, just leave it in the carton!'",
    "19": "I got so angry the other day when I couldn't find my stress ball.",
    "20": "If I had a dime for every book I've ever read, I'd say: 'Wow, that's coincidental.'",
    "21": "I'm not indecisive. Unless you want me to be.",
    "22": "How many apples grow on a tree? All of them.",
    "23": "How does a penguin build it's house? Igloos it together.",
    "24": "Me: 'Dad, make me a sandwich!' Dad: 'Poof, You're a sandwich!'",
    "25": "I heard there was a new store called Moderation. They have everything there",
    "26": "A steak pun is a rare medium well done.",
    "27": "How can you tell if a ant is a boy or a girl? They're all girls, otherwise they'd be uncles.",
    "28": "Milk is also the fastest liquid on earth - its pasteurized before you even see it",
    "29": "What's Forrest Gump's password? 1forrest1",
    "30": "The only thing worse than having diarrhea is having to spell it.",
    "31": "I asked my friend to help me with a math problem. He said: 'Don't worry; this is a piece of cake.' I said: 'No, it's a math problem.'",
    "32": "I keep trying to lose weight, but it keeps finding me.",
    "33": "I don't play soccer because I enjoy the sport. I'm just doing it for kicks.",
    "34": "Did I tell you the time I fell in love during a backflip? I was heels over head.",
    "35": "I used to work in a shoe recycling shop. It was sole destroying.",
    "36": "Why did the math book look so sad? Because of all of its problems!",
    "37": "Where did the one-legged waitress work? IHOP!",
    "38": "What happened when the two antennas got married? Well, the ceremony was kinda boring, but the reception was great!",
    "39": "What did one snowman say to the other one?  'Do you smell carrots?'",
    "40": "How do you make a tissue dance?  You put a little boogie in it!",
    "41": "Why did the idiot stare at the orange juice container?  It said concentrate!",
    "42": "If your nose runs and your feet smell, you are built upside down!",
    "43": "I went to buy some camouflage trousers the other day, but I couldn't find any.",
    "44": "How do you organize an outer space party? You planet.",
    "45": "What do you call a belt with a watch on it? A waist of time.",
    "46": "What kind of shoes does a thief wear? Sneakers",
    "47": "A jumper cable walks into a bar. The bartender says, 'I'll serve you, but don't start anything.'",
    "48": "An invisible man marries an invisible woman. The kids were nothing to look at either.",
    "49": "I went to a seafood disco last week… and pulled a mussel.",
    "50": "Did you hear about the man who stole a calendar? He got 12 months.",
    "51": "A man woke up in a hospital after a serious accident. He shouted, 'Doctor, doctor, I can't feel my legs!' The doctor replied, 'I know you can't. I've cut off your arms!'",
    "52": "Do you know where you can get chicken broth in bulk? The stock market.",
    "53": "What did the ocean say to the shore? Nothing, it just waved.",
    "54": "What's ET short for? Because he's only got little legs.",
    "55": "Why do crabs never give to charity? Because they're shellfish.",
    "56": "What do you call an Mexican with a rubber toe? Roberto",
    "57": "What do you call a man with no nose and no body? Nobody nose.",
    "58": "I cut my finger chopping cheese, but I think that I may have greater problems.",
    "59": "What do you call a fish with no eyes? A fshhhh.",
    "60": "What do you call a man with no arms and no legs lying in front of your door? Matt.",
    "61": "My cat was just sick on the carpet, I don't think it's feline well.",
    "62": "I dreamed about drowning in an ocean made out of orange soda last night. It took me a while to work out it was just a Fanta sea.",
    "63": "Without geometry, life is pointless.",
    "64": "A termite walks into a bar and asks 'Is the bar tender here?'",
    "65": "I've been bored recently so I've decided to take up fencing. The neighbors said they will call the police unless I put it back.",
    "66": "I needed a password eight characters long so I picked Snow White and the Seven Dwarfs.",
    "67": "I am terrified of elevators. I'm going to start taking steps to avoid them.",
    "68": "What's the advantage of living in Switzerland? Well, the flag is a big plus.",
    "69": "Why did the octopus beat the shark in a fight? Because it was well armed.",
    "70": "A red and a blue ship have just collided in the Caribbean. Apparently the survivors are marooned.",
    "71": "I've deleted the phone numbers of all the Germans I know from my mobile phone. Now it's Hans free.",
    "72": "Last night me and my girlfriend watched three DVDs back to back. Luckily I was the one facing the TV.",
    "73": "What did daddy spider say to baby spider? You spend too much time on the web.",
    "74": "How much does a hipster weigh? An instagram.",
    "75": "What do you call a group of killer whales playing instruments? An Orca-stra.",
    "76": "Why was the big cat disqualified from the race? Because it was a cheetah.",
    "77": "A cheese factory exploded in France. Da brie is everywhere!",
    "78": "Just watched a documentary about beavers... It was the best damn program I've ever seen.",
    "79": "Breaking news! Energizer Bunny arrested - charged with battery",
    "80": "How do you make holy water? You boil the hell out of it.",
    "81": "A Sandwich walks into a bar, the bartender says 'Sorry, we don't serve food here'",
    "82": "'Doctor, I've broken my arm in several places!' The Doctor said, 'Well don't go to those places.'",
    "83": "I'm on a whiskey diet. I've lost three days already.",
    "84": "Why did the Clydesdale give the pony a glass of water? Because he was a little horse!",
    "85": "There's a new type of broom out, it's sweeping the nation.",
    "86": "Atheism is a non-prophet organisation.",
    "87": "Slept like a log last night ... woke up in the fireplace.",
    "88": "We were getting fast food when the lady at the window said, 'Any condiments?' My dad responded, 'Compliments? You look very nice today!'",
    "89": "What cheese can never be yours? Nacho cheese.",
    "90": "A police officer caught two kids playing with a firework and a car battery. He charged one and let the other one off.",
    "91": "I'm reading a book on the history of glue - can't put it down.",
    "92": "Why do trees seem suspicious on sunny days? They just seem a little shady!",
    "93": "I went to the zoo the other day, there was only one dog in it. It was a shitzu.",
    "94": "What did the daddy tomato say to the baby tomato? Catch up!",
    "95": "What's 50 Cent's name in Zimbabwe? 400 Million Dollars.",
    "96": "What did the Ranch say when someone opened the refrigerator door? 'Close the door, I'm dressing!'",
    "97": "What do you call a cow with no legs? Ground beef.",
    "98": "What did the Buffalo say to his little boy when he dropped him off at school? Bison.",
    "99": "So a duck walks into a pharmacy and says 'Give me some chap-stick… and put it on my bill'",
    "100": "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "101": "Why did the girl smear peanut butter on the road? To go with the traffic jam.",
    "102": "Why does a chicken coop only have two doors? Because if it had four doors it would be a chicken sedan.",
    "103": "Why don't seagulls fly over the bay? Because then they'd be bay-gulls!",
    "104": "Two peanuts were walking down the street. One was a salted.",
    "105": "What do you do when a idiot throws a grenade at you? Pull the pin and throw it back.",
    "106": "How do you make a hankie dance? Put a little boogie in it.",
    "107": "Where does batman go to the bathroom? The batroom.",
    "108": "What's the difference between an African elephant and an Indian elephant? About 5000 miles",
    "109": "I'm on a seafood diet... I see food and I eat it.",
    "110": "A man walks into a bar and orders helicopter flavor chips. The barman replies 'Sorry man, we only do plain'",
    "111": "Commissar! Commissar! The troops are revolting! Commissar: Well, you're pretty repulsive yourself.",
    "112": "What do you call a sheep with no legs? A cloud.",
    "113": "I knew I shouldn't have ate that seafood. Because now I'm feeling a little... Eel",
    "114": "What did the 0 say to the 8? Nice belt.",
    "115": "Why are skeletons so calm? Because nothing gets under their skin.",
    "116": "Why don't skeletons ever go trick or treating? Because they have nobody to go with.",
    "117": "Why do scuba divers fall backwards into the water? Because if they fell forwards they'd still be in the boat.",
    "118": "Have you ever heard of a music group called Cellophane? They mostly wrap.",
    "119": "What kind of magic do cows believe in? MOODOO.",
    "120": "Why does Superman get invited to dinners? Because he is a Supperhero.",
    "121": "'Hold on, I have something in my shoe'  'I'm pretty sure it's a foot'",
    "122": "Dad, I'm hungry … 'Hi hungry, I'm dad'",
    "123": "When the phone is ringing Dad says 'If it's for me don't answer it.'",
    "124": "Which U.S. state is famous for its extra-small soft drinks? Minnesota!",
    "125": "Where's the bin? Dad: I haven't been anywhere!",
    "126": "Why do bananas need sunscreen? Because they peel.",
    "127": "What do you call a cow that just had a baby? DeCALFeinated or A New Moother",
    "128": "I know a lot of jokes about retired people but none of them work!",
    "129": "RIP boiled water. You will be mist.",
    "130": "I don't trust stairs. They're always up to something.",
    "131": "If you want a job in the moisturizer industry, the best advice I can give is to apply daily.",
    "132": "Five out of four people admit they're bad with fractions!",
    "133": "When my wife told me to stop impersonating a flamingo, I had to put my foot down.",
    "134": "What do you call a can of soup that eats other cans of soup? A CANnibal.",
    "135": "So I came home from work yesterday to find that someone broke into my apartment. Looking around, it seemed like they didn't really take a whole lot. My TV was still there, my PS4, and my legos were fine. But the apartment was dark, even when I tried to turn on the lights. Seems the only thing that was taken were my lightbulbs and a couple lamps...I was delighted.",
    "136": "If you see a robbery at an Apple Store does that make you an iWitness?!",
    "137": "The rotation of earth really makes my day.",
    "138": "Want to hear a joke about construction? Nah, I'm still working on it.",
    "139": "You heard the rumor going around about butter? Nevermind, I shouldn't spread it.",
    "140": "What concert costs only 45 cents? 50 Cent ft. Nickelback",
    "141": "What's they difference between tuna, a piano, and glue? You can tuna piano, but you can't piano a tuna. 'What about the glue?' I knew you'd get stuck there.",
    "142": "A Tip For Dads: First, give or award something. 'Dad, I'm hournerd' 'Hi hounered! I'm dad!'",
    "143": "Son: Where are my sunglasses? Dad: I don't know...where are my dad glasses?",
    "144": "What do they call Miley Cyrus in Europe? Kilometry Cyprus.",
    "145": "My uncle named his dogs Rolex and Timex. They're his watch dogs!",
    "146": "Your toaster was delivered yesterday. Cool! No, it only does warm.",
    "147": "I have kleptomania. Sometimes when it gets really bad, I take something for it.",
    "148": "You shouldn't kiss anyone on January 1st because it's only the first date.",
    "149": "If a child refuses to take a nap, is he resisting a rest?",
    "150": "What's the difference between a hippo and a zippo? One is really heavy and the other is a little lighter.",
    "151": "Want to hear my pizza joke? Never mind, it's too cheesy.",
    "152": "What does a house wear? A dress.",
    "153": "A furniture store keeps calling me. But all I wanted was one night stand.",
    "154": "Want to hear a word I just made up? Plagiarism.",
    "155": "Why does Peter pan always fly? Because he neverlands!",
    "156": "My wife is on a tropical food diet, the house is full of the stuff. It's enough to make a mango crazy.",
    "157": "My wife told me I was average, I think she's mean.",
    "158": "Had seafood last night, now I'm eel.",
    "159": "I gave all my dead batteries away today... Free of charge.",
    "160": "Just quit my job at Starbucks because day after day it was the same old grind.",
    "161": "Went to the corner shop today... Bought four corners.",
    "162": "How do you drown a hipster? In the mainstream.",
    "163": "Nostalgia isn't what it used to be.",
    "164": "I'm thinking about getting a new haircut... I'm going to mullet over.",
    "165": "I wouldn't buy anything with velcro. It's a total rip-off.",
    "166": "Why couldn't the bicycle stand up by itself? It was two tired.",
    "167": "Dad: 'I've made 3 jokes in my life and their sitting in front of me.'",
    "168": "When Jay-Z got engaged, did he call her his feyonce?",
    "169": "What do you call Santa's helpers? Subordinate clauses.",
    "170": "What time is it? I don't know. It keeps changing.",
    "171": "Spring is here! I got so excited I wet my plants!",
    "172": "I just got a new job at a prison library. It has prose and cons.",
    "173": "General Tso's chicken from Asian King...$7 Drink...$1 Getting home and realizing that Asian King forgot to give you one of your containers...rice less",
    "174": "I thought about going on an all-almond diet… But that's just nuts!",
    "175": "Helen Keller walked into a bar. Then a chair. Then a table.",
    "176": "A person walked into a bar, and got knocked out",
    "178": "There was a kidnapping in math class. Don't worry, he woke up.",
    "179": "What do ducks wear to fancy parties? Ducksedos!",
    "180": "I had a dubstep joke, but then I dropped it.",
    "181": "Don't write with a broken pencil. It's pointless.",
    "182": "I don't tell Dad jokes often, but when I do, he laughs!",
    "183": "What's red and bad for your teeth? A brick",
    "184": "Did you hear about the two guys that stole a calendar? They each got six months",
    "185": "If you ever get cold, go stand in a corner. They're usually 90 degrees",
    "186": "Why do you never see elephants hiding in trees? They're so good at it",
    "187": "What's gray and can't fly? A parking lot",
    "188": "A horse walks into a bar. 'Why the long face?' The bartender asks. The horse replies, 'My alcoholism is destroying my family'",
    "189": "I want a job cleaning mirrors. It's something I could see myself doing.",
    "190": "What's blue and smells like red paint. Blue paint",
    "191": "What's orange and sounds like a parrot. A carrot",
    "192": "Why can't you hear a pterodactyl go to the bathroom? The “p” is silent",
    "193": "Why can't Ray Charles see his friends? He's married",
    "194": "Why was six afraid of seven? Because seven was a registered six offender.",
    "195": "Why was six afraid of seven? Because Seven Eight Nine.",
    "196": "Two fish are in a tank. One is driving and the other is controlling the gun. Two soldiers are in a tank. They both drown",
    "197": "'Could you please call me a taxi?' 'You're a taxi'",
    "198": "My grandpa has the heart of a lion, and a lifetime ban from the zoo.",
    "199": "Two whales walk into a bar. One says 'Eooooooooooaaaaaaahhhhmmmmmmmuuuuuuuuuuuaaaaaaaooo' The other says 'Frank, what is wrong with you'",
    "200": "Why did the invisible man turn down the job offer? He couldn't see himself doing it!",
    "201": "Have you ever heard of the guy who lives off the grid? I haven't",
    "202": "Which sport involves the most chewing? Gumball",
    "203": "Can I tell you a joke about pizza? Never mind, it's too cheesy.",
    "204": "I'm so good at sleeping I can do it with my eyes closed!",
    "205": "It's not bacon anymore because I took it out of the oven",
    "206": "I'll do multiplication, I'll do division, hell, I'll even do algebra, but graphing is where I draw the line",
    "207": "I used to dislike the hokey-pokey, but I turned my self around",
    "208": "Have you heard the rumor about butter? Never mind, better not spread it",
    "209": "Why are frogs so happy? Because they eat whatever bugs them!",
    "210": "What do you call a rabbit that tells jokes? A funny bunny!",
    "211": "What's the relationship between math clasrica? A USB.",
    "225": "Once there were three holes in the ground. Well, well, well.",
    "226": "I was going to put in a joke about sodium, but then I thought, 'Na, nobody would get it'",
    "227": "I, for one, like Roman numerals.",
    "228": "What kind of fish is made of two sodium atoms? 2 Na",
    "229": "'Hey, have you heard of Pavlov and his dogs?' 'It rings a bell'",
    "230": "My friends hate when i steal their kitchen utensils. But it's a whisk I'm willing to take.",
    "231": "A while ago I tried out for the pole vaulting team. I didn't make it. I couldn't get over it.",
    "232": "What did the baby corn say to the mommy corn? 'Where's popcorn?'",
    "233": "Why were Roman fighers always so happy? They were GLADiators.",
    "234": "How much space in the EU did Brexit free up? 1 GB.",
    "235": "Two brothers claimed it was possible to fly. They were Wright.",
    "236": "What happened to the overconfident lion tamer? He was consumed by his own pride.",
    "237": "Why did the traffic light turn red? You would to if you had to change in the middle of the street.",
    "238": "What was a witch's favorite subject in school? Spelling.",
    "239": "Me: 'I'm terrified of random letters.' Therapist: 'You Are?' Me: [screams]'"
}
`
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

var jokes;
fetch('.https://awesometech10.now.sh/api/jokes')
  .then(response => {
    return response.json()
  })
  .then(data => {
    jokes = JSON.parse(data)
  })
  .catch(err => {
    jokes = JSON.parse(json)
    console.log(err)
  })
jokes = JSON.parse(json)
var length = Object.keys(jokes).length;

ohNoANewJoke();


if (getCookie('agreeToVisit') === '') {
    document.getElementById('warning').style.display = 'block';
    document.getElementById('jokeService').style.display = 'none'
}
if (getCookie('agreeToVisit') === 'true') {
  document.getElementById('warning').style.display = 'none';
  document.getElementById('jokeService').style.display = 'block'
}

function jokesGoodToGo() {
    document.cookie = "agreeToVisit=true";
    document.getElementById('warning').style.display = 'none'
    document.getElementById('jokeService').style.display = 'block'
}

function ohNoANewJoke() {
    var selectedJoke = jokes[Math.floor(Math.random() * length)]

while ( selectedJoke == undefined ) {
    selectedJoke = jokes[Math.floor(Math.random() * length)]
}

document.getElementById('joke').innerText = selectedJoke;
}

document.getElementById('closeAllJokeButton').style.display = 'none'

function waitWutAllTheJokes() {
    var jlist, allJokes = "";

    for (jlist in jokes) {
        allJokes += jokes[jlist] + "<br><br>";
    }
    document.getElementById("joke").classList = 'allJokesList'
    document.getElementById("joke").innerHTML = allJokes
    document.getElementById('allJokeButton').style.display = 'none'
    document.getElementById('closeAllJokeButton').style.display = 'inline-block'
}

function noMoreJokes() {
    document.getElementById("joke").classList = ''
    ohNoANewJoke()
    document.getElementById('allJokeButton').style.display = 'inline-block'
    document.getElementById('closeAllJokeButton').style.display = 'none'
}

window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#000"
      },
      "button": {
        "background": "#f1d600"
      }
    },
    "theme": "classic"
  });
