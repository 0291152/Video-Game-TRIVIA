var panel = $(" ");
var countStartNumber = 30;

//Question set
var questions = [{
	question: " What game spiked the platformer genre? ", 
	answers: ["Sonic", "CastleVania", "SuperMario", "Fortnite"],
	correctAnswer: "SuperMario",
	image: "assets/SuperMario_400x400.jpg"

},{
	question: " What company made the DS? ", 
	answers: ["Sony", "Microsoft", "Nintendo", "Steam"],
	correctAnswer: "Nintendo",
	image: "assets/Nintendo Pic.png"
}





];
// variable to hold our setInterval
var timer;


var game = {

	questions: questions,
	currentQuestion: 0,
	counter: countStartNumber,
	correct:0,
	incorrect:0,

	countdown: function() {
		this.counter--;
		$("#counter-number").html(this.counter);
		if (this.counter === 0) {
			console.log('TIMES OVER');
				this.timeUp();
			// will fill in later
		}
	},

	loadQuestion: function(){
		timer = setInterval(this.countdown.bind(this), 1000);
		panel.html("<h2>" + questions[this.currentQuestion].questions + "</h2>");
		for (var i = 0, i < questions[this.currentQuestion].answers.length; i++) {
			panel.append("<button class='answer-button' id='button' data-name= '" + 
				questions[this.currentQuestion].answers[i] + "'>" + 
			questions[this.currentQuestion].answers[i] + "</button>");
		}
	},

	nextQuestion: function() {
		this.counter = window.countStartNumber;
		$("#counter-number").html(this.counter);
		this.currentQuestion++;
		this.loadQuestion.bind(this)();
	};

	timeUp: function(){
		clearInterval(window.timer);


		$("#counter-number").html(this.counter);

		panel.html("<h2>Out of Time!</h2>");
		panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswerr);
		panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

		if (this.currentQuestion === questions.length - 1) {
			setTimeout(this.results, 3 * 1000);
		}else{
			setTimeout(this.nextQuestion, 3 * 1000);
		}

	}

}



//Click Events
$(document).on("click", "#start-over", game.reset)