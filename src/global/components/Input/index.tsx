import React, { useState, useEffect } from 'react';
import {
	Label,
	InputForm,
	Container,
	TextArea,
	StyledErrorSpan
} from './styles';
import {
	EMAIL_VALIDATION,
	DIGITS_VALIDATION,
	MIN_8_CHARS_VALIDATION,
	ESPECIAL_CHARS_VALIDATION,
	CHARS_ALPHABET_VALIDATION,
	TEXT_VALIDATION
} from '../../utils/validations';

type inputType = 'text' | 'email' | 'number' | 'date' | 'textarea' | 'password';

interface InputProps {
	name: string;
	label?: string;
	placeholder?: string;
	type?: inputType;
	onChange: Function | any;
	value: any;
	setError?: Function | any;
	displayError?: boolean;
}

/** This hooks validates the user input, depending on the input type.
 *  Only updates the error if the user has clicked in the form.
 */
const useErrorOnInput = ({ type, value }: { type: inputType; value: any }) => {
	const [localError, setLocalError] = useState<null | string>(null);
	const [userHasClicked, setUserHasClicked] = useState(false);

	useEffect(() => {
		if (userHasClicked) {
			switch (type) {
				case 'date': {
					value < new Date()
						? setLocalError(
								'La fecha que intentas ingresar ya pasó, ¿Estás seguro de querer hacer esto?'
						  )
						: setLocalError(null);
					break;
				}
				case 'number':
					value.match(DIGITS_VALIDATION)
						? setLocalError(null)
						: setLocalError('Debes ingresar números!');
					break;
				case 'email':
					value.match(EMAIL_VALIDATION)
						? setLocalError(null)
						: setLocalError('El email no es válido');
					break;
				case 'password':
					value.match(DIGITS_VALIDATION) &&
					value.match(MIN_8_CHARS_VALIDATION) &&
					value.match(ESPECIAL_CHARS_VALIDATION) &&
					value.match(CHARS_ALPHABET_VALIDATION)
						? setLocalError(null)
						: setLocalError(
								'Contraseña demasiado debil. Minimo debe contener 8 caracteres, un digito y algun carácter especial ($&%?¿!¡)'
						  );
					break;

				default:
					value.match(TEXT_VALIDATION)
						? setLocalError(null)
						: setLocalError('Texto demasiado corto/largo. ');
			}
		}
	}, [value]);

	return { error: localError, setUserHasClicked };
};

export const Input: React.FC<InputProps> = ({
	name,
	label = '',
	type = 'text',
	placeholder,
	onChange,
	value,
	displayError = true
}) => {
	const [active, setActive] = useState(false);
	const { error, setUserHasClicked } = useErrorOnInput({ type, value });

	const handleBlur = () => setActive(false);
	const handleFocus = () => {
		setUserHasClicked(true);
		setActive(true);
	};

	return (
		<Container onFocus={handleFocus} onBlur={handleBlur}>
			<Label htmlFor={name} active={active}>
				{label || name}
			</Label>
			{type === 'textarea' ? (
				<TextArea
					name={name}
					placeholder={placeholder}
					active={active}
					onChange={onChange}
					value={value}
					error={displayError && error}
					autoComplete="off"
				/>
			) : (
				<InputForm
					id={name}
					type={type}
					placeholder={placeholder}
					name={name}
					active={active}
					onChange={onChange}
					value={value}
					error={displayError && error}
					autoComplete="off"
				/>
			)}
			{displayError && error && (
				<StyledErrorSpan> {error} </StyledErrorSpan>
			)}
		</Container>
	);
};
