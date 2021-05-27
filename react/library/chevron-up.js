/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const chevronUp = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.338 8.745a1 1 0 011.518.009l7.282 8.59a1.002 1.002 0 001.532-1.292L14.376 7.37a3 3 0 00-4.574-.023L2.34 16.045a1.004 1.004 0 001.52 1.313l7.478-8.613z"
		/>
	</SVG>
);

export default chevronUp;
