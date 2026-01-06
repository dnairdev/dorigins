// Thought Nodes Data - Personal universe of Diya Nair
const thoughtNodes = {
    origin: {
        id: 'origin',
        title: 'Is This Diya Nair?',
        text: 'wait who am i actually—scattered thoughts, half-finished sentences, neurons firing in the dark... somewhere between who i was yesterday and who i\'ll be tomorrow. everything connects here. every person i\'ve loved, every place that changed me, every song that made me cry at 2am. this is the map of my becoming. still drawing it. still figuring out which lines matter.',
        meta: 'The center of my universe',
        connections: ['columbia', 'family', 'friends', 'love', 'fun', 'faith'],
        visited: false,
        x: 0,
        y: 0,
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
        category: 'self',
        color: [232, 213, 255] // Soft lavender
    },
    columbia: {
        id: 'columbia',
        title: 'Columbia',
        text: 'butler library 3am coffee going cold—that particular exhaustion that feels like growth. the way my brain rewired itself somewhere between freshman year and now... i came here thinking i knew things and then professors kept asking questions i couldn\'t answer and now i ask better questions. the campus at night when everyone\'s asleep and the buildings look like they\'re holding secrets. this place broke me open and rebuilt me.',
        meta: 'Where my mind learned to soar',
        connections: ['origin', 'friends', 'computerscience', 'fun', 'clubs'],
        visited: false,
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
        category: 'education',
        color: [167, 199, 231] // Powder blue
    },
    family: {
        id: 'family',
        title: 'Family',
        text: 'the kitchen sounds—mom humming something i half-remember, dad\'s laugh through the walls. how they looked at me before i became all these other things. they saw me first. before any of this existed in my brain, they were holding me, teaching me words, catching me when i fell off bikes. sometimes i call just to hear their voices and i don\'t even need to say anything. they already know.',
        meta: 'My roots, my home, my heart',
        connections: ['origin', 'love', 'food', 'music', 'travel', 'faith'],
        visited: false,
        image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80',
        category: 'relationships',
        color: [255, 182, 185] // Blush pink
    },
    friends: {
        id: 'friends',
        title: 'Friends',
        text: 'the group chat that never stops—someone\'s always awake somewhere. we communicate in references nobody else would understand. they\'ve seen me ugly cry, seen me fail, seen the worst versions and still showed up the next day. friendships that started with "wait, you like that too?" and turned into "i\'d do anything for you." they carry pieces of me i don\'t even remember giving away.',
        meta: 'My chosen constellation',
        connections: ['origin', 'columbia', 'fun', 'travel', 'singing'],
        visited: false,
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80',
        category: 'relationships',
        color: [255, 209, 220] // Light rose
    },
    love: {
        id: 'love',
        title: 'Love',
        text: 'the way my chest gets tight when—no wait. the terrifying beautiful thing of letting someone see everything. even the ugly parts especially the ugly parts. love isn\'t the movies. it\'s choosing the same person when they\'re annoying, when you\'re tired, when life gets complicated. it\'s 3am conversations and comfortable silence and knowing someone\'s patterns better than your own. scary. worth it. maybe.',
        meta: 'What makes us fully alive',
        connections: ['origin', 'family', 'music', 'singing', 'travel'],
        visited: false,
        image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&q=80',
        category: 'relationships',
        color: [219, 160, 190] // Dusty rose
    },
    fun: {
        id: 'fun',
        title: 'Fun',
        text: 'remember when we—god that was stupid. the best kind of stupid. dancing badly on purpose, saying yes to things that make no sense, the look on everyone\'s faces when the spontaneous plan actually worked. life is short life is short life is short. i keep forgetting and then remembering in bursts. joy doesn\'t need permission. sometimes you just have to be ridiculous on purpose.',
        meta: 'The art of living fully',
        connections: ['origin', 'friends', 'columbia', 'travel', 'food', 'singing'],
        visited: false,
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80',
        category: 'experiences',
        color: [255, 230, 179] // Soft gold
    },
    food: {
        id: 'food',
        title: 'Food',
        text: 'mom\'s cooking and the way it tastes like safety. trying something new in a country where i don\'t speak the language—pointing at menus, hoping for the best. the best conversations happen around tables. breaking bread with strangers who become less strange. every dish is someone\'s memory crystallized. i eat to remember. i eat to discover. i eat because it\'s the most human thing there is.',
        meta: 'Nourishment for body and soul',
        connections: ['origin', 'family', 'travel', 'fun'],
        visited: false,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
        category: 'experiences',
        color: [245, 189, 167] // Warm apricot
    },
    music: {
        id: 'music',
        title: 'Music',
        text: 'that song—you know the one—plays and suddenly i\'m seventeen again, or heartbroken again, or invincible again. music is time travel. music is feeling without having to explain. headphones in, world out. the way a melody can understand you better than words ever could. i make playlists like they\'re diary entries. every song is a door to somewhere i\'ve been or somewhere i want to go.',
        meta: 'The language of the soul',
        connections: ['origin', 'singing', 'love', 'family'],
        visited: false,
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80',
        category: 'arts',
        color: [200, 182, 232] // Soft purple
    },
    travel: {
        id: 'travel',
        title: 'Travel',
        text: 'airport terminals at weird hours—that liminal space feeling. being small in a big world. getting lost on purpose (and by accident). the version of me that exists in each place i\'ve been... a different self left behind in every city. travel rewires your brain. you come back and home looks different because you\'re different. passport stamps are just receipts for transformation.',
        meta: 'The world is my classroom',
        connections: ['origin', 'friends', 'love', 'food', 'fun', 'family'],
        visited: false,
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80',
        category: 'experiences',
        color: [176, 212, 196] // Sage green
    },
    computerscience: {
        id: 'computerscience',
        title: 'Computer Science',
        text: 'code as language, logic as poetry. the satisfaction when something finally compiles after hours of debugging... the frustration three seconds before that. building things from nothing but thought and syntax. computers don\'t care about your feelings, they just do what you tell them—which is somehow both freeing and terrifying. i speak to machines and sometimes they listen.',
        meta: 'where logic meets creativity',
        connections: ['origin', 'columbia', 'fun', 'music'],
        visited: false,
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
        category: 'education',
        color: [176, 224, 230] // Powder cyan
    },
    singing: {
        id: 'singing',
        title: 'Singing',
        text: 'my voice coming out of my body—still weird, still magic. shower concerts, car concerts, karaoke courage. the vibration in my chest when i hit a note right. singing is the opposite of thinking. it\'s pure feeling escaping through sound. when other voices join in... harmonies that make your skin buzz. being heard in the most literal way possible. this is me. listen.',
        meta: 'My voice, my truth',
        connections: ['origin', 'music', 'fun', 'friends', 'love'],
        visited: false,
        image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1200&q=80',
        category: 'arts',
        color: [221, 189, 224] // Soft mauve
    },
    faith: {
        id: 'faith',
        title: 'Faith',
        text: 'temple incense, the sound of bells, stories about gods that feel like family. diwali lights and the way my grandmother prayed—so certain, so quiet. i\'m still figuring out what i believe but i know this: there\'s something bigger. dharma, karma, the threads connecting all of us... faith isn\'t about having answers. it\'s about sitting with the questions. feeling held by something ancient.',
        meta: 'The spiritual roots that ground me',
        connections: ['origin', 'family', 'love', 'music'],
        visited: false,
        image: 'https://images.unsplash.com/photo-1545126178-862cdb469409?w=1200&q=80',
        category: 'spirituality',
        color: [255, 218, 185] // Soft saffron
    },
    clubs: {
        id: 'clubs',
        title: 'Clubs',
        text: 'late-night meetings where we actually cared about something. finding your people by accident—walking into a room and suddenly belonging. leadership that taught me more than any class. organizing events, watching ideas become real, the exhaustion that feels purposeful. communities within communities. we made things happen. we made each other better.',
        meta: 'Where passions become communities',
        connections: ['columbia', 'friends', 'fun'],
        visited: false,
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80',
        category: 'education',
        color: [186, 200, 222] // Soft steel blue
    }
};

