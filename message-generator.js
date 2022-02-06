//crossing the road jokes generator

//variables containing messages

const animals = ['chicken', 'goat', 'bat', 'giraffe', 'ocelot', 'wombat', 'tardigrade', 'capybara'];
const crossing = ['road', 'path', 'ocean', 'railroad tracks', 'ice rink', 'hedgerow', 'canal', 'rainbow bridge'];
const punchlines = ['To get to the other side.', 'Because it was hungry.', 'To find a lost city of gold.', 'Because it was in the mouth of a wolf.', 'It seemed like a good thing to do.', 'Because the weather outside was frightful.', 'I don\'t know! Why don\'t you ask it?', 'What a weird question.'];

//function to create a random joke
const jokeGenerator = (animals, crossing, punchlines) => {
    randomAnimal = Math.floor(Math.random * animals.length + 1);
    randomCrossing = Math.floor(Math.random * crossing.length + 1); 
    randomPunchline = Math.floor(Math.random * punchlines.length + 1);

    joke = 'Why did the ${animals[randomAnimal]} cross the ${crossing[randomCrossing]}? ${punchlines[randomPunchline]}';
    return joke;
}