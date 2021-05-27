/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const chevronLeft = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M8.744 12.665a1 1 0 01.01-1.518l8.59-7.282a1.002 1.002 0 00-1.293-1.532L7.37 9.628a3 3 0 00-.024 4.573l8.699 7.462a1.004 1.004 0 001.312-1.52l-8.613-7.478z"
		/>
	</SVG>
);

export default chevronLeft;
