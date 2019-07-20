import {AsyncStorage} from 'react-native'

export const DECK_STORAGE_KEY = 'MobileFlashCards:decks'

function setMockDecks () {
	const placeholderDeck = {}
	placeholderDeck['russianPhrases'] = {
		title: 'russianPhrases',
		questions: [
			{question: 'Доброе утро.', answer: 'Good morning.'},
			{question: 'Добрый день.', answer: 'Good afternoon.'},
			{question: 'Меня зовут Сэм.', answer: 'My name is Sam.'},
			{question: 'Рад познакомиться с вами.', answer: 'I am pleased to meet you.'},
			{question: 'Как дела?', answer: 'How are you?'},
			{question: 'Где ты сейчас?', answer: 'Where are you?'},
			{question: 'Прошу прощения.', answer: 'I am sorry.'},
			{question: 'До скорого!', answer: 'See you soon!'},
			{question: 'До свидания.', answer: 'Good-bye.'},
			{question: 'Я хотел бы водку.', answer: 'I would like vodka.'}
		]
	}
	AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(placeholderDeck))
	// return mock deck
	return placeholderDeck
}

export function checkForNull (results) {
	return results === null
		? setMockDecks()
		: JSON.parse(results)
}