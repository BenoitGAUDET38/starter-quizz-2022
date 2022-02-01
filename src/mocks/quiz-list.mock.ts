import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            value: 'Les tuches II',
            isCorrect: false,
        },
        {
            value: 'La grande illusion',
            isCorrect: true,
        }
    ]
};

export const QUESTION_SPORT: Question = {
    label: 'Qui est l\'homme le plus rapide au monde ?',
    answers: [
        {
            value: 'Benoit Gaudet',
            isCorrect: true,
        },
        {
            value: 'Usain Bolt',
            isCorrect: false,
        },
        {
            value: 'Gérard Depardieu',
            isCorrect: false,
        }
    ]
}

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Les Acteurs', // What's happening if I change this value..?
        theme: 'Actor',
        questions: [QUESTION_ACTOR],
    },
    {
        name: 'Les Sports super cools',
        questions: [QUESTION_SPORT],
    }
];

