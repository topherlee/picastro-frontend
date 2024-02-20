import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {CommentContainer} from '../../../src/components/molecules';

describe('CommentContainer', () => {
	it('renders the correct comment', () => {
		render(<CommentContainer />);
		expect(screen.getByText('Test comment.')).toBeVisible();
	});
});