// Subnodes that can be generated for each main node
const subnodeTemplates = {
    columbia: ['Classes', 'Columbia Daily Spectator', 'Hindu Students Organization', 'Research', 'Computing Fellow', 'Teaching Assistant'],
    family: ['Dad', 'Mom', 'Grandma (Maternal)', 'Grandpa (Maternal)', 'Grandpa (Paternal)', 'Grandma (Paternal)'],
    friends: ['Best Friends', 'College Friends', 'Group Chats', 'Late Night Talks', 'Adventures Together', 'Inside Jokes', 'Support Network', 'Memories'],
    love: ['Relationships', 'Romance', 'Self-Love', 'Vulnerability', 'Connection', 'Growth', 'Heartbreak', 'Intimacy'],
    fun: ['Parties', 'Adventures', 'Dancing', 'Games', 'Spontaneity', 'Laughter', 'Concerts', 'Celebrations'],
    food: ['Cooking', 'Restaurants', 'Cuisines', 'Comfort Food', 'Dining Out', 'Home Cooking', 'Cultural Food', 'Sharing Meals'],
    music: ['Concerts', 'Playlists', 'Artists', 'Genres', 'Dancing to Music', 'Emotions', 'Live Music', 'Headphones'],
    travel: ['India', 'Japan', 'Korea', 'Greece', 'Italy', 'Switzerland', 'Spain', 'Morocco', 'Bali', 'Bermuda', 'Jamaica', 'Bahamas'],
    computerscience: ['Artificial Intelligence', 'Natural Language Processing', 'Passion Projects', 'The Future', 'Girls Who Code', 'National Center for Women in Computing', 'Kode with Klossy'],
    singing: ['Performance', 'Voice', 'Karaoke', 'Practice', 'Stage', 'Emotion', 'Expression', 'Confidence'],
    faith: ['Temples', 'Festivals', 'Prayer', 'Diwali', 'Stories', 'Philosophy'],
    clubs: ['Leadership', 'Events', 'Meetings', 'Community', 'Projects', 'Networking']
};

