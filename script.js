// Thought Nodes Data - Personal universe of Diya Nair
const thoughtNodes = {
    origin: {
        id: 'origin',
        title: 'Is This Diya Nair?',
        text: 'This is my universe—a constellation of everything that makes me who I am. Columbia shaped my mind. Family and friends filled my heart. Love, music, and singing gave me voice. Food, fun, and travel showed me how to live fully. And somewhere ahead, a corporate future waits, shimmering with possibility.',
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
        text: 'These halls shaped how I think, how I question, how I see the world. Late nights in Butler Library, conversations that stretched until dawn, professors who challenged everything I thought I knew. Columbia wasn\'t just education—it was transformation. It taught me to be curious, critical, fearless. It gave me the tools to build my future.',
        meta: 'Where my mind learned to soar',
        connections: ['origin', 'friends', 'corporate', 'fun', 'clubs'],
        visited: false,
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
        category: 'education',
        color: [167, 199, 231] // Powder blue
    },
    family: {
        id: 'family',
        title: 'Family',
        text: 'The foundation of everything. The people who knew me before I knew myself. Their love is unconditional, their support unwavering. They celebrate my wins and catch me when I fall. In a world of constant change, family is the constant—the place I can always return to, the people who remind me where I came from and why it matters.',
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
        text: 'The family I chose. The people who make life an adventure, who turn ordinary moments into memories. We laugh until we cry, we dream out loud, we build each other up. Friends are the ones who see you at your worst and love you anyway. They\'re late-night talks, spontaneous plans, inside jokes that never get old. They\'re proof that you\'re never alone.',
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
        text: 'The force that makes everything worth it. Love in all its forms—romantic, platonic, familial. The flutter in your chest, the comfort of being seen, the vulnerability of letting someone in. Love is late-night conversations, shared silences, choosing each other every day. It\'s messy and beautiful and terrifying and the most human thing we do.',
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
        text: 'Life is too short to be serious all the time. Fun is dancing like nobody\'s watching, trying new things, saying yes to adventure. It\'s spontaneous road trips, terrible karaoke, laughing until your stomach hurts. Fun reminds me that joy doesn\'t need a reason—sometimes the point is just to live, to play, to be gloriously, unapologetically alive.',
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
        text: 'More than sustenance—it\'s culture, memory, love. Every dish tells a story. The comfort of home cooking, the thrill of trying something new, the ritual of breaking bread with people you care about. Food is how we celebrate, how we mourn, how we connect. It\'s the taste of travel, the warmth of tradition, the adventure of a bite you\'ve never tried before. Some of my best memories happened around a table.',
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
        text: 'The universal language that needs no translation. Music is emotion made audible—joy, heartbreak, rage, hope, all wrapped in melody and rhythm. It\'s the soundtrack to every important moment of my life. Music moves me, literally and figuratively. It\'s in my headphones on the subway, in my heart when I need comfort, in the air when I need to dance. Without music, the world would be quieter. And lonelier.',
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
        text: 'The best education I never enrolled in. Every new place expands who I am—new perspectives, new flavors, new ways of seeing the world. Travel is freedom, curiosity, growth. It\'s getting lost and finding yourself. It\'s realizing how big the world is and how small your problems are. The passport stamps are nice, but the real souvenirs are the person I become with each journey.',
        meta: 'The world is my classroom',
        connections: ['origin', 'friends', 'love', 'food', 'fun', 'family'],
        visited: false,
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80',
        category: 'experiences',
        color: [176, 212, 196] // Sage green
    },
    corporate: {
        id: 'corporate',
        title: 'Corporate Future',
        text: 'The path ahead shimmers with possibility and pressure. The corporate world—where dreams meet spreadsheets, where ambition wears a suit. It\'s scary and exciting in equal measure. Can I make an impact? Can I stay true to myself while climbing the ladder? Can I change the system from within? The future isn\'t written yet. I get to define what success means. And that\'s both terrifying and empowering.',
        meta: 'The未来 I\'m building',
        connections: ['origin', 'columbia', 'travel', 'music'],
        visited: false,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
        category: 'education',
        color: [176, 224, 230] // Powder cyan
    },
    singing: {
        id: 'singing',
        title: 'Singing',
        text: 'When I sing, I\'m most myself. It\'s vulnerability and power wrapped in melody. Singing is how I express what words alone can\'t capture. It\'s in the shower, on stage, in the car with windows down. It connects me to music in a way that listening never could—I become part of the song. Every note is a piece of my soul shared with the world. And when others join in? That\'s magic.',
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
        text: 'Hinduism is more than religion—it\'s the spiritual thread woven through my identity. The stories of gods and goddesses I grew up with, the festivals that mark the rhythm of the year, the philosophy that teaches me about dharma, karma, and the interconnectedness of all things. Faith gives me grounding when life feels chaotic, wisdom passed down through generations, and a sense of belonging to something eternal and vast.',
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
        text: 'The communities within the community. Clubs are where I found my people—passionate individuals who share my interests and push me to grow. From late-night meetings to campus events, these organizations shaped my college experience beyond the classroom. They taught me leadership, collaboration, and the power of bringing people together around a shared purpose.',
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
    corporate: ['Career Goals', 'Professional Growth', 'Networking', 'Skills', 'Success', 'Leadership', 'Innovation', 'Work-Life Balance'],
    singing: ['Performance', 'Voice', 'Karaoke', 'Practice', 'Stage', 'Emotion', 'Expression', 'Confidence'],
    faith: ['Temples', 'Festivals', 'Prayer', 'Diwali', 'Stories', 'Philosophy'],
    clubs: ['Leadership', 'Events', 'Meetings', 'Community', 'Projects', 'Networking']
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

// Simple static star background
let universeStars = [];

function initializeUniverse() {
    // Create simple static background stars
    const starCount = 400;
    universeStars = [];
    for (let i = 0; i < starCount; i++) {
        universeStars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5,
            brightness: 0.3 + Math.random() * 0.7
        });
    }
}

