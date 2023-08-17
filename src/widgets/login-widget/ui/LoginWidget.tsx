import React from 'react';
import { useForm } from '../model/form';

export const LoginWidget = () => {
	const { form, submit, error, onChange } = useForm();
	return (
		<div>
			<form>
				<input
					type='text'
					value={form.username}
					onChange={onChange}
					name='username'
				/>
				<input
					type='password'
					value={form.password}
					onChange={onChange}
					name='password'
				/>
				{error && <div>{error}</div>}
				<button type='submit' onClick={submit}>
					login
				</button>
			</form>
		</div>
	);
};
