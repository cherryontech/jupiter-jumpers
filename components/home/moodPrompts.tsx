import { Button } from '@/stories/Button';
import {
	CaretLeft,
	CaretDown,
	CaretUp,
	Plus,
	Minus,
	Confetti,
	PencilLine,
} from '@phosphor-icons/react';
import React, { useState, useEffect, useMemo } from 'react';
import { ReflectionsType } from './newLogPopup';
import CustomInput from '@/stories/customInput';
import Image from 'next/image';
import '/app/styles/moodPrompts.css';
import DropdownInput from '../shared/DropdownInput'; // Adjust the path as needed

type Props = {
	selectedMood: string;
	initialReflections: ReflectionsType[];
	initialWins: Win[];
	handleSaveMood: (
		reflections: ReflectionsType[],
		wins: Win[]
	) => Promise<void>;
};
export interface Win {
	description: string;
}

const MoodPrompts = ({
	selectedMood,
	initialReflections,
	initialWins,
	handleSaveMood,
}: Props) => {
	const [winsDropdownOpen, setWinsDropdownOpen] = useState(false);
	const [reflectionsDropdownOpen, setReflectionsDropdownOpen] = useState(false);

	const defaultQuestions = useMemo(
		() => ({
			Rainbow: [
				{
					question: 'What made you happy today?',
					answer: '',
				},
				{
					question: 'What are you looking forward to?',
					answer: '',
				},
			],
			Sunny: [
				{
					question: 'What is troubling you?',
					answer: '',
				},
				{
					question: 'How can you improve your mood?',
					answer: '',
				},
			],
			Cloudy: [
				{
					question: 'What is making you excited?',
					answer: '',
				},
				{
					question: 'What are your plans for the day?',
					answer: '',
				},
			],
			Rainy: [
				{
					question: 'What is making you excited?',
					answer: '',
				},
				{
					question: 'What are your plans for the day?',
					answer: '',
				},
			],
			Stormy: [
				{
					question: 'What is making you excited?',
					answer: '',
				},
				{
					question: 'What are your plans for the day?',
					answer: '',
				},
			],
		}),
		[]
	);

	const initialQuestion = selectedMood
		? defaultQuestions[selectedMood as keyof typeof defaultQuestions][0]
				.question
		: '';

	const [reflections, setReflections] = useState<ReflectionsType[]>(
		initialReflections && initialReflections.length
			? initialReflections
			: [{ question: initialQuestion, answer: '' }]
	);

	const [selectedQuestions, setSelectedQuestions] = useState<string[]>(
		initialReflections && initialReflections.length
			? initialReflections.map((reflection) => reflection.question)
			: [initialQuestion]
	);

	const [openReflections, setOpenReflections] = useState<number[]>([]);
	const defaultWins = [
		{ description: '' },
		{ description: '' },
		{ description: '' },
		// Add as many initial win objects as needed
	];
	const [wins, setWins] = useState<Win[]>(
		initialWins && initialWins.length ? initialWins : defaultWins
	);

	const handleInputChange = (index: number, event: any) => {
		console.log(index, event.target.value);
		const newWins = [...wins];
		newWins[index].description = event.target.value;
		setWins(newWins);
	};

	useEffect(() => {
		if (initialReflections && initialReflections.length > 0) {
			setReflections(initialReflections);
		}
	}, [initialReflections]);

	useEffect(() => {
		if (initialWins && initialWins.length > 0) {
			setWins(initialWins);
		} else {
			setWins(defaultWins);
		}
	}, [selectedMood, initialWins]);

	const toggleReflection = (index: number) => {
		setOpenReflections((prevState) =>
			prevState.includes(index)
				? prevState.filter((i) => i !== index)
				: [...prevState, index]
		);
	};

	const handleAnswerChange = (index: number, answer: string) => {
		const updatedReflections = [...reflections];
		updatedReflections[index].answer = answer;
		setReflections(updatedReflections);
	};

	const handleAddReflection = () => {
		const availableQuestions = defaultQuestions[
			selectedMood as keyof typeof defaultQuestions
		].filter((question) => !selectedQuestions.includes(question.question));
		const newQuestion =
			availableQuestions.length > 0 ? availableQuestions[0].question : '';
		setReflections([...reflections, { question: newQuestion, answer: '' }]);
		setSelectedQuestions([...selectedQuestions, newQuestion]);
		// Collapse the first reflection
		setOpenReflections([reflections.length]);
	};

	const handleQuestionChange = (index: number, question: string) => {
		const updatedReflections = [...reflections];
		const previousQuestion = updatedReflections[index].question;
		updatedReflections[index].question = question;
		setReflections(updatedReflections);
		setSelectedQuestions((prevSelectedQuestions) => {
			let newSelectedQuestions = [...prevSelectedQuestions];
			if (previousQuestion) {
				newSelectedQuestions = newSelectedQuestions.filter(
					(q) => q !== previousQuestion
				);
			}
			if (question) {
				newSelectedQuestions.push(question);
			}
			return newSelectedQuestions;
		});
	};

	const availableQuestions = (index: number) => {
		if (
			!selectedMood ||
			!defaultQuestions[selectedMood as keyof typeof defaultQuestions]
		) {
			return [];
		}
		return defaultQuestions[
			selectedMood as keyof typeof defaultQuestions
		].filter(
			(question) =>
				!selectedQuestions.includes(question.question) ||
				reflections[index].question === question.question
		);
	};

	const moods = ['cloudy', 'rainy', 'stormy', 'rainbow', 'sunny'];
	const moodIndex = moods.indexOf(selectedMood?.toLowerCase() ?? '');

	// Calculate the start index for the slice so that selectedMood ends up in the third position
	const startIndex = (moodIndex + moods.length - 2) % moods.length;

	// Create a new array with selectedMood in the third position
	const sortedMoods = [
		...moods.slice(startIndex, moods.length),
		...moods.slice(0, startIndex),
	];

	const maxReflections = Math.min(
		3,
		defaultQuestions[selectedMood as keyof typeof defaultQuestions]?.length || 3
	);

	return (
		<div className='flex flex-col items-center gap-8 overflow-auto px-12'>
			<div className='flex w-[36.125rem] flex-col gap-12'>
				<div className='flex flex-col items-center justify-center gap-4'>
					<span className='text-xl font-semibold uppercase text-primary'>
						Reflection
					</span>
					<span className='text-3xl font-semibold'>
						Let&apos;s talk about it
					</span>
					<div className='flex min-h-[7.13rem] w-full flex-col items-center justify-center rounded-xl border border-[#DEE9F5] bg-white px-5 py-3'>
						{/* {selectedMood} */}
						<div className='flex text-xl font-semibold'>
							How&apos;s your weather?
						</div>
						<div className='flex w-full justify-evenly'>
							{sortedMoods.map((mood, index) => (
								<div
									className={`relative h-20 w-20 ${mood !== selectedMood.toLowerCase() ? 'opacity-50' : ''}`}
									key={index}
								>
									<Image
										src={`/moods/${mood.toLowerCase()}.svg`}
										alt={mood}
										layout='fill'
									/>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='flex w-full flex-col gap-4'>
					<div className='flex items-center justify-start text-xl font-semibold text-[#2c2c2c]'>
						What would you like to do today?
					</div>

					{/* Wins */}
					<div className='flex w-full flex-col items-center justify-center gap-4 rounded-lg border bg-white p-6'>
						<div className='flex w-full flex-row items-center justify-center gap-4 rounded-lg  bg-white '>
							<div className='flex h-full w-8 items-start justify-center'>
								<div className='flex h-8 w-8 items-center justify-center rounded-full border border-[#D9D9D9] bg-white'>
									<Confetti size={20} color='#2D81E0' />
								</div>
							</div>
							<div className='flex w-full flex-col items-start justify-center'>
								<span className='text-xl font-semibold leading-[1.625rem] text-[#2c2c2c]'>
									3 Wins of the Day
								</span>
								<span className='text-xs leading-6 text-[#706F6F]'>
									Get specific! use details to describe what you accomplished
									today.
								</span>
							</div>
							<div
								className='flex h-full w-fit items-start justify-center'
								onClick={() => setWinsDropdownOpen(!winsDropdownOpen)} // Toggle the dropdown on click
							>
								{winsDropdownOpen ? (
									<div className='flex items-center justify-center rounded-full bg-[#E0F1FF] p-1'>
										<CaretUp size={20} color='#2C2C2C' />
									</div>
								) : (
									<div className='flex items-center justify-center rounded-full p-1'>
										<CaretDown size={20} color='#706f6f' />
									</div>
								)}
							</div>
						</div>
						{winsDropdownOpen && (
							<div className='flex w-full flex-col gap-4'>
								{wins.map((win, index) => (
									<div
										key={index}
										className='relative flex h-fit flex-row items-center justify-start gap-3'
									>
										<div
											key={index}
											className='absolute left-2 top-3 flex flex-col items-center justify-center gap-1 text-center text-xs text-white'
										>
											{win.description ? (
												<div className='flex h-[1.25rem] w-[1.25rem] items-center justify-center rounded-full bg-primary p-2'>
													{index + 1}
												</div>
											) : (
												<div className='flex h-[1.25rem] w-[1.25rem] items-center justify-center  rounded-full bg-[#DEE9F5] p-2'></div>
											)}
											{index !== 2 && (
												<div
													className={`h-[1.9rem] w-[0.125rem] flex-grow  ${win.description ? 'bg-[#2D81E0]' : 'bg-[#DEE9F5]'}`}
												></div>
											)}
										</div>
										<div className='ml-12 flex w-full flex-col justify-start '>
											<CustomInput
												type='text'
												placeholder='Type what you want to write'
												name='description'
												value={win.description}
												handleChange={(event) =>
													handleInputChange(index, event)
												}
											/>
										</div>
									</div>
								))}
							</div>
						)}
					</div>

					{/* Reflections */}
					{reflections.map((reflection, index) => (
						<div
							key={index}
							className='flex w-full flex-col items-center justify-center gap-4 rounded-lg border bg-white p-6'
						>
							<div className='flex w-full flex-row items-center justify-center gap-4 rounded-lg bg-white '>
								<div className='flex h-full w-8 items-start justify-center'>
									<div className='flex h-8 w-8 items-center justify-center rounded-full border border-[#D9D9D9] bg-white'>
										<Confetti size={20} color='#2D81E0' />
									</div>
								</div>
								<div className='flex w-full flex-col items-start justify-center'>
									<span className='text-xl font-semibold leading-[1.625rem] text-[#2c2c2c]'>
										Reflection
									</span>
									<span className='text-xs leading-6 text-[#706F6F]'>
										Stuck, fired up, or somewhere in between? Write down how you
										are feeling.
									</span>
								</div>
								<div
									className='flex h-full w-fit items-start justify-center'
									onClick={() => toggleReflection(index)}
								>
									{openReflections.includes(index) ? (
										<div className='flex items-center justify-center rounded-full bg-[#E0F1FF] p-1'>
											<CaretUp size={20} color='#2C2C2C' />
										</div>
									) : (
										<div className='flex items-center justify-center rounded-full  p-1'>
											<CaretDown size={20} color='#706f6f' />
										</div>
									)}
								</div>
							</div>
							{openReflections.includes(index) && (
								<div className='flex w-full flex-col gap-4'>
									<div className='relative flex h-fit flex-row items-center justify-start gap-3'>
										<div className='reflection-input ml-12 flex w-full flex-col justify-start gap-2'>
											<div className='custom-select'>
												<DropdownInput
													options={availableQuestions(index).map(
														(q) => q.question
													)}
													name={`question-${index}`}
													value={reflection.question}
													handleChange={(e: { target: { value: string } }) =>
														handleQuestionChange(index, e.target.value)
													}
												/>
											</div>
											<textarea
												name='answer'
												id={`answer-${index}`}
												placeholder='Type what you want to write'
												className='h-[11.5625rem] rounded-lg border border-[#D9D9D9] p-2 hover:border-[#2D81E0] focus:border-[#2D81E0] focus:outline-0 focus:outline-[#2D81E0] focus:ring focus:ring-[#DEE9F5]'
												rows={10}
												value={reflection.answer}
												onChange={(e) =>
													handleAnswerChange(index, e.target.value)
												}
											/>
										</div>
									</div>
								</div>
							)}
						</div>
					))}
					{reflections.length < maxReflections && (
						<button
							className='flex items-center justify-center gap-2 px-6 py-[0.63rem]'
							onClick={handleAddReflection}
						>
							<Plus size={16} color='#2d81e0' />
							<span className='text-sm font-bold text-primary'>
								Add another reflection
							</span>
						</button>
					)}
				</div>
			</div>

			<div className='flex w-[22.5rem] justify-center'>
				<Button
					type='button'
					label='Done'
					primary
					onClick={() => handleSaveMood(reflections, wins)}
					version='primary'
				/>
			</div>
		</div>
	);
};

export default MoodPrompts;
