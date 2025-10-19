//hello this is annoying

//here be the images
const skateboardImages = {
    //popsicle
    "9in_popsicle": "https://www.boardpusher.com/images/product-tn/9-inch-skateboard-shape.jpg?v23",
    "8-3/4in_popsicle": "https://www.boardpusher.com/images/product-tn/875-skateboard-shape.jpg?v23",
    "8-1/2in_popsicle": "https://www.boardpusher.com/images/product-tn/8-5-inch-skateboard.jpg?v23",
    "8-1/4in_popsicle": "https://www.boardpusher.com/images/product-tn/825-skateboard-shape.jpg?v23",
    "8in_popsicle": "https://www.boardpusher.com/images/product-tn/8-inch-skateboard.jpg?v23",
    "7-7/8in_popsicle": "https://www.boardpusher.com/images/product-tn/778-skateboard-deck.jpg?v23",
    "7-3/4in_popsicle": "https://www.boardpusher.com/images/product-tn/775-skateboard-deck.jpg?v23",
    "7-5/8in_popsicle": "https://www.boardpusher.com/images/product-tn/762-skateboard-deck.jpg?v23", 
    "7-1/2in_popsicle": "https://www.boardpusher.com/images/product-tn/75-skateboard-shape.jpg?v23",
    "7-1/4in_popsicle": "https://www.boardpusher.com/images/product-tn/mini-kid-skateboard.jpg?v23",
    //other
    "football": "https://www.boardpusher.com/images/product-tn/football-shape-skateboard.jpg?v23",
    "shredder": "https://www.boardpusher.com/images/product-tn/old-school-shredder-skateboard.jpg?v23",
    "fish-tail": "https://www.boardpusher.com/images/product-tn/fish-tail-surf-skateboard.jpg?v23",
    "egg": "https://www.boardpusher.com/images/product-tn/egg-shape-skateboard-deck.jpg?v23",
    "retro-rocket": "https://www.boardpusher.com/images/product-tn/retro-rocket-skateboard-shape.jpg?v23",
    "square-nose": "https://www.boardpusher.com/images/product-tn/square-nose-skateboard-shape.jpg?v23",
    "old-school": "https://www.boardpusher.com/images/product-tn/old-school-skateboard.jpg?v23",
    "punk-node-pool": "https://www.boardpusher.com/images/product-tn/punk-nose-skateboard.jpg?v23",
    //longboard
    "drop-through-longboard": "https://www.boardpusher.com/images/product-tn/drop-through-longboard-shape.jpg?v23",
    "longboard": "https://www.boardpusher.com/images/product-tn/longboard.jpg?v23",
    "pintail-longboard": "https://www.boardpusher.com/images/product-tn/pintail-longboard.jpg?v23",
    //cruisers
    "bottle-tail": "https://www.boardpusher.com/images/product-tn/bottle-tail-skateboard-shape.jpg?v23",
    "mini-cruiser": "https://www.boardpusher.com/images/product-tn/mini-cruiser-shape.jpg?v23",
    "cruiser": "https://www.boardpusher.com/images/product-tn/cruiser-skateboard-deck.jpg?v23"
}//images

//here be the "short" descriptions
const boardDesc = {
    //popsicle
    "9in_popsicle": "The nine inch is a wide popsicle shape with a large nose and tail and a 15 inch wheelbase. Ready to shred anything and everything.",
    "8-3/4in_popsicle": "Wide and fast, but still a classic popsicle shape. This deck is a real monster and meant for skaters with big skills or feet, or both. With a 1/4 inch bigger wheelbase than the 8.5 inch posicle, this 8.75 inch feels even more stable at high speeds.",
    "8-1/2in_popsicle": "Stable at high speeds, built for dropping into big bowls, charging big gaps & big feet. The BoardPusher 8.5in decks have plenty of pop for whatever you have in mind.",
    "8-1/4in_popsicle": "Made for riding fast and quick snaps, the 8.25 popsicle is the preferred deck for experienced skaters.",
    "8in_popsicle": "The best-seller in our quiver. The 8 inch popsicle is the most versatile and loved skateboard deck around. Great for all terrain, light with a lot of pop, and wide-enough for most feet.",
    "7-7/8in_popsicle": "The 7.87 inch popsicle comes with a medium concave and well-shaped tail and nose.",
    "7-3/4in_popsicle": "Classic all around street popsicle deck. Great for all terrain and all skill levels.",
    "7-5/8in_popsicle": "Medium concave, well-shaped 7.62 inch popsicle deck. Great for snapping tech tricks.",
    "7-1/2in_popsicle": "Light and skinny, the 7.5 inch popsicle remains a favorite amongst tech-inspired skaters. Great for younger kids and small feet as well.",
    "7-1/4in_popsicle": "A great first deck for learning how to tear it up. This deck is recommended for kids up to age 9 or 10. Its small size will feel more comfortable for a small kid. It's also lighter and easier to carry.",
    //other
    "football": "A football-shaped skateboard that combines popsicle deck agility with the stability of an oval shape. Top and middle ply black stain.",
    "shredder": "A classic old school shape from the late 80s. Just enough nose to have some fun and a big wide tail. Shred it all with the shredder shape.",
    "fish-tail": "Inspired by the classic fish and swallow tail surfboards, this shape was designed to carve up all concrete surfaces. Add some surf trucks and have fun.",
    "egg": "A symmetrical 9.75 inch egg shape, the shape that everyone has been waiting for. Time to jump on an egg and see what you can crack, this shape is ridiculously fun. This limited shape has black stained top and middle plys.",
    "retro-rocket": "A little old and a little new, the retro rocket is inspired from past shapes but can be used to skate just about anything with a nice big tail and nose along with a solid medium concave. Aggressive and fun all-around deck.",
    "square-nose": "A gnarly and very fun shape, this modern shaped deck is one of our funnest to ride. You can attack anything and everything with this deck.",
    "old-school": "Pulling from a number of different classic shapes, the old school deck embodies all the feel and attitude of the past. Solid and wide it will support even the biggest 40-plus skaters.",
    "punk-node-pool": "Wide and solid with an attitude. The punk nose is a great deck for all skaters. Especially those who like hanging out at the pool.",
    //longboard
    "drop-through-longboard": "Low, stable, fast, and easy to push—the 9-ply 9×36.5in Drop Through is built for freeride flow, downhills runs, relaxed cruising, and long-distance rides.",
    "longboard": "The classic longboard shape has a nice big kick tail for quick turns and even ollies but keeps the longer shape and wheel base for sharp and accurate carving.",
    "pintail-longboard": "Classic pintail longboard shape. Fast and stable with the biggest wheelbase of any of our shapes, the pintail will carve and slide down anything or give you a smooth ride down the boardwalk.",
    //cruisers
    "bottle-tail": "Zippy little cruiser with a nice wide squared tail. Great for cruising or shredding the park.",
    "mini-cruiser": "Easy to skate and carry around, the mini cruiser is a very versatile little deck. Toss some longboard trucks and soft wheels on this and it is one of the fastest decks around.",
    "cruiser": "The classic cruiser shape is shorter than a popsicle but keeps the 14 inch wheelbase for precise carving. Our cruiser is wide enough to accommodate all riders.",
}//descriptions