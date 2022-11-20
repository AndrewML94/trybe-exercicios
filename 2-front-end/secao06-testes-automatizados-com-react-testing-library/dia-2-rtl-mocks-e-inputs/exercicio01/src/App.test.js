import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());

describe('Teste para retorno da API.', () => {
  it('Teste para verificar se o retorno é uma piada.', async () => {
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };
  
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(joke),
    });
  
    render(<App />);
    const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    expect(renderedJoke).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://icanhazdadjoke.com/',
      { headers: { Accept: 'application/json' } },
    );
  });

  it('Teste para verificar se uma nova piada é retornada ao clicar no botão "New Joke".', async () => {
    const joke1 = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };
  
    const joke2 = {
      id: 'xXSv492wPmb',
      joke: 'What is red and smells like blue paint? Red paint!',
      status: 200,
    };
  
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(joke1),
    });
    
    render(<App />);
    const newJokeButton = screen.getByRole('button', { name: 'New Joke' });
    
    expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
    expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(1);
    
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(joke2),
    });
    userEvent.click(newJokeButton);
    
    expect(await screen.findByText(joke2.joke)).toBeInTheDocument()
    expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(2);
  });
})
