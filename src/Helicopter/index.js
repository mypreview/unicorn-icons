/**
 * External dependencies
 *
 * @ignore
 */
import { Icon } from '@mypreview/unicorn-react-components';

/**
 * Helicopter.
 *
 * @function
 * @since       1.0.0
 * @name 		Helicopter
 * @param       {Object}         props    Icon component properties.
 * @return      {JSX.Element}             Component to render.
 * @example
 *
 * <Helicopter />
 */
export default ( props ) => (
	<Icon
		d="21.374 9.777l2.122-4.663a1 1 0 10-1.82-.828l-2.118 4.653-5.62.351H10.98c-.087-.466-.46-.863-.981-1.09V6.114l6.122-.08a.898.898 0 00.879-.92.897.897 0 00-.9-.895l-14.222.187A.898.898 0 001 5.324c.006.501.41.902.9.895L8 6.14v2.062c-.538.233-.917.649-.988 1.134A7.858 7.858 0 000 17.147a3.143 3.143 0 003.143 3.143h4.532a6 6 0 005.844-4.64l1.023-4.394 5.191-.324 1.859 2.23a1 1 0 001.536-1.28l-1.754-2.105zM7.857 11.29h4.624l-.91 3.907a4 4 0 01-3.896 3.093H3.143A1.143 1.143 0 012 17.147a5.857 5.857 0 015.857-5.857z"
		{ ...props }
	/>
);
