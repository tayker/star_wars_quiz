document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#quiz',
        data: {
            quiz: [
                {
                    title: 'Luke, im your ...',
                    option1: 'brother',
                    option2: 'mother',
                    option3: 'father',
                    option4: 'dikobrother',
                    isTrue: 3
                },
                {
                    title: 'Red green red, or red red...',
                    option1: 'black',
                    option2: 'red',
                    option3: 'purple',
                    option4: 'green',
                    isTrue: 4
                },
                {
                    title: 'I have a very bad...',
                    option1: 'day',
                    option2: 'job',
                    option3: 'girl',
                    option4: 'feeling about this',
                    isTrue: 4
                },
                {
                    title: 'Help me, Obi-Wan Kenobi...',
                    option1: 'to kill the Emperor',
                    option2: 'I get cold',
                    option3: 'You’re my only hope',
                    option4: 'to sneake arround',
                    isTrue: 3
                },
                {
                    title: 'Do. Or do not...',
                    option1: 'You always will be looser',
                    option2: 'Not do or do',
                    option3: 'There is no try',
                    option4: 'I need sleep',
                    isTrue: 3
                },
                {
                    title: 'There’s always a bigger...',
                    option1: 'cat',
                    option2: 'fish',
                    option3: 'dog',
                    option4: 'rat',
                    isTrue: 2
                },
                {
                    title: 'You were my brother, Anakin...',
                    option1: 'I loved you.',
                    option2: 'I hate you',
                    option3: 'I kill you',
                    option4: 'And you betrayed me',
                    isTrue: 1
                },
                {
                    title: 'You know, no matter how much we fought...',
                    option1: 'I’ve always hated you',
                    option2: 'I’ve always hated watching you leave.',
                    option3: 'I never loved you',
                    option4: 'I hope you will die',
                    isTrue: 2
                },
                {
                    title: 'I’m one with the Force...',
                    option1: 'So and i',
                    option2: 'The Force will help me to kill you',
                    option3: 'The Force is with me',
                    option4: 'And you not',
                    isTrue: 3
                },
                {
                    title: 'Power...',
                    option1: 'I want more Power!',
                    option2: 'Unlimited power!',
                    option3: 'And this is mine',
                    option4: 'Dark Power!',
                    isTrue: 2
                }
            ],
            score: 0,
            currentAnswer: null,
            currentQuestion: 0
        },
        methods: {
            checkIsTrue: function (index) {
                if(this.quiz[index].isTrue === this.currentAnswer){
                    this.score++
                }
                this.currentQuestion++
            }
        },
        computed: {
            scoreText: function(){
                if(this.score >= 10){
                     return this.scoreText = 'Dart Vader'
                }
                if(this.score >= 8){
                     return this.scoreText = 'Emperor'
                }
                if(this.score >= 6){
                     return this.scoreText = 'MasterJedi'
                }
                if(this.score >= 4){
                     return this.scoreText = 'Padavan'
                }
                if(this.score >= 2){
                     return this.scoreText = 'Youngling'
                }
            }
        }
    });
});