import { useAuth } from '@/app/context/UserProvider';
import React, { useEffect, useState } from 'react';
import { getUser } from '../utils/serverFunctions';
import { formatValueTypeToYYYYMMDD } from '../utils/reusableFunctions';
import { MoodEntry, Value } from '../home/calendar';
import Image from 'next/image';
import LogSummaryList from './logSummaryList';
import LogSummary from './logSummary';
import { ReflectionsType } from '../home/newLogPopup';
import CustomPagination from './customPagination';
import { Win } from '../home/moodPrompts';

interface RightbarProps {
	isRightBarOpen: boolean;
	onToggle: (open: boolean) => void;
	handleLogClick: (log: {
		date: Date;
		mood: string;
		icon: string;
		reflections?: ReflectionsType[];
		favorite: boolean;
		wins?: Win[];
	}) => void;
	selectedDate: Value;
	value: Value | null;
	setValue: React.Dispatch<React.SetStateAction<Value | null>>;
	handleDateChange: (newValue: Value) => void;
	currentPage: number;
	handlePagination: (value: { selected: number }) => void;
	month?: number;
	isSummaryList: boolean;
	setIsSummaryList: React.Dispatch<React.SetStateAction<boolean>>;
	isPopupOpen: boolean;
	children?: React.ReactNode;
	selectedMenuItem: string;
	rightBarContent: React.ReactNode | null;
	setRightBarContent: React.Dispatch<React.SetStateAction<JSX.Element | null>>;
	displayedFavoriteLogDates: string[];
}

