import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHead from './TableHead';

describe('rendering', () => {
    describe('when rendered with `items` prop', () => {
        it('should render a table head with all elements in `items` as column headers', () => {
            let mockItems = ['s/n', 'name', 'age'];
            render(
                <TableHead 
                items={mockItems}/>
            );
            
            
            expect(
                screen.getByText(mockItems[0])
            ).toContainHTML('<th class="text-capitalize" scope="col">s/n</th>');
            expect(
                screen.getByText(mockItems[1])
            ).toContainHTML('<th class="text-capitalize" scope="col">name</th>');
            expect(
                screen.getByText(mockItems[2])
            ).toContainHTML('<th class="text-capitalize" scope="col">age</th>');
            
        })
    })
})