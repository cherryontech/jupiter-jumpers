'use client';
import { useState, FormEvent } from 'react';
import { auth } from '@/app/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { db } from '@/app/firebase';
import CustomInput from './customInput';
import PasswordInput from './passwordInput';
import { Button } from './Button';
import { setDoc, doc } from 'firebase/firestore';
import { Icon } from './Icons';
import Image from 'next/legacy/image';

interface RegisterData {
	displayName: string;
	emailAddress: string;
	password: string;
}
interface FormErrors {
	displayName: string;
	emailAddress: string;
	password: string;
}

const RegisterForm = () => {
	const [registerData, setRegisterData] = useState<RegisterData>({
		displayName: '',
		emailAddress: '',
		password: '',
	});
	const [error, setError] = useState<string | null>(null);
	const [errorField, setErrorField] = useState<FormErrors>({
		displayName: '',
		emailAddress: '',
		password: '',
	});
	const router = useRouter();
	const validateField = (name: string, value: string): string => {
		let errorMessage = '';

		// Validate field
		if (!value.trim()) {
			errorMessage = 'This field is required';
		} else if (name === 'displayName' && value.length > 20) {
			errorMessage = 'Name must be less than 20 characters';
		} else if (name === 'emailAddress' && !/\S+@\S+\.\S+/.test(value)) {
			errorMessage = 'This email is invalid';
		} else if (name === 'password' && value.length < 8) {
			errorMessage =
				"For added security, passwords must be at least 8 characters long. Let's give it another try.";
		}

		return errorMessage;
	};

	const validateForm = (formData: RegisterData): FormErrors => {
		const errors: FormErrors = {
			displayName: validateField('displayName', formData.displayName),
			emailAddress: validateField('emailAddress', formData.emailAddress),
			password: validateField('password', formData.password),
		};

		return errors;
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		const errorMessage = validateField(name, value);

		// Update errors state
		setErrorField((prevErrors) => ({
			...prevErrors,
			[name]: errorMessage,
		}));

		setRegisterData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError(null);

		const { emailAddress, password, displayName } = registerData;
		const errors = validateForm(registerData);

		// Check if there are any errors
		if (Object.values(errors).some((error) => error)) {
			// If there are errors, update the state with the errors
			setErrorField(errors);
			return; // Exit early, do not proceed with form submission
		}
		createUserWithEmailAndPassword(auth, emailAddress, password)
			.then((authUser) => {
				if (authUser.user) {
					updateProfile(authUser.user, {
						displayName: displayName,
					})
						.then(() => {
							setDoc(doc(db, 'authUsers', authUser.user.uid), {
								email: emailAddress,
								displayName: displayName,
								closedConfirmationMessage: false,
								isFirstLogin: true,
							})
								.then((docRef: any) => {
									router.push('/');
								})
								.catch((e) => {
									console.error('Error updating document', e);
								});
						})
						.catch((error) => {
							console.error('Error updating user display name:', error);
						});
				}
			})
			.catch((error) => {
				console.error(error.message);
				setError('This email is already registered');
			});
	};

	return (
		<div className=' flex h-full w-[26rem] flex-col space-y-6 rounded-xl border border-[#DEE9F5] bg-backgroundSecondary px-6 py-12'>
			<div className='flex flex-col items-center justify-center gap-8 '>
				<div className='form-logo'>
					<Image src='/uncloud.svg' alt='Uncloud' width={64} height={64} />
				</div>
				<div className='flex max-w-[20rem] flex-col items-center justify-center gap-2  space-y-2'>
					<div className='flex items-center justify-center text-center text-3xl font-semibold'>
						Welcome to Uncloud
					</div>
					<div className='!m-0 text-center text-base font-light text-[#706F6F]'>
						Add an email address, name, and password to complete your account.
					</div>
				</div>
			</div>
			<form onSubmit={handleSubmit} className='flex flex-col gap-6'>
				<CustomInput
					type='email'
					placeholder='Please type your email.'
					name='emailAddress'
					value={registerData.emailAddress}
					label='Email'
					handleChange={handleChange}
					error={errorField.emailAddress}
				/>
				<CustomInput
					type='text'
					placeholder='Please type your preferred name.'
					value={registerData.displayName}
					name='displayName'
					label='What should we call you?'
					handleChange={handleChange}
					error={errorField.displayName}
				/>
				<div className='flex flex-col gap-2'>
					<PasswordInput
						type='password'
						placeholder='Please type in your password.'
						name='password'
						value={registerData.password}
						label='Password'
						handleChange={handleChange}
						error={errorField.password}
						// If there is an error, make the border red
					/>
					{/* If there ISN'T an error, show the password requirements, otherwise show the error */}
					{!errorField.password && (
						<div className='text-xs font-semibold'>
							Passwords need to have at least 8 characters.
						</div>
					)}
				</div>
				{error && <p className='text-sm text-red-600'>{error}</p>}
				<div className='space-y-16'>
					<Button type='submit' label='Sign up' primary version='primary' />
					<div className='flex items-center justify-center text-base font-semibold'>
						Already have an account?&nbsp;{' '}
						<Link
							href={'/auth/login'}
							className='font-medium text-blue-500 underline'
						>
							Log in here.
						</Link>{' '}
					</div>
				</div>
			</form>
		</div>
	);
};

export default RegisterForm;