const Rightbar: React.FC<RightbarProps> = ({
	isRightBarOpen,
	onToggle,
	handleLogClick,
	selectedDate,
	isPopupOpen,
	value,
	setValue,
	handleDateChange,
	currentPage,
	handlePagination,
	month,
	isSummaryList,
	setIsSummaryList,
	children,
	selectedMenuItem,
	rightBarContent,
	setRightBarContent,
	displayedFavoriteLogDates,
}) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [mobile, setMobile] = useState(window.innerWidth < 768);
	const { user, isUpdated } = useAuth();
	const [moods, setMoods] = useState<{
		[key: string]: {
			mood: string;
			reflections: ReflectionsType[];
			favorite: boolean;
			wins: Win[];
		};
	}>({});

	useEffect(() => {
		if (user) {
			getUser(user.uid);
		}

		const handleResize = () => {
			setWindowWidth(window.innerWidth);
			setMobile(window.innerWidth < 768);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [user, isUpdated]);

	const [selectedFilters, setSelectedFilters] = useState({
		Rainbow: false,
		Sunny: false,
		Cloudy: false,
		Rainy: false,
		Stormy: false,
	});

	let currentMonth: number | null = null;
	let currentYear: number | null = null;
	if (selectedDate instanceof Date) {
		currentMonth = selectedDate.getUTCMonth();
		currentYear = selectedDate.getUTCFullYear();
	} else if (Array.isArray(selectedDate)) {
		const [startDate, endDate] = selectedDate;
		if (startDate instanceof Date) {
			currentMonth = startDate.getUTCMonth();
			currentYear = startDate.getUTCFullYear();
		} else if (endDate instanceof Date) {
			currentMonth = endDate.getUTCMonth();
			currentYear = endDate.getUTCFullYear();
		}
	}

	const currentMonthMoods = Object.entries(moods).filter(([date, mood]) => {
		const dateObj = new Date(`${date}T00:00:00Z`);
		return (
			dateObj.getUTCMonth() === currentMonth &&
			dateObj.getUTCFullYear() === currentYear
		);
	});

	const filteredMoods = currentMonthMoods
		.filter(([date, { mood: moodValue, reflections }]) => {
			if (Object.values(selectedFilters).some((filter) => filter)) {
				return Object.keys(selectedFilters).some(
					(filter) =>
						selectedFilters[filter as keyof typeof selectedFilters] &&
						filter === moodValue
				);
			}
			return true;
		})
		.sort(([date1], [date2]) => {
			return (
				new Date(`${date2}T00:00:00Z`).getTime() -
				new Date(`${date1}T00:00:00Z`).getTime()
			);
		});

	const pageSize = 7;

	useEffect(() => {
		if (user) {
			getUser(user.uid).then((userData) => {
				if (userData && userData.moods) {
					let moodMap: {
						[key: string]: {
							mood: string;
							reflections: ReflectionsType[];
							favorite: boolean;
							wins: Win[];
						};
					} = {};

					userData.moods.forEach((moodEntry: MoodEntry) => {
						const dateParts = moodEntry.date
							.split('-')
							.map((part) => parseInt(part, 10));
						const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
						moodMap[formatValueTypeToYYYYMMDD(date)] = {
							mood: moodEntry.mood,
							reflections: moodEntry.reflections,
							favorite: moodEntry.favorite,
							wins: moodEntry.wins || [],
						};
					});
					setMoods(moodMap);
				}
			});
		}
	}, [user, isUpdated, month, isPopupOpen]);

	return (
		<div
			className={` flex w-full flex-col gap-4 rounded-2xl border  border-[#DEE9F5] bg-white  py-6 ${isRightBarOpen ? 'px-5' : 'px-2'} ${mobile ? 'mobile-right-bar' : 'right-bar'} ${mobile && isRightBarOpen ? 'h-full' : 'h-fit'}`}
		>
			{isRightBarOpen ? (
				<div
					className={`h-full ${mobile ? 'mobile-right-bar-container' : 'right-bar-container'}`}
				>
					{/* Content */}
					{selectedMenuItem === 'Calendar' && isSummaryList ? (
						<LogSummaryList
							handleLogClick={(log) => {
								setIsSummaryList(false);
								setRightBarContent(
									<LogSummary
										log={{
											...log,
											reflections: log.reflections || [],
											wins: log.wins || [],
										}}
										handleGoBack={() => setIsSummaryList(true)}
										onFavoriteToggle={() => {}}
										favoriteLogs={{}}
										fromFavorites={false}
										displayedFavoriteLogDates={displayedFavoriteLogDates}
									/>
								);
							}}
							selectedDate={selectedDate}
							value={value}
							setValue={setValue}
							handleDateChange={handleDateChange}
							currentPage={currentPage}
							handlePagination={handlePagination}
							mobile={mobile}
						/>
					) : (
						rightBarContent
					)}

					{/* Bottom Bar */}
					<div className='flex flex-col gap-2 pt-4'>
						<div className='h-[0.125rem] bg-[#dee9f5]'></div>
						<div className='flex min-h-8 items-center justify-between'>
							{mobile ? (
								<button
									onClick={() => onToggle(!isRightBarOpen)}
									className={`mobile-collapse-button`}
								>
									<Image
										src='/phosphor-icons/SidebarSimple.svg'
										alt='Sidebar Icon'
										width={12}
										height={12}
										color='white'
									/>
								</button>
							) : (
								<button onClick={() => onToggle(!isRightBarOpen)}>
									<Image
										src='/phosphor-icons/SidebarSimple.svg'
										alt='Sidebar Icon'
										width={24}
										height={24}
										color='white'
									/>
								</button>
							)}

							{isSummaryList &&
								selectedMenuItem !== 'Favorites' &&
								filteredMoods.length > pageSize && (
									<CustomPagination
										breakLabel='...'
										nextLabel='Next'
										onPageChange={handlePagination}
										pageRangeDisplayed={5}
										pageCount={Math.ceil(filteredMoods.length / pageSize)}
										previousLabel='Prev'
										containerClassName='flex items-end gap-2 py-2  px-5 h-fit w-full justify-end items-center'
										activeClassName='button--primary rounded-full text-white w-8 h-8'
										pageLinkClassName='flex items-center justify-center text-sm'
										disabledClassName='opacity-50 cursor-not-allowed'
										previousClassName='text-sm'
										nextClassName='text-sm'
									/>
								)}
						</div>
					</div>
				</div>
			) : (
				<div className='flex h-full w-full items-end justify-center'>
					<div className='h-[0.125rem] bg-[#dee9f5]'></div>
					<div className='flex items-center justify-between'>
						{mobile ? (
							<button
								onClick={() => onToggle(!isRightBarOpen)}
								className={`mobile-open-button`}
							>
								<Image
									src='/phosphor-icons/SidebarSimple.svg'
									alt='Sidebar Icon'
									width={12}
									height={12}
									color='white'
								/>
							</button>
						) : (
							<button onClick={() => onToggle(!isRightBarOpen)}>
								<Image
									src='/phosphor-icons/SidebarSimple.svg'
									alt='Sidebar Icon'
									width={24}
									height={24}
									color='white'
								/>
							</button>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Rightbar;
