import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

it('Verifica se o input de email está na tela', () => {
  // Acessar os elementos na tela
  // Agir interagindo com os elementos se necessário
  // Aferir se ocorre o esperado
  render(<App />);
  const emailInput = screen.getByLabelText('Email:');
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveProperty('type', 'email');
})

it('Verifica se existem dois botões na tela', () => {
  // Acessar os elementos na tela
  render(<App />);
  const buttons = screen.getAllByRole('button');

  // Agir interagindo com os elementos se necessário
  //não estamos querendo interagir queremos verificar se está na tela

  // Aferir se ocorre o esperado
  expect(buttons).toHaveLength(2);
})

it('Verifica se existe botão enviar na tela', () => {
  // Acessar os elementos na tela
  render(<App />);
  const buttonSend = screen.getByTestId('id-send');

  // Agir interagindo com os elementos se necessário
  //não estamos querendo interagir queremos verificar se está na tela

  // Aferir se ocorre o esperado
  expect(buttonSend).toBeInTheDocument();
})

it('Verifica se existe botão voltar na tela', () => {
  // Acessar os elementos na tela
  render(<App />);
  const buttonBack = screen.getByRole('button', { name: 'Voltar' });

  // Agir interagindo com os elementos se necessário
  //não estamos querendo interagir queremos verificar se está na tela

  // Aferir se ocorre o esperado
  expect(buttonBack).toBeInTheDocument();
})

it('Verifica se o campo email e o botão enviar funcionam corretamente', async () => {
  // Acessar os elementos na tela
  render(<App />);
  const inputEmail = screen.getByLabelText('Email:');
  const buttonSend = screen.getByTestId('id-send');
  const title = screen.getByRole('heading', { name: 'Valor:' });

  // Agir interagindo com os elementos se necessário
  const EMAIL_USER = 'email@email.com';
  await userEvent.type(inputEmail, EMAIL_USER);
  await userEvent.click(buttonSend);

  // Aferir se ocorre o esperado
  expect(inputEmail).toHaveValue('');
  expect(title).toHaveTextContent(`Valor: ${EMAIL_USER}`);
})