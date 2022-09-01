import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchNav from './SearchNav';

describe('when rendered with required props including `active`', () => {

    let [active, query, setActive, setQuery] = ['all', 'test', jest.fn(), jest.fn()] // mock SearchNav props

    describe('rendering', () => {
        it('should render a navbar with the correct active nav item', () => {
            render(
                <SearchNav active={active} query={query} 
                setActive={setActive} setQuery={setQuery} />
            );
            
            
            expect(
                screen.getByText(active)
            ).toHaveClass('active');
            
        })
    })

    describe('callbacks', () => {
        describe('when a nav item is clicked', () => {
            it('should call function `setActive` with its text as argument', () => {
                render(
                    <SearchNav active={active} query={query} 
                    setActive={setActive} setQuery={setQuery} />
                );
                fireEvent.click(screen.getByText('all'));

                expect(setActive).toHaveBeenCalledWith('all');
            });
        })

        // describe('when search form is submitted', () => {
        //     it('should call function `setQuery` with search input value', () => {
        //         render(
        //             <SearchNav active={active} query={query} 
        //             setActive={setActive} setQuery={setQuery} />
        //         );

        //         fireEvent.change(screen.getByPlaceholderText('Search...'), {target: {value: 'test query'}})
        //         fireEvent.submit(screen.getByRole('form', {name: ''}));

        //         expect(setQuery).toHaveBeenCalledWith('test query');
        //     })
        // })
    })
});