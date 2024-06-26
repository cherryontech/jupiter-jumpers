'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from './Button';
import Image from 'next/legacy/image';

type Props = {};

const LogoutConfirmation: React.FC<Props> = (props) => {
	const router = useRouter();
	const handleLoginClick = () => {
		router.push('/auth/login');
	};
	return (
		<div className=' flex h-full w-[26rem] flex-col space-y-6 rounded-xl border border-[#DEE9F5] bg-backgroundSecondary px-6 py-12'>
			<div className='flex w-full flex-col items-center gap-16'>
				<div className='flex w-full flex-col gap-8'>
					<div className='flex flex-col items-center justify-center gap-8 '>
						<div className=' flex h-16 w-16 items-center justify-center '>
							<div className='form-logo'>
								<Image
									src='/uncloud.svg'
									alt='Uncloud'
									width={64}
									height={64}
								/>
							</div>
						</div>
						<div className='flex max-w-[20rem] flex-col items-center justify-center gap-2  space-y-2'>
							<div className='text-center text-3xl font-semibold'>
								You&apos;ve successfully logged out!
							</div>
							<div className='text-center text-base font-light'>
								Until next time! If you want to access your account again, log
								back in.
							</div>
						</div>
					</div>
					<Button
						type='button'
						version='primary'
						label='Log in'
						primary
						onClick={handleLoginClick}
					/>
				</div>
				<div className='flex flex-wrap items-center justify-center font-semibold'>
					Not registered yet? &nbsp;{' '}
					<Link
						href={'/auth/signUp'}
						className='font-medium text-blue-500 underline'
					>
						Create an account.
					</Link>{' '}
				</div>
			</div>
		</div>
	);
};

export default LogoutConfirmation;