// Personal stream-of-consciousness descriptions for subnodes
const subnodeDescriptions = {
    // Columbia subnodes
    'Classes': 'notes on notes on notes—some lectures changed everything, others i just survived. the ones that rewired my brain though... still thinking about that one discussion section. knowledge accumulating like sediment.',
    'Columbia Daily Spectator': 'deadline adrenaline, the newsroom buzz, learning to tell stories that matter. my words in print, still surreal. journalism taught me to ask better questions and listen harder.',
    'Hindu Students Organization': 'finding my people on campus—diwali celebrations that felt like home, cultural pride, community that gets it without explanation. belonging far from family.',
    'Research': 'rabbit holes that became obsessions. the thrill of discovering something, even something small. late nights with papers and questions. academia is weird. i kind of love it.',
    'Computing Fellow': 'helping others understand what once confused me. teaching teaches you twice. watching the lightbulb moment in someone\'s eyes. tech skills paying forward.',
    'Teaching Assistant': 'being on the other side of the classroom. students asking questions i remember asking. grading is brutal. but when someone finally gets it—worth everything.',
    
    // Family subnodes
    'Dad': 'his voice on the phone when i call. the way he tells stories. quiet strength, unconditional belief in me. i want to make him proud. i hope he knows.',
    'Mom': 'she knows when something\'s wrong before i say anything. her cooking, her worry, her fierce love. i hear her voice in my head when i make decisions. always guiding.',
    'Grandma (Maternal)': 'her hands making food, her stories about a world before me. she lived so much life. watching her taught me about resilience, grace, holding family together.',
    'Grandpa (Maternal)': 'quiet wisdom, newspaper mornings, the way he looked at grandma. a generation of love i\'m still learning from. his laugh when he taught me chess.',
    'Grandpa (Paternal)': 'stories from another time, advice i didn\'t understand until later. the weight of family history, carrying forward what came before.',
    'Grandma (Paternal)': 'prayers and patience, the rhythm of her days. she loved in service, in feeding us, in showing up. i carry her with me.',
    
    // Friends subnodes
    'Best Friends': 'they know everything. the ugly parts especially. we\'ve seen each other\'s worst days and stayed. these are the forever people. i\'d do anything for them.',
    'College Friends': 'forged in the chaos of growing up away from home. library meltdowns, dining hall therapy, becoming adults together. we have no idea what we\'re doing. we\'re doing it together.',
    'Group Chats': 'unhinged at all hours, memes nobody else would understand, parallel lives staying connected through screens. the constant comfort of notification sounds.',
    'Late Night Talks': '2am conversations that crack you open. vulnerability hour. when the walls come down and you actually say what you mean. some of my most important talks happened exhausted.',
    'Adventures Together': 'spontaneous plans that became core memories. the stories we tell at parties. we were there, we did that thing, remember? friendship as verb, as motion.',
    'Inside Jokes': 'references that make no sense but make us lose it every time. our own language, our own history, proof that we\'ve been through things together.',
    'Support Network': 'people who show up. sick days, bad news, existential crises—someone always answers. i\'m not alone and neither are they. we catch each other.',
    'Memories': 'moments i replay when i need to remember why life is good. preserved in photos, in stories, in the way we laugh remembering. our shared history.',
    
    // Love subnodes
    'Relationships': 'learning how to be with someone. failing at it sometimes. trying again. each relationship taught me something about who i am and what i need.',
    'Romance': 'the butterflies, the uncertainty, the wanting. romance is both beautiful and exhausting. still figuring out if i believe in soulmates or just good timing.',
    'Self-Love': 'the hardest love to maintain. talking to myself like i\'d talk to a friend. accepting the parts i can\'t change. still working on this. always.',
    'Vulnerability': 'being seen without armor is terrifying. but it\'s where connection lives. letting people in, knowing they could hurt you. choosing it anyway.',
    'Connection': 'that electric moment when you click with someone. when conversation flows and time disappears. rare and precious. i live for those moments.',
    'Growth': 'love as transformation. every person who\'s mattered has changed me. becoming better because someone believed i could be. growing toward each other.',
    'Heartbreak': 'the kind of hurt that rewrites you. learning that endings aren\'t failures. carrying scars but not grudges. heartbreak is just love with nowhere to go.',
    'Intimacy': 'closeness beyond physical—knowing someone\'s patterns, fears, dreams. the safety of being truly known. intimate friendship, intimate partnership, intimate self.',
    
    // Fun subnodes
    'Parties': 'the good ones—where the energy is right and everyone\'s vibing. dancing too hard, talking too loud, being young on purpose.',
    'Adventures': 'saying yes before thinking it through. the best stories start with bad ideas. adventure is refusing to be bored.',
    'Dancing': 'body moving without permission, joy that bypasses the brain. i dance badly and beautifully and i don\'t care who\'s watching.',
    'Games': 'competitive streak activated. board games, video games, stupid challenges—i\'m here to win but honestly just here to play.',
    'Spontaneity': 'plans made in the moment, saying yes to the random invitation. some of my best memories had no notice.',
    'Laughter': 'the kind that hurts, that makes you cry, that you remember later and start again. laughter as medicine, as connection, as proof of joy.',
    'Concerts': 'sound washing over you, strangers becoming community for one night. that moment when your favorite song starts and everyone feels it.',
    'Celebrations': 'marking moments, big and small. birthdays, achievements, tuesdays that feel special for no reason. we need excuses to celebrate.',
    
    // Food subnodes
    'Cooking': 'following recipes, inventing disasters, the satisfaction of feeding people. my kitchen attempts—some triumphant, some tragic, all educational.',
    'Restaurants': 'tables that became memories. that perfect meal you think about years later. the joy of eating something new in good company.',
    'Cuisines': 'world tour through food. each cuisine tells a culture\'s story. i want to taste everything, understand everything through flavor.',
    'Comfort Food': 'the dishes that feel like a hug. mom\'s cooking, childhood favorites, the food that means safe, that means home.',
    'Dining Out': 'the ritual of going somewhere, sitting down, being served. dates, celebrations, random weeknight treats. eating out is a small luxury i love.',
    'Home Cooking': 'the sounds and smells of kitchens. recipes passed down, ingredients with memory attached. home cooked food is love made edible.',
    'Cultural Food': 'indian food especially—spices that taste like family gatherings. food as identity, as heritage, as connection to where i come from.',
    'Sharing Meals': 'food is better with people. passing dishes, trying bites, conversations over tables. eating together is ancient and necessary.',
    
    // Music subnodes
    'Concerts': 'live music is different—the bass in your chest, the crowd energy, artists you love existing in the same room. transcendent.',
    'Playlists': 'curated moods, audio diaries. each playlist is a version of me at a specific time. i make playlists like other people write journals.',
    'Artists': 'the voices that shaped me. artists i\'ve grown up with, discovered, obsessed over. their music is part of my inner landscape.',
    'Genres': 'mood-dependent, situation-dependent. i contain multitudes and so does my music taste. genre is just a suggestion.',
    'Dancing to Music': 'movement without thought. the song tells my body what to do. dancing alone, dancing with friends, dancing as release.',
    'Emotions': 'music as emotional processing. sad songs when i need to feel, hype songs when i need energy. music regulates me.',
    'Live Music': 'shows, performances, musicians being human in front of you. the intimacy of live art. imperfect and powerful.',
    'Headphones': 'portable world. headphones mean i can be anywhere and also in my own universe. my bubble, my soundtrack.',
    
    // Travel subnodes
    'India': 'where i\'m from, where family is, where everything tastes and sounds and feels like origin. india is sensory overload in the best way. home in a different sense.',
    'Japan': 'precision and beauty everywhere you look. temples and technology. the silence of respect. japan rewired my aesthetic sense.',
    'Korea': 'food, music, energy. korea felt alive in a specific way. neon and tradition mixing. came for the culture, stayed for the fried chicken.',
    'Greece': 'blue and white everywhere, history under your feet. the aegean sea, the olive oil, the feeling of ancient stories still breathing.',
    'Italy': 'art and food and loud beautiful chaos. every corner looks like a painting. italy taught me about la dolce vita—the sweet life.',
    'Switzerland': 'mountains that make you feel small in a good way. clean air, chocolate, landscapes that don\'t look real. quiet perfection.',
    'Spain': 'energy, color, late dinners, music in the streets. spain feels like life turned up. passion as way of being.',
    'Morocco': 'sensory explosion—markets, spices, colors, calls to prayer. morocco was overwhelming and wonderful. got lost, found more.',
    'Bali': 'rice terraces, temples, yoga people. bali has a frequency. spiritual tourism aside, something about that island stays with you.',
    'Bermuda': 'pink sand, turquoise water, slower pace. bermuda was peaceful. sometimes you need an island to remember how to breathe.',
    'Jamaica': 'music everywhere, warmth in the people, that laid-back energy. jamaica felt like joy was the default setting.',
    'Bahamas': 'crystal water, island time, the simplicity of beach days. bahamas was pure vacation, pure escape, pure sunshine.',
    
    // Computer Science subnodes
    'Artificial Intelligence': 'teaching machines to think—or something like thinking. the philosophical rabbit hole of what intelligence even means. are we building tools or creating something new? the ethics keep me up at night but the possibilities pull me forward.',
    'Natural Language Processing': 'machines understanding human language... the messiness of how we actually talk, the ambiguity, the context. NLP feels like translation between two alien species. bridging silicon and soul.',
    'Passion Projects': 'the code i write because i want to, not because i have to. side projects at 2am, ideas that won\'t leave me alone, building things just to see if i can. this is where the real learning happens.',
    'The Future': 'where is all this going? what will i build? what will exist that doesn\'t yet? the future is just the present we haven\'t coded yet. equal parts terrifying and exhilarating. i want to be part of shaping it.',
    'Girls Who Code': 'sisterhood in syntax. learning that i belong in rooms i was told weren\'t for me. mentorship, community, the power of seeing yourself reflected in others who code. we\'re not just closing the gap—we\'re rewriting the whole program.',
    'National Center for Women in Computing': 'advocacy meets action. the stats are frustrating but the movement is real. connecting with women who are changing tech from the inside. representation matters. we\'re here and we\'re not leaving.',
    'Kode with Klossy': 'summer that changed everything. karlie\'s vision, our code. learning surrounded by girls who got it, who wanted it, who believed we could build anything. that energy stays with you. that confidence compounds.',
    
    // Singing subnodes
    'Performance': 'being on in front of people—terror and exhilaration mixed. performing is vulnerability with an audience. terrifying. addictive.',
    'Voice': 'my instrument, my signature. the sounds that come out of me, shaped by years of practice and emotion. this is my voice.',
    'Karaoke': 'unserious singing, joy without pressure. karaoke is about the vibe not the talent. microphone therapy.',
    'Practice': 'running scales, learning songs, the boring repetition that builds the magic. practice is discipline. i don\'t always love it but i love what it builds.',
    'Stage': 'that moment before you start, the lights, the space between you and the audience. the stage is a different dimension.',
    'Emotion': 'singing as feeling extraction. getting the emotion from somewhere inside and pushing it out through sound. cathartic.',
    'Expression': 'saying things with music i can\'t say with words. singing is another language. expression that transcends talking.',
    'Confidence': 'performing builds it, lack of it stops it. confidence to sing, to be heard, to take up sonic space. still developing.',
    
    // Faith subnodes
    'Temples': 'the smell of incense, the bells, the particular peace of sacred spaces. temples feel like visits with something larger. quiet among the chaos.',
    'Festivals': 'diwali lights, holi colors, celebrations that mark time. festivals connect me to culture, to family, to the rhythm of hindu life.',
    'Prayer': 'talking to something that might be listening. prayer as practice, as hope, as connection. not always sure who i\'m talking to but i keep talking.',
    'Diwali': 'festival of lights, goodness over darkness, family coming together. diwali is my favorite—the joy, the food, the warmth of tradition.',
    'Stories': 'ramayana, mahabharata, stories i grew up with. mythology as wisdom, as entertainment, as cultural DNA. these characters feel like family.',
    'Philosophy': 'dharma, karma, atman, brahman—concepts i\'m still understanding. hindu philosophy goes deep. answers that create more questions.',
    
    // Clubs subnodes
    'Leadership': 'running things, organizing people, making decisions that affect others. leadership taught me more than i expected. mostly about listening.',
    'Events': 'the chaos of planning, the satisfaction when it works. events are temporary worlds we create. exhausting and wonderful.',
    'Meetings': 'some productive, some pointless, all part of the process. learning to make meetings matter. still haven\'t mastered it.',
    'Community': 'the people who show up, who care about the same things. community is the point of clubs. finding your people through shared interest.',
    'Projects': 'making things happen, seeing ideas become real. projects give purpose to the meetings. the tangible output of collective effort.',
    'Networking': 'meeting people through shared activities. networking that doesn\'t feel like networking. the best connections happen organically.'
};

