import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('when rendered with required props', () => {

    let [ query, setQuery ] = ['test', jest.fn()] // mock SearchBar props

    describe('rendering', () => {
        it('should render a form and an input element', () => {
            render(
                <SearchBar query={query} setQuery={setQuery} />
            );
            
            
            expect(
                screen.getByPlaceholderText('Search...')
            ).toBeVisible();

            expect(
                screen.getByPlaceholderText('Search...').parentNode
            ).toBeVisible();
        })
    })

    describe('callbacks', () => {
        describe('when search form is submitted', () => {
            it('should call function `setQuery` with search input value', () => {
                render(
                    <SearchBar query={query} setQuery={setQuery} />
                );

                fireEvent.change(screen.getByPlaceholderText('Search...'), {target: {value: 'test query'}})
                let form :any = screen.getByPlaceholderText('Search...').parentElement;
                fireEvent.submit(form);

                expect(setQuery).toHaveBeenCalledWith('test query');
            })
        })
    })
});