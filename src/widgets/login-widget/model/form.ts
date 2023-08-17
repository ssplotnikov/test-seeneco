import { FormEvent, useCallback, useState } from 'react';
import { checkUsername, checkPassword } from '../lib/validate';
import { useNavigate } from 'react-router-dom';
import { AppLinks } from 'shared/config/routeConfig/routeConfig';
import { useAuth } from 'app/model/useAuth';

export const useForm = () => {
	const navigate = useNavigate();
	const { login } = useAuth();

	const [form, setForm] = useState({
		username: '',
		password: '',
	});
	const [error, setError] = useState('');

	const submit = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (checkUsername(form.username) && checkPassword(form.password)) {
			login(true);
			navigate(AppLinks.PROFILE);
		}
		setError('Неверный логин или пароль');
	};

	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) =>
			setForm((prev) => ({ ...prev, [e.target.name]: e.target.value })),
		[],
	);
	return { error, submit, form, onChange };
};