// Canvas and animation variables
let canvas, ctx;
let nodes = [];
let connections = [];
let animationFrame;
let exploredCount = 0;
let currentNode = null;
let nextNodeId = 1000; // For dynamically generated nodes

// Camera position for smooth movement
let camera = { x: 0, y: 0, targetX: 0, targetY: 0, zoom: 1 };

// Initialize - Multiple approaches to ensure it works
function init() {
    console.log('Initializing application...');
    const enterBtn = document.getElementById('enter-btn');
    const introScreen = document.getElementById('intro-screen');
    
    console.log('Enter button:', enterBtn);
    console.log('Intro screen:', introScreen);
    
    if (!enterBtn) {
        console.error('Enter button not found! Retrying in 100ms...');
        setTimeout(init, 100);
        return;
    }
    
    enterBtn.addEventListener('click', function() {
        console.log('Enter button clicked!');
        introScreen.classList.remove('active');
        setTimeout(() => {
            console.log('Initializing canvas and network...');
            initializeCanvas();
            createNodeNetwork();
            animate();
        }, 500);
    });
    
    console.log('Event listener attached successfully');
}

// Try multiple initialization methods
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // Document already loaded
    init();
}

window.addEventListener('load', () => {
    console.log('Window load event fired');
});

// Pan and zoom variables
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let dragStartCameraX = 0;
let dragStartCameraY = 0;

