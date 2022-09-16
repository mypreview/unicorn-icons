/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * "X".
 *
 * @function
 * @since       1.0.0
 * @name 		X
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <X />
 */
export default ( props ) => (
	<Icon
		d="M5.177 5.173a1 1 0 000 1.414L10.59 12l-5.41 5.41a1 1 0 101.413 1.415l5.411-5.41 5.407 5.406a1 1 0 001.414-1.414L13.418 12l5.41-5.409a1 1 0 00-1.415-1.414l-5.409 5.409-5.413-5.413a1 1 0 00-1.414 0z"
		{ ...props }
	/>
);