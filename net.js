<script>
// importing brainjs
var brain = require("brain")

// generating an instance
var net = new brain.NeuralNetwork();

// training the neural net
net.train([{input: { b: 0.47, r: 0.04, g: 0.71 }, output: { black: 1 }},
           {input: { b: 1.01, r: 0.48, g: 0.52 }, output: { white: 1 }}]); 

// running a test
var output = net.run({ b: 0, r: 1, g: 0.41 });
</script>