function initializeCanvas() {
    canvas = document.getElementById('neural-canvas');
    ctx = canvas.getContext('2d');
    
    resizeCanvas();
    initializeUniverse(); // Initialize space background
    
    window.addEventListener('resize', () => {
        resizeCanvas();
        initializeUniverse(); // Reinitialize on resize
    });
    
    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('wheel', handleWheel, { passive: false });
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createNodeNetwork() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Create origin node at center
    const originData = thoughtNodes.origin;
    originData.x = centerX;
    originData.y = centerY;
    
    nodes.push({
        ...originData,
        radius: 16, // Larger central star
        pulse: 0,
        hover: false,
        glow: 1
    });
    
    // Create other nodes in a radial pattern with some randomness
    let angle = 0;
    const angleStep = (Math.PI * 2) / (Object.keys(thoughtNodes).length - 1);
    const radius = 250;
    
    for (const key in thoughtNodes) {
        if (key === 'origin') continue;
        
        const nodeData = thoughtNodes[key];
        const randomRadius = radius + Math.random() * 150 - 75;
        const randomAngle = angle + (Math.random() - 0.5) * 0.5;
        
        nodeData.x = centerX + Math.cos(randomAngle) * randomRadius;
        nodeData.y = centerY + Math.sin(randomAngle) * randomRadius;
        
        nodes.push({
            ...nodeData,
            radius: 10, // Slightly larger stars
            pulse: Math.random() * Math.PI * 2,
            hover: false,
            glow: 0.5 + Math.random() * 0.5
        });
        
        angle += angleStep;
    }
    
    // Create visible connections
    createConnections();
}

function createConnections() {
    connections = [];
    
    nodes.forEach(node => {
        if (node.connections) {
            node.connections.forEach(connId => {
                const targetNode = nodes.find(n => n.id === connId);
                if (targetNode) {
                    connections.push({
                        from: node,
                        to: targetNode,
                        opacity: 0.1,
                        discovered: node.id === 'origin'
                    });
                }
            });
        }
    });
}

// Enhanced starfield with varied sizes and twinkle
let universeStars = [];
let animationTime = 0;
let hoveredNode = null; // Track hovered node for focus mode
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initializeUniverse() {
    const starCount = 300;
    universeStars = [];
    for (let i = 0; i < starCount; i++) {
        // Varied star types: mostly small, few large
        const sizeRand = Math.random();
        let size;
        if (sizeRand > 0.95) size = 1.5 + Math.random() * 0.8; // Large stars (5%)
        else if (sizeRand > 0.8) size = 0.8 + Math.random() * 0.5; // Medium stars (15%)
        else size = 0.3 + Math.random() * 0.4; // Small stars (80%)
        
        // Slight color variation (cool to warm)
        const warmth = Math.random();
        const r = warmth > 0.7 ? 255 : 200 + Math.random() * 30;
        const g = 200 + Math.random() * 30;
        const b = warmth < 0.3 ? 255 : 220 + Math.random() * 20;
        
        universeStars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: size,
            baseBrightness: 0.2 + Math.random() * 0.5,
            twinkleSpeed: 0.5 + Math.random() * 2,
            twinklePhase: Math.random() * Math.PI * 2,
            color: { r, g, b }
        });
    }
}

function drawUniverseBackground() {
    // Base deep background
    ctx.fillStyle = '#06060a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Vignette gradient (brighter center, darker edges)
    const vignetteGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) * 0.7
    );
    vignetteGradient.addColorStop(0, 'rgba(18, 18, 28, 0.4)');
    vignetteGradient.addColorStop(0.5, 'rgba(10, 10, 16, 0.2)');
    vignetteGradient.addColorStop(1, 'rgba(4, 4, 8, 0)');
    ctx.fillStyle = vignetteGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw stars with soft twinkle
    universeStars.forEach(star => {
        let brightness = star.baseBrightness;
        
        // Add subtle twinkle animation (skip if reduced motion)
        if (!reducedMotion) {
            const twinkle = Math.sin(animationTime * star.twinkleSpeed + star.twinklePhase);
            brightness = star.baseBrightness * (0.7 + twinkle * 0.3);
        }
        
        // Soft glow for larger stars
        if (star.size > 1.0) {
            const glowGradient = ctx.createRadialGradient(
                star.x, star.y, 0,
                star.x, star.y, star.size * 3
            );
            glowGradient.addColorStop(0, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${brightness * 0.3})`);
            glowGradient.addColorStop(0.5, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${brightness * 0.1})`);
            glowGradient.addColorStop(1, 'transparent');
            ctx.fillStyle = glowGradient;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Star core
        ctx.fillStyle = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${brightness * 0.8})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    });
}

