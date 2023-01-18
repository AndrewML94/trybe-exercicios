import React, { useEffect, useState } from 'react';
import './Email.css'

export default function Email() {
  const [ email, setEmail ] = useState( [{ id: 0, title: 'Oportunidade de investimento', status: 0 }, { id: 1, title: 'PARE com a queda de cabelo!!', status: 0 }, { id: 2, title: 'Favor enviar o anexo', status: 0 }, { id: 3, title: 'Sua fatura chegou!', status: 0 }] );

  const handleCLick = (id, num) => {
    const newStatus = email.map((elem) => {
      if (elem.id === id) {
        return { ...elem, status: num };
      }
    return elem;
    });
    setEmail(newStatus)
  };

  const allRead = () => {
    const read = email.map((elem) => {
      return { ...elem, status: 1 }
    });
    setEmail(read);
  }

  const allNotRead = () => {
    const read = email.map((elem) => {
      return { ...elem, status: 0 }
    });
    setEmail(read);
  }

  useEffect(() => {
    const isAllMessagesRead = email.every(({ status }) => status === 1);

    if (isAllMessagesRead) {
      alert('Parabéns! Você leu todas suas mensagens!');
    }
  }, [email]);

  return (
    <div>
      <div className='controls-container'>
        <button
          type="button"
          onClick={ () => allRead() }
        >
          Marcar todas como lida
        </button>
        <button
          type="button"
          onClick={ () => allNotRead() }
        >
          Marcar todas como não lida
        </button>
      </div>
      <div>
        <ul className="messages-list">
          { email.map((elem) => {
              return(
                <li key={ elem.id }>
                  <p className={ elem.status === 0 ? 'read message-title' : 'noRead message-title' }>{elem.title}</p>
                  <button
                    type="button"
                    onClick={ () => handleCLick(elem.id, 1) }
                  >
                    Lida
                  </button>
                  <button
                    type="button"
                    onClick={ () => handleCLick(elem.id, 0) }
                  >
                    Não lida
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
