const quotes = [
    "I tried success, e no work, I tried again, my rice burned, but that didn't stop 9mobile from buying Subway Surfers.",
    "My father said education is the backbone of great people, that's why dogs now eat watermelon and beanscakes drive Benz 🤦‍♂.",
    "The chicken crossed the road, but the road was closed for maintenance, so it just sat there contemplating life.",
    "I wanted to be a millionaire, but my bank account said, 'Not today, buddy!'",
    "I asked my cat for advice, and it just stared at me like I was the problem.",
    "I tried to cook, but my kitchen turned into a disaster zone, and the smoke alarm became my biggest fan.",
    "I thought I could fly, but my umbrella just turned into a parachute.",
    "I went to the store for bread, but ended up buying a trampoline instead.",
    "I tried to be productive, but my couch had other plans.",
    "I wanted to be a chef, but my microwave has a better track record than I do.",
    "My cat thinks he is the king, but I pay the rent!",
    "If life gives you lemons, make lemonade, then find someone with vodka.",
    "I told my computer I needed a break, now it’s on vacation!",
    "Why did the bicycle fall? Because it was two-tired!",
    "I put my money in the blender, now I have liquid assets!",
    "My dog is a genius; he can bark in three languages!",
    "I tried to catch fog, but I mist!",
    "If you think nobody cares, try missing a payment!",
    "I asked the librarian if the library had books on paranoia; she whispered, 'They're right behind you.'",
    "I wanted to be a baker, but I couldn't make enough dough!",
    "I told my plants to grow up, now they’re taller than me!",
    "I wanted to be a comedian, but my jokes just fell flat like a pancake!",
    "I tried to be a photographer, but my camera only captures my bad side!",
    "I thought I was indecisive, but now I'm not so sure!",
    "I wanted to be a magician, but every time I tried to disappear, I just ended up in the fridge!",
    "I told my computer I needed a break, and now it’s on a permanent vacation!",
    "I wanted to be a gardener, but I couldn't find my thyme!",
    "I tried to be a musician, but my guitar only knows how to play the blues!",
    "I wanted to be a scientist, but I couldn't find the right chemistry!",
    "I thought I could be a writer, but my pen just keeps running away!",
    "I wanted to be a pilot, but my plane only flies in my dreams!",
    "I tried to be a painter, but my canvas just laughed at me!",
    "I wanted to be a dancer, but my feet have two left shoes!",
    "I tried to be a programmer, but my code just keeps debugging itself!",
    "I wanted to be a poet, but my rhymes are out of time!",
    "I thought I could be a superhero, but my cape got stuck in the door!",
    "I wanted to be an astronaut, but my rocket only goes to the grocery store!",
    "I tried to be a detective, but my magnifying glass only finds my lost socks!",
    "I wanted to be a chef, but my recipes are top secret even to me!",
    "I thought I could be a philosopher, but my thoughts just keep wandering off!",
    "I wanted to be a historian, but my memory is as short as my attention span!",
    // Add more quotes here to reach up to 500
];

// Start with a random quote index
let currentQuoteIndex = Math.floor(Math.random() * quotes.length);

// Function to display the quote based on the current index
const displayQuote = (index) => {
    const quoteDisplay = document.getElementById('quote-display');
    quoteDisplay.textContent = quotes[index];
    document.getElementById('prev-quote').disabled = index === 0;
    document.getElementById('next-quote').disabled = index === quotes.length - 1;
};

// Event listener for the previous quote button
document.getElementById('prev-quote').addEventListener('click', () => {
    if (currentQuoteIndex > 0) {
        currentQuoteIndex--;
        displayQuote(currentQuoteIndex);
    }
});

// Event listener for the next quote button
document.getElementById('next-quote').addEventListener('click', () => {
    if (currentQuoteIndex < quotes.length - 1) {
        currentQuoteIndex++;
        displayQuote(currentQuoteIndex);
    } else {
        // Start from another random point when reaching the end
        currentQuoteIndex = Math.floor(Math.random() * quotes.length);
        displayQuote(currentQuoteIndex);
    }
});

// Event listener for the copy quote button
document.getElementById('copy-quote').addEventListener('click', () => {
    const quoteDisplay = document.getElementById('quote-display');
    navigator.clipboard.writeText(quoteDisplay.textContent).then(() => {
        const popup = document.getElementById('copy-popup');
        popup.style.display = 'block';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 2000);
    });
});

// Initial quote display
displayQuote(currentQuoteIndex);