function animate() {
    // Update animation time for effects
    if (!reducedMotion) {
        animationTime += 0.016; // ~60fps
    }
    
    // Draw universe background
    drawUniverseBackground();
    
    // Smooth camera movement
    camera.x += (camera.targetX - camera.x) * 0.05;
    camera.y += (camera.targetY - camera.y) * 0.05;
    
    ctx.save();
    ctx.scale(camera.zoom, camera.zoom);
    ctx.translate(-camera.x, -camera.y);
    
    // Determine neighbors of hovered node for focus mode
    const neighborIds = new Set();
    if (hoveredNode) {
        neighborIds.add(hoveredNode.id);
        if (hoveredNode.connections) {
            hoveredNode.connections.forEach(id => neighborIds.add(id));
        }
    }
    
    // Draw connections with soft aesthetic lines
    connections.forEach(conn => {
        if (conn.from.visited || conn.to.visited || conn.from.id === 'origin') {
            // Calculate base opacity
            let baseOpacity = conn.from.visited && conn.to.visited ? 0.12 : 0.06;
            
            // Focus mode: increase neighbor connections, fade others
            let focusMultiplier = 1;
            if (hoveredNode) {
                const isNeighborConnection = neighborIds.has(conn.from.id) && neighborIds.has(conn.to.id);
                focusMultiplier = isNeighborConnection ? 3.5 : 0.3;
            }
            
            const opacity = Math.min(baseOpacity * focusMultiplier, 0.5);
            
            // Get colors from connected nodes
            const fromColor = conn.from.color || [200, 180, 230];
            const toColor = conn.to.color || [200, 180, 230];
            
            // Soft gradient between node colors
            const gradient = ctx.createLinearGradient(
                conn.from.x, conn.from.y,
                conn.to.x, conn.to.y
            );
            gradient.addColorStop(0, `rgba(${fromColor[0]}, ${fromColor[1]}, ${fromColor[2]}, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(220, 215, 230, ${opacity * 0.6})`);
            gradient.addColorStop(1, `rgba(${toColor[0]}, ${toColor[1]}, ${toColor[2]}, ${opacity})`);
            
            // Outer glow line (thicker, softer)
            ctx.strokeStyle = gradient;
            ctx.lineWidth = focusMultiplier > 1 ? 1.5 : 1;
            ctx.shadowColor = `rgba(200, 180, 230, ${opacity * 0.5})`;
            ctx.shadowBlur = 4;
            ctx.beginPath();
            ctx.moveTo(conn.from.x, conn.from.y);
            ctx.lineTo(conn.to.x, conn.to.y);
            ctx.stroke();
            ctx.shadowBlur = 0;
        }
    });
    
    // Draw nodes as glowing orbs
    nodes.forEach(node => {
        const baseRadius = node.radius;
        const color = node.color || [200, 180, 230];
        const isActive = node.visited || node.id === 'origin';
        const isHovered = node.hover;
        
        // Focus mode: determine if this node should be emphasized or faded
        let focusOpacity = 1;
        if (hoveredNode && !isHovered) {
            focusOpacity = neighborIds.has(node.id) ? 1.1 : 0.25;
        }
        
        // Subtle pulse animation
        let pulseScale = 1;
        if (!reducedMotion && (isActive || isHovered)) {
            pulseScale = 1 + Math.sin(animationTime * 2 + node.pulse) * 0.03;
        }
        
        const radius = baseRadius * pulseScale;
        
        // Outer halo/bloom (larger, softer glow)
        const haloMultiplier = isHovered ? 2.8 : (isActive ? 2.2 : 1.8);
        const haloOpacity = (isHovered ? 0.4 : (isActive ? 0.25 : 0.15)) * focusOpacity;
        
        const haloGradient = ctx.createRadialGradient(
            node.x, node.y, radius * 0.5,
            node.x, node.y, radius * haloMultiplier
        );
        haloGradient.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${haloOpacity})`);
        haloGradient.addColorStop(0.4, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${haloOpacity * 0.5})`);
        haloGradient.addColorStop(0.7, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${haloOpacity * 0.2})`);
        haloGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = haloGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * haloMultiplier, 0, Math.PI * 2);
        ctx.fill();
        
        // Orb core gradient (bright center, transparent edge)
        const coreGradient = ctx.createRadialGradient(
            node.x - radius * 0.3, node.y - radius * 0.3, 0,
            node.x, node.y, radius
        );
        const coreAlpha = (isActive ? 0.95 : 0.8) * focusOpacity;
        coreGradient.addColorStop(0, `rgba(${Math.min(color[0] + 60, 255)}, ${Math.min(color[1] + 60, 255)}, ${Math.min(color[2] + 60, 255)}, ${coreAlpha})`);
        coreGradient.addColorStop(0.3, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${coreAlpha * 0.9})`);
        coreGradient.addColorStop(0.7, `rgba(${Math.floor(color[0] * 0.7)}, ${Math.floor(color[1] * 0.7)}, ${Math.floor(color[2] * 0.7)}, ${coreAlpha * 0.7})`);
        coreGradient.addColorStop(1, `rgba(${Math.floor(color[0] * 0.4)}, ${Math.floor(color[1] * 0.4)}, ${Math.floor(color[2] * 0.4)}, ${coreAlpha * 0.3})`);
        
        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner bright core (center hotspot)
        const innerCoreGradient = ctx.createRadialGradient(
            node.x - radius * 0.2, node.y - radius * 0.2, 0,
            node.x, node.y, radius * 0.6
        );
        const innerAlpha = (isHovered ? 0.9 : 0.7) * focusOpacity;
        innerCoreGradient.addColorStop(0, `rgba(255, 255, 255, ${innerAlpha})`);
        innerCoreGradient.addColorStop(0.3, `rgba(${Math.min(color[0] + 80, 255)}, ${Math.min(color[1] + 80, 255)}, ${Math.min(color[2] + 80, 255)}, ${innerAlpha * 0.5})`);
        innerCoreGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = innerCoreGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 0.6, 0, Math.PI * 2);
        ctx.fill();
        
        // Specular highlight (small bright spot)
        const specX = node.x - radius * 0.35;
        const specY = node.y - radius * 0.35;
        const specRadius = radius * 0.25;
        
        const specGradient = ctx.createRadialGradient(
            specX, specY, 0,
            specX, specY, specRadius
        );
        specGradient.addColorStop(0, `rgba(255, 255, 255, ${0.95 * focusOpacity})`);
        specGradient.addColorStop(0.4, `rgba(255, 255, 255, ${0.5 * focusOpacity})`);
        specGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = specGradient;
        ctx.beginPath();
        ctx.arc(specX, specY, specRadius, 0, Math.PI * 2);
        ctx.fill();
    });
    
    // Draw labels in a second pass (on top of all nodes)
    nodes.forEach(node => {
        const color = node.color || [200, 180, 230];
        const isHovered = node.hover;
        const isOrigin = node.id === 'origin';
        
        // Focus mode opacity for labels
        let labelOpacity = 0;
        if (isHovered) {
            labelOpacity = 1;
        } else if (isOrigin) {
            labelOpacity = 0.85;
        } else if (hoveredNode && neighborIds.has(node.id)) {
            labelOpacity = 0.6;
        }
        
        if (labelOpacity > 0) {
            const radius = node.radius;
            
            // Label with soft shadow for legibility
            ctx.save();
            ctx.font = `500 ${isHovered ? 13 : 12}px Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            
            // Text shadow (draw text multiple times offset)
            ctx.fillStyle = `rgba(6, 6, 10, ${labelOpacity * 0.8})`;
            const shadowOffsets = [[0, 1], [1, 0], [-1, 0], [0, -1], [1, 1], [-1, -1]];
            shadowOffsets.forEach(([ox, oy]) => {
                ctx.fillText(node.title, node.x + ox, node.y - radius - 8 + oy);
            });
            
            // Main text (soft off-white, not harsh)
            ctx.fillStyle = `rgba(240, 238, 245, ${labelOpacity * 0.95})`;
            ctx.fillText(node.title, node.x, node.y - radius - 8);
            ctx.restore();
        }
    });
    
    ctx.restore();
    
    // Update UI
    updateExploredCount();
    
    animationFrame = requestAnimationFrame(animate);
}

function handleMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    
    // Handle dragging for pan
    if (isDragging) {
        const deltaX = e.clientX - dragStartX;
        const deltaY = e.clientY - dragStartY;
        camera.x = dragStartCameraX - deltaX / camera.zoom;
        camera.y = dragStartCameraY - deltaY / camera.zoom;
        camera.targetX = camera.x;
        camera.targetY = camera.y;
        canvas.style.cursor = 'grabbing';
        return;
    }
    
    const mouseX = (e.clientX - rect.left) / camera.zoom + camera.x;
    const mouseY = (e.clientY - rect.top) / camera.zoom + camera.y;
    
    let foundHover = null;
    nodes.forEach(node => {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Larger hit area for better UX
        node.hover = distance < node.radius + 8;
        if (node.hover) foundHover = node;
    });
    
    // Update global hovered node for focus mode
    hoveredNode = foundHover;
    
    canvas.style.cursor = foundHover ? 'pointer' : 'grab';
}

function handleMouseDown(e) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / camera.zoom + camera.x;
    const mouseY = (e.clientY - rect.top) / camera.zoom + camera.y;
    
    // Check if clicking on a node
    let clickedNode = false;
    nodes.forEach(node => {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < node.radius + 5) {
            clickedNode = true;
        }
    });
    
    // If not clicking a node, start drag
    if (!clickedNode) {
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        dragStartCameraX = camera.x;
        dragStartCameraY = camera.y;
        canvas.style.cursor = 'grabbing';
    }
}

function handleMouseUp(e) {
    isDragging = false;
    canvas.style.cursor = 'grab';
}

function handleWheel(e) {
    e.preventDefault();
    
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Zoom factor
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
    const newZoom = Math.max(0.3, Math.min(3, camera.zoom * zoomFactor));
    
    // Zoom towards mouse position
    const worldX = mouseX / camera.zoom + camera.x;
    const worldY = mouseY / camera.zoom + camera.y;
    
    camera.zoom = newZoom;
    
    camera.x = worldX - mouseX / camera.zoom;
    camera.y = worldY - mouseY / camera.zoom;
    camera.targetX = camera.x;
    camera.targetY = camera.y;
}

function handleCanvasClick(e) {
    // Don't register click if we were dragging
    if (isDragging) return;
    
    const rect = canvas.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / camera.zoom + camera.x;
    const mouseY = (e.clientY - rect.top) / camera.zoom + camera.y;
    
    nodes.forEach(node => {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < node.radius + 5) {
            openThoughtPanel(node);
            // Generate subnodes if this is a main node
            generateSubnodes(node);
        }
    });
}

function generateSubnodes(parentNode) {
    // Check if this node has a template for subnodes
    const templates = subnodeTemplates[parentNode.id];
    if (!templates || parentNode.subnodesGenerated) return;
    
    // Mark as generated so we don't create duplicates
    parentNode.subnodesGenerated = true;
    
    // Show all subnodes
    const numSubnodes = templates.length;
    
    templates.forEach((subnodeTitle, index) => {
        // Position around parent
        const angle = (Math.PI * 2 / numSubnodes) * index + Math.random() * 0.3;
        const distance = 80 + Math.random() * 40;
        
        // Get personal description or fallback
        const personalText = subnodeDescriptions[subnodeTitle] || `a fragment of ${parentNode.title}... still processing this one.`;
        
        const subnode = {
            id: `${parentNode.id}_sub_${nextNodeId++}`,
            title: subnodeTitle,
            text: personalText,
            meta: `part of ${parentNode.title}`,
            connections: [parentNode.id],
            visited: false,
            x: parentNode.x + Math.cos(angle) * distance,
            y: parentNode.y + Math.sin(angle) * distance,
            category: parentNode.category,
            color: parentNode.color,
            radius: 6, // Smaller than main nodes
            pulse: Math.random() * Math.PI * 2,
            hover: false,
            glow: 0.7,
            isSubnode: true,
            parentId: parentNode.id
        };
        
        // Add to nodes array
        nodes.push(subnode);
        
        // Create connection
        connections.push({
            from: parentNode,
            to: subnode,
            opacity: 0.2,
            discovered: true
        });
        
        // Also add to parent's connections
        if (!parentNode.connections.includes(subnode.id)) {
            parentNode.connections.push(subnode.id);
        }
    });
}

function openThoughtPanel(node) {
    currentNode = node;
    
    if (!node.visited) {
        node.visited = true;
        exploredCount++;
        updateExploredCount();
    }
    
    // Open bubble metaverse
    openBubbleMetaverse(node);
}

function openBubbleMetaverse(node) {
    const bubbleMetaverse = document.getElementById('bubble-metaverse');
    const bubbleWorld = document.getElementById('bubble-world');
    const orbitContainer = document.getElementById('orbit-container');
    
    // Set bubble background image
    if (node.image) {
        bubbleWorld.style.backgroundImage = `url(${node.image})`;
    }
    
    // Update bubble content
    const titleElement = document.getElementById('bubble-title');
    titleElement.textContent = node.title;
    titleElement.setAttribute('data-text', node.title); // For chromatic aberration effect
    
    document.getElementById('bubble-text').textContent = node.text;
    document.getElementById('bubble-meta').textContent = node.meta;
    
    // Clear previous orbiting nodes
    orbitContainer.innerHTML = '';
    
    // Create orbiting connected nodes
    if (node.connections && node.connections.length > 0) {
        const angleStep = (Math.PI * 2) / node.connections.length;
        const orbitRadius = 45; // percentage
        
        node.connections.forEach((connId, index) => {
            const connNode = nodes.find(n => n.id === connId);
            if (connNode) {
                const angle = angleStep * index;
                const x = 50 + Math.cos(angle) * orbitRadius;
                const y = 50 + Math.sin(angle) * orbitRadius;
                
                // Create connection line from center to orbit node
                const line = document.createElement('div');
                line.className = 'orbit-line';
                line.style.transform = `rotate(${angle}rad)`;
                line.style.animationDelay = `${index * 0.1}s`;
                orbitContainer.appendChild(line);
                
                // Create orbit node
                const orbitNode = document.createElement('div');
                orbitNode.className = 'orbit-node';
                orbitNode.style.left = `${x}%`;
                orbitNode.style.top = `${y}%`;
                orbitNode.style.transform = 'translate(-50%, -50%)';
                orbitNode.style.animationDelay = `${index * 0.2}s`;
                
                const title = document.createElement('div');
                title.className = 'orbit-node-title';
                title.textContent = connNode.title;
                orbitNode.appendChild(title);
                
                orbitNode.onclick = () => {
                    closeBubbleMetaverse();
                    setTimeout(() => {
                        openBubbleMetaverse(connNode);
                        // Pan camera to new node
                        const centerX = canvas.width / 2;
                        const centerY = canvas.height / 2;
                        camera.targetX = connNode.x - centerX;
                        camera.targetY = connNode.y - centerY;
                    }, 600);
                };
                
                orbitContainer.appendChild(orbitNode);
            }
        });
    }
    
    // Particles and data streams disabled for static appearance
    
    // Show bubble metaverse
    bubbleMetaverse.classList.add('active');
    setTimeout(() => {
        bubbleWorld.classList.add('visible');
        // Add parallax effect
        bubbleMetaverse.addEventListener('mousemove', handleBubbleParallax);
    }, 50);
}

function closeBubbleMetaverse() {
    const bubbleMetaverse = document.getElementById('bubble-metaverse');
    const bubbleWorld = document.querySelector('.bubble-world');
    
    // Remove parallax effect
    bubbleMetaverse.removeEventListener('mousemove', handleBubbleParallax);
    
    bubbleWorld.classList.remove('visible');
    setTimeout(() => {
        bubbleMetaverse.classList.remove('active');
    }, 600);
}

// Add parallax effect to bubble for 3D depth
function handleBubbleParallax(e) {
    const bubbleWorld = document.getElementById('bubble-world');
    if (!bubbleWorld.classList.contains('visible')) return;
    
    const rect = bubbleWorld.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Calculate offset from center (-1 to 1)
    const offsetX = (mouseX - centerX) / (rect.width / 2);
    const offsetY = (mouseY - centerY) / (rect.height / 2);
    
    // Clamp values
    const clampedX = Math.max(-1, Math.min(1, offsetX));
    const clampedY = Math.max(-1, Math.min(1, offsetY));
    
    // Apply 3D rotation for sphere effect
    const rotateX = clampedY * 12; // Max 12 degrees
    const rotateY = clampedX * -12;
    
    bubbleWorld.style.transform = `translate(-50%, -50%) scale(1) rotateX(${2 + rotateX}deg) rotateY(${rotateY}deg)`;
}

function createBubbleParticles() {
    const bubbleWorld = document.querySelector('.bubble-world');
    
    // Remove old particles
    const oldParticles = bubbleWorld.querySelectorAll('.bubble-particle');
    oldParticles.forEach(p => p.remove());
    
    // Create new particles
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'bubble-particle';
        
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = (Math.random() - 0.5) * 50;
        const endY = (Math.random() - 0.5) * 50;
        
        particle.style.left = `${startX}%`;
        particle.style.top = `${startY}%`;
        particle.style.setProperty('--tx', `${endX}px`);
        particle.style.setProperty('--ty', `${endY}px`);
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${8 + Math.random() * 4}s`;
        
        bubbleWorld.appendChild(particle);
    }
}

function createDataStreams() {
    const dataStreamsContainer = document.getElementById('data-streams');
    
    // Remove old streams
    dataStreamsContainer.innerHTML = '';
    
    // Create Matrix-style data streams
    const streamCount = 15;
    for (let i = 0; i < streamCount; i++) {
        const stream = document.createElement('div');
        stream.className = 'data-stream';
        
        const xPos = Math.random() * 100;
        stream.style.left = `${xPos}%`;
        stream.style.top = '-100px';
        stream.style.animationDuration = `${3 + Math.random() * 4}s`;
        stream.style.animationDelay = `${Math.random() * 5}s`;
        
        dataStreamsContainer.appendChild(stream);
    }
}

function updateExploredCount() {
    document.getElementById('node-count').textContent = 
        `Nodes: ${nodes.length} | Zoom: ${Math.round(camera.zoom * 100)}%`;
}

// Close bubble button
document.getElementById('close-bubble').addEventListener('click', closeBubbleMetaverse);

// Easter egg: Console message
console.log('%cIs this Diya Nair?', 'color: #64c8ff; font-size: 20px; font-weight: bold;');
console.log('%cA universe of everything that makes me who I am—Columbia, family, friends, love, music, and dreams yet to unfold.', 'color: #9999bb; font-size: 12px;');
console.log('%cYou found the hidden message. Welcome to my constellation. ✨', 'color: #7777aa; font-size: 10px; font-style: italic;');