function drawUniverseBackground() {
    // Simple dark background
    ctx.fillStyle = '#0a0a12';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw static stars
    universeStars.forEach(star => {
        ctx.fillStyle = `rgba(200, 200, 220, ${star.brightness * 0.6})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    });
}

function animate() {
    // Draw universe background
    drawUniverseBackground();
    
    // Smooth camera movement
    camera.x += (camera.targetX - camera.x) * 0.05;
    camera.y += (camera.targetY - camera.y) * 0.05;
    
    ctx.save();
    ctx.scale(camera.zoom, camera.zoom);
    ctx.translate(-camera.x, -camera.y);
    
    // Draw connections with soft aesthetic lines
    connections.forEach(conn => {
        if (conn.from.visited || conn.to.visited || conn.from.id === 'origin') {
            const opacity = conn.from.visited && conn.to.visited ? 0.35 : 0.15;
            
            // Get colors from connected nodes for gradient
            const fromColor = conn.from.color || [255, 255, 255];
            const toColor = conn.to.color || [255, 255, 255];
            
            // Soft gradient between node colors
            const gradient = ctx.createLinearGradient(
                conn.from.x, conn.from.y,
                conn.to.x, conn.to.y
            );
            gradient.addColorStop(0, `rgba(${fromColor[0]}, ${fromColor[1]}, ${fromColor[2]}, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(255, 255, 255, ${opacity * 0.5})`);
            gradient.addColorStop(1, `rgba(${toColor[0]}, ${toColor[1]}, ${toColor[2]}, ${opacity})`);
            
            // Soft outer glow
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.shadowColor = `rgba(255, 255, 255, 0.15)`;
            ctx.shadowBlur = 6;
            ctx.beginPath();
            ctx.moveTo(conn.from.x, conn.from.y);
            ctx.lineTo(conn.to.x, conn.to.y);
            ctx.stroke();
            
            // Thin inner line
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.6})`;
            ctx.lineWidth = 0.5;
            ctx.shadowBlur = 0;
            ctx.beginPath();
            ctx.moveTo(conn.from.x, conn.from.y);
            ctx.lineTo(conn.to.x, conn.to.y);
            ctx.stroke();
            
            ctx.shadowBlur = 0;
        }
    });
    
    // Draw nodes as 3D spheres
    nodes.forEach(node => {
        const radius = node.radius;
        const color = node.color || [100, 150, 200]; // Default color
        const isActive = node.visited || node.id === 'origin';
        
        // Draw shadow underneath sphere for depth
        const shadowGradient = ctx.createRadialGradient(
            node.x + radius * 0.3, node.y + radius * 0.5, 0,
            node.x + radius * 0.3, node.y + radius * 0.5, radius * 1.2
        );
        shadowGradient.addColorStop(0, 'rgba(0, 0, 0, 0.4)');
        shadowGradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.15)');
        shadowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = shadowGradient;
        ctx.beginPath();
        ctx.ellipse(node.x + radius * 0.2, node.y + radius * 0.3, radius * 1.1, radius * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Outer glow for hover/active state
        if (node.hover || isActive) {
            const glowGradient = ctx.createRadialGradient(
                node.x, node.y, radius,
                node.x, node.y, radius + 15
            );
            glowGradient.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.5)`);
            glowGradient.addColorStop(0.5, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.2)`);
            glowGradient.addColorStop(1, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)`);
            
            ctx.fillStyle = glowGradient;
            ctx.beginPath();
            ctx.arc(node.x, node.y, radius + 15, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Base sphere gradient (dark to mid - creates depth)
        const baseGradient = ctx.createRadialGradient(
            node.x - radius * 0.4, node.y - radius * 0.4, 0,
            node.x + radius * 0.2, node.y + radius * 0.2, radius * 1.3
        );
        const alpha = isActive ? 1 : 0.85;
        // Darker bottom-right for 3D shadow effect
        baseGradient.addColorStop(0, `rgba(${Math.min(color[0] + 40, 255)}, ${Math.min(color[1] + 40, 255)}, ${Math.min(color[2] + 40, 255)}, ${alpha})`);
        baseGradient.addColorStop(0.4, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`);
        baseGradient.addColorStop(0.8, `rgba(${Math.floor(color[0] * 0.6)}, ${Math.floor(color[1] * 0.6)}, ${Math.floor(color[2] * 0.6)}, ${alpha})`);
        baseGradient.addColorStop(1, `rgba(${Math.floor(color[0] * 0.3)}, ${Math.floor(color[1] * 0.3)}, ${Math.floor(color[2] * 0.3)}, ${alpha})`);
        
        ctx.fillStyle = baseGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner glow / ambient light on the lit side
        const innerGlowGradient = ctx.createRadialGradient(
            node.x - radius * 0.5, node.y - radius * 0.5, 0,
            node.x, node.y, radius
        );
        innerGlowGradient.addColorStop(0, `rgba(${Math.min(color[0] + 80, 255)}, ${Math.min(color[1] + 80, 255)}, ${Math.min(color[2] + 80, 255)}, 0.6)`);
        innerGlowGradient.addColorStop(0.3, `rgba(${Math.min(color[0] + 40, 255)}, ${Math.min(color[1] + 40, 255)}, ${Math.min(color[2] + 40, 255)}, 0.2)`);
        innerGlowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = innerGlowGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Primary specular highlight (main light reflection)
        const highlightX = node.x - radius * 0.35;
        const highlightY = node.y - radius * 0.35;
        const highlightRadius = radius * 0.4;
        
        const highlightGradient = ctx.createRadialGradient(
            highlightX, highlightY, 0,
            highlightX, highlightY, highlightRadius
        );
        highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        highlightGradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.5)');
        highlightGradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.1)');
        highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = highlightGradient;
        ctx.beginPath();
        ctx.arc(highlightX, highlightY, highlightRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Secondary specular (smaller, brighter spot)
        const specX = node.x - radius * 0.45;
        const specY = node.y - radius * 0.45;
        const specRadius = radius * 0.15;
        
        const specGradient = ctx.createRadialGradient(
            specX, specY, 0,
            specX, specY, specRadius
        );
        specGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        specGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.6)');
        specGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = specGradient;
        ctx.beginPath();
        ctx.arc(specX, specY, specRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Rim lighting effect (subtle light on the edge opposite to highlight)
        const rimGradient = ctx.createRadialGradient(
            node.x + radius * 0.7, node.y + radius * 0.7, radius * 0.3,
            node.x + radius * 0.5, node.y + radius * 0.5, radius * 1.1
        );
        rimGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        rimGradient.addColorStop(0.6, 'rgba(0, 0, 0, 0)');
        rimGradient.addColorStop(0.85, `rgba(${Math.min(color[0] + 60, 255)}, ${Math.min(color[1] + 60, 255)}, ${Math.min(color[2] + 60, 255)}, 0.3)`);
        rimGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = rimGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Subtle edge definition
        if (node.hover) {
            ctx.strokeStyle = `rgba(255, 255, 255, 0.4)`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
            ctx.stroke();
        }
        
        // Draw title for hovered nodes
        if (node.hover || node.id === 'origin') {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.font = '12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(node.title, node.x, node.y - radius - 10);
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
    
    let hovering = false;
    nodes.forEach(node => {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        node.hover = distance < node.radius + 5;
        if (node.hover) hovering = true;
    });
    
    canvas.style.cursor = hovering ? 'pointer' : 'grab';
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
    
    // Generate 3-4 random subnodes
    const numSubnodes = 3 + Math.floor(Math.random() * 2);
    const shuffled = [...templates].sort(() => 0.5 - Math.random());
    const selectedSubnodes = shuffled.slice(0, numSubnodes);
    
    selectedSubnodes.forEach((subnodeTitle, index) => {
        // Position around parent
        const angle = (Math.PI * 2 / numSubnodes) * index + Math.random() * 0.5;
        const distance = 80 + Math.random() * 40;
        
        const subnode = {
            id: `${parentNode.id}_sub_${nextNodeId++}`,
            title: subnodeTitle,
            text: `Related to ${parentNode.title}`,
            meta: `A part of ${parentNode.title}`,
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
