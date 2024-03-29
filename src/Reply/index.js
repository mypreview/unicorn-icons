/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Reply.
 *
 * @function
 * @since       1.0.0
 * @name 		Reply
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <Reply />
 */
export default ( props ) => (
	<Icon
		d="M11.812 12.246c-.635-.303-1.34.178-1.34.88v1.183c0 1.7-1.988 2.625-3.289 1.53l-5.985-5.037a3 3 0 010-4.59l5.985-5.038c1.301-1.095 3.288-.17 3.288 1.53v1.46c0 .48.342.888.806 1.002 6.44 1.587 9.3 6.502 11.282 13.145.47 1.574.89 3.245 1.298 4.993-.565-.867-1.624-2.35-3.094-4.007-2.177-2.454-5.253-5.288-8.952-7.051zm-4.163-8.85a.5.5 0 01.822.382v2.043c0 .516.392.943.902 1.018 3.654.543 5.989 2.105 7.69 4.304.836 1.079 1.541 2.337 2.162 3.767l-.102-.091c-2.508-2.232-5.713-4.427-9.442-5.536-.614-.183-1.21.293-1.21.934v3.018a.5.5 0 01-.822.382L2.486 9.272a1 1 0 010-1.53L7.65 3.395z"
		{ ...props }
	/>
);
